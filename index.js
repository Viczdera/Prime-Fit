const opencart = document.querySelector(".counter-p")
const cartOverlay = document.querySelector(".cart-overley")
const closecart = document.querySelector("#close-cart")

// event listerner for opening cart
opencart.addEventListener("click", ()=>{
    cartOverlay.style.display = "block"
})
// event listener for closing cart
closecart.addEventListener("click", ()=>{
    cartOverlay.style.display = "none"
})
// event for window
window.addEventListener("click",(e)=>{
    if(e.target == cartOverlay){
        cartOverlay.style.display = "none"
    }
})
