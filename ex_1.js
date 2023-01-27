 let arr = [0,4,9,"h",null,"e",undefined];
 let evenElement = 0;
 let oddElement =  0;
 let anotherElement = 0;
 function getAmountOfElements(allString){
    for (let i = 0; i < arr.length; i++) {
        if (allString[i] === 0 || (typeof (allString[i]) !== 'number')) {
            anotherElement++;
        } else {
            if (allString[i] % 2 === 0) {
                evenElement++;
            } else {
                oddElement++;
            }
        }
    }  
}
getAmountOfElements(arr);
 console.log('Even elements: ' + evenElement, 'Odd elements: ' + oddElement, 'Another elements: ' + anotherElement);