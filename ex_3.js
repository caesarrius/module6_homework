function getFunc(num1) {
    return function(num2) {
        return num1 + num2;
    }
}
let result = getFunc(65)(11);
console.log(result);