"use strict";
// let mark_mass=78
// let mark_height=1.69
// let john_mass=92
// let john_height=1.95

// let markBMI=mark_mass/mark_height**2
// let johnBMI=john_mass/john_height**2

// // console.log(markBMI)
// // console.log(johnBMI)

// // let markHigherBMI=markBMI>johnBMI
// // console.log(markHigherBMI)

// if(markBMI>johnBMI)
// {
//     console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})`);
// }
// else
// {
//     console.log(`John's BMI(${jonBMI}) is higher than Mark's(${markBMI})`);
// }

// let input='123';
// console.log(typeof(input))
// console.log(input);
// console.log(input+12);
// let num=input-12;
// console.log(typeof(num));
// console.log('2'<'3');

// let dolphins;
// let koalas;

// const avgDolphins=(97+112+101)/3;
// const avgKoalas=(109+95+123)/3;
// console.log(avgDolphins,avgKoalas);

// if(avgDolphins>avgKoalas && avgDolphins>=100){
//     console.log("dolphins win");
// }else if(avgKoalas>avgDolphins && avgKoalas>=100){
//     console.log("koalas win");
// }else if(avgDolphins===avgKoalas && avgDolphins>=100 && avgKoalas>=100){
//     console.log("Game draw");
// }else{
//     console.log("No one wins a trophy win");
// }

// let billVal=275;//40,430
// let tip=billVal>=50 && billVal<=300 ? billVal*0.15 : billVal*0.2;
// console.log(tip);
// total=billVal+tip;
// console.log(`Bill value is: ${billVal} and the tip is :${tip} and the total amount is: ${total}`);

// "use strict";
// let driverLicence=false;
// let passTest=true;
// if(passTest) driverLicence=true;
// if(driverLicence) console.log("I can drive the car");

// let interface=23; //this both are the predefined words in js which cannot be used in js as a variable
// let private=12;

/***************** lecture 003 *****************/
// function declaration

// function demo()
// {
//     console.log("This is my first function");
// }
// demo();

// function add(a,b){
//     let c=a+b;
//     console.log(`value of a is: ${a} and b is: ${b}`);
//     return c;
// }

// let c=add(5,0);
// console.log(c);

// function expression Or Anonymous function

// const add=function(a,b){
//     let c=a+b;
//     console.log(`value of a is: ${a} and value of b is: ${b}`);
//     return c;
// }

// console.log("Addition is: ",add(5,1));

/***************** lecture 005 ******************/
//Arrow function

//single line code
// const add=a=>c=a+a;
// console.log(add(5));

//Block of statements
// const add=(a,b)=>{
//     let c=a+b;
//     let d=a*b;
//     return c;
// }

// console.log(add(5,10));

/*************** lecture 006 ***************/
//Calling function from another function

// function calculation(fruit){
//     let count=fruit*4;
//     return count;
// }

// const fruit=(apple,banana)=>{
//     let applePieces=calculation(apple);
//     let bananaPieces=calculation(banana);
//     let fruits=`Apple is cut in ${applePieces} pieces and banana is cut in ${bananaPieces} pieces`;
//     return fruits;
// }
// console.log(fruit(2,3));

/* function coding challenge */

// const avgScoreDolphins=(a,b,c)=>{
//     let avg=(a+b+c)/3;
//     return avg;
// }

// const avgScoreKoalas=(a,b,c)=>{
//     let avg=(a+b+c)/3;
//     return avg;
// }
// let score_dolphin=avgScoreDolphins(85,54,41);
// let score_koalas=avgScoreKoalas(23,34,27);

// const checkWinner=(score_dolphin,score_koalas)=>{
//     if(score_dolphin >= score_koalas*2){
//         console.log(`Dolphin win (${score_dolphin} vs. ${score_koalas})`);
//     }else if(score_koalas >= score_dolphin*2){
//         console.log(`Koalas win (${score_koalas} vs. ${score_dolphin})`);
//     }
//     else{
//         console.log("No one win");
//     }
// }

// checkWinner(score_dolphin,score_koalas);

/* Coding CHallenge */

// let bill=[125,555,44];
// let tip=[];
// function calcTip(bill){
//     for(let i=0;i<bill.length;i++)
//     {
//         if(bill[i]>=50 && bill[i]<=300)
//         {
//             let tip1=0.15*bill[i];
//             tip.push(tip1);
//         }else{
//             let tip1=0.2*bill[i];
//             tip.push(tip1);
//         }
//     }
// }

// calcTip(bill);
// console.log(bill);
// console.log(tip);
// let total=[];

// for(let i=0;i<tip.length;i++)
// {
//  total1=tip[i]+bill[i];
//     total.push(total1);
// }

// console.log(total);

/***************** Lecture 013 ******************/
//object

// const student={
//     f_name:"Ashwini",
//     l_name:"Thikole",
//     birthyear:2004,
//     roll_no:23221081,
//     friends:["Pratiksha","Mayuri","Kalyani"],
//     calAge:function(birthyear){
//       return 2024-birthyear;
//     }
// };
// console.log(student);
// console.log(student.calAge(2004));

// console.log(student.f_name);
// console.log(student["l_name"]);
// let namekey="name";
// console.log(student['f_'+namekey]);
// console.log(student['l_'+namekey]);

//Ashwini has 3 friends, and her best friend is
//called 'Pratiksha'
//console.log(`${student.f_name} has ${student.friends.length} friends,and her best friend is called ${student.friends[0]}`);

/* ************coding challenge************* */

// const Mark={
//   full_name:"Mark Miller",
//   mass:78,
//   height:1.69,
//   calBMI:function(){
//     let BMI=this.mass/(this.height*this.height);
//     return BMI;
//   }
// };

// const John={
//   full_name:"John Smith",
//   mass:92,
//   height:1.95,
//   calBMI:function(){
//     let BMI=this.mass/(this.height*this.height);
//     return BMI;
//   }
// };

// console.log(Mark);
// console.log(John);
// let mark_BMI=Mark.calBMI();
// let john_BMI=John.calBMI();
// console.log("Mark's BMI",mark_BMI);
// console.log("John's BMI",john_BMI);

// if(mark_BMI>john_BMI){
//   console.log(`${Mark.full_name}'s BMI(${mark_BMI})is higher than ${John.full_name}'s (${john_BMI})!`)
// }else if(john_BMI>mark_BMI){
//   console.log(`${John.full_name}'s BMI(${john_BMI})is higher than ${Mark.full_name}'s (${mark_BMI})!`)
// }else{
//   console.log("Both have a same BMI");
// }

/**Coding Challenge**/

// let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tip = [];
// let total = [];
// let sum = 0;
// function calcTip(bill) {
//   for (let i = 0; i < bill.length; i++) {
//     if (bill[i] >= 50 && bill[i] <= 300) {
//       let tip1 = 0.15 * bill[i];
//       tip.push(tip1);
//     } else {
//       let tip1 = 0.2 * bill[i];
//       tip.push(tip1);
//     }
//   }
// }

// calcTip(bill);
// console.log('Bill Array: ', bill);
// console.log('Tip Array: ', tip);

// for (let i = 0; i < tip.length; i++) {
//   total1 = tip[i] + bill[i];
//   total.push(total1);
// }
// console.log('Total: ', total);

// const average = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   let avg = sum / arr.length;
//   return avg;
// };

// console.log(average(tip));

/***********Coding Challenge************/
// let j=1;
// let str="";
// const printForecast=function(arr)
// {
//   for(let i=0;i<arr.length;i++)
//   {
//      str=str+(`...${arr[i]}°C in ${j} days`);
//      if(j==arr.length)
//      {
//       str+="...";
//      }
//     j++;
//   }
//   return str;
// }

// let arr1=[17,21,23];
// let arr2=[12,5,-5,0,4];
// console.log(printForecast(arr2));

// let student = {
//   education: ["ssc", "diploma", "degree"],
//   percentage: [90, 88.97, 9.82],
//   internship: ["open interface", "technohack"],
//   show:function(startIndex){
//     return [this.education[startIndex],this.percentage[startIndex]];
// },
// };

// console.log(student.education);
// let [a, ,b] = student.education;
// console.log(a, b);
// [a,b]=[b,a];
// console.log(a,b);
// console.log(student.show(2));
// const nested=[1,2,[3,4]];
// // const[i, ,j]=nested;
// const[i, ,[l,k]]=nested;
// console.log(i,l,k);

// const [p=1,q=1,r=1]=[8,9,8];
// console.log(p,q,r);
// let days=['mon','tue','wed','thirs','fri','sat','sun'];
// const collegetime= {
//   [days[0]]: {
//     start: 10,
//     end: 5,
//   },
//   [days[1]]: {
//     start: 10,
//     end: 5,
//   },
//   [days[2]]: {
//     start: 10,
//     end: 5,
//   },
//   [days[3]]: {
//     start: 10,
//     end: 5,
//   },
//   [days[4]]: {
//     start: 10,
//     end: 5,
//   },
// };

// let students = {
//   name1: ["Ashwini", "Pratiksha", "Mayuri", "Pallavi", "Nikita"],
//   midname: ["Pandurang", "Dashrath", "Santosh", "Jijaba", "Shivaji"],
//   sirname: ["Thikole", "Kadam", "Falke", "Shendage", "Giramkar"],
//   marks: [9.82, 8.5, 9.41, 7.0, 7.5],
//   collegetime,
//   admission: function ({ nameIndex, marksIndex, address, Subjects, score }) {
//     console.log(
//       `Name of Student is ${this.name1[nameIndex]} and she has ${Subjects} subjects in her last sem, where she score ${this.marks[marksIndex]} pointer and ${score} marks.She live in ${address}.`
//     );
//   },
//   result: function ({ res1, res2, res3, res4 }) {
//     console.log(
//       `result may be either ${res1} or ${res2} or ${res3} or ${res4}`
//     );
//   },

//   myResult: function ({ result, ...others }) {
//     console.log("My result is: ", result);
//     console.log("Others result are: ", others);
//   },
// };

// console.log(students);

// students.admission({
//   address: "Pandeshwar",
//   Subjects: 5,
//   score: 835,
//   nameIndex: 0,
//   marksIndex: 0,
// });

// students.result({
//   res1: "first class with distinction",
//   res2: "first class",
//   res3: "Pass",
//   res4: "fail",
// });

// students.myResult({
//   result: "first class with distinction",
//   res2: "first class",
//   res3: "Pass",
//   res4: "fail",
// });

// students.myResult({
//   result: "first class with distinction",
// });

// const { name1, marks, collegetime } = students;
// console.log(name1, marks, collegetime);

// // renaming the name of object elements:
// const {
//   name1: student_name,
//   sirname: student_l_name,
//   collegetime: student_collegetime,
// } = students;

// console.log(student_name, student_l_name, student_collegetime);

// //Mutating an object
// let a = 100;
// let b = 50;

// const obj = { a: 10, b: 20, c: 30 };
// ({ a, b } = obj);
// console.log(a, b);

// //Nested objects
// const {
//   fri: { start: s, end: e },
// } = collegetime;

// console.log(s, e);

// const { fri } = collegetime;
// console.log(fri);

// const arr = [5, 6, 7, 8, 9, 10];
// const newArr = [1, 2, 3, 4];
// const a = [...newArr, ...arr];
// console.log(...a);

// let newArr = [...students.name1, "Maya"];
// console.log(newArr);

// const newA = [...students.name1, ...students.sirname];
// console.log(newA);

// const [a,b,...others]=[1,2,3,4,5,6,7,8];
// console.log(a,b,others);

// const {mon,...weekdays}=students.collegetime;
// console.log(mon,weekdays);

// function add(...num){//rest operator wraps the elements into an array
//   let sum=0;
//   for(let i=0;i<num.length;i++){
//     sum=sum+num[i];
//   }
//   return sum;
// }

// console.log(add(2,3,1,4,5));
// console.log(add(1,2,3,4));
// console.log(add(1,2));
// const x=[1,2,3];
// console.log(add(...x));//In case of spread operator if we are passing a parrameter to a function as spread operator then we have to pass the numbers to a function at a time of calling a function.
// //so it will wrap that numbrers into a array.and if we are passing array to the function at calling time then it will gives us a numbers as it is because it will unwrap the array only.

// const[...a]=[1,2,3];
// console.log(a);

// let a = 0;
// const b = a || 10;
// console.log(b);

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },

// };

// let players1 = [
//   "Neuer",
//   "Pavard",
//   "Martinez",
//   "Alaba",
//   "Davies",
//   "Kimmich",
//   "Goretzka",
//   "Coman",
//   "Muller",
//   "Gnarby",
//   "Lewandowski",
// ];

// let players2 = [
//   "Burki",
//   "Schulz",
//   "Hummels",
//   "Akanji",
//   "Hakimi",
//   "Weigl",
//   "Witsel",
//   "Hazard",
//   "Brandt",
//   "Sancho",
//   "Gotze",
// ];

// const [gk, ...fieldPlayers] = players1;
// // console.log(gk,fieldPlayers);
// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);
// const players1Final = [...players1, "Thiago", "draw", "Perisic"];
// // console.log(players1Final);

// const {
//   odds: { team1:tm1,x:draw,team2:tm2 },
// } = game;

// console.log(tm1,draw,tm2);

// let printGoals=function(...players){
//   console.log(`${game.score}`);
//   for(let i=0;i<players.length;i++)
//   {
//     console.log(players[i]);
//   }
// }
// printGoals('Davies', 'Muller', 'Lewandowski','Kimmich',...game.scored);

// tm1<tm2 && console.log("Team1 is more likely to win");
// tm1>tm2 && console.log("Team2 is more likely to win");

// let student=[...students.name1,...students.sirname];
// for(const item of student){
//   console.log(item);
// }

// for(const item of student.entries()){
//   console.log(item);
// }

// for(const [i,element] of student.entries()){
//   console.log(`${i+1}:${element}`)
// }

// const rest=new Map();
// rest.set('fav','Ashwini');
// console.log(rest.set(1,'Ashwini').set(2,'Pratiksha').set(3,'Nikita'));
// console.log(rest.set('open',10).set('close',23).set(true,'Open').set(false,'Close'));

// console.log(rest.get('fav'));

// let time=21;
// console.log(rest.get(time>rest.get('open')
//  && time<rest.get('close')));

const question = new Map([
  ["question", "Which of following the best programming language: "],
  [1, "c"],
  [2, "c++"],
  [3, "javascript"],
  ["correct", 3],
  [true, "congrats🎉"],
  [false, "try again,😔"],
]);

// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`${key}:${value}`);
//   }
// }
// const yourAnswer = Number(prompt("Enter your answer: "));
// console.log(yourAnswer);
// console.log(question.get(question.get("correct") === yourAnswer));

console.log([...question.keys()]);//map to array conversion
console.log([...question.values()]);