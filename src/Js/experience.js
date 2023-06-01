const $expContent = document.querySelector("#Experience-TemporalLine");
const $expTrack = document.querySelector(".Experience-Track");
const $expText = document.querySelector("#Experience-Info-Text");
const $expCotaContent = document.querySelector(".Cota-Experience");
const $expCota = $expCotaContent.querySelector(".Cota");
const $expCotaText = $expCotaContent.querySelector(".Cota-Text");

for(let i=0;i<3;i++)
{
    var newTrack = $expTrack.cloneNode(true);
    $expContent.appendChild(newTrack);
}

var tracks = $expContent.children;
var percentIncrement = 100/$expTrack.children.length;

var d = 0.4;
var readDuration = 12;

const NextItem = (percent,index) =>
{
    if(index<0) index=$expTrack.children.length-1;

    var t = gsap.timeline({duration:d,ease:"Power3.InOut"});
    t.to(tracks,{
        x:`${percent}%`,
        onComplete:()=>
        {
            if(percent>100)
            {
                gsap.set(tracks,{x:`${percentIncrement}%`});
                percent = percentIncrement;
            }
        }
    });
    t.to(tracks[1].children[index],{
        scale:1.2,
        backgroundColor:"#E2E2E2"
    });
    t.to($expCota,{
        width:"100%",
        opacity:1
    });
    t.to($expCotaText,{
        onStart:()=>
        {
            let year = tracks[1].children[index].innerText;
            let title = tracks[1].children[index].dataset.title;

            $expCotaText.innerText = `${year} : "${title}"`;
        },
        y:"0.5%",
        opacity:1
    });
    t.to($expText,{
        opacity:1
    });
    t.to($expText,{
        delay:readDuration,
        opacity:0
    });
    t.to($expCotaText,{
        y:"100%",
        opacity:0
    });
    t.to($expCota,{
        width:"15%",
        opacity:0
    });
    t.to(tracks[1].children[index],{
        scale:1,
        backgroundColor:"#FEC207",
        onComplete:()=>{
            NextItem(percent+(percentIncrement*2),index-1);
        }
    });
}

const Experience = () =>
{
    percentIncrement/=2;
    gsap.set(tracks,{x:`${percentIncrement}%`});
    gsap.set($expText,{opacity:0});
    NextItem(percentIncrement,$expTrack.children.length-1);
}

export default Experience;