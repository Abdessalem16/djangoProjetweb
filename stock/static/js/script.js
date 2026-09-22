
// Attendre le chargement de la page
document.addEventListener("DOMContentLoaded", function () {

    const tableau = document.querySelector(".table");

    if (!tableau) return;

    const lignes = tableau.querySelectorAll("tbody tr");

    // Compter les articles affichés
    let compteur = 0;

    lignes.forEach(function (ligne) {
        if (ligne.querySelectorAll("td").length > 0) {
            compteur++;
        }
    });

    // Ajouter un compteur au-dessus du tableau
    const info = document.createElement("p");

    info.textContent = "Nombre d'articles : " + compteur;
    info.style.textAlign = "center";
    info.style.fontWeight = "bold";
    info.style.color = "#475569";
    info.style.marginBottom = "15px";

    tableau.parentNode.insertBefore(info, tableau);

    // Colorer les soldes négatifs
    lignes.forEach(function (ligne) {

        const cellules = ligne.querySelectorAll("td");

        if (cellules.length === 5) {
            const solde = parseFloat(
                cellules[4].textContent.replace(",", ".")
            );

            if (!isNaN(solde) && solde < 0) {
                cellules[4].style.color = "#dc2626";
                cellules[4].style.fontWeight = "bold";
            }
        }
    });

});