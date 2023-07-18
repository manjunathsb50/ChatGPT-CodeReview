console.log("Welcome");   


console.log("testcd");
 let num1=5;
let num2=10

var res=num1+num2

const num3;

if(num3==5)
{
console.log('Equals');
}

function circle(Radius)
{
    this.Radius = Radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.Radius * this.Radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.Radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));
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
