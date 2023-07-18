console.log("Welcome");   

console.log("testcd");
let temp=10;
var _temp=10;
const radius = 10;
const pi = Math.PI;
const areaOfCircle = (radius, pi) => {
   return pi * radius * radius;
};
console.log("The area of the circle is: " + areaOfCircle(radius, pi));

function func() { 
         function fact(num) {     
            if (num < 0){ 
               return -1; 
            } 
            else if(num == 0){ 
               return 1; 
            } 
            else { 
               let result = 1; 
               for(var i = num; i > 1; i--){ 
                  result *= i; 
               }; 
               return result; 
            } 
         }; 
         const _num = 4; 
 fact(_num); 
