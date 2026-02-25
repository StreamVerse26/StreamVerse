export default async function handler(req,res){

const { login, token } = req.query;

if(!token){
return res.status(400).json({error:"Missing token"});
}

/* Hae user info */
const userResponse = await fetch(
"https://api.twitch.tv/helix/users?login="+login,
{
headers:{
"Authorization":"Bearer "+token,
"Client-Id": process.env.CLIENT_ID
}
}
);

const userData = await userResponse.json();

/* Hae live status */
const liveResponse = await fetch(
"https://api.twitch.tv/helix/streams?user_login="+login,
{
headers:{
"Authorization":"Bearer "+token,
"Client-Id": process.env.CLIENT_ID
}
}
);

const liveData = await liveResponse.json();

/* Palauta molemmat */
res.json({
user: userData,
live: liveData
});

}
