var accounts_arr = localStorage.getItem("ACCOUNTS");
var accounts_information = [];
if (JSON.parse(accounts_arr) != null) {
    accounts_information = JSON.parse(accounts_arr);
    console.log(accounts_information.length);
}



function signUp() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var bdate = document.getElementById("bdate").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var select_state = document.getElementById('statename');
    var select_city = document.getElementById('cityname');
    

    

    var state_value = select_state.options[select_state.selectedIndex].value;
    var city_value = select_city.options[select_city.selectedIndex].value;

    console.log(select_state); 
    console.log(select_city); 

   

    if (fname == "" || lname == "" || bdate == "" ||  state_value == "" || address == "" ||
        city_value == "" || email == "" || username == "" || password == "" || confirm_password == ""
    ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Try To Fill All Required Fields, Thanks!',
        })

    }

    else {
        var repeated = 0;
        for (var i = 0; i < accounts_information.length; i++) {
            if (accounts_information[i].username == username) {
                repeated = 1;
                break;
            }
        }
        console.log(repeated);

        if (repeated == 1) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'This Account is already exist, try to choose another name, Thanks!',
            })
        }
        else {
            if (password != confirm_password) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Two Passwords are not identical',
                })

            }
            else {
                var account = {
                    firstname: fname,
                    lastname: lname,
                    Bdate: bdate,
                    gender: "NO",
                    state: state_value,
                    city: city_value,
                    address: address,
                    phone: phone,
                    email: email,
                    username: username,
                    password: password

                }
                accounts_information.push(account);
                var accounts_arr = JSON.stringify(accounts_information);
                localStorage.setItem("ACCOUNTS", accounts_arr);
                Swal.fire(
                    'SUCCESS!',
                    'You Signed Up Successfully!',
                    'success'
                )


            }
        }
    }






}

function goToHome(){
    window.location = "http://127.0.0.1:5500/index.html";
}