//
// Récupération des éléments du DOM
const monInput = document.getElementById('monInput');
const monInput2 = document.getElementById('monInput2');
const monBouton = document.getElementById('monBouton');
const monBouton2 = document.getElementById('monBouton2');
const userSelectedButton = document.getElementById('userSelectedButton');
 
// Ajout d'un écouteur d'événement sur le deuxième bouton
monBouton2.addEventListener('click', () => {
    fetch('/info').then(
        response => response.json()
    ).then(
        JsonResponse =>     {
            document.getElementById('reponse').innerHTML = JsonResponse.cle1;
        }    
    );   
}); 

// Ajout d'un écouteur d'événement sur le bouton
monBouton.addEventListener('click', () => {
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: monInput.value , password: monInput2.value })     
    }).then(response => response.text())
      .then(data => {
          alert(data);
      });
});

userSelectedButton.addEventListener('click', () => {
    const usersList = document.getElementById('usersList');
    const selectedUserId = usersList.value;
    alert('L\'ID de l\'utilisateur sélectionné est : ' + selectedUserId);
    fetch('/vote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId : selectedUserId })     
    }).then(response => response.text())
      .then(data => {
          alert(data);
      });


});


window.onload = () => {
    fetch('/users')
    .then(response => response.json())
    .then(users => {
        const usersList = document.getElementById('usersList');
        users.forEach(user => {
            //création d'un input select option avec id en value et login en texte
            const option = document.createElement('option');
            option.value = user.id;
            option.text = user.login;
            usersList.appendChild(option);
        });
    });
    
    fetch('/stats')
    .then(response => response.json())
    .then(stats => {
        const statsBody = document.getElementById('statsBody');
        stats.sort((a, b) => b.nbVotes - a.nbVotes);
        stats.forEach(stat => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${stat.login}</td><td>${stat.nbVotes}</td>`;
            statsBody.appendChild(row);
        });
    });
};