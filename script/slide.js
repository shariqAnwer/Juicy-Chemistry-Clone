var left = 1;
var right = 5;


function show(){

    for(i = left; i <= right; i++){
    document.getElementById("c" + i).style.display = "inline-block";
    }

}

function moveRight() {

    if (left <=2 && right <= 6) {
        
    
        document.getElementById("c" + left).style.display = "none";
        left += 1;
        right += 1;
        
        for(i = left; i <= right; i++){
            document.getElementById("c" + i).style.display = "inline-block";
            }
    }  else{
        return;
    }  

}
   

function moveLeft() {

    if (left >=2 && right >= 6) {
        
    
        document.getElementById("c" + right).style.display = "none";
        left -= 1;
        right -= 1;
        
        for(i = left; i <= right; i++){
            document.getElementById("c" + i).style.display = "inline-block";
            }
    }  else{
        return;
    }  

}


   

