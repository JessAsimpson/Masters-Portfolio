//activity 1 
// function factorial (n){
//     if((n ===0) ||(n === 1)){

//     }else {
//         return( n * factorial(n-1));
//     }
//     }
// console.log(factorial(33))


const pressGrindBeans = ( => {
    console.log("grinding for 20 seconds")
})
pressGrindBeans();
// level up 
let coffeeIsgrinding = false;

const pressGrindBeans= () => {
if (coffeeIsgrinding) {
    console.log("stop the grind");
    coffeeIsgrinding = false;
} else {
    console.log("grinding is about to begin");
    coffeeIsgrinding = true;
}
}
pressGrindBeans();


const cashwithdrawal = (amount, accnum) => {
    console.log('withdrawing ${amount} from account ${accnum}')
    
}
