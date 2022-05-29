const cartModal = document.getElementById("cartModal");
const cartBtnMobile = document.getElementById("cartBtnMobile");

//cart modal
function showCart() {
    const body=document.getElementById('body')
  cartModal.style.display = "flex"
  body.style.overflowY='hidden'
}
function closeCart() {
  cartModal.style.display = "none";
  body.style.overflowY='scroll'
}
