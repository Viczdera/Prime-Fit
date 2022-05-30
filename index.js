const cartModal = document.getElementById("cartModal");
const cartBtnMobile = document.getElementById("cartBtnMobile");
const myProduct = document.querySelector(".myProduct");
//cart total elements
const subTotalCont0 = document.getElementById("subTotal0");
const subTotalCont1 = document.getElementById("subTotal1");
const deliveryCont0 = document.getElementById("delivery0");
const deliveryCont1 = document.getElementById("delivery1");
const discountCont0 = document.getElementById("discount0");
const discountCont1 = document.getElementById("discount1");
const totalAmt0=document.getElementById('totalAmt0')
const totalAmt1=document.getElementById('totalAmt1')
//array of products
const products = [
  {
    image: "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/tomanniofficial_20220301_222623_0_360x.jpg?v=1646171575",
    name: 'Madussa',
    seller: "Amazon",
    price: "3900",
    dPrice: "4000",
  },
  {
    image:
      "https://i.pinimg.com/564x/f8/9f/41/f89f41a486e5def128e3f51183c1730a.jpg",
    name: "Lapel mens top",
    seller: "Amazon",
    price: "3000",
    dPrice: "4500",
  },
  {
    image:
      "https://i.pinimg.com/564x/5a/e0/d2/5ae0d2251578f453d5e0e7ceb19cd07e.jpg",
    name: "Nike MercurialX",
    seller: "Amazon",
    price: "5800",
    dPrice: "7000",
  },
  {
    image:
      "https://i.pinimg.com/564x/78/fe/ca/78feca65081a02f73d2284cb8fc11c5f.jpg",
    name: "Beach shirt",
    seller: "Amazon",
    price: "30",
    dPrice: "40",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/files/primeriesng_20220221_012954_0_360x.jpg?v=1645403552",
    name: "Nike MercurialX",
    seller: "Amazon",
    price: "15800",
    dPrice: "20000",
  },
  {
    image:
      "https://i.pinimg.com/564x/2b/d6/90/2bd6908e4297a265982e1ca65055e7dd.jpg",
    name: "Nike MercurialX",
    seller: "Amazon",
    price: "4800",
    dPrice: "7000",
  },
  {
    image:
      "https://i.pinimg.com/564x/2b/d6/90/2bd6908e4297a265982e1ca65055e7dd.jpg",
    name: "Nike MercurialX",
    seller: "Amazon",
    price: "6000",
    dPrice: "6800",
  },
  {
    image:
      "https://i.pinimg.com/474x/58/08/1a/58081a370f9874cde1f64fb81054f08e.jpg",
    name: "Nike MercurialX",
    seller: "Amazon",
    price: "3000",
    dPrice: "5700",
  },
  {
    image:
      "https://i.pinimg.com/564x/5a/e0/d2/5ae0d2251578f453d5e0e7ceb19cd07e.jpg",
    name: "Nike MercurialX",
    seller: "Amazon",
    price: "4900",
    dPrice: "5000",
  },
  {
    image:
      "https://i.pinimg.com/564x/5a/e0/d2/5ae0d2251578f453d5e0e7ceb19cd07e.jpg",
    name: "Nike MercurialX",
    seller: "Amazon",
    price: "1200",
    dPrice: "3000",
  },
];

// mappng product
window.onload = () => {
  products.map(function (product, i) {
    var price = parseFloat(product.price)
    var localPrice = price.toLocaleString()
    myProduct.innerHTML += ` <div class="col product myProduct"><div class="all"><img src="${product.image}" alt="" height="150px" width="100%" style="object-fit:contain ;"> <div class="img-info"> <h5>${product.name}</h5> <h6>${product.seller}</h6><h6>₦${localPrice}</h6><h6 class="discount">${product.dPrice}</h6> </div> <button class="cart-add" onclick=addToCart(${i})>Add to cart</button></div></div>`;
  });
};

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
  cartItems.push(products[i]);
  showCartItems();
}
// mine own

//showCartItems
function showCartItems() {
  cartItemsContainer.innerHTML = "";
  cartItems.forEach((product, i) => {
    const cartItem = document.createElement("li");
    var price=parseFloat(product.price)
    var localPrice= price.toLocaleString()
    cartItem.innerHTML =
      " <div class='cartImgCont'><img  class='cart-img' alt='productimg' src='" +
      product.image +
      "' /></div><div><h6>" +
      product.name +
      " </h6><p>" +
      product.seller +
      " </p></div><div><p>₦" +
      localPrice +
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

  getCartTotal();
}
//
function getCartTotal() {
  var deliveryFee = 1000;
  deliveryCont0.innerText = `₦${deliveryFee.toLocaleString()}`;
  deliveryCont1.innerText = `₦${deliveryFee.toLocaleString()}`;
  var discount = 500;
  discountCont0.innerText = `₦${discount.toLocaleString()}`;
  discountCont1.innerText = `₦${discount.toLocaleString()}`;
  function cartItemsPrice() {
    return cartItems.map((m) => {
      var price = parseFloat(m.price);
      return price;
    });
  }
  const subTotal = cartItemsPrice().reduce((a, b) => a + b, 0);
  subTotalCont0.innerText = `₦${subTotal.toLocaleString()}`;
  subTotalCont1.innerText = `₦${subTotal.toLocaleString()}`;
  var total = subTotal + deliveryFee - discount;
  totalAmt0.innerText = `₦${total.toLocaleString()}`;
  totalAmt1.innerText = `₦${total.toLocaleString()}`;
  console.log(total);
  //return subTotal;
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
// clear cart item
let clearItem = document.querySelector(".clear-list")
clearItem.addEventListener("click",removeAll)
let secondclearitem = document.getElementById("clear-list")
secondclearitem.addEventListener("click",removeAll)
 
function removeAll(){
  var itemlength= cartItems.length
  cartItems.splice(0,itemlength)
  cartCount0.innerText = 0;
  cartCount1.innerText = 0;
  cartItemsContainer.innerHTML = ""
  subTotalCont0.innerHTML = 0
  subTotalCont1.innerHTML = 0
  deliveryCont0.innerHTML = 0
  deliveryCont1.innerHTML = 0
  totalAmt0.innerHTML = 0
  totalAmt1.innerHTML = 0
  discountCont0.innerHTML = 0
 discountCont1.innerHTML = 0
}

