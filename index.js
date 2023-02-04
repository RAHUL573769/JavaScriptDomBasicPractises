const listCollection=document.getElementsByTagName("li");

console.log(listCollection);

for(const list of listCollection){
    console.log(list);
}

const name=document.getElementById("fruits-title")

console.log(name);

const fruits=document.getElementsByClassName("fruitsname");

for(const fruit of fruits){
    console.log(fruit.innerText);
    fruit.innerText="Changed";
}

console.log(fruits);

const lists=document.querySelectorAll(".placescontainer li");
for(const list of lists){
console.log(list);
}

console.log(lists);