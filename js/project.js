var $ =document;

var dasht =$.querySelector('.dasht')
var kavir =$.querySelector('.title')
var contentKavir =$.querySelector('.content-kavir')


window.addEventListener('load',()=>{
    dasht.style.height = "50px"
    dasht.style.width = "50px"
    dasht.style.borderRadius = "50%"
    dasht.style.margin = "auto"
})

window.addEventListener('scroll',()=> {
    console.log('Current scroll from the top: ' + window.pageYOffset)

   if (window.pageYOffset < 126) {
        dasht.style.height = "70px"
        dasht.style.width = "70px"
        dasht.style.borderRadius = "50%"
        dasht.style.margin = "auto"
    }

    else if (window.pageYOffset < 145) {
        dasht.style.height = "150px"
        dasht.style.width = "150px"
        dasht.style.borderRadius = "50%"
        dasht.style.margin = "auto"
       //---kavir
       kavir.style.animation = "test 3s 1";
       kavir.style.animationFillMode = "forwards";

    }
    else if (window.pageYOffset < 185) {
        dasht.style.height = "200px"
        dasht.style.width = "200px"
        dasht.style.borderRadius = "50%"
        dasht.style.margin = "auto"
       //---kavir
       kavir.style.animation = "test 3s 1";
       kavir.style.animationFillMode = "forwards";

    }
    else if (window.pageYOffset < 225) {
        dasht.style.height = "240px"
        dasht.style.width = "240px"
        dasht.style.borderRadius = "50%"
        dasht.style.margin = "auto"

    }
   else if (window.pageYOffset < 252) {
        dasht.style.height = "270px"
        dasht.style.width = "270px"
        dasht.style.borderRadius = "50%"
        dasht.style.margin = "auto"

    }
    else if (window.pageYOffset < 352) {
        dasht.style.height = "470px"
        dasht.style.width = "470px"
        dasht.style.borderRadius = "50%"
        dasht.style.margin = "auto"

    }
    else if (window.pageYOffset < 550) {
        dasht.style.height = "600px"
        dasht.style.width = "100%"
       dasht.style.borderRadius = "0"
        dasht.style.margin = "auto"

    }
    else if (window.pageYOffset > 552) {
        dasht.style.height = "600px"
        dasht.style.width = "100%"
        dasht.style.margin = "auto"
    }
   else if (window.pageYOffset > 580) {
       dasht.style.height = "600px"
       shab.style.display ="block";
       dasht.style.width = "100%"
       dasht.style.margin = "auto"
   }

})

//------------------go top

var goTop =$.querySelector('.goTop')

goTop.addEventListener('click',()=>{
    window.scrollTo(0,0)
})

//------------scroll horzantal
const scrollContainer = $.querySelector(".list");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});
