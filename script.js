document.getElementById("calculer").addEventListener("click", function() {
    var montant = parseFloat(document.getElementById("montant").value);
    var duree = parseInt(document.getElementById("duree").value);
    var taux = parseFloat(document.getElementById("taux").value);

    if (isNaN(montant) || isNaN(duree) || isNaN(taux)) {
        document.getElementById("resultat").innerHTML = "Veuillez remplir tous les champs correctement.";
    } else {
        var tauxMensuel = taux / 12 / 100;
        var mensualite = (montant * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -duree));
        document.getElementById("resultat").innerHTML = "Mensualité : " + mensualite.toFixed(2) + " €";
    }
});
