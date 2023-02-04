
//getelements by tag name
const listCollection=document.getElementsByTagName("li");

console.log(listCollection);

for(const list of listCollection){
    console.log(list);
}
//get element bty id
let name1=document.querySelector("#fruits-title");

console.log(name1);
//get element by class name
const fruits=document.getElementsByClassName("fruitsname");

for(const fruit of fruits){
    console.log(fruit.innerText);
    // fruit.innerText="Changed";
}

console.log(fruits);
//queryselectorall
const lists=document.querySelectorAll(".placescontainer li");
for(const list of lists){
console.log(list);
}

console.log(lists);

//------------------------------------------Styling Using Dom=----------------------------------------------------

name1.style.backgroundColor="yellow";

const classList=name1.classList;
console.log(classList);
name1.setAttribute("title","Tooltip by Js");

const nams=name1.getAttribute("id");
console.log(nams);






const sectionList=document.getElementsByTagName("section");
console.log(sectionList);

for(const section of sectionList){
    console.log(section);

    section.style.border="5px solid green";
    section.style.margin="10px";
    section.style.backgroundColor="lightblue";
}

const mealsList=document.getElementById("meals");
mealsList.classList.add("newclass");