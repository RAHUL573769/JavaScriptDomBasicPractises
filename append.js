//where to add

const placesList=document.getElementById("placeslist");
//what to be added

const li=document.createElement("li");
li.innerText="pahartoli bom";

placesList.appendChild(li);




const mainContainer=document.getElementById("mainContainer");


const section=document.createElement("section");
const h1=document.createElement("h1");
h1.innerText="My Food List";

section.appendChild(h1);

mainContainer.appendChild(section);

const ul=document.createElement("ul");
const li1=document.createElement("li");
li1.innerText="Biriyaanai";

ul.appendChild(li1);

section.appendChild(ul);

mainContainer.appendChild(section);

