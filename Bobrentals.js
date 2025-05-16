/****************************
 Bob's rentals
 ****************************/
console.log("Running Bobrentals.js");

//Variables


/****************************
 Main code
 ****************************/
alert(askUserName())



 /****************************
 Functions
 ****************************/
function askUserName() {
    UserName = prompt ("Hello user. \nWhat is your name?", "Enter Name Here");
    alert("Hi " +UserName+ ", \nWelcome to Bob's car rentals.");
}