const leftNumber = prompt("please enter the leftNumber");
const operator = prompt("please enter your operator");
const rightNumber = prompt("please enter the rightNumber");

let result;
switch (operator) {
case "+": result = leftNumber + rightNumber;
break;

case "-": result = leftNumber - rightNumber;
break;

case "*": result = leftNumber * rightNumber;
break;

case "/": result = leftNumber / rightNumber;
break;

}

console.log(leftNumber,operator,rightNumber,"=",result);