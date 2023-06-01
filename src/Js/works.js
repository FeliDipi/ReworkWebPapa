const Works = () =>
{
    const $worksContent = document.querySelector("#Works-Companies");
    
    for(let i=0;i<5;i++) 
    {
        var newSlide = document.querySelector(".Works-Slider").cloneNode(true);
        $worksContent.appendChild(newSlide);
    }

    var swiper = new Swiper(".Works-Gallery-Content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide:"true",
        fade:"true",
        grabCursor:"true",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets:true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            200: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
        }
      });
}

export default Works;