let button = document.querySelector("#clickme")
let background = document.querySelectorAll("body")

function alertuser(){
    alert("You Clicked");
    // button.removeEventListener('click', alertuser)
}


// button.addEventListener('click', alertuser, {once:true})


function changeBGPink(){
    document.body.style.backgroundColor = 'pink'
}
// button.addEventListener('click', changeBGPink);





function changetext(){
    // if the button says click me change the textContent to Clicked
    if(button.textContent === "Click Me"){
        button.textContent === "Clicked";
    } else
    // else if it says Clicked update it to click me
    button.textContent = "Clicked";
}
// button.addEventListener('click', changetext);


// function updateImage(e){
//     console.log(e)
//     const image = document.querySelector("#shoppingCart");
//     image.setAttribute("src", "../images/263142.png")
//     image.setAttribute("width", 100)
//     image.setAttribute("height", 100)
//     image.setAttribute("alt", "new")
// }
// button.addEventListener('click', updateImage);


const buttonContainer = document.querySelector(".button-container");
function changeBGGreen(event){
    if (event.target.tagName === 'BUTTON'){
        event.target.style.backgroundColor = "green"
    }
   
    // console.log(event.target)
    // is the element that we clicked on
}

buttonContainer.addEventListener("click", changeBGGreen)
