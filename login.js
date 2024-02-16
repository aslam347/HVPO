// or line
const text = document.createElement("p")
text.innerHTML = "or"
text.style.color = "blue"
text.style.display = "flex"
text.style.justifyContent = "center"


// newuser button
const newUser = document.createElement("button")
newUser.innerText = "NEW USER"
newUser.style.color = "green"


//existing user button
const existingUser = document.createElement("button")
existingUser.style.color = "red"
existingUser.innerHTML = "EXISTING USER"


// div element used to append the two login button
let box = document.createElement('div')


// styleing to the login page
box.style.display = "flex";
box.style.justifyContent = "center";
box.style.alignItems = "center";
box.style.border = "4px solid black";
box.style.height = "200px"
box.style.width = "50%"
box.style.flexDirection = "column"
box.style.gap = "25px"
box.style.display =  "flex";
box.style.justifycontent =  "center";
box.style.alignitems = "center";


// appending process
box.appendChild(newUser)
box.appendChild(text)
box.appendChild(existingUser)
document.body.appendChild(box)