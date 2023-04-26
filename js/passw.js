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









// esempio

function changeBackground() {
    // The working function for changing background color.
    document.bgColor = document.getElementById("mio_id").value;
    document.bgColor = document.getElementById("submitColor").value;

    // The code I'd like to use for changing the text simultaneously - however it does not work.
    document.getElementById("mio_id").style.color = document.getElementById("color").value;
    document.getElementById("submitColor").style.color = document.getElementById("color").value;
}