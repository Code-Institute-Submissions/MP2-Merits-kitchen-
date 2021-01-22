"use strict";

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
    image: "images/7.jpeg",
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
    ProductsDiv.innerHTML = '';
    for(let i = 0; i < Products.length; i++) {
        ProductsDiv.innerHTML += `
        <div class = "col-lg-4 col-md-6" id= "`+Products[i].id+`">
            <div class="food-menu set-bg">
                <img src="`+Products[i].image+`" alt="Food image"/>
                <div class="food-text">
                    <h3>`+Products[i].name+`</h3>
                    <h2>`+Products[i].price+`</h2>
                    <p>`+Products[i].description+`</p>
                    <button class="btn-checkout" onClick="AddToCart(`+Products[i].id+`)">Add to Cart</button>
                </div>
            </div>
        </div>`;        
    }
}

function AddToCart
