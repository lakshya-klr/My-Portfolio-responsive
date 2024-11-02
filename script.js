
function openbubble(){
    window.open("https://lakshya-klr.github.io/Bubble-Game-js/");   
}
function opencalc(){
    window.open("https://lakshya-klr.github.io/Calculator-Prototype/");
}
function opensqr(){
    window.open("https://lakshya-klr.github.io/Calculator-Prototype/");
}
function opentodo(){
    window.open("https://lakshya-klr.github.io/TO-DO-LIST/");
}

function openport(){
    window.open("https://lakshya-klr.github.io/My-Portfolio-responsive/");
}


function openmir(){
    window.open("https://lakshya-klr.github.io/Static-Miranda-Paper-Portfolio/");
}
function opencokeui(){
    window.open("https://www.figma.com/proto/1OwNMXSsD3vbaQNNRM9WMs/THE-COKE-PROJECT?node-id=0-1&t=TVrBifZr2KrtVOcm-1");
}
function opensnkr(){
    window.open("https://www.figma.com/proto/c3d70XVVliL8HPXYksqxzH/SNKR-SHOP?node-id=0-1&t=en36EpubJRuEZ8c1-1");
}
function openwfportf(){
    window.open("https://www.figma.com/design/PxU949xBSslWKCF51PjiMS/PORTFOLIO-WIREFRAME?node-id=0-1&t=Votyyrt5q0kfohhq-1");
}
function openwf(){
    window.open("https://www.figma.com/design/4E6JoN0Ec1qvrYdjQswYiH/Untitled?node-id=0-1&t=dC8bc9XJFRAl5H9B-1");
}
function openuii(){
    window.open("https://www.figma.com/design/2EDv5aMM4ql4tU025JkIRI/ASSIGMENT-HOMEPAGE?node-id=0-1&t=cLF8tpZXBHAa8Cxp-1");
}
function openarogya(){
    window.open("https://www.figma.com/design/0KVkOkaB9WPj0Gjhn3HcGQ/Untitled?node-id=0-1&t=sB4FErxMMdmAkCls-1");
}
function opencoffee(){
    window.open("https://www.figma.com/design/x9CmAzOJfVlGr1r0E8uffH/COFFEE-PORTFOLIO?node-id=0-1&t=0GRnt3iCtNHCWC49-1");
}
function openspotify(){
    window.open("https://lakshya-klr.github.io/Spotify-STATIC/");
}
function openinsta(){
    window.open("https://www.instagram.com/_.laksh._13?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==");
}
function openpint(){
    window.open("https://lakshya-klr.github.io/Pinterest-Clone/");
}
//for lets connect i.e fifthhero
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
            else{
                // entry.target.classList.remove('show');
            }
    });
});
const hiddenelements = document.querySelectorAll('.hidden');
hiddenelements.forEach((el)=>observer.observe(el));
////
// // for secondhero i.e divisions
// const secobserver=new IntersectionObserver((objects)=>{
//     objects.forEach((object)=>{
//         if(object.isIntersecting){
//             object.target.classList.add('show');
//         }
//         else{
//             object.target.classList.remove('show');
//         }
//     });
// });
// const dividedobjects = document.querySelectorAll('.division');
// dividedobjects.forEach((ab)=>secobserver.observe(ab));


//
var closer=document.getElementById('closer');
var chotamenu=document.getElementById('minimummenu');
var menuicon=document.getElementById('okay');
var openig=document.getElementById('instu');
var twitterme=document.getElementById('twitterme');
var githubme=document.getElementById('githubme');
var linkedinme=document.getElementById('linkedinme');
var openmailagain=document.getElementById('mailme');
var talkonmail=document.getElementById('talk');
var footanimator=document.getElementById('herofooter');
var secondary=document.getElementById('sec');
var echfour=document.getElementById('hoverme');
var menubutton=document.getElementById('menubutton');
var sidebar=document.getElementById('sidebar');
var navbar=document.getElementById('nav');
var heading=document.getElementById('boundingelem');
var head2=document.getElementById('boundingelem2');
var lowhead1=document.getElementById('boundingelem3');
var navo=document.getElementById('nav');
var projectselect = document.getElementById('cocacola');
var displayer=document.getElementById('displayer');

function mailopen(){
    window.open("https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZcQxmkXWXvmpqWcNDbcWqclSBfGdTZHqSLBjpQPPmbhjPgkwZrvbftcstwwwQrGPQkXqB");
}
function openlinkedin(){
    window.open("https://www.linkedin.com/in/lakshya-kalra-397332236/");
}
function openuip(){
    window.open("https://lakshya-klr.github.io/UI-portfolio/");
}
function openhs(){
    window.open("https://harshitsoni.netlify.app/");
}
function menu(){
    menubutton.style.transition = "ease 1s";
    sidebar.style.transition = "2s ease";
    menubutton.style.transform="translate(8px,-20px)";  
    
    menubutton.style.right="40px";
    menubutton.style.fontSize="x-small";
    sidebar.style.width="40%";
    sidebar.style.backgroundColor="transparent";
    sidebar.style.fontSize="medium";
    sidebar.style.display="flex";
    sidebar.style.transition="ease 0.8s";
    sidebar.style.justifyContent="space-between";
    sidebar.style.transform="translateY(1px)";
    sidebar.style.right="30px";

}
function navhov(){
    sidebar.style.width="6.9%";
    sidebar.style.letterSpacing="-2px";
    sidebar.style.fontSize="2px";
    sidebar.style.right='50px';
    sidebar.style.transition='1s ease';
    sidebar.style.backgroundColor="white";
    menubutton.style.fontSize='large';
    menubutton.style.transform="translateY(0px)"; 
    menubutton.style.transform="translateX(0px)"; 
    sidebar.style.transform='translate(8px,12px)';


}
function circlefollowup(){
    window.addEventListener("mousemove",function(dets){
        // console.log(dets);
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
        

    })
}
function headinganimation(){
    heading.style.transform="translateY(0%)";

    lowhead1.style.transform="translateY(0%)";
    lowhead1.style.opacity='1';
    footanimator.style.opacity='1';
    head2.style.transform="translateY(0%)";
    navo.style.transform="translateY(0%)";
    secondary.style.transform="translateY(0%)";
    // headbottom.style.transform="translateY(0%)";
    

}


  function displayed(){
    // displayer.style.background="url(https://images.unsplash.com/photo-1535990379313-5cd271a2da2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29jYSUyMGNvbGF8ZW58MHx8MHx8fDA%3D)";
    displayer.style.objectFit="cover";
    // // echfour.innerText='THE COKE PROJECT';
    // echfour.style.margin='auto';
    // echfour.style.padding='0';
    // echfour.style.textAlign='center';
    // echfour.style.paddingTop='10px';
}
function opengithub(){
    window.open("https://github.com/lakshya-klr");
}
function opentwitter(){
    window.open("https://twitter.com/LakshyaKlr");
}
function igopen(){
    window.open("https://www.instagram.com/_.laksh._13/");
}
function minmenu() {
    if (window.innerWidth <= 600) {
        // Execute specific function for screens with max-width 600px
        minwclicked();
        sidebar.addEventListener("click",minimumenu);
        closer.addEventListener('click',closeminmenu);
    } else {

    }
}

function minwclicked() {

    console.log("Function for screens with max-width 600px");
    menubutton.innerText='';
    sidebar.style.width='7vw';
    sidebar.style.transform='translateY(-0.1vh)';
    sidebar.style.position='absolute';
    sidebar.style.right='4vw';
    sidebar.style.height='3vh';
    menuicon.style.opacity='0';
}
function minimumenu(){
    chotamenu.style.filter='blur(0)';
    chotamenu.style.transform='translateX(0%)';
    
    chotamenu.style.display='inline';
    


    
}
function closeminmenu(){
    chotamenu.style.transform='translateX(130%)';
    chotamenu.style.display='none';

}
minmenu();



openig.addEventListener("click",igopen);
projectselect.addEventListener("mouseenter",displayed);
menubutton.addEventListener("click",menu);
navbar.addEventListener("mouseleave",navhov);
talkonmail.addEventListener("click",mailopen);
openmailagain.addEventListener("click",mailopen);
linkedinme.addEventListener("click",openlinkedin);
githubme.addEventListener("click",opengithub);
twitterme.addEventListener("click",opentwitter);
circlefollowup();
headinganimation();
function openmygit(){
    window.open("https://github.com/lakshya-klr");
}
