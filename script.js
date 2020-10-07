
//const kelvin=293;  //kelvin degree

const kelvin = prompt("Enter temperature in Kelvins:");  //  14.madde için promt kullandık..aslında ilk madde geçerli idi..biz onu comment out yaptık!!!!

console.log(kelvin);

/*  kelvin=celcius+273     */

let celcius= kelvin-273; //found the value of celcius when kelvin is 293 degree((I think))
console.log(celcius);

//  fahrenheit = Celcius*(9/5) +32   
let fahrenheit = celcius*(9/5) +32;
console.log(fahrenheit);            // 20C = 68 F    we found that
console.log(Math.round(fahrenheit));
   // Use the .round() method 
// fahrenheit = Math.round(fahrenheit);  => böyle de yazılır      


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`) // Use string interpolation 
alert(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


//in the 11.rule  I changed the value of kelvin to "0"  AND it  ran!!!

//Now convert celcius to Newton scale  =>    Newton = Celsius * (33/100)

let newton = celcius*(33/100);
newton = Math.floor(newton);
console.log(newton);   //  exact value with decimal = 6.6000000000000005
alert(`Newton is ${newton} degree in 20 Celcius `)
//console.log(Math.floor(6.6000000000000005))    //  "6"   output


