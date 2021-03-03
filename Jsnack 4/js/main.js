var nomi_invitati = ["Luke", "Van", "Else"];
var nome_utente = prompt("Come ti chiami?");
var controllo = false;

for (var i = 0; i < nomi_invitati.length; ++i) {
  if (nomi_invitati[i] == nome_utente) {
    controllo = true;
    break;
  }
}
if (controllo) {
  console.log("Benvenuto!")
} else {
  console.log("Spiacente. Non sei nella lista.")
}
