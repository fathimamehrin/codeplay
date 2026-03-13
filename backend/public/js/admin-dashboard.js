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
<td>${user.level}</td>
<td>${user.points || 0}</td>
<td>${user.progress.html}</td>
  <td>${user.progress.css}</td>
  <td>${user.progress.js}</td>
  <td>${user.unlocked.css ? "Yes" : "No"}</td>
  <td>${user.unlocked.js ? "Yes" : "No"}</td>
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

// Add Lesson
document.getElementById("lessonForm").addEventListener("submit", async e => {
  e.preventDefault();
  const form = e.target;
  const data = {
    course: form.course.value,
    title: form.title.value,
    content: form.content.value,
    points: form.points.value
  };
  const res = await fetch("/admin/add-lesson", {
    method:"POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(data)
  });
  const result = await res.json();
  alert(result.message);
  form.reset();
});

// Add Game
document.getElementById("gameForm").addEventListener("submit", async e => {
  e.preventDefault();
  const form = e.target;
  const data = {
    course: form.course.value,
    title: form.title.value,
    type: form.type.value,
    points: form.points.value
  };
  const res = await fetch("/admin/add-game", {
    method:"POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(data)
  });
  const result = await res.json();
  alert(result.message);
  form.reset();
});




