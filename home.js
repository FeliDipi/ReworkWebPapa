const HomeAnimation = ()=>
{
    //Home Gallery
    const $homeGalleryImgs = document.querySelectorAll(".Home-Gallery-Img");

    var t = gsap.timeline({repeat:true,ease:"Power3.InOut"});
    t.to($homeGalleryImgs[3],{
        opacity:0,
        duration:2,
        delay:4
    });
    t.to($homeGalleryImgs[2],{
        opacity:0,
        duration:2,
        delay:4
    });
}

export default HomeAnimation;