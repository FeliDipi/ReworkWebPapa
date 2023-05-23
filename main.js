import CotaAnimations from "./cota.js";
import NavBarAnimations from "./navBar.js";
import HomeAnimation from "./home.js";

const mainAnimations = ()=>
{
    CotaAnimations();
    NavBarAnimations();
    HomeAnimation();

    // Obtener todos los enlaces de navegación
    const navLinks = document.querySelectorAll('.NavBar-Button a');

    // Agregar evento click a cada enlace
    navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
    });

    // Función para desplazarse suavemente hasta la sección
    function scrollToSection(e) 
    {
        e.preventDefault();

        const targetId = this.getAttribute('href'); // Obtener el atributo href del enlace
        const targetElement = document.querySelector(targetId); // Obtener el elemento de destino usando el ID

        // Calcular la distancia desde el elemento actual hasta la parte superior de la página
        const offsetTop = targetElement.offsetTop - 125;

        // Utilizar el método 'scrollTo' para desplazarse suavemente hasta la sección
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}
    
window.onload = mainAnimations;