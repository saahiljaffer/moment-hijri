const momentHijri = require("./moment-hijri");

const years = ["1444"];

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

dates = [
  { year: 2024, month: 7, date: 7 },
  { year: 2024, month: 8, date: 6 },
  { year: 2024, month: 9, date: 5 },
  { year: 2024, month: 10, date: 5 },
  { year: 2024, month: 11, date: 3 },
  { year: 2024, month: 12, date: 3 },
  { year: 2025, month: 1, date: 2 },
  { year: 2025, month: 1, date: 31 },
  { year: 2025, month: 3, date: 1 },
  { year: 2025, month: 3, date: 30 },
  { year: 2025, month: 4, date: 29 },
  { year: 2025, month: 5, date: 28 },
];
jdn = [];

dates.forEach(function (date) {
  jdn.push(g2d(date.year, date.month, date.date));
});

console.log(jdn);
