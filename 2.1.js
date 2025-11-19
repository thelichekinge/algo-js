// Demande l'âge à la personne et affiche la réponse selon le résultat
let ageInput = prompt('Veuillez entrer votre âge :');

if (ageInput === null) {
    // La personne n'a pas souhaité répondre
    console.log("Entrée annulée par l'utilisateur.");
} else {
    let age = parseInt(ageInput, 10);   
    
    if (Number.isNaN(age)) {
        console.log('Entrée non valide — veuillez entrer un nombre.');
    } else if (age >= 18) {
        console.log('Vous êtes un adulte (ou peut-être pas)');
    } else {
        console.log("Vous n'êtes pas encore un adulte (mais c'est pour bientôt)");
    }
}

