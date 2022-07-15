var username = document.getElementById("username_log_in");
var password = document.getElementById("password_log_in");
var lginpop = document.getElementById("loginpop");

var login = document.getElementById("login");
var signupp = document.getElementById("signupp");
var myaccount = document.getElementById("myaccount");
var logout = document.getElementById("logout");

console.log(logout);



//GET ALL AVAAILABLE ACCOUNTS IN THIS STORE
var accounts_arr = localStorage.getItem("ACCOUNTS");
var accounts_information = [];
if (JSON.parse(accounts_arr) != null) {
    accounts_information = JSON.parse(accounts_arr);
    console.log(accounts_information.length);
}

Log_In_Status = [];

var account_exist = 0;
var password_correct = 0;
var signed_in_success = 0;
var index;

//VERIFY IF THE ACCOUNT EXIST
function displayLogInPop() {
    lginpop.style.display = "block";

}

var log_in_chex = 0; 

// CHECK IF ANY ACCOUNT IS LOGGIED IN 

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
        }
    }
}


function LogIn() {


    for (var i = 0; i < accounts_information.length; i++) {
        if (username.value == accounts_information[i].username) {

            account_exist = 1;
            index = i;
            break;
        }
    }


    if (account_exist == 1) {
        verifyPassword(index);
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'This account does not exist!',
        })
    }

}

function verifyPassword(index) {
    if (accounts_information[index].password == password.value) {
        var log_in = {
            username: username.value,
            log_status: 1

        }
        log_in_chex = 1; 

        Log_In_Status.push(log_in);
        var Log_in_string = JSON.stringify(Log_In_Status);
        var LogIn = localStorage.setItem("LOGIN", Log_in_string);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
        })
        lginpop.style.display = "none";

        login.style.display = "none";
        signupp.style.display = "none";
        logout.style.display = "block";
        myaccount.style.display = "block";

    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your Passowrd Is Wrong',
        })

    }

}

function closeBtn() {
    lginpop.style.display = "none";

}


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
        window.location = "http://127.0.0.1:5500/watches.html"; 

    }

}





function goToSignUpPage() {
    window.location = "http://127.0.0.1:5500/SignUp.html";
}