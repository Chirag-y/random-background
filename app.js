const a = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function alpha() {
  let ab = Math.floor(Math.random() * a.length);
  return ab;
}
console.log(alpha());
const button = document.querySelector(".button");
const color = document.querySelector(".color");
button.addEventListener("click", function color() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += a[alpha()];
  }
  console.log(hex);
  document.querySelector(".color").innerHTML = hex;
  document.querySelector("body").style.backgroundColor = hex;
  return hex;
});
