function findBigName(array){
    
    let max = array[0];
    let maxSize = max.length;
    let element;

    for(let i=0; i < array.length; i++){

        element = array[i];
        if(element.length > maxSize){
            max = array[i];
            maxSize = max.length;
        }
        
    }

    return max;
}

let friends = ["Emon","Sumon","Yousuf","Habib"];
const bigName = findBigName(friends);
console.log(bigName);