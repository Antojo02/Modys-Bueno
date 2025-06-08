
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

    