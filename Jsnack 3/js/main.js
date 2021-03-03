var somma = 0;
for (var i = 0; i < 10; i++) {
  var user_output = parseInt(prompt("Dammi un numero"));
  if (isNaN(user_output) || user_output == null) {
    alert("Inserisci un numero e nient'altro!");
  }
  else {
    var numero = user_output;
    somma = somma + numero;
  }
}
console.log(somma);
