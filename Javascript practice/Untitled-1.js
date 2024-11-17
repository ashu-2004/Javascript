export const reverseAString = (str) => {
  let string = [];
  for (let i = 0; i < str.length; i++) {
    string.push(str.charAt(i));
  }
  // Write your code here
  for (let i = string.length - 1; i >= 0; i--) {
    console.log(string[i]);
  }
};

reverseAString("Hello");
