function getNumber(num1,num2) {
    let interval = setInterval(function() {
        console.log(num1);
        if(num1 === num2) {
            clearInterval(interval);
        } else {num1++;}
    }, 1000);
}
getNumber(1,5);