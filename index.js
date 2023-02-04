
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
    fruit.innerText="Changed";
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