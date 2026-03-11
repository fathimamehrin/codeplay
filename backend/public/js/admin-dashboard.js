loadUsers();
getTotalUsers();
loadLeaderboard();


async function getTotalUsers(){

const res = await fetch("/total-users");
const data = await res.json();

document.getElementById("totalUsers").innerText = data.total;

}



async function loadUsers(){

const res = await fetch("/users");
const users = await res.json();

let html="";

users.forEach(user=>{

html+=`
<tr>
<td>${user.username}</td>
<td>${user.email}</td>
<td>${user.points || 0}</td>
<td>${user.progress.html}</td>
  <td>${user.progress.css}</td>
  <td>${user.progress.js}</td>
<td>
<button onclick="deleteUser('${user._id}')">Delete</button>
</td>
</tr>
`;

});

document.getElementById("userTable").innerHTML=html;

}



async function deleteUser(id){

await fetch("/delete-user/"+id,{
method:"DELETE"
});

loadUsers();
getTotalUsers();

}



async function loadLeaderboard(){

const res = await fetch("/leaderboard");
const users = await res.json();

let html="";

users.forEach((user,index)=>{

html+=`
<p>${index+1}. ${user.username} - ${user.points} pts</p>
`;

});

document.getElementById("leaderboard").innerHTML=html;

}