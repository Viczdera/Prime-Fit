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
{
  image: "https://i.pinimg.com/564x/5a/e0/d2/5ae0d2251578f453d5e0e7ceb19cd07e.jpg",
  name: 'Nike MercurialX',
  seller: "Amazon",
  price: '$30.3',
  dPrice: "$40"
},
];
// mappng product
window.onload = () =>{

   products.map(function(product, i){
    myProduct.innerHTML += ` <div class="col product myProduct"><div class="all"><img src="${product.image}" alt="" height="150px" width="100%" style="object-fit:contain ;"> <div class="img-info"> <h5>${product.name}</h5> <h6>${product.price}</h6><h6 class="discount">${product.dPrice}</h6> </div> <button class="cart-add" onclick=addToCart(${i})>Add to cart</button></div></div>`
  })
 
}
  
const cartCount0 = document.getElementById("cartCount0");
const cartCount1 = document.getElementById("cartCount1");
const productContainer = document.getElementById("productsCont");
const cartItemsContainer = document.getElementById("cartItemsUl");
//array of products

const cartItems = [];
console.log(products);

showCartItems();
console.log(cartItems);
//add to cart
function addToCart(i) {
    cartItems.push(products[i])
    showCartItems()
    // if (cartItems.some((item) => item.id === id)) {
    //     changeNumberOfUnits("plus", id);
    //   } else {
    //     const item = products.find((product) => product.id === id);
    
    //     cartItems.push({
    //       ...item,
    //       numberOfUnits: 1,
    //     });
    //     console.log(cartItems)
    //   }
    
     
}
// mine own


//showCartItems
 function showCartItems() {
  // cartItems.forEach(function(product,i){
  //   cartItemsContainer.innerHTML += `<li> <div class="cartImgCont"> <img alt="productimg" class="cart-img" src="${product.image}"/> </div><div><h6>${product.name}</h6><p>${product.seller}</p></div> <div> <p>${product.price}</p> <span onclick='removeFromCart(${i})')><i class='fa-solid fa-trash'></i></span></div> </li>`
  // })
  cartItemsContainer.innerHTML = "";
  cartItems.forEach((product, i) => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML =
      " <div class='cartImgCont'><img  class='cart-img' alt='productimg' src='"+ product.image +"' /></div><div><h6>" +
      product.name +
      " </h6><p>" +
      product.seller +
      " </p></div><div><p>" +
      product.price +
      " </p> <span onclick='removeFromCart(" +
      i +
      ")'><i class='fa-solid fa-trash'></i></span></div>";
    cartItemsContainer.appendChild(cartItem);
  });
  if (cartItems == []) {
    cartCount0.innerText = 0;
    cartCount1.innerText = 0;
  } else {
    cartCount0.innerText = cartItems.length;
    cartCount1.innerText = cartItems.length;
  }
}

//removeCartItem(s)
function removeFromCart(i) {
  cartItems.splice(i, 1);
  showCartItems();
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
