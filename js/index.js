
    const tituloPrincipal = document.getElementById('titulo-principal');
    const texto = tituloPrincipal.textContent;
    tituloPrincipal.textContent = ''; // Limpia el texto inicial

    let i = 0;
    function escribir() {
        if (i < texto.length) {
            tituloPrincipal.textContent += texto.charAt(i);
            i++;
            setTimeout(escribir, 50); // Velocidad de escritura (ajusta este valor)
        } else {
            tituloPrincipal.classList.add('typing-cursor'); // Añade el cursor al final
        }
    }

    document.addEventListener('DOMContentLoaded', escribir);


    //PERSONAL 
    const personalCards = document.querySelectorAll('.personal-card');
const modal = document.getElementById('personal-modal');
const modalClose = document.querySelector('.personal-modal-close');
const modalImg = document.querySelector('.personal-modal-img');
const modalTitle = document.querySelector('.personal-modal-title');
const modalDescription = document.querySelector('.personal-modal-description');

function openModal(index) {
    const descriptionContent = document.querySelectorAll('.personal-modal-description-content')[index].innerHTML;
    modalImg.src = personalCards[index].querySelector('img').src;
    modalTitle.textContent = personalCards[index].querySelector('.card-title').textContent;
    modalDescription.innerHTML = descriptionContent;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

personalCards.forEach(card => {
    card.addEventListener('click', function() {
        const index = parseInt(this.dataset.index);
        openModal(index);
    });
});

modalClose.addEventListener('click', closeModal);

//RESERVA


//PARA Q SE VEAN LOS ERRORES DE VALIDACIÓN EN EL FORMULARIO O CORRECTAMENTE
(() => {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
                form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')

                    if (form.checkValidity()) {
                        event.preventDefault(); // Evita la recarga de la página al enviar el formulario válido

                        const nombre = document.getElementById('nombre').value;
                        const servicio = document.getElementById('servicio').value;
                        const fecha = document.getElementById('fecha').value;
                        const hora = document.getElementById('hora').value;

                        const confirmacion = document.getElementById('confirmacion');
                        confirmacion.classList.remove('d-none');
                        confirmacion.innerHTML = `¡Gracias, <strong>${nombre}</strong>! Tu cita para <strong>${servicio}</strong> el día <strong>${fecha}</strong> a las <strong>${hora}</strong> ha sido reservada.`;

                        form.reset();
                        form.classList.remove('was-validated'); // Limpia los estilos de validación después del envío exitoso
                    }
                }, false)
            })
        })()


    
// MAS RESPONSIVE
(() => {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
                form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')

                    if (form.checkValidity()) {
                        event.preventDefault(); // Evita la recarga de la página al enviar el formulario válido

                        const nombre = document.getElementById('nombre').value;
                        const servicio = document.getElementById('servicio').value;
                        const fecha = document.getElementById('fecha').value;
                        const hora = document.getElementById('hora').value;

                        const confirmacion = document.getElementById('confirmacion');
                        confirmacion.classList.remove('d-none');
                        confirmacion.innerHTML = `¡Gracias, <strong>${nombre}</strong>! Tu cita para <strong>${servicio}</strong> el día <strong>${fecha}</strong> a las <strong>${hora}</strong> ha sido reservada.`;

                        form.reset();
                        form.classList.remove('was-validated'); // Limpia los estilos de validación después del envío exitoso
                    }
                }, false)
            })
        })()
    //CONTACTO
     