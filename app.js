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
      let data = response.data[today].timings;

      // membuat element table pada html
      let app = document.getElementById("app");
      let table = document.createElement("table");
      let tableTbody = document.createElement("tbody");

      //menampilkan data API pada table

      for (i in data) {
        let row = tableTbody.insertRow();
        let name = row.insertCell(0);
        let time = row.insertCell(1);
        name.innerHTML = i;
        time.innerHTML = data[i];
        tableTbody.appendChild(row);
      }

      table.appendChild(tableTbody);
      app.appendChild(table);
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
