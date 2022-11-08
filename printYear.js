const momentHijri = require("./moment-hijri");

const years = ["1445"];

function div(a, b) {
  return ~~(a / b);
}

function mod(a, b) {
  return a - ~~(a / b) * b;
}

function g2d(gy, gm, gd) {
  var d =
    div((gy + div(gm - 8, 6) + 100100) * 1461, 4) +
    div(153 * mod(gm + 9, 12) + 2, 5) +
    gd -
    34840408;
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
  return d - 2400000;
}

for (let x = 0; x < years.length; x++) {
  for (let i = 1; i <= 12; i++) {
    console.log(momentHijri(`${years[x]}/${i}/1`, "iYYYY/iM/iD").toString());
  }
}
