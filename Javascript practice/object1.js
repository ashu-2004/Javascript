// const student={
//     fullName:"Ashwini",
//     age:20,
//     cgpa:9.77,
//     isPass:true,
// };

// console.log(student["fullName"]);
// console.log(student.age);
// console.log(typeof student);
// console.log(typeof student["age"]);
// console.log("Hello");

// let heading=document.querySelector("h1");
// let header=document.getElementById("abc");
// console.log(header);
// console.log(heading);
// console.dir(heading);
// let attribute=header.getAttribute("id");
// console.log(attribute);

// let div1=document.querySelector("div");
// console.log(div1);
// let attr=div1.getAttribute("name");
// console.log(attr);

// let para1=document.querySelector("p");
// console.log(para1);

// let p=para1.getAttribute("class");
// console.log(p);
// let p3=para1.setAttribute("class","myClass");
// let p1=para1.getAttribute("class");
// console.log(p1);

let btn=document.createElement("button");
btn.innerText="click me";
console.log(btn);
let div=document.querySelector("div");
div.before(btn);

let heading=document.createElement("h1");
heading.innerHTML="<i>Hello</i>";
let body=document.querySelector("body");
body.before(heading);
console.log(heading);

let btn1=document.querySelector("button");
btn.remove();
console.log(btn);

let btn2=document.createElement("button");
btn2.innerText="click me";
btn2.style.backgroundColor="red";
btn2.style.color="white";
console.log(btn2);
let body1=document.querySelector("body"); 
body1.after(btn2);

let para=document.querySelector("p");
//para.classlist.add("newClass");

let btn3=document.getElementById("btn2");
btn3.ondblclick=()=>{
    console.log("Button clicked 2 times");
}