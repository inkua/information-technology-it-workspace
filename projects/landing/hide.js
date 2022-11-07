var eye = document.getElementById('hide');
var pass = document.getElementById('pass');

eye.addEventListener('click', showpass);

function showpass(){
    if(pass.type == "password"){
        pass.type = "text";
        eye.style.opacity = 0.2;
    }else{
        pass.type = "password";
        eye.style.opacity = 1;

    }
}

