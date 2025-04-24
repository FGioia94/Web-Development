const num = 2;
const str = "aaa";
const bool = true;

[ num, str, bool ].forEach(element => {
    console.log(typeof(element))
});

const a = 4;
const b = 2;

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
function modulus(a, b){
    return a % b;
}

[add, subtract, multiply, divide, modulus].forEach((element)=>
    {console.log(element(a, b))
    }
)

console.log("ES. 5")
console.log(5 + 3 * 2)
console.log((5 + 3) * 2)
console.log("ES. 6")
console.log(100 == "100")
console.log(100 === "100")
console.log("ES. 7")
const y = true;
const n = false;
console.log(y && n)
console.log(y || n)
console.log(!y, y)
console.log("ES. 9")
const car = {
    brand: "Suzuki",
    model: "Swift",
    year: 2010
}
console.log(car.brand, car["model"], car);
const x = "Hello"*3;
console.log(x, x == NaN, x === NaN, isNaN(x))