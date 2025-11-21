var nombre = prompt("Entre un nombre entre 1 et 7 :");
nombre = Number(nombre);

var jours = ["", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

if (nombre >= 1 && nombre <= 7) {
    alert(nombre + " => " + jours[nombre]);
} else {
    alert("Il faut un nombre entre 1 et 7 !");
}