let shoping_cart = JSON.parse(localStorage.getItem("cart"))
let total = 0;

function showCartItems(shoping_cart) {
    let parent = document.getElementById("shoping-cart-final");
    parent.innerHTML = null
    let total = 0;

    shoping_cart.forEach(function (item) {
        total += Number(item.price) * item.quantity;
        // div for each item
        
        let div = document.createElement("div");
        div.setAttribute("class", "cart-item-final");

        let name = document.createElement("h5");
        name.innerHTML = item.name;

        let img = document.createElement("img");
        img.src = item.img;

        let price = document.createElement("p");
        price.innerHTML = "&#8377;" + item.price + ".00";

        div.append(img, name, price);
        parent.append(div);
        
    });

    let totalPrice = document.getElementById("total-final");
    totalPrice.innerHTML = "&#8377; " + JSON.parse(localStorage.getItem("total")) ;

}
showCartItems(shoping_cart);




//
let user_email = null;
let address = null;
function getAddress(e) {
    e.preventDefault();
    let information = document.getElementById("address-input");
    user_email = information.email.value;
    address = information.line1.value + " " + information.line2.value;

    localStorage.setItem("email",JSON.stringify(user_email))
    localStorage.setItem("address",JSON.stringify(address))
    window.location.href = "shiping.html";
    
}
///adding address to shipping page
document.getElementById("user_email").innerHTML = JSON.parse(localStorage.getItem("email"));
document.getElementById("user_address").innerHTML = JSON.parse(localStorage.getItem("address"));


//apply coupoun code
function applycode() {
    let coupon = document.getElementById("coupon").value
    document.getElementById("coupon").value = null;
    if (coupon == "get30") {
        let totalPrice = document.getElementById("total-final");
        let total = JSON.parse(localStorage.getItem("total"));
        total = (total * 0.3).toFixed(2);
        localStorage.setItem("total", JSON.stringify(total));
        
     totalPrice.innerHTML = "&#8377; " +JSON.parse(localStorage.getItem("total")) ;
        
    } else {
        alert("Ivalid coupon code")
    }
        
}



//fucniton for shipping method

let shipping
function shippingMethod() {
    shipping = document.getElementById("shipping").value;
    localStorage.setItem("shipping", JSON.stringify(shipping))
    window.location.href = "complete.html"

}

document.getElementById("shipping").innerHTML = JSON.parse(localStorage.getItem("shipping"))





//display pop-up
let complete = document.getElementById("pop");
console.log(complete)
function orderPlaced() {
    setTimeout(function() {
        complete.classList.add("active-popup");
    window.location.href = "#top"
    }, 3000);
}

complete.addEventListener("click", function () {
    complete.classList.remove("active-popup");
    localStorage.removeItem("cart");
    window.location.href = "../index.html"
})