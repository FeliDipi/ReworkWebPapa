const NavBarAnimations = ()=>
{
    //Logo
    const $logoTitle = document.querySelector("#NavBar-Logo-Title");

    gsap.to($logoTitle,{
        delay:0.5,
        duration:1,
        x:"0%",
        opacity:1,
        ease:"Power3.InOut"
    }); 

    //Social Buttons
    const $socialBtns = document.querySelectorAll(".Social-Button");

    $socialBtns.forEach(btn=>
        {
            btn.addEventListener("mouseover",()=>{
                gsap.to(btn,{
                    duration:0.25,
                    scale:1.2,
                    ease:"Power3.InOut"
                });
            });

            btn.addEventListener("mouseout",()=>{
                gsap.to(btn,{
                    duration:0.25,
                    scale:1,
                    ease:"Power3.InOut"
                });
            });
        });
}

export default NavBarAnimations;