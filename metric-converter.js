// Display info
console.log("Code converts Imperial to Metric and vice versa");
console.log("Imperial measurements: inch, foot, yard, mile");
console.log("Metric measurements: centimeter, meter, kilometer");


function convertfunction(){
    // Input
    var number = document.getElementById("numbervalue");
    var direction = document.getElementsByTagName("Measurments");
    let input_value = parseFloat(number)
    
    
    // Convert
    
    if (direction === "in>cm") {
        input_value = input_value * 2.54;
    } else if (direction === "ft>cm") {
        input_value = input_value * 30.48;
    } else if (direction === "yd>m") {
        input_value = input_value * 0.91;
    } else if (direction === "mi>km") {
        input_value = input_value * 1.61;
    } 
    else if (direction === "cm>in") {
        input_value = input_value * 0.39;
    } else if (direction === "cm>ft") {
        input_value = input_value * 0.0328;
    } else if (direction === "m>yd") {
        input_value = input_value * 1.09;
    } else if (direction === "km>mir") {
        input_value = input_value * 0.62;
    }
    
    
    
    // Output
    console.log(input_value);
    document.getElementById("conversion-message").innHTML = input_value;

}
const buttonForConverter = document.getElementById("startconversion")
buttonForConverter.addEventListener("click",convertfunction)
