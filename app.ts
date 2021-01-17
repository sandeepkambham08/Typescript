function add (n1:number, n2:number){
    return n1 + n2;
}

function printResult(num:number):void{
    console.log('Result' + num);
}

let combineValues : (n1:number, n2:number) => number ;      // function type
combineValues = add;
// combineValues = printResult;

console.log(combineValues(3,2));