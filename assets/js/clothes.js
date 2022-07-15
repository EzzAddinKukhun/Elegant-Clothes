var row_products = document.getElementById("row_products");
var pop_up_blank = document.getElementById("pop_up_blank");
var ovrly = document.getElementById("overLay");

// INITIALIZE PRODUCTS OF SHOPPING LIST
var products_shopping_list = [];
var shopping_str = localStorage.getItem("SHOPPING");
if (JSON.parse(shopping_str) != null) {
  products_shopping_list = JSON.parse(shopping_str);
}

var xx =0 ; 


var products = [];
var local_storage_prod = localStorage.getItem("Products");
if (JSON.parse(local_storage_prod) != null) {
    products = JSON.parse(local_storage_prod);
}
Html_Pop_up = []; 
innerHTMLOfRowProducts = "";
// INITIALLIZE THE PRODUCTS OF THE STORE 
for (var i = 0; i < products.length; i++) {
    if (products[i].class_prod=="1"){
    innerHTMLOfRowProducts += `
        <div class="cprod col-md-4 position-relative wow fadeInUp">
             <img class="w-100 h-100" src="${products[i].img_url}">
                <div class="top-div-animation w-100 h-100 position-absolute  top-0">
                    <div class="product-name">
                            ${products[i].name}
                     </div>
                        <div onclick="showPopUp(${xx})" class="store-btn">
                            <h2>Store Now</h2>
                        </div>
                    </div>
         </div>
 
 
 `;
xx++; 
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
row_products.innerHTML = innerHTMLOfRowProducts; 

console.log(Html_Pop_up.length); 


function showPopUp(i){
    for (var x=0 ; x<products.length ; x++){
        if (x==i){
           console.log("FFF"+Html_Pop_up[i]); 
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




  displayDataInsideShoppingList(); 
}


function displayDataInsideShoppingList (){
  var htmlOFLIst = ""; 
  var priceOfList = 0; 
  var products_inside_shopping_list = document.getElementById("notify"); 
  for (var i=0 ; i<products_shopping_list.length ; i++){
    htmlOFLIst += 
    `<div style="margin-right: 170px;" class="product-bill-name w-50">
    <h5>${products_shopping_list[i].name}</h5>

      </div>
   <div style="margin-right: 10px" class="product-bill-price w-50">
    <h5>${products_shopping_list[i].price}</h5>
    <div onclick="deleteProductShoppingList()" class="product-bill-close">
    <i class="fa-solid fa-xmark"></i>
   </div>
    </div>
   `; 

   priceOfList += Number(products_shopping_list[i].price); 


  }

  var dataofbill = `<div class="bill-info w-100 p-1">
  <div class="bill-price d-flex justify-content-between">
      <div class="p1">
          <h3>SUMMATION</h3>
      </div>
      <div class="p2">
          <h3>${priceOfList}$</h3>
      </div>        
  </div>
  <button type="button" class="btn btn-primary w-100">Complete</button>

 </div>`; 
 products_inside_shopping_list.innerHTML = htmlOFLIst + dataofbill; 
  

}

function deleteProductShoppingList(){

}