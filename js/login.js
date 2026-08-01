function login(){

    const password=document.getElementById("password").value;

    const correctPassword="sayal6360";

    if(password===correctPassword){

        window.location.href="surprise.html";

    }

    else{

        document.getElementById("error").innerHTML="Wrong Password";
    }

}