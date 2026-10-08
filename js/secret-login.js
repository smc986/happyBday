const PASSWORD = "may12021";

function checkPassword(){

    const input = document.getElementById("password").value;

    const box = document.querySelector(".container");

    const error = document.getElementById("error");

    if(input === PASSWORD){

    // Allow music on secret page
    sessionStorage.setItem("playSecretMusic", "true");

    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="secret.html";

    },800);

}
    else{

        error.innerHTML="❌ Wrong Password";

        box.classList.add("shake");

        setTimeout(()=>{

            box.classList.remove("shake");

        },400);

    }

}