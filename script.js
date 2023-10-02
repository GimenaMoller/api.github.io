document.addEventListener("DOMContentLoaded", () => {
    const dogImagesContainer = document.getElementById("dog-images-container");
    const getDogsBtn = document.getElementById("get-dogs-btn");

    function cargarImagenesDePerros() {
        const numberOfDogs = 10; 

        fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
            .then((response) => response.json())
            .then((data) => {
                const dogImages = data.message;

                
                dogImagesContainer.innerHTML = "";

                
                dogImages.forEach((imageUrl) => {
                    const img = document.createElement("img");
                    img.src = imageUrl;
                    img.alt = "Perror";
                    dogImagesContainer.appendChild(img);
                });
            })
            .catch((error) => {
                console.error("Error al cargar las imágenes de perros:", error);
            });
    }

    cargarImagenesDePerros();

    // Agrega un evento de clic al botón para recargar las imágenes
    getDogsBtn.addEventListener("click", cargarImagenesDePerros);
});
