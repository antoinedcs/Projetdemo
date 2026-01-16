//
// récuperation des elements du DOM
const moninput = document.getElementById("moninput");
const monbouton = document.getElementById("monbouton");

const moninput2 = document.getElementById("moninput");
const monbouton2 = document.getElementById("monbouton2");

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

monbouton2.addEventListener('click', () => {
    // envoi d'une requete fetch en POST vers /register
    fetch('/clique', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputValue: moninput2.value })
    })
    .then(response => response.json())
    .then(
        JsonResponse => {
            document.getElementById('response').innerHTML = JsonResponse.cle1;
        }
    );
});

fetch('/clique') .then(response => response.json()) .then(data => alert(data.cle1));
