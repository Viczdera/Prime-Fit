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
    seller: "Jeanspiration",
    price: "30000"
  },
  {
    image:
      "https://i.pinimg.com/564x/f8/9f/41/f89f41a486e5def128e3f51183c1730a.jpg",
    name: "Lapel mens top",
    seller: "Amazon",
    price: "10500"
  },
  {
    image:
      "https://i.pinimg.com/564x/5a/e0/d2/5ae0d2251578f453d5e0e7ceb19cd07e.jpg",
    name: "Nike MercurialX",
    seller: "Nike",
    price: "35000"
  },
  {
    image:
      "https://i.pinimg.com/564x/78/fe/ca/78feca65081a02f73d2284cb8fc11c5f.jpg",
    name: "Beach shirt",
    seller: "Dave Stores",
    price: "12000" },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/files/primeriesng_20220221_012954_0_360x.jpg?v=1645403552",
    name: "Loner's Taut Bag",
    seller: "Loner's Party",
    price: "15800",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220309_115533_0_540x.jpg?v=1646823561",
    name: "There will be Heaven",
    seller: "Nine",
    price: "12000"
  },
  {
    image:
      "https://i.pinimg.com/564x/2b/d6/90/2bd6908e4297a265982e1ca65055e7dd.jpg",
    name: "Nike MercurialX",
    seller: "Nike",
    price: "35000"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/tomanniofficial_20220304_232905_0_540x.jpg?v=1646434127",
    name: "Free Minds",
    seller: "Tomanni",
    price: "18000"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/Picsart_22-05-17_23-30-54-973_720x.jpg?v=1652827296",
    name: "Epiphany Hoodies",
    seller: "Revelation",
    price: "20000"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220221_151911_0_360x.jpg?v=1645479657",
    name: "Crucifix Denim",
    seller: "MAK",
    price: "21000"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/IMG_20220303_221738_725_540x.jpg?v=1646342890",
    name: "Grande Fit Jacket",
    seller: "Toxic Society",
    price: "25000"
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/primeriesng_20220419_005715_1_360x.jpg?v=1650326684",
    name: "Bridges Denim",
    seller: "MAK",
    price: "22000"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/IMG_20220406_182425_151_6c5bf4a6-98b2-4c44-841a-3bf9a122a73e_360x.webp?v=1649273028",
    name: "Salvation Jacket",
    seller: "Salvation",
    price: "24000"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/Picsart_22-05-17_23-30-22-176_540x.jpg?v=1652827090",
    name: "Epiphany Tees",
    seller: "Revelation",
    price: "12000"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/IMG_20220513_212925_460_540x.jpg?v=1652476146",
    name: "Representing Society",
    seller: "Toxic Society",
    price: "15000"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/image_4f613565-4106-42e1-b25f-f09e26c1339b_360x.jpg?v=1650262045",
    name: "Salvation Pants",
    seller: "Salvation",
    price: "22000"
  },
];

// mappng product
window.onload = () => {
  products.map(function (product, i) {
    var price = parseFloat(product.price)
    var localPrice = price.toLocaleString()
    myProduct.innerHTML += ` <div class="col product myProduct"><div class="all"><img src="${product.image}" alt="" height="150px" width="100%" style="object-fit:contain ;"> <div class="img-info"> <h5>${product.name}</h5> <h6>${product.seller}</h6><h6 class='price'>₦${localPrice}</h6> </div> <button class="cart-add" onclick=addToCart(${i})>Add to cart</button></div></div>`;
  });
};

const cartCount0 = document.getElementById("cartCount0");
const cartCount1 = document.getElementById("cartCount1");
const productContainer = document.getElementById("productsCont");
const cartItemsContainer = document.getElementById("cartItemsUl");
//array of products

const cartItems =JSON.parse(localStorage.getItem("cart")) || [];
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
  if (cartItems.length==0){
    cartItemsContainer.innerHTML="<h5 class='cartEmpty'>Nothing In Cart</h5>"
  }
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
  window.localStorage.setItem('cart',JSON.stringify(cartItems))
  getCartTotal();
}
//
function getCartTotal() {
  var deliveryFee =1000;
  var discount = 500;
  if (cartItems.length==0){
    deliveryFee=0
    discount=0
  }
  deliveryCont0.innerText = `₦${deliveryFee.toLocaleString()}`;
  deliveryCont1.innerText = `₦${deliveryFee.toLocaleString()}`;
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
  showCartItems()
}

