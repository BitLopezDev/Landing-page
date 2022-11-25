/*carouselPrevious
carouselNext

*/
window.addEventListener("load", cargadoDOMindex);
/*const carouselNext = document.getElementById('carouselNext');
const carouselPrevious = document.getElementById('carouselPrevious');
carouselPrevious.onclick = carouselpatch();
carouselNext.onclick = carouselpatch();*/

async function cargadoDOMindex(){
    
    let iFromWhileOnload = 0;
    var intervalId = window.setInterval(function(){
        // call your function here
        
        if (iFromWhileOnload > 30){
            clearInterval(intervalId);
        } else {
            cargarBadges();
        }
        ++iFromWhileOnload;
      }, 5321);
    
    /*
    do {
        setTimeout()
        
        ++iFromWhileOnload;
        
    } while (  iFromWhileOnload < 30);*/

  

    
}
//setTimeout(functionRef, delay, param1, param2)

function cargarBadges() {

    console.log('cargarBadges llamada');
    
    // document.getElementById('phpbadge').classList.add("active");
    const baseRoute = './Users/Santiago/credenciales/NextU/';
    const badgesObject = {
        phpOOP: {
            alt: `PHP OOP`,
            route: `PHP_OOP.png`,
        },
        css3: {
            alt: `CSS 3`,
            route: `CSS3.png`,
        },
        html5: {
            alt: `HTML 5`,
            route: `HTML5.png`,
        },
        javascript: {
            alt: `JavaScript`,
            route: `JavaScript.png`,
        },
        jQuery: {
            alt: `jQuery`,
            route: `jQuery_por_ejemplos.png`,
        },
        jQueryUI: {
            alt: `jQuery UI`,
            route: `jQuery_UI_-_Web.png`,
        },
        XML: {
            alt: `XML`,
            route: `XML.png`,
        },

    }
    const howmanybadges = 6; //first element is 0


    //console.log( Math.floor(Math.random() * 7));

    //console.log(badgesObject[Object.keys(badgesObject)[0]].route);
    var badge1Math = Math.floor(Math.random() * howmanybadges);
    //console.log(badge1Math);
    var badge1 = [badgesObject[Object.keys(badgesObject)[badge1Math]].route, badgesObject[Object.keys(badgesObject)[badge1Math]].alt];
    // console.log('1');
    // console.log(badge1);

    var badge2Math = Math.floor(Math.random() * howmanybadges);
    //console.log(badge2Math);
    
    badge2Math = badge1Math;
   // console.log(badge2Math);
    if (badge2Math === badge1Math) {
        badge2Math = ++badge2Math;
        console.log(badge2Math);
         var badge2 = [badgesObject[Object.keys(badgesObject)[badge2Math]].route, badgesObject[Object.keys(badgesObject)[badge2Math]].alt];
         console.log(badge2);
        // console.log('2');
        // console.log(badge2);



    } else {

        badge2 = [badgesObject[Object.keys(badgesObject)[badge2Math]].route, badgesObject[Object.keys(badgesObject)[badge2Math]].alt];
        // console.log('a');
        // console.log(badge2);

    }

    var badge3Math;

    var iFromWhile = 0;



    do {
        badge3Math = Math.floor(Math.random() * howmanybadges);
        ++iFromWhile;
    } while ( (badge3Math === badge2Math || badge3Math === badge1Math) && iFromWhile < 10);

    if (badge3Math === badge2Math || badge3Math === badge1Math) {
        badge1Math = 2;
        badge2Math = 3;
        badge3Math = 4;

        badge1 = [badgesObject[Object.keys(badgesObject)[badge1Math]].route, badgesObject[Object.keys(badgesObject)[badge1Math]].alt];

        badge2 = [badgesObject[Object.keys(badgesObject)[badge2Math]].route, badgesObject[Object.keys(badgesObject)[badge2Math]].alt];
        // console.log('3');
        // console.log(badge1);
        //  console.log('4');
        // console.log(badge2);
    }

    var badge3 = [badgesObject[Object.keys(badgesObject)[badge3Math]].route, badgesObject[Object.keys(badgesObject)[badge3Math]].alt];
    // console.log(badge1);
    // console.log(badge2);
    // console.log(badge3);

    // console.log('5');
    // console.log(badge3);


//button.setAttribute("name", "helloButton");
if (!document.getElementById('carousel-item-3').classList.contains("active")) {
    document.getElementById('carouselIMG3').setAttribute("src", `${baseRoute}${badge3[0]}`);
    document.getElementById('carouselIMG3').setAttribute("alt", `${badge3[1]}`);

    }
if (!document.getElementById('carousel-item-2').classList.contains("active")) {
document.getElementById('carouselIMG2').setAttribute("src", `${baseRoute}${badge2[0]}`);
document.getElementById('carouselIMG1').setAttribute("alt", `${badge2[1]}`);
}
if (!document.getElementById('carousel-item-1').classList.contains("active")) {
    document.getElementById('carouselIMG1').setAttribute("src", `${baseRoute}${badge1[0]}`);
    document.getElementById('carouselIMG1').setAttribute("alt", `${badge1[1]}`);

}


//console.log(`${baseRoute}${badge3[0]}`)
//console.log(`${badge3[1]}`);

}

cargarBadges();





   
    //console.log(` iFromWhile: ${iFromWhile}, badge3Math: ${badge3Math}, badge2Math: badge2Math: ${badge2Math}, ${badge1Math}`);
    // 
/*  
if (badge1Math === 1 || badge2Math ===1){

        }
newobject = nodes['hello.com']['id3'];
console.log(badgesObject[Object.keys(badgesObject)[0]].route);

console.log(badgesObject[Object.keys(badgesObject)[0]].route);

console.log(badgesObject[Object.keys(badgesObject)[0]].route);

console.log(badgesObject[Object.keys(badgesObject)[0]].route);



*/