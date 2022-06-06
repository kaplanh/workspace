// **** BUTTONS  ****//

// Vintage Backbag

function arttir() {
  let sonuc = document.getElementById("sonuc1");
  sonuc.value = Number(sonuc.value) + 1;
  //
  document.getElementsByClassName("product-total1")[0].innerHTML =
    "Product Total:$" + Number(sonuc.value * 54.99).toFixed(2);
  //
}

function azalt() {
  let sonuc = document.getElementById("sonuc1");
  sonuc.value = Number(sonuc.value) - 1;
  //
  document.getElementsByClassName("product-total1")[0].innerHTML =
    "Product Total:$" + Number(sonuc.value * 54.99).toFixed(2);
  //
}

// Levi Shoes

function topla() {
  let sonuc = document.getElementById("sonuc2");
  sonuc.value = Number(sonuc.value) + 1;
  //
  document.getElementsByClassName("product-total2")[0].innerHTML =
    "Product Total: $" + Number(sonuc.value * 45.99).toFixed(2);
  //
}

function cıkar() {
  let sonuc = document.getElementById("sonuc2");
  sonuc.value = Number(sonuc.value) - 1;
  //

  document.getElementsByClassName("product-total2")[0].innerHTML =
    "Product Total: $" + Number(sonuc.value * 45.99).toFixed(2);
  //
}

// Antique Clock

function ekle() {
  let sonuc = document.getElementById("sonuc3");
  sonuc.value = Number(sonuc.value) + 1;
  //
  document.getElementsByClassName("product-total3")[0].innerHTML =
    "Product Total: $ " + Number(sonuc.value * 74.99).toFixed(2);
  //
}

function eksilt() {
  let sonuc = document.getElementById("sonuc3");
  sonuc.value = Number(sonuc.value) - 1;
  //
  document.getElementsByClassName("product-total3")[0].innerHTML =
    "Product Total: $" + Number(sonuc.value * 74.99).toFixed(2);
  //
}

// **** REMOVE *****//

const x = document.getElementsByClassName("remove")[0];
x.addEventListener(
  "click",
  () => (document.getElementsByClassName("bag")[0].style.display = "none")
);
const y = document.getElementsByClassName("remove1")[0];
y.addEventListener(
  "click",
  () => (document.getElementsByClassName("shoes")[0].style.display = "none")
);
const z = document.getElementsByClassName("remove2")[0];
z.addEventListener(
  "click",
  () => (document.getElementsByClassName("clock")[0].style.display = "none")
);
