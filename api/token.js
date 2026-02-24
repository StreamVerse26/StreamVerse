let cachedToken = null;
let expiresAt = 0;

export default async function handler(req,res){

if(cachedToken && Date.now() < expiresAt){
return res.json(cachedToken);
}

const response = await fetch(
"https://id.twitch.tv/oauth2/token",
{
method:"POST",
headers:{
"Content-Type":"application/x-www-form-urlencoded"
},
body:new URLSearchParams({
client_id: process.env.CLIENT_ID,
client_secret: process.env.CLIENT_SECRET,
grant_type:"client_credentials"
})
});

const data = await response.json();

cachedToken = data;
expiresAt = Date.now() + (data.expires_in * 1000);

res.json(data);

}
