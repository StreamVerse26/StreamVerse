const channels = [
"G3splitter",
"Koeda666",
"RdcWaitingRoom_"
];

async function getToken(){
const res = await fetch("/api/token");
const data = await res.json();
return data.access_token;
}

async function loadData(){

const membersDiv = document.getElementById("members");
if(!membersDiv) return;

membersDiv.innerHTML="";

const token = await getToken();

for(const channel of channels){

const userRes = await fetch(
"/api/twitchUser?login="+channel+"&token="+token
);

const userData = await userRes.json();

if(!userData?.data?.length) continue;

const user = userData.data[0];

const card = document.createElement("a");
card.className="card";
card.href="https://twitch.tv/"+channel;
card.target="_blank";

card.innerHTML = `
<img src="${user.profile_image_url}">
<h3>${user.display_name}</h3>
`;

membersDiv.appendChild(card);

}

}

window.onload = loadData;
