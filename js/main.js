"use strict";

(function ($) {
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });

  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

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
  $(".review-slider").owlCarousel({
    items: 1,
    dots: false,
    autoplay: true,
    loop: true,
    smartSpeed: 1200,
    nav: true,
    navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
  });
})(jQuery);

var Products = [
  {
    id: 1,
    name: "Pizza Margherita",
    price: "DKK 70",
    description:
      "Mustard sierra leone bologi kale chard beet greens black-eyed pea sorrel amaranth garlic tigernut spring onion summer purslane asparagus lentil.",
    image: "images/1.jpeg",
  },
  {
    id: 2,
    name: "Pizza Margherita",
    price: "DKK 70",
    description:
      "Mustard sierra leone bologi kale chard beet greens black-eyed pea sorrel amaranth garlic tigernut spring onion summer purslane asparagus lentil.",
    image: "images/7.jpg",
  },
  {
    id: 3,
    name: "Chicken salad",
    price: "DKK 60",
    description:
      "Mustard sierra leone bologi kale chard beet greens black-eyed pea sorrel amaranth garlic tigernut spring onion summer purslane asparagus lentil.",
    image: "images/2.jpeg",
  },
  {
    id: 4,
    name: "Tiramisu",
    price: "DKK 50",
    description:
      "Mustard sierra leone bologi kale chard beet greens black-eyed pea sorrel amaranth garlic tigernut spring onion summer purslane asparagus lentil.",
    image: "images/4.jpeg",
  },
  {
    id: 5,
    name: "Pancakes",
    price: "DKK 40",
    description:
      "Mustard sierra leone bologi kale chard beet greens black-eyed pea sorrel amaranth garlic tigernut spring onion summer purslane asparagus lentil.",
    image: "images/5.jpeg",
  },
  {
    id: 6,
    name: "Sea Food Menu",
    price: "DKK 85",
    description:
      "Mustard sierra leone bologi kale chard beet greens black-eyed pea sorrel amaranth garlic tigernut spring onion summer purslane asparagus lentil.",
    image: "images/6.jpeg",
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
  debugger;
  var Product = Products.find((x) => x.id === ItemId);
  CartsProducts.push(Product);
  TotalCartAmount += Number(Product.price.split("")[1]);
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
