// intarest calculations:
function intarestCalculation(amount){
    return amount*1.1;
}

let rawAmount = 1000;
let includingInterestAmount = intarestCalculation(rawAmount);
console.log(rawAmount,"With 10% Intarest:",includingInterestAmount);