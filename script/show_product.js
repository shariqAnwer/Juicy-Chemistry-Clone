

let data_curr = [];
data_curr.push(JSON.parse(localStorage.getItem("Product")));
console.log(data_curr)

let images=[
 {img: "https://cdn.shopify.com/s/files/1/0058/7779/2832/files/PPI_A-01.png?v=1630740719",
  text:"Cruelty-free and Vegan",
},
 {img: "https://cdn.shopify.com/s/files/1/0058/7779/2832/files/PPI_A-02.png?v=1630740719", 
 text:"Handmade Products"},
 {img: "https://cdn.shopify.com/s/files/1/0058/7779/2832/files/PPI_A-03.png?v=1630740719",
 text:"Clean Ingredients",
},
 {img: "https://cdn.shopify.com/s/files/1/0058/7779/2832/files/PPI_A-04.png?v=1630740719",
 text:"Freshly Made",
},
 {img: "https://cdn.shopify.com/s/files/1/0058/7779/2832/files/PPI_A-05.png?v=1630740719",
 text:"GMO- free",
},
 {img:"https://cdn.shopify.com/s/files/1/0058/7779/2832/files/PPI_A-09.png?v=1630740719",
 text:"Zero Sulphates",
},
 {img:"https://cdn.shopify.com/s/files/1/0058/7779/2832/files/PPI_A-06.png?v=1630740719",
 text:"No Synthetic Fragrances",
},
 {img:"https://cdn.shopify.com/s/files/1/0058/7779/2832/files/PPI_A-07.png?v=1630740719",
 text:"Zero Dyes", 
},

]





let parent_prod = document.getElementById("products")

function showproducts() {


parent_prod.innerHTML =null;

data_curr.forEach(function (product) {
      console.log(product.name);

let div_img = document.createElement("div");
div_img.id ="id-product-content";
div_img.class="class-main-div";
// div_img.style.backgroundColor=product.bgcolor;



let img_product = document.createElement("img");
img_product.className="class-product-img";
img_product.src = product.img;

let div_content = document.createElement("div");
div_content.id ="id-product-content-text";
div_content.class="class-main-div-text";
// div_content.style.backgroundColor=product.bgcolor;

let product_detail = document.createElement("p");
product_detail.className="product_detail-text";
product_detail.innerHTML = " "+product.detail1;
// product_detail.style.backgroundColor=product.bgcolor;

let product_detail_1 = document.createElement("p");
product_detail_1.className="product_detail-text";
product_detail_1.innerHTML = "&#10004;&nbsp&nbsp "+product.detail2;
// product_detail_1.style.backgroundColor=product.bgcolor;

let product_detail_2 = document.createElement("p");
product_detail_2.className="product_detail-text";
product_detail_2.innerHTML = "&#10004;&nbsp&nbsp "+product.detail3;
// product_detail_2.style.backgroundColor=product.bgcolor;

let product_detail_3 = document.createElement("p");
product_detail_3.className="product_detail-text";
product_detail_3.innerHTML = "&#10004;&nbsp&nbsp "+product.detail4;
// product_detail_3.style.backgroundColor=product.bgcolor;

let product_detail_4 = document.createElement("p");
product_detail_4.className="product_detail-text";
product_detail_4.innerHTML ="&#10004;&nbsp&nbsp "+ product.detail5;
// product_detail_4.style.backgroundColor=product.bgcolor;

let product_price = document.createElement("p");
product_price.className="class-product-price";
product_price.id="id-class-product-price";
product_price.innerHTML = "&#8377;"+ product.price+`<span class="class-inclusive-of-taxes-1">or 4 interest-free payments of<b class="class-inclusive-of-taxes-2"> ₹162.50</b> with </span>`+`<span class="class-inclusive-of-taxes">All inclusive of taxes</span>`+`<img src="https://cdn.sezzle.in/branding/2.0/Sezzle_Logo_FullColor.svg" class="class-price-image">`;
// product_price.style.backgroundColor=product.bgcolor;

let product_mrp_price = document.createElement("p");
product_mrp_price.className="class-product-mrp-price";
product_mrp_price.id="class-product-mrp-price";
product_mrp_price.textContent = product.mrpprice;
// product_mrp_price.style.backgroundColor=product.bgcolor;


let product_name = document.createElement("p");
product_name.className="class-product-name";
product_name.innerHTML =product.name;
// product_name.style.backgroundColor=product.bgcolor;

let img_product_price = document.createElement("img");
img_product_price.className="class-product-img-price";
img_product_price.src = product.img1;


let product_reviews = document.createElement("p");
product_reviews.className="class-product-reviews";
// product_reviews.style.backgroundColor=product.bgcolor;
product_reviews.innerHTML ="&#9733;&#9733;&#9733;&#9733;&#9733;"+"&nbsp&nbsp&nbsp&nbsp"+product.reviews;



let addtocard_btn = document.createElement("button");
addtocard_btn.className="class-product-button"

// addtocard_btn.style.backgroundColor=product.bgcolor;

addtocard_btn.innerHTML ="&#8377;"+product.price+"&nbsp&nbsp&nbsp&nbsp"+"<del>&nbsp"+"&#8377;" +product.mrpprice+"&nbsp</del>" +"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+"ADD TO CARD"+"&nbsp&nbsp"+`<i class="btn-shopping-bag fas fa-shopping-bag"></i>`;

addtocard_btn.addEventListener("mouseenter", function(){
  addtocard_btn.style.backgroundColor="black";

})
addtocard_btn.addEventListener("mouseleave", function(){
  addtocard_btn.style.backgroundColor="#204e3c";

})
// addtocard_btn.onclick = function() {

//     addtocard(product);
// };

// 
  
  addtocard_btn.onclick = function () {

  if (JSON.parse(localStorage.getItem("cart")) == null) {
    localStorage.setItem("cart", JSON.stringify([]));
  }

  //checking if product is already in cart
  if (alreadyInCart(product)) {

  //this is cart js files
    showCartItems(JSON.parse(localStorage.getItem("cart")));
    //open cart;
    showCart();
  }
  
  else {
    let shopcart = JSON.parse(localStorage.getItem("cart"));
  product.quantity = 1;
  shopcart.push(product);
  localStorage.setItem("cart", JSON.stringify(shopcart));
  //this is cart js files
  if (JSON.parse(localStorage.getItem("cart")) !== null){
    showCartItems(JSON.parse(localStorage.getItem("cart")));
    //open cart;
    showCart();
  }
  }
  
  


};
  
// 
div_img.append(img_product);

parent_prod.append(div_img);

div_content.append( product_name,  product_reviews,product_detail , product_detail_1 , product_detail_2 , product_detail_3 , product_detail_4 ,product_price , addtocard_btn );

parent_prod.append(div_content);


  });

}

  showproducts(data_curr);
 




//new div with

let container = document.getElementById("slideposter");
function startSlideshow(){
  
  container.innerHTML=null;
  images.forEach(function (product){

    let div_content_2 = document.createElement("div");
div_content_2.id ="id-product-content-text-2";
div_content_2.class="class-main-div-text-2";
div_content_2.style.backgroundColor="#f4eee6";


    let product_name_second = document.createElement("p");
product_name_second.className="class-product-name-2";
product_name_second.innerHTML =product.text;
product_name_second.style.backgroundColor="#f4eee6";
   

    

    let img_second = document.createElement("img");

    img_second.src =product.img;

    div_content_2.append(img_second,product_name_second);
    container.append(div_content_2);

});

}

startSlideshow();







//check for already in cart
function alreadyInCart(p) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  for (let i = 0; i < cart.length; i++){
    if (p.name === cart[i].name) {
      p.quantity++;
      return true;
    }
  }
  return false;

}