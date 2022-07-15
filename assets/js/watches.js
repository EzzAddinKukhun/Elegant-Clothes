var row_products = document.getElementById("row_products");
var pop_up_blank = document.getElementById("pop_up_blank");
var ovrly = document.getElementById("overLay");




var products = [];
var local_storage_prod = localStorage.getItem("Products");
if (JSON.parse(local_storage_prod) != null) {
    products = JSON.parse(local_storage_prod);
}
var xxx = 0; 
Html_Pop_up = []; 
innerHTMLOfRowProducts = "";
// INITIALLIZE THE PRODUCTS OF THE STORE 
for (var i = 0; i < products.length; i++) {
    if (products[i].class_prod=="3"){
    innerHTMLOfRowProducts += `
        <div class="cprod1 col-md-2 position-relative wow fadeInUp">
             <img class="w-100 h-100" src="${products[i].img_url}">
                <div class="top-div-animation w-100 h-100 position-absolute  top-0">
                    <div id="prodnm" class="product-name">
                            ${products[i].name}
                     </div>
                        <div onclick="showPopUp(${xxx})" class="store-btn">
                            <h2>Store Now</h2>
                        </div>
                    </div>
         </div>
 
 
 `;
xxx++;
 var pop_up = `<div style="z-index:10000000" class="pop-up-store wow fadeInUp">
 <h2 class="text-center pt-3">Product Information</h2>
 <div style="width:90%; margin:auto; margin-top: 20px;" class="table-data ">
     <table class="table text-center">
         <thead class="table-dark">
           <td class="w-50">Data</td>
           <td class="w-50">Information</td>
         </thead>
         <tbody class="rowsOFTable">
           <tr>
             <td>Product Picture</td>
             <td><img style="width:150px; height:200px" src="${products[i].img_url}"</td>
           </tr>
           <tr>
             <td>Product Name</td>
             <td>${products[i].name}</td>
           </tr>
           <tr>
             <td>Product Description</td>
             <td>${products[i].desc}</td>
           </tr>
           <tr>
             <td>Product Colors</td>
             <td>${products[i].colors}</td>
           </tr>
           <tr>
             <td>Product Sizes</td>
             <td>${products[i].sizes}</td>
           </tr>
           <tr>
             <td>Product Price</td>
             <td>${products[i].price}</td>
           </tr>
         </tbody>
       </table>
 </div>
 <div style="width:40% ;" class="add-to-cart  m-auto">
     <button onclick="addToCart(${i})" style="width: 150px; height:50px;  margin-right: 20px;" type="button" class="btn btn-primary">Add To Cart</button>

     <button onclick="cancelPopUpBuy()" style="width: 150px; height:50px" type="button" class="btn btn-danger">Cancel</button>

 </div>
</div>
`; 
Html_Pop_up.push(pop_up); 
    }
}
console.log(innerHTMLOfRowProducts); 
row_products.innerHTML = innerHTMLOfRowProducts; 

console.log(Html_Pop_up.length); 


function showPopUp(i){
    for (var x=0 ; x<Html_Pop_up.length ; x++){
        if (x==i){
            pop_up_blank.style.display = "block"; 
            pop_up_blank.innerHTML = Html_Pop_up[i];
            ovrly.style.zIndex = 1000; 
            ovrly.style.display = "block";  
        }
    }
}

function cancelPopUpBuy (){
    pop_up_blank.style.display = "none"; 
    ovrly.style.display = "none";  


}

function addToCart(i){
    var prod_list = products[i]; 
    products_shopping_list.push(prod_list); 
    var prod_list_str = JSON.stringify(products_shopping_list); 
    localStorage.setItem("SHOPPING",prod_list_str); 
    cancelPopUpBuy(); 
    Swal.fire({
      title: 'Your Item added to the cart!',
      icon: 'success',
  
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
}