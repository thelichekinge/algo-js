let input;
while (true) {
    input = prompt('Quel est votre nombre préféré ?');
    if (input !== null) {
        input = input.trim();
    }

    if (input === '42') {
        console.log('Vous avez choisi 42 — fin du programme.');
        break;
    }

    console.log('Are you sure?');
}
