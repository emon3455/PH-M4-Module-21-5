
function findingMax(arr){
    let max = arr[0];

    for(let i =0; i< arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }

    return max;
}

let numbers = [33,1, 2, 3, 3, 4,23, 4,100, 5, 6, 7,44, 8, 9, 10,80];
let maximum = findingMax(numbers);
console.log(maximum);

