const btn = document.getElementById("blowBtn");

const countdown = document.getElementById("countdown");

const message = document.getElementById("message");

const flames = document.querySelectorAll(".flame");

btn.addEventListener("click",()=>{

    btn.style.display="none";

    let count=3;

    countdown.innerHTML=count;

    const timer=setInterval(()=>{

        count--;

        if(count>0){

            countdown.innerHTML=count;

        }

        else{

            clearInterval(timer);

            countdown.innerHTML="";

            flames.forEach(flame=>{

                flame.style.display="none";

            });

            message.innerHTML="🎉 Happy Birthday 🎉";

            setTimeout(()=>{

                window.location.href="home.html";

            },2500);

        }

    },1000);

});