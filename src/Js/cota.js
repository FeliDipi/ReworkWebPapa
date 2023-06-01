const CotaAnimations = ()=>
{
    const btns = document.querySelectorAll(".NavBar-Button");
    
    btns.forEach(b=>{
        let d = 0.25;
    
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

    const titles = document.querySelectorAll(".Cota-Titles");
    const cotas = [];
    const cotaTxts = [];

    var listInfo = [
        "Exelencia",
        "Compromiso",
        "Responsabilidad",
        "Experiencia"
    ]

    let infoIndex = 0;
    let d = 0.4;

    titles.forEach(t=>
        {
            cotas.push(t.querySelector(".Cota"));
            cotaTxts.push(t.querySelector(".Cota-Text"));
        });

    var t = gsap.timeline({ease:"Power3.InOut", repeat:-1});
    t.to(cotas,{
        delay:d*2,
        width:"100%",
        opacity:1,
        duration:d
    });
    t.to(cotaTxts,{
        onStart:()=>
        {
            cotaTxts.forEach(t=>{
                t.innerText = listInfo[infoIndex];
            });
        },
        y:"0.5%",
        opacity:1,
        duration:d
    });
    t.to(cotaTxts,{
        delay:d*4,
        y:"100%",
        opacity:0,
        duration:d
    });
    t.to(cotas,{
        width:"15%",
        opacity:0,
        duration:d,
        onComplete:()=>
        {
            infoIndex++;
            if(infoIndex>=listInfo.length) infoIndex = 0;
        }
    });
}

export default CotaAnimations;