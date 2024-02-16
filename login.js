// or line
const text = document.createElement("p")
text.innerHTML = "or"
text.style.color = "blue"
text.style.display = "flex"
text.style.justifyContent = "center"
text.style.fontSize = "25px"


// newuser button
const newUser = document.createElement("button")
newUser.innerText = "NEW USER"
newUser.style.color = "green"
newUser.style.fontSize = "25px"


//existing user button
const existingUser = document.createElement("button")
existingUser.style.color = "red"
existingUser.innerHTML = "EXISTING USER"
existingUser.style.fontSize = "25px"


// div element used to append the two login button
let box = document.createElement('div')




let outer = document.getElementById('full')


outer.style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('loginpage image/background.jpg')";
outer.style. backgroundImage = "url('loginpage image/background.jpg')";
outer.style.backgroundSize = "c";
outer.style.backgroundPosition = "center";

// styleing to the login page
outer.style.display = "flex";
outer.style.justifyContent = "center";
outer.style.alignItems = "center";
outer.style.height = "100vh"
outer.style.width = "100%"

//outer.style.marginLeft = "300px";
//outer.style.marginTop = "200px";


box.style.display = "flex"
box.style.justifyContent = "center"
box.style.alignItems = "center"
box.style.flexDirection = "column"
box.style.border = "25px solid black"
box.style.borderRadius = '5em';
//outer.style.gap = "10px"
box.style.height = "470px"
box.style.width = "450px"


// appending process
box.appendChild(newUser)
box.appendChild(text)
box.appendChild(existingUser)
outer.appendChild(box)
document.body.appendChild(outer)