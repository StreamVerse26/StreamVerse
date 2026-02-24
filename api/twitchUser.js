export default async function handler(req,res){

const { login, token } = req.query;

const response = await fetch(
"https://api.twitch.tv/helix/users?login="+login,
{
headers:{
"Client-ID": process.env.CLIENT_ID,
"Authorization":"Bearer "+token
}
});

const data = await response.json();
res.json(data);

}
