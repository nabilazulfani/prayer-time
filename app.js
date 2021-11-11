//Ngambil data dari API
function prayerTimes(latitude, longitude) {
  fetch(
    "http://api.aladhan.com/v1/calendar?latitude=" +
      latitude +
      "&longitude=" +
      longitude +
      "&method=2"
  )
    .then((response) => response.json())
    .then(function (response) {
      // pengambilan data hari ini
      let date = new Date();
      let today = date.getDate() - 1;
      console.log(response.data[today]);
    });
}

// perintah aktifin cek lokasi
function userLocation() {
  if (!navigator.geolocation) {
    alert("Browser anda tidak mendukung akses lokasi!");
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

//lokasi gagal di akses
function error() {
  alert("Akes lokasi di tolak !");
}

//lokasi berhasil di akses
function success(position) {
  prayerTimes(position.coords.latitude, position.coords.longitude);
}

//halaman index
function index() {
  let app = document.getElementById("app");
  let h3 = document.createElement("h3");
  h3.innerHTML = "Prayer Times";

  app.appendChild(h3);

  //pemanggilan function lokasi
  userLocation();
}

index();
