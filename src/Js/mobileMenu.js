const $mobileButtons = document.querySelectorAll(".Mobile-Button");
const $sections = document.querySelectorAll('.Section');//todas las secciones
const windowHeight = window.innerHeight;
var scrollTop = 0;

//controla cuanto scrolleo el usuario y averigua la actual seccion para actualizar 
const OnSelectionController = () =>
{
    scrollTop = window.scrollY;

    $sections.forEach((section,i)=>{
        if(section.offsetTop<(scrollTop+windowHeight/2) && scrollTop<(section.offsetTop+windowHeight/2)) 
        {
            ResetSelection();//resetea todas las secciones a no seleccionadas
            $mobileButtons[i].classList.add('Active');//selecciona la actual
        }
    });
}

const ResetSelection = () => 
{
    $mobileButtons.forEach(btn=>btn.classList.remove("Active"));
}

export default OnSelectionController;