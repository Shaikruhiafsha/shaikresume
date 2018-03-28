//Ajax call(XMLHttpRequest) initialization//
function loadjson(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange= function () {
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  }
  xhr.send();
}
//function calling
loadjson("data.json",function(text) {
  let data=JSON.parse(text);
  console.log(data);
  basics(data.left);
  })
//main class calling
//var main= document.queryselector('.main');
//for main calling via id
var main= document.getElementById('main');
var left= document.createElement("div");//element creation
left.classList.add("left");//add class name to element
//left.setAttribute("id","left")//add id to element
left.textContent="Profile Details:"
left.appendChild(document.createElement("HR"));
main.appendChild(left);//appendind main to div
function basics(leftside) {
  var Image=document.createElement("img");
  Image.src=leftside.photo;
  left.appendChild(Image);

  var name=document.createElement("h1");
  name.textContent=leftside.name;
  left.appendChild(name);
  var label=document.createElement("h6");
  label.textContent=leftside.label;
  left.appendChild(label);

  var email=document.createElement("h3");
  email.textContent=leftside.email;
  left.appendChild(email);

  var phone=document.createElement("h2");
  phone.textContent=leftside.phone;
  left.appendChild(phone);
console.log(left);
}
