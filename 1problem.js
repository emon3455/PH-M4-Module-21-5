function celsiusToFahrenhit(celsius){
    return ((celsius * 1.8)+32);
}

let celsius = 25;
let fahrenheit = celsiusToFahrenhit(celsius);
console.log(fahrenheit);