function getRandomNumber(number) {
    if ((number > 1000) || (number <= 1)) {
       return 'Данные не верны'; 
    } else {
        for (let i = 2; i <= number; i++){
            if( number % i === 0) {
                return 'Простое число';
            } else {
                return 'Составное число';
            }
        }
    }
}
console.log(getRandomNumber(154));
console.log(getRandomNumber(53));