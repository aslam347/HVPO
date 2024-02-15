
const text = document.createElement("p")
text.innerHTML = "or"
text.style.color = "blue"
text.style.display = "flex"
text.style.justifyContent = "center"



const newUser = document.createElement("button")
newUser.innerText = "NEW USER"
newUser.style.color = "green"





const existingUser = document.createElement("button")
existingUser.style.color = "red"
existingUser.innerHTML = "EXISTING USER"


 // document.body.appendChild(newUser)
// document.body.appendChild(existingUser)



let box = document.createElement('div')

box.style.display = "flex";
box.style.justifyContent = "center";
box.style.alignItems = "center";
box.style.border = "4px solid black";
box.style.height = "200px"
box.style.width = "50%"
box.style.flexDirection = "column"
box.style.gap = "25px"

box.appendChild(newUser)
box.appendChild(text)
box.appendChild(existingUser)

document.body.appendChild(box)