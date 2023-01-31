// Fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit){
    return ((fahrenheit-32)*0.5556);
}

let fahrenheit = 77;
let celsius = fahrenheitToCelsius(fahrenheit);
console.log(celsius);