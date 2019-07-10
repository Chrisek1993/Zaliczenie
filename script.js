// odświeżenie strony w przypadku niekliknięcia przycisku

myvar = setTimeout(sessionReload, 200000);
function sessionReload() {
  location.reload();
}


var firebaseConfig = {
 
  authDomain: "kino.firebaseapp.com",
  databaseURL: "https://kino.firebaseio.com",
  projectId: "kino",
  storageBucket: "kino.appspot.com",
  messagingSenderId: "604403643194",

};

// przycisk wyłączenia modala z alertem o czasie sesji

document.querySelector('.close2-timeout').addEventListener('click', function () {
  document.querySelector('.modal-timeout').style.display = 'none';

});


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

// get password and email from firestore

var email_db;
var password_db;

db.collection("users").add({
  first: "new-user",
  last: "somePassword"
  // born: 1815
})
  .then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function (error) {
    console.error("Error adding document: ", error);
  });


db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});

// modal rejestracji

document.querySelector('.close2').addEventListener('click', function () {
  document.querySelector('.modal-kino').style.display = 'none';

});

document.getElementById('btn-rej').addEventListener('click', function () {
  document.querySelector('.modal-kino').style.display = 'flex';
});





// zamknięcie modala przez kliknięcie obok

var modal = document.querySelector('.modal-kino');
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// modal wyboru kina

document.querySelector('.close2-wybor-kina').addEventListener('click', function () {
  document.querySelector('.modal-kino-wybor').style.display = 'none';
});

document.getElementById('btn-wybor-kina').addEventListener('click', function () {
  document.querySelector('.modal-kino-wybor').style.display = 'flex';
});

// modal wyboru filmu

document.querySelector('.close2-wybor-film').addEventListener('click', function () {
  document.querySelector('.modal-film-wybor').style.display = 'none';
});

document.getElementById('btn-wyborfilm').addEventListener('click', function () {
  console.log("kliknieto  w wybor filmu")
  document.querySelector('.modal-film-wybor').style.display = 'flex';
});

// modal wyboru miejsca

document.querySelector('.close2-wybor-miejsce').addEventListener('click', function () {
  document.querySelector('.modal-miejsce-wybor').style.display = 'none';
});

document.getElementById('btn-wybor-miejsce').addEventListener('click', function () {
  console.log("kliknieto  w wybor filmu")
  document.querySelector('.modal-miejsce-wybor').style.display = 'flex';
});

// modal repertuaru

document.querySelector('.close2-repertuar').addEventListener('click', function () {
  document.querySelector('.modal-repertuar').style.display = 'none';
});

document.getElementById('btn-repertuar').addEventListener('click', function () {
  console.log("kliknieto  w przycisk repertuar")
  document.querySelector('.modal-repertuar').style.display = 'flex';
});

// zamknięcie modala przez kliknięcie obok - jeśli się go włączy to modal logowania nie wyłącza się w ten sposób

// var modal_wybor = document.querySelector('.modal-kino-wybor');
// window.onclick = function (event) {
//   if (event.target == modal_wybor) {
//     modal_wybor.style.display = "none";
//   }
// }


////////////////////////////////////////////////////////////////////////////
/////// wybór miejsc

for (let j = 0; j < 10; j++) {
  let para_parent = document.createElement("div");
  for (let i = 0; i < 10; i++) {
    let para = document.createElement("span");
    let node = document.createTextNode("rz" + j + "m" + i + " ");
    para.appendChild(node);
    para_parent.appendChild(para);
  }
  var element = document.getElementById("div1");
  element.appendChild(para_parent);
}


var sum = 0;
var elements = document.querySelectorAll('div span');
elements.forEach(function (element) {
  element.addEventListener('click', function () {
    if (element.style.color == 'green') {
      element.style.color = 'white'; sum = sum - 15;
      document.getElementById("cena").innerHTML = sum + " ZŁ";
      document.getElementById("cena2").innerHTML = "Wartość zamówienia: " + sum + " ZŁ";
      document.getElementById("cena2").classList.remove("ukryj");
    }
    else {
      element.style.color = 'green'; sum = sum + 15;
      document.getElementById("cena").innerHTML = sum + "ZŁ";
      document.getElementById("cena2").innerHTML = "Wartość zamówienia: " + sum + " ZŁ"
      document.getElementById("cena2").classList.remove("ukryj");
    }
  });
});


// Repertuar Modal
var myMovie = JSON.parse(data_film);


document.querySelector('.it_id2').addEventListener('click', function () {

  console.log("kliknięto w obrazek it" + "tytuł z jsona: " + myMovie[0].title) ;
  document.getElementById("movie_title").innerHTML = "Tytuł: " + myMovie[0].title;
  document.getElementById("year").innerHTML = "Rok: " + myMovie[0].Rok;
  document.getElementById("genre").innerHTML = "Gatunek: " + myMovie[0].Gatunek;
  document.getElementById("description").innerHTML = "Opis: " + myMovie[0].opis;
});

document.querySelector('.cos_id2').addEventListener('click', function () {
  
  console.log("kliknięto w obrazek it" + "tytuł z jsona: " + myMovie[1].title) ;
  document.getElementById("movie_title").innerHTML = "Tytuł: " + myMovie[1].title;
  document.getElementById("year").innerHTML = "Rok: " + myMovie[1].Rok;
  document.getElementById("genre").innerHTML = "Gatunek: " + myMovie[1].Gatunek;
  document.getElementById("description").innerHTML = "Opis: " + myMovie[1].opis;
  // document.querySelector('.modal-timeout').style.border = "1px solid white";
});

document.querySelector('.ai_id2').addEventListener('click', function () {
  
  console.log("kliknięto w obrazek it" + "tytuł z jsona: " + myMovie[2].title) ;
  document.getElementById("movie_title").innerHTML = "Tytuł: " + myMovie[2].title;
  document.getElementById("year").innerHTML = "Rok: " + myMovie[2].Rok;
  document.getElementById("genre").innerHTML = "Gatunek: " + myMovie[2].Gatunek;
  document.getElementById("description").innerHTML = "Opis: " + myMovie[2].opis;
});


//wybor filmu
document.getElementById("wybor").addEventListener("change", function () {
  var selObj = document.getElementById("wybor");
  var selValue = selObj.options[selObj.selectedIndex].value;

  if (selValue == "poznan") {
    document.getElementById("kino_poznan").classList.remove("ukryj");
    document.getElementById("kino_warszawa").classList.add("ukryj")
    document.getElementById("kino_katowice").classList.add("ukryj")
  }
  if (selValue == "warszawa") {
    document.getElementById("kino_warszawa").classList.remove("ukryj");
    document.getElementById("kino_poznan").classList.add("ukryj")
    document.getElementById("kino_katowice").classList.add("ukryj")
  }
  if (selValue == "katowice") {
    document.getElementById("kino_katowice").classList.remove("ukryj");
    document.getElementById("kino_poznan").classList.add("ukryj")
    document.getElementById("kino_warszawa").classList.add("ukryj")
  }
})

document.getElementById("wybor_film").addEventListener("change", function () {

  var selObj = document.getElementById("wybor_film");
  var selValue = selObj.options[selObj.selectedIndex].value;

  if (selValue == "to") {
    document.getElementById("id_to").classList.remove("ukryj");
    document.getElementById("id_cos").classList.add("ukryj")
    document.getElementById("id_ai").classList.add("ukryj")
    console.log("wczytano jsona z opisem filmu TO: " + myMovie[0].opis);
  }
  if (selValue == "cos") {
    document.getElementById("id_cos").classList.remove("ukryj");
    document.getElementById("id_to").classList.add("ukryj")
    document.getElementById("id_ai").classList.add("ukryj")
    console.log("wczytano jsona z opisem filmu TO: " + myMovie[1].opis);
  }
  if (selValue == "ai") {
    document.getElementById("id_ai").classList.remove("ukryj");
    document.getElementById("id_cos").classList.add("ukryj")
    document.getElementById("id_to").classList.add("ukryj")
    console.log("wczytano jsona z opisem filmu TO: " + myMovie[2].opis);
  }
})

document.getElementById("wybor").addEventListener("change", function () {
  var selObj = document.getElementById("wybor");
  var selValue = selObj.options[selObj.selectedIndex].value;

  if (selValue == "poznan") {
    document.getElementById("kino_poznan2").classList.remove("ukryj");
    document.getElementById("kino_warszawa2").classList.add("ukryj")
    document.getElementById("kino_katowice2").classList.add("ukryj")
  }
  if (selValue == "warszawa") {
    document.getElementById("kino_warszawa2").classList.remove("ukryj");
    document.getElementById("kino_poznan2").classList.add("ukryj")
    document.getElementById("kino_katowice2").classList.add("ukryj")
  }
  if (selValue == "katowice") {
    document.getElementById("kino_katowice2").classList.remove("ukryj");
    document.getElementById("kino_poznan2").classList.add("ukryj")
    document.getElementById("kino_warszawa2").classList.add("ukryj")
  }
})

document.getElementById("wybor_film").addEventListener("change", function () {
  var selObj = document.getElementById("wybor_film");
  var selValue = selObj.options[selObj.selectedIndex].value;

  if (selValue == "to") {
    document.getElementById("id_to2").classList.remove("ukryj");
    document.getElementById("id_cos2").classList.add("ukryj")
    document.getElementById("id_ai2").classList.add("ukryj")
  }
  if (selValue == "cos") {
    document.getElementById("id_cos2").classList.remove("ukryj");
    document.getElementById("id_to2").classList.add("ukryj")
    document.getElementById("id_ai2").classList.add("ukryj")
  }
  if (selValue == "ai") {
    document.getElementById("id_ai2").classList.remove("ukryj");
    document.getElementById("id_cos2").classList.add("ukryj")
    document.getElementById("id_to2").classList.add("ukryj")
  }
})



//////////////////////////////////////////////////////////////////////////////////////////////////
// weryfikacja hasła


var myInput = document.getElementById("psw");
var btnzal = document.getElementById("btn-zal");
var litera = document.getElementById("litera");
var litera_duza = document.getElementById("litera-duza");
var cyfra = document.getElementById("cyfra");
var liczba_znakow = document.getElementById("liczba-znakow");
var zalogowano = document.getElementById("zalogowano");
var e_mail = document.getElementById("user-login");

var myUser = JSON.parse(data_email);

var liczba = Object.keys(myUser).length;



// walidacja hasła - wyświetlanie wskazówek pod oknem wpisywania
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    litera.classList.remove("invalid");
    litera.classList.add("valid");
  } else {
    litera.classList.remove("valid");
    litera.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    litera_duza.classList.remove("invalid");
    litera_duza.classList.add("valid");
  } else {
    litera_duza.classList.remove("valid");
    litera_duza.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    cyfra.classList.remove("invalid");
    cyfra.classList.add("valid");
  } else {

    cyfra.classList.remove("valid");
    cyfra.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    liczba_znakow.classList.remove("invalid");
    liczba_znakow.classList.add("valid");
  } else {
    liczba_znakow.classList.remove("valid");
    liczba_znakow.classList.add("invalid");
  }

}



btnzal.onclick = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  var numbers = /[0-9]/g;
  var upperCaseLetters = /[A-Z]/g;
  var emailvalidate = /(^\w.*@\w+\.\w)/g;
  var in_email = document.querySelector(".email");





  if (myInput.value.match(lowerCaseLetters)) {
    console.log("są małe litery");
    document.getElementById("litera").innerHTML = "";


  } else {
    console.log("hasło musi zawierać małe litery");
    document.getElementById("litera").innerHTML = "hasło musi zawierać małe litery";

  }

  if (myInput.value.match(numbers)) {
    console.log("są cyfry")
    document.getElementById("cyfra").innerHTML = "";

  }

  else {
    console.log("hasło musi zawierać cyfry")
    document.getElementById("cyfra").innerHTML = "hasło musi zawierać cyfry";

  }

  if (myInput.value.match(upperCaseLetters)) {
    console.log("są duże litery")
    document.getElementById("litera-duza").innerHTML = "";

  }

  else {
    console.log("hasło musi zawierać duże litery")
    document.getElementById("litera-duza").innerHTML = "hasło musi zawierać duże litery";

  }

  if (myInput.value.length >= 8) {
    console.log("jest 8 znaków")
    document.getElementById("liczba-znakow").innerHTML = "";

  }

  else {
    console.log("hasło musi zawierać przynajmniej 8 znaków");
    document.getElementById("liczba-znakow").innerHTML = "hasło musi zawierać przynajmniej 8 znaków";

  }

  if (e_mail.value.match(emailvalidate)) {
    console.log("składnia emaila poprawna")

  }

  else {
    console.log("składnia emaila niepoprawna");

  }

  ///////////////////////////////////////////////////////////////////////
  // funkcja sprawdzająca czy hasło istnieje w bazie danych
  function passwordCheck() {
    var numerr = 0
    var found_password = false;
    var userPassword = document.getElementById("psw").value;
    for (i = 0; i < liczba; i++) {
      if (myUser[i].password == userPassword) {
        found_password = true;
        numerr = i;
      }
    }
    console.log(i);
    if (found_password) {
      console.log("Znaleziono hasło " + myUser[numerr].password);

    } else {
      console.log("Nie znaleziono hasła");
      document.getElementById("zalogowano").innerHTML = "Hasło jest niepoprawne ";
    }
  }

  function emailAndPassword() {
    var myemail = JSON.parse(data_email);
    var in_email = document.getElementById("user-login").value;
    var in_email = in_email.toLowerCase();
    var userPassword = document.getElementById("psw").value;
    console.log(in_email);
    console.log(userPassword);
    liczba = Object.keys(myemail).length;
    emailPassMatch = false;

    for (i = 0; i < liczba; i++) {
      if (myUser[i].email == in_email && myUser[i].password == userPassword) {

        emailPassMatch = true;
      }
    }

    if (emailPassMatch) {
      console.log("email i hasło pasują");
      zalogowano.classList.remove("invalid");
      zalogowano.classList.add("valid_zal");
      document.getElementById("zalogowano").style.color = 'green';
      document.getElementById("zalogowano").innerHTML = " Zalogowano ";

      document.getElementById("btn-rej").innerHTML = "TWOJE KONTO";
      //document.getElementById("zalogowano").innerHTML = "Zalogowano";
    }

    else {
      console.log("mail i hasło nie pasują");
      document.getElementById("zalogowano").style.color = 'red';
      document.getElementById("zalogowano").innerHTML = "Hasło jest niepoprawne";
    }
  }



  ///////////////////////////////////////////////////////////////////////
  // funkcja sprawdzająca czy email  istnieje w bazie danych
  function emailDbCheck() {
    var in_email = document.getElementById("user-login").value;
    var in_email = in_email.toLowerCase();
    var found_email = false;
    var numer = 0;

    for (i = 0; i < liczba; i++) {
      if (myUser[i].email == in_email) {
        found_email = true;
        numer = i;
      }
    }
    console.log(i);
    if (found_email) {
      console.log("Znaleziono mail " + myUser[numer].email);
      emailAndPassword();

    }
    else {
      console.log(in_email);
      console.log("nie znaleziono adresu email w bazie danych")
      console.log("Wpisany adres email nie istnieje w bazie użytkowników.");
      document.getElementById("zalogowano").style.color = 'red';
      document.getElementById("zalogowano").innerHTML = "Wpisany adres email nie istnieje w bazie użytkowników";

    }
  }



  if (myInput.value.match(lowerCaseLetters) && myInput.value.match(upperCaseLetters) && e_mail.value.match(emailvalidate) && (myInput.value.length >= 8)) {

    console.log("Wszystkie warunki składni hasła spełnione. Czas na sprawdzenie, czy mail i hasło istnieją w bazie");

    emailDbCheck();
    passwordCheck();
    //emailAndPassword();

  }
  else {
    console.log("brakuje spełnienia któregoś z 4 warunków");
  }

}


// Grab the email input field and also the update div below it
// Why: to listen for changes in the input field, and show live updates in the update div!
const email3 = document.querySelector('.email');
const update = document.querySelector('.update');
console.log(email3);

// Listen to any change to the input we selected above
// Why: to validate the string as we type (on each keystroke)
email3.addEventListener('input', inputEmail);

function inputEmail(e) {
  console.log(email3);
  const input = e.target.value;
  // Check if the input is NOT blank first, and if it's not, make sure it matches our regex test
  // Why: because we don't want to start validating before the user has started typing; after that it's fair game
  if (input && /(^\w.*@\w+\.\w)/.test(input)) {
    update.textContent = 'poprawny email!';
    update.classList.add('success');
    update.classList.remove('failure');
  } else {
    update.textContent = 'wpisuj dalej';
    update.classList.remove('success');
    update.classList.add('failure');
  }
};

