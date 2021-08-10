function inchToFeet(inch){
    var feet = inch /12;
    return feet
}
var feet = parseFloat(inchToFeet(244).toFixed(1));
console.log('244 In Feet', feet);
var feetTo = parseFloat(inchToFeet(344).toFixed(1));
console.log('344 In Feet', feetTo);