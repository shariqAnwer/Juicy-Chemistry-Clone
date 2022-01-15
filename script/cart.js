let shoping_cart = JSON.parse(localStorage.getItem("cart"))

function showCartItems(shoping_cart) {
    let parent = document.getElementById("shoping-cart");
    parent.innerHTML = null
    let total = 0;
    if (shoping_cart.length != 0) {
        document.getElementById("bottom-cart").style.display = "block";
    }
    shoping_cart.forEach(function (item) {
        total += Number(item.price) * item.quantity;
        // div for each item
        
        let div = document.createElement("div");
        div.setAttribute("class", "cart-item");

        let name = document.createElement("h5");
        name.innerHTML = item.name;

        let img = document.createElement("img");
        img.src = item.img;

        let price = document.createElement("p");
        price.innerHTML = "&#8377;" + item.price + ".00";
        
        let div1 = document.createElement("div");
        div1.setAttribute("id", "addorRemove");
        
        div1.innerHTML = `<div onclick="removeQuantity(event)">
    <i class="fas fa-minus"></i>
</div>
<div id="quantity">
    ${item.quantity}
</div>
<div onclick="addquantity(event)">
    <i class="fas fa-plus" ></i>

</div>`;

        
div.append(img, name, price,div1);
parent.append(div);
    
        
    });
      localStorage.setItem("total",JSON.stringify(total))
    let totalPrice = document.getElementById("total");
    totalPrice.innerHTML = "&#8377;" + JSON.parse(localStorage.getItem("total")) ;

}
showCartItems(shoping_cart);

function gotoCheckout(){
    window.location.href = "checkout.html";
}

       function addquantity(event) {
           let addName = event.target.parentNode.parentNode.parentNode.childNodes[1].innerHTML;
           let current_cart = JSON.parse(localStorage.getItem("cart"));
           current_cart.forEach(function (item) {
               if (item.name === addName) {
                   item.quantity++;
               }
           });

           showCartItems(current_cart);

           localStorage.setItem("cart", JSON.stringify(current_cart));



        };


        function removeQuantity(event) {
           let addName = event.target.parentNode.parentNode.parentNode.childNodes[1].innerHTML;
           let current_cart = JSON.parse(localStorage.getItem("cart"));
            for (let i = 0; i < current_cart.length;i++){
               if (current_cart[i].name === addName) {
                   current_cart[i].quantity--;
                   if (current_cart[i].quantity == 0) {
                       current_cart.splice(i, 1);
                   }
                   break;
               }
           }
           showCartItems(current_cart);
           localStorage.setItem("cart", JSON.stringify(current_cart));



};






