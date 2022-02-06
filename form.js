//adding event listner
document.querySelector(".name").addEventListener("blur", validateName);
document.querySelector(".zip").addEventListener("blur", validateZip);
document.querySelector(".email").addEventListener("blur", validateEmail);
document.querySelector(".phone").addEventListener("blur", validatePhone);

//defining function
function validateName(){
    const inputName = document.querySelector(".name").value;
    const re = /^[a-zA-Z]{2,10}$/;
    if(!re.test(inputName)){
        document.querySelector(".alert").classList.add("activate")
    }else{
        document.querySelector(".alert").classList.remove("activate")
    }
}
function validateZip(){
    const inputZip = document.querySelector(".zip").value;
    const re = /^[0-9]{4}(-[0-9]{5})?$/;
    if(!re.test(inputZip)){
        document.querySelectorAll(".alert")[1].classList.add("activate")
    }else{
        document.querySelectorAll(".alert")[1].classList.remove("activate")
    }
}
function validateEmail(){
    const inputEmail = document.querySelector(".email").value;
    const re = /^([a-zA-Z0-9_\.\-]+)\@([a-zA-Z0-9\-\._]+)\.([a-zA-Z]{2,5})$/;
    if(!re.test(inputEmail)){
        document.querySelectorAll(".alert")[2].classList.add("activate")
    }else{
        document.querySelectorAll(".alert")[2].classList.remove("activate")
    }
}
function validatePhone(){
    const inputPhone = document.querySelector(".phone").value;
    const re = /^(\+[0-9]{2,3}[\-_\. ])?([0-9]{10})$/;
    if(!re.test(inputPhone)){
        document.querySelectorAll(".alert")[3].classList.add("activate")
    }else{
        document.querySelectorAll(".alert")[3].classList.remove("activate")
    }
}