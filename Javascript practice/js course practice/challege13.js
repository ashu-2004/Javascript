const revString = (str) => {
  let str1 = [];
  let str2='';
  for (let i = 0; i < str.length; i++) {
    str1.push(str.charAt(i));
  }
  //   console.log(str1);
  for (let i = str1.length-1; i >=0 ; i--) {
    str2+=str1[i];
  }
  return str2;
};

console.log(revString("hello"));
console.log(revString("hi"));
