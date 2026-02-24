export default async function handler(req,res){

const { login, token } = req.query;

if(!token){
return res.status(400).json({error:"Missing token"});
}

const response = await fetch(
"https://api.twitch.tv/helix/users?login="+login,
{
headers:{
"Authorization": "Bearer " + token,
"Client-Id": process.env.CLIENT_ID
}
}
);

const data = await response.json();

res.json(data);

}
