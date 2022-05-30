const cartModal = document.getElementById("cartModal");
const cartBtnMobile = document.getElementById("cartBtnMobile");
const cartCount0 = document.getElementById("cartCount0");
const cartCount1 = document.getElementById("cartCount1");
const productContainer = document.getElementById("productsCont");
const cartItemsContainer = document.getElementById("cartItemsUl");
//array of products
const products = [
  {
    id: "1",
    name: "Distress Tee",
    price: "₦20,000",
    seller: "MAK-OFFICIAL",
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220521_095243_0_360x.jpg?v=1653125271",
  },
  {
    id: "2",
    name: "Distress Jeans",
    price: "₦20,000",
    seller: "MAK-OFFICIAL",
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220521_095243_0_360x.jpg?v=1653125271",
  },
  {
    id: "3",
    name: "Distress Tops",
    price: "₦20,000",
    seller: "MAK-OFFICIAL",
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220521_095243_0_360x.jpg?v=1653125271",
  },
  {
    id: "4",
    name: "Distress Tees",
    price: "₦20,000",
    seller: "MAK-OFFICIAL",
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220521_095243_0_360x.jpg?v=1653125271",
  },
  {
    id: "5",
    name: "Distress Tees",
    price: "₦20,000",
    seller: "MAK-OFFICIAL",
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220521_095243_0_360x.jpg?v=1653125271",
  },
  {
    id: "6",
    name: "Distress Tees",
    price: "₦20,000",
    seller: "MAK-OFFICIAL",
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220521_095243_0_360x.jpg?v=1653125271",
  },
  {
    id: "7",
    name: "Distress Tees",
    price: "₦20,000",
    seller: "MAK-OFFICIAL",
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220521_095243_0_360x.jpg?v=1653125271",
  },
  {
    id: "8",
    name: "Distress Tees",
    price: "₦20,000",
    seller: "MAK-OFFICIAL",
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220521_095243_0_360x.jpg?v=1653125271",
  },
  {
    id: "9",
    name: "Distress Tees",
    price: "₦20,000",
    seller: "MAK-OFFICIAL",
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220521_095243_0_360x.jpg?v=1653125271",
  },
  {
    id: "10",
    name: "Distress Tees",
    price: "₦20,000",
    seller: "MAK-OFFICIAL",
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220521_095243_0_360x.jpg?v=1653125271",
  },
  {
    id: "11",
    name: "Distress Tees",
    price: "₦20,000",
    seller: "MAK-OFFICIAL",
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220521_095243_0_360x.jpg?v=1653125271",
  },
  {
    id: "12",
    name: "Distress Tees",
    price: "₦20,000",
    seller: "MAK-OFFICIAL",
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220521_095243_0_360x.jpg?v=1653125271",
  },
  {
    id: "13",
    name: "Distress Tees",
    price: "₦20,000",
    seller: "MAK-OFFICIAL",
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220521_095243_0_360x.jpg?v=1653125271",
  },
  {
    id: "14",
    name: "Distress Tees",
    price: "₦20,000",
    seller: "MAK-OFFICIAL",
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220521_095243_0_360x.jpg?v=1653125271",
  },
  {
    id: "15",
    name: "Distress Tees",
    price: "₦20,000",
    seller: "MAK-OFFICIAL",
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220521_095243_0_360x.jpg?v=1653125271",
  },
  {
    id: "16",
    name: "Distress Tees",
    price: "₦20,000",
    seller: "MAK-OFFICIAL",
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220521_095243_0_360x.jpg?v=1653125271",
  },
  {
    id: "17",
    name: "Distress Tees",
    price: "₦20,000",
    seller: "MAK-OFFICIAL",
    image:
      "https://cdn.shopify.com/s/files/1/0530/2907/7190/products/manacquiredknowledge_20220521_095243_0_360x.jpg?v=1653125271",
  },
];
const cartItems = [];
console.log(products);

//show products
function showProducts() {
  productContainer.innerHTML = "";
  products.forEach((product, i) => {
    const productCard = document.createElement("div");
    productCard.setAttribute("class", "col product");
    productCard.innerHTML =
      "<div>" +
      product.name +
      " <button onclick='addToCart(" +
      i +
      ")'>Add</button></div>";
    productContainer.appendChild(productCard);
  });
}
showProducts();
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

//showCartItems
function showCartItems() {
  cartItemsContainer.innerHTML = "";
  cartItems.forEach((product, i) => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML =
      " <div class='cartImgCont'><img alt='productimg' /></div><div><h6>" +
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
