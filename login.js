

// Creating elements
const text = document.createElement("p");
text.innerHTML = "or";
text.style.color = "blue";
text.style.display = "flex";
text.style.justifyContent = "center";
text.style.fontSize = "25px";

const newUser = document.createElement("button");
newUser.innerText = "NEW USER";
newUser.style.color = "green";
newUser.style.fontSize = "25px";

const existingUser = document.createElement("button");
existingUser.style.color = "red";
existingUser.innerHTML = "EXISTING USER";
existingUser.style.fontSize = "25px";

const box = document.createElement('div');
box.style.display = "flex";
box.style.justifyContent = "center";
box.style.alignItems = "center";
box.style.flexDirection = "column";
box.style.border = "25px solid black";
box.style.borderRadius = '5em';
box.style.height = "470px";
box.style.width = "450px";

// Redirect to details.html
function redirectToDetailsPage() {
    window.location.href = "details.html"; 
}

// Adding event listener to the "NEW USER" button
newUser.addEventListener("click", redirectToDetailsPage);

// Appending elements
box.appendChild(newUser);
box.appendChild(text);
box.appendChild(existingUser);

let outer = document.getElementById('full');

outer.style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('loginpage image/background.jpg')";
outer.style.backgroundSize = "cover";
outer.style.backgroundPosition = "center";
outer.style.display = "flex";
outer.style.justifyContent = "center";
outer.style.alignItems = "center";
outer.style.height = "100vh";
outer.style.width = "100%";

box.style.display = "flex";
box.style.justifyContent = "center";
box.style.alignItems = "center";
box.style.flexDirection = "column";
box.style.border = "25px solid black";
box.style.borderRadius = '5em';
box.style.height = "470px";
box.style.width = "450px";

outer.appendChild(box);
document.body.appendChild(outer);
