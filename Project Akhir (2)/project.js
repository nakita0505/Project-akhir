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
const section = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nama = document.querySelector("#nama").value;
  const email = document.querySelector("#email").value;
  const nomorTelepon = document.querySelector("#nomorTelepon").value;
  const acara = document.querySelector("#acara").value;

  let newContact = database.push();
  newContact.set({
    namaContact: nama,
    emailContact: email,
    nomorTeleponContact: nomorTelepon,
    acaraContact: acara,
  });
});
