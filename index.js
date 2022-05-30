const cartModal = document.getElementById("cartModal");
const cartBtnMobile = document.getElementById("cartBtnMobile");
const myProduct = document.querySelector(".myProduct")

//array of products
const products = [
  {
    image: "https://i.pinimg.com/564x/2b/d6/90/2bd6908e4297a265982e1ca65055e7dd.jpg",
    name: 'Nike MercurialX',
    seller: "Amazon",
    price: '$30.3',
    dPrice: "$40"
},
  {
    image: "https://i.pinimg.com/564x/f8/9f/41/f89f41a486e5def128e3f51183c1730a.jpg",
    name: 'Lapel mens top',
    seller: "Amazon",
    price: '$30.3',
    dPrice: "$40"
},
{
  image: "https://i.pinimg.com/564x/5a/e0/d2/5ae0d2251578f453d5e0e7ceb19cd07e.jpg",
  name: 'Nike MercurialX',
  seller: "Amazon",
  price: '$30.3',
  dPrice: "$40"
},
{
  image: "https://i.pinimg.com/564x/78/fe/ca/78feca65081a02f73d2284cb8fc11c5f.jpg",
  name: 'Beach shirt',
  seller: "Amazon",
  price: '$30',
  dPrice: '$40',
},
{
  image: "https://i.pinimg.com/564x/2b/d6/90/2bd6908e4297a265982e1ca65055e7dd.jpg",
  name: 'Nike MercurialX',
  seller: "Amazon",
  price: '$30.3',
  dPrice: "$40"
},
{ image: "https://i.pinimg.com/564x/2b/d6/90/2bd6908e4297a265982e1ca65055e7dd.jpg",
name: 'Nike MercurialX',
seller: "Amazon",
price: '$30.3',
dPrice: "$40"
},
{
  image: "https://i.pinimg.com/564x/2b/d6/90/2bd6908e4297a265982e1ca65055e7dd.jpg",
  name: 'Nike MercurialX',
  seller: "Amazon",
  price: '$30.3',
  dPrice: "$40"
},
{
  image: "https://i.pinimg.com/474x/58/08/1a/58081a370f9874cde1f64fb81054f08e.jpg",
  name: 'Nike MercurialX',
  seller: "Amazon",
  price: '$30.3',
  dPrice: "$40"
},
{
  image: "https://i.pinimg.com/564x/5a/e0/d2/5ae0d2251578f453d5e0e7ceb19cd07e.jpg",
  name: 'Nike MercurialX',
  seller: "Amazon",
  price: '$30.3',
  dPrice: "$40"
},
];
// mapping product to each card
window.onload = () =>{

   products.map(function(product){
    myProduct.innerHTML += ` <div class="col product myProduct"><div class="all"><img src="${product.image}" alt="" height="150px" width="100%" style="object-fit:contain ;"> <div class="img-info"> <h5>${product.name}</h5> <h6>${product.price}</h6><h6 class="discount">${product.dPrice}</h6> </div> <button class="cart-add">Add to cart</button></div></div>`
  })
 
}
  


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
