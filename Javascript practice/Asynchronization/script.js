// console.log("first");
// setTimeout(() => {
//   {
//     console.log("Hello");
//   }
// }, 2000);
// console.log("second");
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,callbackFunc){
//     callbackFunc(a,b);
// }
// calculator(1,2,sum);

// function A(a, callbackHellFunc) {
//   setTimeout(() => {
//     if (callbackHellFunc) {
//       callbackHellFunc();
//     }
//     console.log("data is: ", a);
//   }, 2000);
// }
// A(1, () => {
//   console.log("Calling 2");
//   A(2, () => {
//     console.log("Calling 3");
//     A(3);
//   });
// });

//promises

// let promise = new Promise((resolve, reject) => {
//   console.log("Hello");
//   // reject("some error occured...");
//   resolve("successfully...");
// });

// function callFunction(a, nextCallFunc) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data: ", a);
//       resolve("success");
//     }, 5000);
//   });
// }

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data1");
//       resolve("success");
//     }, 2000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data2");
//       // reject("error");
//     }, 2000);
//   });
// }

// let promise1 = asyncFunc1();
// console.log("Fetching data1");
// promise1.then((res) => {
//   // console.log(res);
//   let promise2 = asyncFunc2();
//   console.log("Fetching data2");
//   promise2.catch((res) => {
//     // console.log(res);
//   });
// });

// function returnPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data");
//       resolve(200);
//     }, 3000);
//   });
// }

// async function getPromise() {
//   await returnPromise();
//   await returnPromise();
// }
// getPromise();
let btn = document.querySelector(".click");
let para = document.querySelector(".para");
let data;
const URL = "https://jsonplaceholder.typicode.com/posts";

const getURl = async () => {
  const response = await fetch(URL);
  console.log("getting data...");
  console.log(response.status); //JSON format
  data = await response.json();
  console.log(data);
};

btn.addEventListener("click", () => {
  console.log("Button Clicked");
  para.innerText = data[1].title;
});

getURl();
