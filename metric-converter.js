// Display info to console reader
console.log("Code converts Imperial to Metric and vice versa");
console.log("Imperial measurements: inch, foot, yard, mile");
console.log("Metric measurements: centimeter, meter, kilometer");


function convertfunction(){
    // document input
    var input_value = document.getElementById("numbervalue");
    let start_number = input_value;
    var direction = document.getElementsByTagName("Measurments");
    //converts number input to float
    input_value = parseFloat(input_value);
    
    
    // Convert math
    
    if (direction === "in>cm") {
        input_value = input_value * 2.54;
        let start_type = "inches"
        let end_type = "centimeters"
    } else if (direction === "ft>cm") {
        input_value = input_value * 30.48;
        let start_type = "feet"
        let end_type = "centimeters"
    } else if (direction === "yd>m") {
        input_value = input_value * 0.91;
        let start_type = "yeards"
        let end_type = "meters"
    } else if (direction === "mi>km") {
        input_value = input_value * 1.61;
        let start_type = "miles"
        let end_type = "kilometers"
    } 
        ///metric start 
    else if (direction === "cm>in") {
        input_value = input_value * 0.39;        
        let start_type = "centimeters"
        let end_type = "inches"
    } else if (direction === "cm>ft") {
        input_value = input_value * 0.0328;        
        let start_type = "centimeters"
        let end_type = "feet"
    } else if (direction === "m>yd") {
        input_value = input_value * 1.09;
        let start_type = "meters"
        let end_type = "yards"
    } else if (direction === "km>mi") {
        input_value = input_value * 0.62;
        let start_type = "kilometers"
        let end_type = "miles"
    }
    
    
    
    // Output to conversion-message
    console.log(input_value);
    let output = (start_number + " " + start_type + "=" + input_value + end_type);
    document.getElementById("conversion-message").innerHTML = input_value;

}
const buttonForConverter = document.getElementById("startconversion")
buttonForConverter.addEventListener("click",convertfunction)
