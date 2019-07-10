var mydata = JSON.parse(data);


//////// poprawna metoda 
// var liczba = Object.keys(mydata).length;
// var in_imie = "Krzysiek";
// var found = false;
// var numer;
// for (i=0;i<liczba;i++){
//     if (mydata[i].name == in_imie)
//     {
//         found = true; 
//         numer = i;
//     }
// }
// console.log(i);
// if (found) {
//     console.log("Znaleziono uzytkownika " + mydata[numer].name);
// } else {
//     console.log("Nie znaleziono uzytkownika");
// }

var myemail = JSON.parse(data_email);
var liczba = Object.keys(myemail).length;
var in_email = "krzysiek@krzysiek.pl";
var userPassword = "Krzysiek1993";
var found = false;
var numer;

console.log(myemail[1].email);
// for (i=0;i<liczba;i++){
//     if (myemail[i].email == in_email)
//     {
//         found = true; 
//         numer = i;
//     }
// }
// console.log(i);
// if (found) {
//     console.log("Znaleziono mail " + myemail[numer].email);
// } else {
//     console.log("Nie znaleziono maila");
// }

function emailDbCheck() {
    for (i = 0; i < liczba; i++) {
        if (myemail[i].email == in_email) {
            found = true;
            numer = i;
        }
    }
    
    if (found) {
        console.log(i);
        console.log("Znaleziono mail " + myemail[numer].email);
    } else {
        console.log("Nie znaleziono maila");
    }
};

emailDbCheck();







// var txt="";
// var numbers=[45,234,34,23];

// numbers.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt;

// function myFunction(value, index){
//   txt = txt + index + " " + value + "<br>";
// }