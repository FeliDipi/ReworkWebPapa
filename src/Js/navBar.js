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

    const $mobileMenuBtn = document.querySelector("#NavBar-Button-Menu");
    const $lineTop = document.querySelector(".LineTop");
    const $lineMid = document.querySelector(".LineMid");
    const $lineBottom = document.querySelector(".LineBottom");

    const $mobileMenu = document.querySelector(".Mobile-Menu");

    let d = 0.2;
    let menuOpen = false;

    $mobileMenuBtn.addEventListener("click",()=>
    {
        if(!menuOpen)
        {
            menuOpen=true;
            gsap.to($mobileMenu,{
                duration:d,
                ease:"Power3.InOut",
                left:"0%",
            });
            gsap.to($lineTop,{
                duration:d,
                ease:"Power3.InOut",
                top:"30px",
                rotateZ:"45deg",
                backgroundColor:"#FEC207"
            });
            gsap.to($lineMid,{
                duration:d,
                ease:"Power3.InOut",
                opacity:0
            });
            gsap.to($lineBottom,{
                duration:d,
                ease:"Power3.InOut",
                top:"30px",
                rotateZ:"-45deg",
                backgroundColor:"#FEC207"
            });
        }
        else
        {
            menuOpen=false;
            gsap.to($mobileMenu,{
                duration:d,
                ease:"Power3.InOut",
                left:"100%",
            });
            gsap.to($lineTop,{
                duration:d,
                ease:"Power3.InOut",
                top:"15px",
                rotateZ:"0deg",
                backgroundColor:"#1E272E"
            });
            gsap.to($lineMid,{
                duration:d,
                ease:"Power3.InOut",
                opacity:1
            });
            gsap.to($lineBottom,{
                duration:d,
                ease:"Power3.InOut",
                top:"45px",
                rotateZ:"0deg",
                backgroundColor:"#1E272E"
            });
        }
    })
}

export default NavBarAnimations;