var numero_uno = prompt("Inserisci un numeri");
var numero_due = prompt("inserisci un altro numero");

if (numero_uno > numero_due) {
  console.log(numero_uno);
} else if (numero_due > numero_uno) {
  console.log(numero_due);
} else {
  console.log("numeri uguali, riprova.");
}
