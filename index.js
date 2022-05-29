const cartModal = document.getElementById("cartModal");
const cartBtnMobile = document.getElementById("cartBtnMobile");

//array of products
const products = [
  {
    name: "Amazon watch",
    price: "$20",
    seller: "Amazon stores",
    image: "./downloads/img/watch.png",
  },
  {},
];

//cart modal
function showCart() {
  const body = document.getElementById("body");
  cartModal.style.display = "flex";
  body.style.overflowY = "hidden";
}
function closeCart() {
  cartModal.style.display = "none";
  body.style.overflowY = "scroll";
}
