var shopping_arr_admin = [];
var shopping_list_admin = localStorage.getItem("ORDERS");
if (JSON.parse(shopping_list_admin) != null) {
    shopping_arr_admin = JSON.parse(shopping_list_admin);
}

var table_body = document.getElementById("tbody_pur");
var htmlTable = ""; 




for (var i=0 ; i<shopping_arr_admin.length ; i++){
    var date = new Date (); 
    console.log("ITTERATION"+i); 
    var user_info = shopping_arr_admin[i].user; 
    var shopping_list_user = shopping_arr_admin[i].products_list;

    console.log(shopping_list_user); 

    var username_order =user_info.firstname + " "+user_info.lastname; 
    var location_person = user_info.state + " / "+ user_info.city; 
    var address_person = user_info.address; 
    var month = date.getMonth()+1; 
    var days = date.getDay ()+10; 
    var full_date = date.getFullYear() +"/"+month +"/"+days; 

    //GET ALL IMAGES
    var imgs = ""; 
    for (var x=0 ; x<shopping_list_user.length ;x++){
        imgs+= `<img style="width:150px; height:150px" src="${shopping_list_user[x].img_url}">`; 
    }

    //GET ALL names
    var names = ""; 
    for (var y=0 ; y<shopping_list_user.length ;y++){
        names+= shopping_list_user[y].name+",";

    }

    //GET ALL prices
    var pricc = 0.0; 
    for (var z=0 ; z<shopping_list_user.length ;z++){
        pricc+= Number (shopping_list_user[z].price);
    }


    htmlTable += `
    <tr>
    <td>${i}</td>
    <td>${username_order}</td>
    <td>${location_person}</td>
    <td>${address_person}</td>
    <td>${full_date}</td>
    <td>${imgs}</td>
    <td>${names}</td>
    <td>${pricc}</td>
    <td><button onclick="reply()" type="button" class="btn btn-success">Success</button>
    </td>
    </tr>
    `; 


}

table_body.innerHTML = htmlTable; 


function reply (){
    Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to confirm this order? ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Condfirm it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Confirmed!',
            'The Order is confirmed',
            'success'
          )
        }
      })
}

function logoutadmin (){
    window.location = "http://127.0.0.1:5500/index.html";

}