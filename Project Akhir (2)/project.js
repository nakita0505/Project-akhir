const firebaseConfig = {
  apiKey: "AIzaSyBFgx_JCqwymRxMKdlGWm78Rb2c02fyRuI",
  authDomain: "bncc-fe-f.firebaseapp.com",
  databaseURL: "https://bncc-fe-f-default-rtdb.firebaseio.com",
  projectId: "bncc-fe-f",
  storageBucket: "bncc-fe-f.appspot.com",
  messagingSenderId: "553912420057",
  appId: "1:553912420057:web:0179cad3ea2665c12be0c8",
  measurementId: "G-TDS5VZ437L",
};

// inisialisasi
firebase.initializeApp(firebaseConfig);

// akses database
let database = firebase.database().ref("registrasi");

// gunakan!
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nama = document.querySelector("#nama").value;
  const email = document.querySelector("#email").value;
  const nomorTelepon = document.querySelector("#nomorTelepon").value;
  const acara = document.querySelector("#acara").value;

  let newContact = database.push();
  newContact
    .set({
      namaContact: nama,
      emailContact: email,
      nomorTeleponContact: nomorTelepon,
      acaraContact: acara,
    })

    .then(() => {
      console.log("Data saved");
    })
    .catch((error) => {
      console.log(error);
    });

  //alret
  alert("Your Form Has Been submitted Succesfully");
});

// Validation
const nama = document.getElementById("nama");
const nomorTelepon = document.getElementById("nomorTelepon");

const errorElement = document.getElementById("error");

form.addEventListener("submit", function (event) {
  let messages = [];
  if (nama.value === " " || nama.value == null) {
    messages.push("Name is required");
  }

  if (nomorTelepon.value.length >= 14) {
    messages.push("karakter tidak boleh 14");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
