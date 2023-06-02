const Reveal = () =>
{
    const $reveals = document.querySelectorAll(".Reveal");
    
    for(let i=0;i<$reveals.length;i++)
    {
        var windowHeight = window.innerHeight;
        var revealTop = $reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        
        if(revealTop < windowHeight-revealPoint)
        {
            $reveals[i].classList.add("Reveal-Effect");
        }
        else
        {
            $reveals[i].classList.remove("Reveal-Effect");
        }
    }
}

export default Reveal;