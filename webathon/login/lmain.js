var attempt = 3;
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "mohan@gmail.com" && password == "5" ||username == "abhi@gmail.com" && password == "1" ||username == "rakshita" && password == "3" ||username == "suhasini" && password == "4" ||
username == "rahul@gmail.com" && password == "2" ){
alert ("Login successfully");
window.location = "../homepage/index.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
