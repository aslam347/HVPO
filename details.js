let outer = document.getElementById('full');
let box = document.createElement('div');
 

// school name
var schoolnamelabel = document.createElement("label");
schoolnamelabel.innerText = "SCHOOL NAME"; 
schoolnamelabel.style.fontWeight = "900"

const schoolname = document.createElement("input");
schoolname.setAttribute("type", "text"); 

box.appendChild(schoolnamelabel);
box.appendChild(schoolname);


// principal id
var Principalidlabel = document.createElement("label");
Principalidlabel.innerText = "PRINCIPAL ID";
Principalidlabel.style.fontWeight = "900"

const Principalid = document.createElement("input");
Principalid.setAttribute("type", "text");

box.appendChild(Principalidlabel);
box.appendChild(Principalid);

// schoolid
var schoolidlabel = document.createElement("label");
schoolidlabel.innerText = "SCHOOL ID";
schoolidlabel.style.fontWeight = "900"


const schoolid = document.createElement("input");
schoolid.setAttribute("type", "text");

box.appendChild(schoolidlabel);
box.appendChild(schoolid);


// enter password

var passwordlabel = document.createElement("label");
passwordlabel.innerText = "ENTER PASSWORD";
passwordlabel.style.fontWeight = "900"


const password = document.createElement("input");
schoolid.setAttribute("type", "text");

box.appendChild(passwordlabel);
box.appendChild(password);

  
// confrim password

var confirmpasswordlabel = document.createElement("label");
confirmpasswordlabel.innerText = "CONFIRM PASSWORD";
confirmpasswordlabel.style.fontWeight = "900"

const confirmpassword = document.createElement("input");
confirmpassword.setAttribute("type", "text");

box.appendChild(confirmpasswordlabel);
box.appendChild(confirmpassword);


// confrim button

var submitbutton = document.createElement("button")
submitbutton.innerText = "SUBMIT"



box.appendChild(submitbutton)

outer.appendChild(box); 
                                                                     

outer.style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('userdetail image/details.jpg')";
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
 // box.style.borderRadius = '5em';
box.style.height = "470px";
box.style.width = "450px";


