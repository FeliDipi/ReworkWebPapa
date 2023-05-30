const HomeAnimation = ()=>
{
    //Home Gallery
    const $homeImg1 = document.querySelector("#Home-Img-1");
    const $homeImg2 = document.querySelector("#Home-Img-2");

    var t = gsap.timeline({repeat:-1,ease:"Power3.InOut"});
    t.set([$homeImg1,$homeImg2],{x:"100%"});
    t.to($homeImg1,{
        x:0,
        duration:1,
        delay:2
    });
    t.to($homeImg2,{
        x:0,
        duration:1,
        delay:2
    });
}

export default HomeAnimation;