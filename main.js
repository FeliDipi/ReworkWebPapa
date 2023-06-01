import CotaAnimations from "./src/Js/cota.js";
import NavBarAnimations from "./src/Js/navBar.js";
import ScrollBehaviour from "./src/Js/scroll.js";
import Home from "./src/Js/home.js";
import KnowMe from "./src/Js/knowMe.js";
import Experience from "./src/Js/experience.js";
import Works from "./src/Js/works.js";

const mainAnimations = ()=>
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
    
window.onload = mainAnimations;