//grading system:
function gradingSystem(marks){

    if(marks >= 80){
        return "A+";
    }
    
    else if(marks >= 70){
        return "A";
    }

    else if(marks >= 60){
        return "B";
    }

    else if(marks >= 50){
        return "C";
    }

    else if(marks >= 40){
        return "D";
    }
    else{
        return "F";
    }

}

let marks = 95;
let grade = gradingSystem(marks);
console.log(grade);