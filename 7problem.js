function removingDuplicates(arr){

    let newArray=[];
    let check;
    let element;
    let x=0;

    for(let i=0; i< arr.length; i++){

        element = arr[i];
        check = newArray.includes(element); //using includes() to check the element is exist or not
        if(check == false){
            newArray[x]=arr[i];
            x++;
        }
    }

    return newArray;
}

let arr = [1,2,3,4,5,5,5,5,4,4,3,2,1];
let newArr = removingDuplicates(arr);
console.log(newArr);

