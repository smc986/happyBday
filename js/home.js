let clickCount = 0;

function nextPage(){

    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="gallery.html";

    },600);
}

document.getElementById("birthdayTitle").addEventListener("click",()=>{

    clickCount++;

    if(clickCount==3){

        window.location.href="secret-login.html";

    }

    setTimeout(()=>{

        clickCount=0;

    },1000);

});