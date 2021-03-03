var N = parseInt(prompt("Dammi un numero"));
var max = 10;
var min = 1;
var intero = 0;

for (var i = 0; i < N; ++i) {
  intero = Math.floor(Math.random()*max + min);
  console.log("La potenza di " + intero + " e': " + Math.pow(intero, 3));
}
