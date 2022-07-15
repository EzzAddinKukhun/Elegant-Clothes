



//GET THE BUTTONS OF LOGIN,SIGN UP AND TOGGLE THE WHEN THE USER 
//MAKE LOGGING TO MYACCOUNT BUTTON AND LOG OUT BTN
var login = document.getElementById("login");
var signupp = document.getElementById("signupp");
var myaccount = document.getElementById("myaccount");
var logout = document.getElementById("logout");
var log_in_chex = 0;


// INITIALIZE PRODUCTS OF SHOPPING LIST
var products_shopping_list = [];
var shopping_str = localStorage.getItem("SHOPPING");
if (JSON.parse(shopping_str) != null) {
    products_shopping_list = JSON.parse(shopping_str);
}

//GET THE CONTAINER OF SHOPPING LIST WHICH STORE PRODUCTS BILL 
var products_inside_shopping_list = document.getElementById("notify");



//VERIFY IF THRER IS ANY ACCOUNT LOGGING IN NOW
var loggied_in_string = localStorage.getItem("LOGIN");
console.log(loggied_in_string);
var logged_in_accounts_now = [];
if (JSON.parse(loggied_in_string) != null) {
    logged_in_accounts_now = JSON.parse(loggied_in_string);
    for (var i = 0; i < logged_in_accounts_now.length; i++) {
        if (logged_in_accounts_now[i].log_status == 1) {
            login.style.display = "none";
            signupp.style.display = "none";
            logout.style.display = "block";
            myaccount.style.display = "block";
            log_in_chex = 1;
            //display product list as long as the user is logging in 
            displayDataInsideShoppingList();

        }
    }
}


//DISPLAY THE DATA INSIDE THE SHOPPING LIST
function displayDataInsideShoppingList(){
    var htmlOFLIst = "";
    var priceOfList = 0;
    var products_inside_shopping_list = document.getElementById("notify");
    for (var i = 0; i < products_shopping_list.length; i++) {
        htmlOFLIst +=
            `
        <div style="height:70px; border-bottom: 1px solid gray; text-align:left " class="product-bill w-100 d-flex align-items-center ">
            
          <div style="margin-right:170px; width:70%" class="product-bill-name ">
             <h6>${products_shopping_list[i].name}</h6>
          </div>

          <div  style="margin-right:20px; width:20%" class="product-bill-price  ">
            <h6>${products_shopping_list[i].price}$</h6>
          </div>

          <div style="width:10%" onclick="deleteProductShoppingList(${i})" class="product-bill-close">
            <i class="fa-solid fa-xmark"></i>
          </div>

        </div>`;

        priceOfList += Number(products_shopping_list[i].price);


    }

    var dataofbill = `<div style="width:96%" class="bill-info  m-auto  ">
    <div  class="bill-price d-flex justify-content-between ">
        <div class="p1">
            <h5>Summation</h5>
        </div>
        <div class="p2">
            <h5>${priceOfList}$</h5>
        </div>        
    </div>
    <button onclick="viewBill()"  type="button" class="btn btn-primary w-100 ">Complete</button>
  
   </div>`;
    products_inside_shopping_list.innerHTML = htmlOFLIst + dataofbill;

}



//DELETE SELECTED ELEMENT FROM SHOPPING LIST
function deleteProductShoppingList(i) {
    products_shopping_list.splice(i,1); 
    var uploade_shopping_list_after_deleteion_str = JSON.stringify(products_shopping_list); 
    localStorage.setItem("SHOPPING",uploade_shopping_list_after_deleteion_str); 
    displayDataInsideShoppingList(); 
}

//DELETE ALL ELEMENTS INSIDE SHOPPING LIST
function deleteAllElementsInsideShoppingList() {
    for (var i =0 ; i<products_shopping_list.length ; i++){
        products_shopping_list.splice(i,1); 

    }
    var uploade_shopping_list_after_deleteion_str = JSON.stringify(products_shopping_list); 
    localStorage.setItem("SHOPPING",uploade_shopping_list_after_deleteion_str); 
}


//VIEW THE CLOTHES LIST OF THE USER AS LONG AS THE USER IS LOGGING IN
function viewClothes(){
    if (log_in_chex == 0){
        Swal.fire({
            title: 'You are not logged in',
            icon: 'info',
            
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
              '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
          })

    }
    else{
        window.location = "http://127.0.0.1:5500/clothes.html"; 

    }

}


//VIEW THE WATCHES LIST OF THE USER AS LONG AS THE USER IS LOGGING IN
function viewWatches(){
    if (log_in_chex == 0){
        Swal.fire({
            title: 'You are not logged in',
            icon: 'info',
            
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
              '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
          })

    }
    else{
        window.location = "http://127.0.0.1:5500/watch.html"; 

    }

}


//MOVE TO SIGN UP PAGE
function goToSignUpPage() {
    window.location = "http://127.0.0.1:5500/SignUp.html";
}

//MOVE TO SIGN UP PAGE
function goToHomePage() {
    window.location = "http://127.0.0.1:5500/index.html";
}

//MOVE TO SIGN UP PAGE
function goToAboutUsPage() {
    window.location = "http://127.0.0.1:5500/aboutUs.html";
}




//LOG OUT FROM THE WEBSITE
function logOut() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure to make LogOut?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, LogOut!',
        cancelButtonText: 'No,Cancel',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            Log_In_Status.pop();
            var log_out_str = JSON.stringify(Log_In_Status);
            var LogIn = localStorage.setItem("LOGIN", log_out_str);
            login.style.display = "block";
            signupp.style.display = "block";
            logout.style.display = "none";
            myaccount.style.display = "none";
            window.location = "http://127.0.0.1:5500/index.html";
            /*
            IMPLEMENT A FUNCTION WHICH DELETE ALL THE PRODUCTS OF PRODUCT LIST WHEN THE 
            USER LOGOUT
            */
            deleteAllElementsInsideShoppingList();
            swalWithBootstrapButtons.fire(
                'LOGEED OUT!',
                'You are logged out successfully',
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
            )
        }
    })



}
