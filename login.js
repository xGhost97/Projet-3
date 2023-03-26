document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // empêcher la soumission par défaut du formulaire

    // récupérer les données du formulaire
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // vérifier les données utilisateur et mot de passe
    if (username === "utilisateur" && password === "motdepasse") {
        // rediriger l'utilisateur vers la page d'accueil
        window.location.href = "page-d-accueil.html";
    } else {
        // afficher un message d'erreur
        document.getElementById("errorMessage").style.display = "block";
    }
});
