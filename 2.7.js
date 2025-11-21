let n = prompt("Combien de nombres veux-tu entrer ?");
n = Number(n);

let somme = 0;
let i = 1;

while (i <= n) {
    let nb = prompt("Entre le nombre n°" + i + " :");
    somme = somme + Number(nb);
    i = i + 1;
}

alert("La somme totale est : " + somme);
console.log("Somme finale =", somme);