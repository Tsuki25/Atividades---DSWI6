function add(num1, num2){return num1+num2}

const multiply = (num1, num2) => { return num1*num2 }

const executeFunction = (func, num1, num2) => func(num1, num2)

console.log(executeFunction(add, 2, 3)); // 5
