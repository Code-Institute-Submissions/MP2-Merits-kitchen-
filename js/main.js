"use strict";
(function ($) {
  // Set background image for main image
  $(".hs-item.set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });
  // Mobile Menu Open
  $(".canvas-open").on("click", function () {
    $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").addClass("active");
  });

  $(".canvas-close, .offcanvas-menu-overlay").on("click", function () {
    $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").removeClass("active");
  });
  $(".mobile-menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true,
  });
  // Food slider carousel
  $(".food-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    mouseDrag: false,
  });
  // Review slider carousel
  $(".review-slider").owlCarousel({
    items: 1,
    dots: false,
    autoplay: true,
    loop: true,
    smartSpeed: 1200,
    nav: true,
  });
})(jQuery);

// Products array for order
var Products = [
  {
    id: 1,
    name: "VEGETARIAN TART",
    price: "DKK 70",
    description:
      "Vegetable tart with sun dried tomatoes. Perfect for vegetarian dinner.",
    image: "images/11.jpg",
  },
  {
    id: 2,
    name: "NOODLE SOUP WITH BEEF",
    price: "DKK 50",
    description: "Asian style noodle soup with vegetables and beef.",
    image: "images/8.jpg",
  },
  {
    id: 3,
    name: "EDAMAME BEANS",
    price: "DKK 35",
    description:
      "Can choose between salted or spicy version. Or take them both! Good starter before meal.",
    image: "images/9.jpg",
  },
  {
    id: 4,
    name: "CHICKEN SALAD",
    price: "DKK 60",
    description:
      "Warm salad with fresh or grilled vegetables and marinade chicken breast. Can be as a good starter or main meal.",
    image: "images/2.jpeg",
  },
  {
    id: 5,
    name: "PEARL BARLEY RISOTTO",
    price: "DKK 80",
    description:
      "Traditional pearl barley risotto bowl with smoked meat, cheese and egg.",
    image: "images/5.jpg",
  },
  {
    id: 6,
    name: "BROWNIE",
    price: "DKK 20",
    description:
      "Cocoa brownie with browned butter and walnuts. Tasty and healthy!",
    image: "images/4.jpg",
  },
];

var CartsProducts = [];
var CartProductsCount = 0;
var TotalCartAmount = 0;

function DisplayProducts() {
  var ProductsDiv = document.getElementById("products");
  ProductsDiv.innerHTML = "";
  for (let i = 0; i < Products.length; i++) {
    ProductsDiv.innerHTML +=
      `
        <div class = "col-lg-4 col-md-6" id= "` +
      Products[i].id +
      `">
            <div class="food-menu set-bg">
                <img src="` +
      Products[i].image +
      `" alt="Food image"/>
                <div class="food-text">
                    <h3>` +
      Products[i].name +
      `</h3>
                    <h2>` +
      Products[i].price +
      `</h2>
                    <p>` +
      Products[i].description +
      `</p>
                    <button class="btn-checkout" onClick="AddToCart(` +
      Products[i].id +
      `)">Add to Cart</button>
                </div>
            </div>
        </div>`;
  }
}

function AddToCart(ItemId) {
  var Product = Products.find((x) => x.id === ItemId);
  CartsProducts.push(Product);
  TotalCartAmount += Number(Product.price.split(" ")[1]);
  if (CartsProducts.length > 0) {
    CartProductsCount = CartsProducts.length;
  }
  DisplayCartProducts();
}

function DisplayCartProducts() {
  var CartDiv = document.getElementById("cart");
  CartDiv.innerHTML = "";
  CartDiv.innerHTML =
    `
    <h3>Cart
    <span class= "price" style="color:black">
        <i class= "fa fa-shopping-cart"></i>
        <b>` +
    CartProductsCount +
    `</b>
    </span>
    </h3>`;
  if (CartProductsCount > 0) {
    for (let i = 0; i < CartsProducts.length; i++) {
      CartDiv.innerHTML +=
        `
            <p><a href="#">` +
        CartsProducts[i].name +
        `</a> <span class= "price">` +
        CartsProducts[i].price +
        `</span></p>`;
    }
    CartDiv.innerHTML +=
      `<hr>
    <p>Total <span class="price" style="color:black"><b>DKK ` +
      TotalCartAmount +
      `</b></span></p>
    <input onClick="OpenCheckoutModal()" value="Continue to checkout" class="btn-checkout">`;
  } else {
    CartDiv.innerHTML += `
        <p>No Items are present in the cart</p>`;
  }
}

function OpenCheckoutModal() {
  $("#checkoutModal").modal("show");
}
