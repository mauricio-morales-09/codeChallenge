document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("registroForm");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        const data = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento
        };

        // Realiza la solicitud POST utilizando fetch
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta del servidor:", data);
            alert("Registro exitoso. Datos enviados al servidor.");
        })
        .catch(error => {
            console.error("Error al enviar los datos:", error);
            alert("Ocurrió un error al enviar los datos.");
        });
    });
});
