/* .js files add interaction to your website */



var factList = [
  "Texas is totally banned from having an abortion",/*0*/
  "Oregon allows abortions",/*1*/
  "An abortion that happens without intervention is known as a miscarriage",/*2*/
  "An estimated 1 in 4 pregnancies end in an abortion every year",/*3*/
  "Abortion is one of the most hotly contested topics globally"/*4*/
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
