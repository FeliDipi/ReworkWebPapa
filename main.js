import CotaAnimations from "./src/Js/cota.js";
import NavBarAnimations from "./src/Js/navBar.js";
import ScrollBehaviour from "./src/Js/scroll.js";
import Home from "./src/Js/home.js";
import KnowMe from "./src/Js/knowMe.js";
import Experience from "./src/Js/experience.js";
import Works from "./src/Js/works.js";
import Reveal from "./src/Js/reveal.js";
import OnSelectionController from "./src/Js/mobileMenu.js";

const Main = ()=>
{
    //General scripts
    CotaAnimations();
    NavBarAnimations();
    ScrollBehaviour();

    //Section scripts
    Home();
    KnowMe();
    Experience();
    Works();
}

Reveal();
OnSelectionController();

//evento que se invoca cada vez que el usuario scrollea y actualiza los menu mobile e indicadores
window.onscroll = ()=>
{
    Reveal();
    OnSelectionController();
};

window.onload = Main;