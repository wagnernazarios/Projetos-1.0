function  showPassword(){
    const eye = document.getElementById("eye");
    const slash = document.getElementById("eye-slash");
    const password = document.getElementById("password");

    if(eye.style.display === "none"){
        eye.style.display = "block"
        slash.style.display = "none"
        password.type = "text"
    }else{
        eye.style.display = "none"
        slash.style.display = "block"
        password.type = "password"
    }

}


document.getElementById("btn-login").addEventListener("click" , function(e){
    e.preventDefault();
    alert("Logado!")
})