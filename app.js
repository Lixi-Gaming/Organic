// Show page trang chủ - giới thiệu



// Show list product
function openProduct(event, productName) {

        var i, x, tablinks;
        x = document.getElementsByClassName("product");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");


        for (i = 0; i < x.length; i++) {
          tablinks[i].className = tablinks[i].className.replace("active_product", "");
        }
        document.getElementById(productName).style.display = "block";
        event.currentTarget.className += " active_product";

} 