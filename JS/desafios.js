
function inicializarDesafio( formularioDesafio, respuestaCorrecta, mensajeFelicidades){
    let desafioElement = document.querySelector(`.${formularioDesafio}`);

    desafioElement.addEventListener('submit', (e) => {
        e.preventDefault();

        let respuesta = desafioElement.querySelector('input[name="respuesta"]').value.trim().toLowerCase();
        if (respuesta === respuestaCorrecta) {

            let felicidadesContainer = document.createElement('div');
            felicidadesContainer.style.position = 'fixed';
            felicidadesContainer.style.top = '40%';
            felicidadesContainer.style.width = '100%';
            felicidadesContainer.style.textAlign = 'center';
            felicidadesContainer.style.backgroundColor = 'rgba(102, 210, 102, 1)';
            felicidadesContainer.style.color = 'white';
            felicidadesContainer.style.padding = '20px';
            felicidadesContainer.style.zIndex = '1000';

            let felicidadesImage = document.createElement('img');
            felicidadesImage.src = '../imgs/acierto.jpg';
            felicidadesImage.alt = '¡Felicidades!';
            felicidadesImage.style.width = '300px';
            felicidadesImage.style.marginBottom = '10px';

            let felicidadesMessage = document.createElement('p');
            felicidadesMessage.textContent = mensajeFelicidades;
            felicidadesMessage.style.fontSize = '20px';

            felicidadesContainer.appendChild(felicidadesImage);
            felicidadesContainer.appendChild(felicidadesMessage);
            document.body.appendChild(felicidadesContainer);

            // Quitar el mensaje después de 5 segundos
            setTimeout(() => {
                felicidadesContainer.remove();
            }, 5000);
        } else {
            // Mostrar mensaje de error
            let errorContainer = document.createElement('div');
            errorContainer.style.position = 'fixed';
            errorContainer.style.top = '40%';
            errorContainer.style.width = '100%';
            errorContainer.style.textAlign = 'center';
            errorContainer.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
            errorContainer.style.color = 'white';
            errorContainer.style.padding = '20px';
            errorContainer.style.zIndex = '1000';

            let errorImage = document.createElement('img');
            errorImage.src = '../imgs/error.jpg';
            errorImage.alt = 'Te has equivocado';
            errorImage.style.width = '300px';
            errorImage.style.marginBottom = '10px';

            let errorMessage = document.createElement('p');
            errorMessage.textContent = 'Te has equivocado, intenta de nuevo';
            errorMessage.style.fontSize = '20px';

            errorContainer.appendChild(errorImage);
            errorContainer.appendChild(errorMessage);
            document.body.appendChild(errorContainer);

            // Recargar la página después de 5 segundos
            setTimeout(() => {
                errorContainer.remove();
            }, 5000);
        }
    });
}

