var input_utente = 0;
var array = [];
var index = 0;

for (var i = 0; i < 6; ++i) {
  input_utente = parseInt(prompt("Inserisci un numero"));
  if (input_utente % 2 != 0) {
    array[index] = input_utente;
    ++index;
  }
}
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
