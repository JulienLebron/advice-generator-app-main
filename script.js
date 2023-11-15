// URL de l'API à interroger
const apiUrl = 'https://api.adviceslip.com/advice';
const adviceResult = document.getElementById('adviceText');
const adviceId = document.getElementById('adviceId');
const requestButton = document.getElementById('requestButton');


function effectuerRequete() {
    // Effectuer une requête GET à l'API en utilisant fetch
    fetch(apiUrl)
        .then(response => {
            // Vérifier si la requête a abouti avec succès (statut 200)
            if (!response.ok) {
                throw new Error('La requête a échoué');
            }
            // Analyser la réponse JSON
            return response.json();
        })
        .then(data => {
            // Manipuler les données reçues de l'API
            console.log(data); // Afficher les données dans la console par exemple
            // Faire d'autres opérations avec les données ici
            adviceId.textContent = JSON.stringify(data.slip.id);
            adviceResult.textContent = JSON.stringify(data.slip.advice);
        })
        .catch(error => {
            // Gérer les erreurs de requête
            console.error('Erreur lors de la requête:', error);
        });
}

requestButton.addEventListener('click', effectuerRequete);

effectuerRequete();