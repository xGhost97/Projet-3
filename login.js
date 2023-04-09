const myForm = document.querySelector("#myForm");
myForm.addEventListener("submit", function(event) { 
    event.preventDefault(); 

    const email = event.target.querySelector("[name=email]").value;
    const password = event.target.querySelector("[name=password]").value;

    fetch ("http://localhost:5678/api/users/login", { 
        method : "POST",
        headers:{ 
            Authorization : "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    // Le message d'erreur qui doit s'afficher
    .then((res) => {
        if (!res.ok) {
            throw new Error("Erreur dans l'identifiant ou le mot de passe");
        }
        return res.json();
    })
    .then((data) => {
        // Rediriger vers la page du site avec des boutons d'actions pour éditer le site
        window.location.href = "index.html";
    })
    .catch((error) => {
        // Afficher le message d'erreur
        console.error(error);
        alert(error.message);
    });
});
