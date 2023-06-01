const KnowMe = () =>
{
    const $aptitudesContent = document.querySelector("#KnowMe-Aptitudes");
    
    for(let i=0;i<3;i++) 
    {
        var newSlide = document.querySelector(".KnowMe-Slider").cloneNode(true);
        $aptitudesContent.appendChild(newSlide);
    }
}

export default KnowMe;