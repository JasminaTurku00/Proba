// // const button = document.querySelector("button") !as HTMLButtonElement;
// // const input1 = document.querySelector("num1")! as HTMLInputElement;
// // const input2 = document.querySelector("num2") !as HTMLInputElement;

// // function add(num1: number, num2 : number){
// //     return num1 + num2;
// // }

// // button.addEventListener("click", function() {
// //     console.log(add(+input1.value, +input2.value))
// // })
// function add(n1: number, n2: number){
//     return n1+n2;
// }

// function printResult(num: number) : void{
//     console.log("Result" + num);
// }

// function addAndHandle(n1: number, n2: number, cb :(num: number) => void){
//     const result = n1 + n2;
//     cb(result);
// }
// addAndHandle(10, 20, (result) => {
//     console.log(result);
// })
// printResult(add(5,12));

// // let combineValues : Function;
// // let combineValues : () => number; //prihvata bilo koju fju bez parametra i vraca number
// let combineValues : (a : number, b: number) => number; //ovo je FunctionType


// combineValues = add;

// console.log(combineValues(8,8));