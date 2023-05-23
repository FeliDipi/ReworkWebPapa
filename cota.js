const CotaAnimations = ()=>
{
    const btns = document.querySelectorAll(".NavBar-Button");
    var d = 0.25;
    
    btns.forEach(b=>{
    
        const btn = b.querySelector("a");
        const cota = b.querySelector(".Cota");
        const cotaTxt = b.querySelector(".Cota-Text");
    
        let tIn = null;
        let tOut = null;
    
        btn.addEventListener("mouseover",()=>
        {
            if(tOut) tOut.pause();
    
            tIn = gsap.timeline({ease:"Power3.InOut"});
            tIn.to(btn,{
                color:"#FFF",
                y:"50px",
                duration:d,
                onStart:()=>
                {
                    gsap.to(b,{
                        height:"150px",
                        backgroundColor:"#FEC207",
                        duration:d
                    })
                }
            });
            tIn.to(cota,{
                width:"80%",
                opacity:1,
                duration:d/2
            });
            tIn.to(cotaTxt,{
                y:"0.5%",
                opacity:1,
                duration:d/2
            });
        }); 
    
        btn.addEventListener("mouseout",()=>{
    
            if(tIn) tIn.pause();
    
            tOut = gsap.timeline({ease:"Power3.InOut"});
            tOut.to(cotaTxt,{
                opacity:0,
                y:"0%",
                duration:d/2
            });
            tOut.to(cota,{
                width:"15%",
                opacity:0,
                duration:d/2
            });
            tOut.to(btn,{
                color:"#182025",
                y:"0%",
                duration:d,
                onStart:()=>
                {
                    gsap.to(b,{
                        height:"60px",
                        backgroundColor:"#FFFFFF00",
                        duration:d
                    })
                },
            });
        });
    });
}

export default CotaAnimations;