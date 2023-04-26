//  Chiedi all’utente il suo nome, 
// poi chiedi il suo cognome,
//  poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21 





let nomeUtente = prompt("Inserisci il tuo nome");
console.log(nomeUtente);



let cognomeUtente = prompt("Inserisci il tuo cognome");
console.log(cognomeUtente);



let coloreUtente = prompt("Inserisci il tuo colore preferito");
console.log(coloreUtente);



document.getElementById("mio_id").innerHTML = nomeUtente + cognomeUtente + coloreUtente + 24;