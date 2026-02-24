export default async function handler(req,res){

const response = await fetch("https://id.twitch.tv/oauth2/token",{
method:"POST",
headers:{
"Content-Type":"application/x-www-form-urlencoded"
},
body:
"client_id="+process.env.CLIENT_ID+
"&client_secret="+process.env.CLIENT_SECRET+
"&grant_type=client_credentials"
});

const data = await response.json();

res.json(data);

}
