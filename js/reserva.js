
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