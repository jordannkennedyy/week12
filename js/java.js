let button = document.querySelector("#clickme")

function alertuser(){
    alert("You Clicked");
    button.removeEventListener('click', alertuser)
}


button.addEventListener('click', alertuser);