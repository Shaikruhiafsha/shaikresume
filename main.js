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
  basics(data.resume);
  education(data.education);
  skill(data.skills);

  })
//main class calling
//var main= document.queryselector('.main');
//for main calling via id
var main= document.getElementById('main');
var left= document.createElement("div");//element creation
left.classList.add("left");//add class name to eleme
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
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
//education div start.

var edu=document.createElement("div");
edu.classList.add("edu1");
edu.textContent="Education Details";
edu.appendChild(document.createElement("HR"));
right.appendChild(edu);

function education(educa){

for(i in educa)
{
  var e1=document.createElement("div");
  e1.classList.add("edu2");
  e1.textContent=educa[i].course;
var ul=document.createElement("ul");
for(j in educa[i].College){
  var li=document.createElement("li");
  li.textContent=educa[i].College[j];
  ul.appendChild(li);
  e1.appendChild(ul);
  edu.appendChild(e1);

}//prints college values in a list form
}
}//prints education detail-course-college Details.
function skill(skills){
  var skill_title=document.createElement("div");
  skill_title.classList.add("tech_skills");
  skill_title.textContent="Technical Skills";
  skill_title.appendChild(document.createElement("HR"));
  right.appendChild(skill_title);//skill title should be viewed in right div
  //table creation
  var table=document.createElement("table");
//  table.setAttribute("id","table");
   var row="";
   for (var i = 0; i < skills.length; i++) {
     row+="<tr><td>"+skills[i].name+"</td><td>"+skills[i].value+"</td></tr>"
   }
   table.innerHTML=row;
   skill_title.appendChild(table);
}
