// Some array methods practice //

// ======================================== //
// ======================================== //

// arrayName.forEach() method start //

// var a=["Rakib","Sakib","Bakib"];

/* a.forEach(function(a,index){
    console.log(index +":"+ a);
}) */

/* a.forEach(names);

function names(a,index){
    console.log(index +":"+ a);
} */

// arrayName.forEach() method start //

// ======================================== //

// ======================================== //

// arrayName.filter() method start //

/* var ages = [10, 24, 52, 15];

var adults = ages.filter(function (ages) {
  return(ages >= 18);
});
console.log(adults); */

// arrayName.filter() method end //

// ======================================== //

// ======================================== //

// arrayName.find() method start //

/* var ages = [10, 24, 52, 15];

var adults = ages.find(adults);

function adults(ages) {
  return ages >= 18;
}
console.log(adults); */

// arrayName.find() method end //

// ======================================== //

// ======================================== //

// arrayName.some() method start //

// var ages = [10, 24, 52, 15];

/* var adults = ages.some(function (ages) {
  return ages >= 18;
});
console.log(adults); */

/* var adults = ages.some(checkAdults);

function checkAdults(ages) {
  return ages >= 18;
}
console.log(adults); */

// arrayName.some() method end //

// ======================================== //

// ======================================== //

// arrayName.every() method start//

/* var ages = [24, 52, 14];

var adults = ages.every(adults);
function adults(ages) {
  return ages >= 18;
}
console.log(adults); */

// arrayName.every() method end//

// ======================================== //

// ======================================== //

//arrayName.findIndex() method start //

/* var ages = [10, 24, 3, 50];

console.log(ages.indexOf(24)); */

/* for (let i = 0; i < ages.length; i++) {
  if(ages[i] >= 18)
  console.log("index number "+ i + ": "+ ages[i]);
} */

//arrayName.findIndex() method end //

// ======================================== //

// ======================================== //

// arrayName.includes() method start //
/* 
var a=["Rakib","Sakib","Bakib"];
var name = a.includes("Sakib");
console.log(name); */

/* var numbers = [10, 24, 52, 15];
var number = numbers.includes(52);
console.log(number); */

// arrayName.includes() method end //

// ======================================== //

// ======================================== //

// arrayName.indexOf() start //
/* 
var a = ["Rakib", "Sakib", "Bakib", "Aman", "Rahul"];

var indexOfName = a.indexOf("Rahul", 3);

console.log(indexOfName); */

// arrayName.indexOf() end //

// ======================================== //

// ======================================== //

// arrayName.reduce() start //

/* var numbers = [10, 24, 52, 15];

var extension = 11;
var result = numbers.reduce(addition, extension);
function addition(a, current) {
  return a + current;
}
console.log(result);
 */

/* var result = numbers.reduce((prevValue, currentValue)=>{
 return prevValue+currentValue;
},0) */

/* reduce((previousValue,currentValue)=>{
  return previousValue+currentValue;
}, initialValue = previousValue // If the initial value is not assigned yet, then we can set this value here. I mean at the end of the reduce. //
) */

// arrayName.reduce() end //

// ======================================== //

// ======================================== //

// arrayName.reduceRight() start //

/* var alphabets = ["a", "b", "c", "d", "e", "f", "g"];

var result = alphabets.reduceRight(
  (prevValue, currentValue) => {
    return prevValue + currentValue;
  } //initial value is not necessary in string concatenation but if you want then you can provide any value here(what ever you want......😎). //
);
console.log(result); */

// arrayName.reduceRight() end //

// ======================================== //

// ======================================== //

// arrayName.lastIndexOf() start //

/* var a = ["Rakib", "Sakib", "Bakib", "Aman", "Rahul"];
var lastIndexOfName = a.indexOf("Rahul", 3);
console.log(lastIndexOfName); */

// arrayName.lastIndexOf() end //

// ======================================== //

// ======================================== //
