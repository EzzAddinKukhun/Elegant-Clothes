//GET ALL REQUIRED ELEMENTS OF BILL & SHOPPING LIST ITSELF
var container_bill = document.getElementById("container_bill");
var bill_div_container = document.getElementById("bill_div_container");
var olay = document.getElementById("overLay");
var list = document.getElementById("storeList");
var body_foot_table = document.getElementById("body_foot_table");
var extract_logging_account;
var shopping_arr = [];
var accounts_arr = [];
var logging_arr = [];
var orders_arr = [];
var today = new Date();
var bill_value = 0.0;





//EXTRACT USER INFORMATION AND LOGGING STATUS
function initializeRequiredDataForShopping() {
    var logging_arr_str = localStorage.getItem("LOGIN");

    if (JSON.parse(logging_arr_str) != null) {
        logging_arr = JSON.parse(logging_arr_str);
    }

    if (logging_arr.length == 1) {
        var shopping_arr_str = localStorage.getItem("SHOPPING");
        if (JSON.parse(shopping_arr_str) != null) {
            shopping_arr = JSON.parse(shopping_arr_str);
        }

        var accounts_arr_str = localStorage.getItem("ACCOUNTS");
        if (JSON.parse(accounts_arr_str) != null) {
            accounts_arr = JSON.parse(accounts_arr_str);
        }

        var orders_arr_str = localStorage.getItem("ORDERS");
        if (JSON.parse(orders_arr_str) != null) {
            orders_arr = JSON.parse(orders_arr_str);
        }

        for (var i = 0; i < accounts_arr.length; i++) {
            if (logging_arr[0].username == accounts_arr[i].username) {
                extract_logging_account = accounts_arr[i];
                console.log(extract_logging_account);
            }
        }

    }
}

function viewBill() {
    container_bill.style.display = "block";
    container_bill.style.width = "100%";
    container_bill.style.height = "100vh";
    initializeRequiredDataForShopping();
    bill_div_container.style.display = "block";
    var innerHtmlOfTableBody = "";
    for (var i = 0; i < shopping_arr.length; i++) {
        innerHtmlOfTableBody += `
        <tr>
        <td>${i}</td>
        <td><img style="width:150px; height:250px;" src="${shopping_arr[i].img_url}"></td>
        <td>${shopping_arr[i].name}</td>
        <td>${shopping_arr[i].price}</td>
        </tr>
        `;
        bill_value += Number(shopping_arr[i].price);

    }

    bill_div_container.innerHTML =
        `<div id="bill" class="bill wow fadeInUp" style="position: fixed; top:10%; width:60%; height:74%; background-color: white;
     border-radius: 10px;
     left:19%">
    <h2 style="background-color: rgb(18, 18, 42); color: white; border-radius: 10px;" class="text-center pt-3 pb-3 ">
      Bill Confirmation</h2>
    <div class="data-consumer p-4 d-flex justify-content-around">
      <div class="column1 d-flex">
        <div class="c1a d-flex flex-column me-5">
          <div class="name-logo mb-2 text-danger">
            <h5>Full Name</h4>
          </div>
          <div class="name-logo mb-2 text-danger">
            <h5>State</h4>
          </div>
          <div class="name-logo mb-2 text-danger">
            <h5>City</h4>
          </div>
          <div class="name-logo mb-2 text-danger">
            <h5>Address</h4>
          </div>

        </div>
        <div class="c1b d-flex flex-column">
          <div class="name-logo mb-2">
            <h5>${extract_logging_account.firstname}</h4>
          </div>
          <div class="name-logo mb-2">
            <h5>${extract_logging_account.state}</h4>
          </div>
          <div class="name-logo mb-2">
            <h5>${extract_logging_account.city}</h4>
          </div>
          <div class="name-logo mb-2">
            <h5>${extract_logging_account.address}</h4>
          </div>

        </div>

      </div>
      <div class="column2 d-flex">
        <div class="c2a d-flex flex-column me-5"">
      <div class=" name-logo mb-2 text-danger">
          <h5>Username</h4>
        </div>
        <div class="name-logo mb-2 text-danger">
          <h5>Phone Number</h4>
        </div>
        <div class="name-logo mb-2 text-danger">
          <h5>Date of bill</h4>
        </div>
        <div class="name-logo mb-2 text-danger">
          <h5>Payment Method</h4>
        </div>

      </div>
      <div class="c2b d-flex flex-column">
        <div class="name-logo mb-2">
          <h5>${extract_logging_account.username}</h4>
        </div>
        <div class="name-logo mb-2">
          <h5>${extract_logging_account.phone}</h4>
        </div>
        <div class="name-logo mb-2">
          <h5>${today.getFullYear()}/${today.getMonth() + 1}/${today.getDay() + 10}</h4>
        </div>
        <div class="name-logo mb-2">
          <select id="payment_method" style="border-radius:20px; padding:5px" class="payment-method">
            <option selected disabled>Select Payment Method</option>
            <option>VISA Card</option>
            <option>On Receive</option>
          </select>
        </div>

      </div>

    </div>
  </div>
   <div  style="overflow:auto; width: 80%; height: 300px; margin:auto">
  <table style="width: 100%; margin:auto; text-align:center; height: 300px;" class="table-foot">
    <thead>
      <tr style="color: white; background-color:rgb(18, 18, 42);">
        <td style="width:10%">id</td>
        <td style="width:50%;">Product Picture</td>
        <td style="width:20% ;">Product Name</td>
        <td style="width:20% ;">Product Price</td>

      </tr>
    </thead>
    <tbody id="body_foot_table">
      ${innerHtmlOfTableBody}
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">Bill Value</td>
        <td id="sum" colspan="3">${bill_value}$</td>

      </tr>
    </tfoot>
  </table>
  </div>

  <div style="width: 10%; margin:auto; margin-top:39px" class="button-confirmation-bill">
    <button onclick="sendRequest()" type="button" class="btn btn-primary ">Send</button>
  </div>

  <div onclick="closeBill()" style="position: absolute; font-size: 45px; top: 0; right: 3%; color: white;" class="x-mark-div">
    <i class="fa-solid fa-xmark"></i>
  </div>
    </div>`;
    closeList();


}


function closeList() {
    list.style.transform = "translateX(-102%)";
    list.style.transition = "1s all";
    olay.style.opacity = "0";
    olay.style.display = "none";

}


function closeBill() {
    var bill_close = document.getElementById("bill");
    bill_close.style.display = "none";
    container_bill.style.display = "none";


}

function sendRequest() {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, send it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            var order = {
                user : extract_logging_account,
                products_list : shopping_arr
            }
            console.log(orders_arr.length); 

            orders_arr.push(order); 
            var order_arr_str_send = JSON.stringify(orders_arr);
            localStorage.setItem("ORDERS", order_arr_str_send);
            swalWithBootstrapButtons.fire(
                'SEND!',
                'Your order has been sent.',
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'error'
            )
        }
    })


}



