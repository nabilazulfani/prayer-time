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
  console.log(position);
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
