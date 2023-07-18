
//unused veriables
let temp;
var _temp;
let num=5;

//undefined 
if(temp==5)
{
console.log("undefined");
}

//Calaculate circle
const radius = 10;
const pi = Math.PI;
const areaOfCircle = (radius, pi) => {
   return pi * radius * radius;
};
console.log("The area of the circle is: " + areaOfCircle(radius, pi));

//find factorial
let n = 4;
answer = factorial(n)
function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }
  else if(n > 1){
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }
  else{
    return "number has to be positive."
  }  
}
console.log("Factorial of " + n + " : " + answer);
console.log("");

//calculate spiralMatrix
spiralMatrix(5);
function spiralMatrix(n) {
    console.log("");
    const arr = Array.from({ length: n }, () => []);
    let row = 0;
    let col = 0;
    let rowEnd = n - 1;
    let colEnd = n - 1;
    let counter = 1;
    while (col <= colEnd && row <= rowEnd) {

        // Top row & middle value (Where col === colEnd && row === rowEnd)
        for (let i = col; i <= colEnd; i++) {
            arr[row][i] = counter;
            counter++;
        }
        row++;

        // end column
        for (let i = row; i <= rowEnd; i++) {
            arr[i][colEnd] = counter;
            counter++;
        }
        colEnd--;
console.log("");
        // end row
        for (let i = colEnd; i >= col; i--) {
            arr[rowEnd][i] = counter;
            counter++;
        }
        rowEnd--;

        // First col from end
        for (let i = rowEnd; i >= row; i--) {
            arr[i][col] = counter;
            counter++;
        }
        col++;
    }
    return arr;
}
