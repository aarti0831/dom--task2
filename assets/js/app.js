const heading = document.querySelector("#heading1");
console.log(heading);
heading.style.backgroundColor = "blueviolet";
heading.style.color = "white";
heading.style.textAlign = "center";
heading.style.padding = "5px";

const heading1 = document.querySelector("#heading2");
console.log(heading1);
heading1.style.backgroundColor = "pink";
heading1.style.color = "white";
heading1.style.textAlign = "center";
heading1.style.padding = "5px";

const heading2 = document.querySelector("#heading3");
console.log(heading2);
heading2.style.backgroundColor = "lightblue";
heading2.style.color = "white";
heading2.style.textAlign = "center";
heading2.style.padding = "5px";


let list = document.querySelector('.list-group-iteam')
console.log(list);

let list1 = document.querySelector('li:nth-child(3)');
console.log(list1)

let list2 = document.querySelector('li:nth-child(2)');
console.log(list2)

let list3 = document.querySelector('li:nth-child(1)');
console.log(list3)

let list4 = document.querySelector('li:nth-child(4)');
console.log(list4)

let list5 = document.querySelector('li:nth-child(5)');
console.log(list5)


list2.classList.add("bg-danger")
list1.classList.add("bg-warning")
list3.classList.add("bg-secondary")
list4.classList.add("bg-primary")
list5.classList.add("bg-info")


let imp = document.querySelector("#food li:nth-child(1)")
console.log(imp)

let imp1 = document.querySelector("#food li:nth-child(2)")
console.log(imp1)

let imp2 = document.querySelector("#food li:nth-child(3)")
console.log(imp2)

let imp3 = document.querySelector("#food li:nth-child(4)")
console.log(imp3)

let imp4 = document.querySelector("#food li:nth-child(5)")
console.log(imp4)

let lists = document.getElementsByClassName("list-group-item")
console.log(lists)

// lists.classList.add("text-success")

for(let i=0; i<lists.length;i++){
   lists[i].classList.add('text-info')
   lists[i].classList.add('font-weight-bold')
}

//multiple selections

//document.getElementByTagName
let lists1 = document.getElementsByTagName("li");
console.log(lists1)

let lists2 = [...document.getElementsByTagName('li')]
lists2.forEach(li=>{
   // li.classList.add('bg-info')
   li.classList.add('tex-white')
   li.classList.add('font-weight-bold')
});

//document.queryselectorAll
let lists3 = document.querySelectorAll('li');
console.log(lists3)

let lists4= Array.from(document.querySelectorAll('li'))

lists4.forEach(params=>{
   params.classList.add('bg-secondary')
   params.classList.add('text-white')
   params.classList.add('font-weight-bold')
});





















