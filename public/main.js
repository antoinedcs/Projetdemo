//
// récuperation des elements du DOM
const moninput = document.getElementById("moninput");
const monbouton = document.getElementById("monbouton");

// ajout d'un écouteur d'évènement sur le bouton
monbouton.addEventListener('click', () => {
    // envoi d'une requete fetch en POST vers /register
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputValue: moninput.value })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    });
});
