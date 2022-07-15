var img = document.getElementById("prod-img");
var table = document.getElementById("productsTable");
var tableHTML = "";
var update_pop_up = document.getElementById("update_pop_up");
var ovrly = document.getElementById("overlay");
var edited_obj = "";
var edited_img_url = "";

// TO EDIT THE INFORMATION OF PRODUCT

var updatename = document.getElementById("updatename");
var updateDdesc = document.getElementById("updateDdesc");
var updateclass = document.getElementById("updateclass");
var oldClass = document.getElementById("oldClass");
var updatePrice = document.getElementById("updatePrice");
var oldcolors = document.getElementById("oldcolors");
var oldsize = document.getElementById("oldsize");
var upclr = document.getElementsByClassName("upclr");
var upsiz = document.getElementsByClassName("upsiz");
var edited_img = document.getElementById("edited_img");
var first_page = document.getElementById("first_page");
var second_page = document.getElementById("second_page");
var third_page = document.getElementById("third_page");


function showFirstPage() {
  console.log(second_page);
  first_page.style.display = "block";
  second_page.style.display = "none";
  third_page.style.display = "none";

}

function b2() {
  first_page.style.display = "none";
  second_page.style.display = "block";
  third_page.style.display = "none";

}

function b3() {
  first_page.style.display = "none";
  second_page.style.display = "none";
  third_page.style.display = "block";

}




var img_url;
var products = [];
var local_storage_prod = localStorage.getItem("Products");
if (JSON.parse(local_storage_prod) != null) {
  products = JSON.parse(local_storage_prod);
}

//FILL THE TABLE OF THE PRODUCTS

function displayData (){
  tableHTML = ""; 
  for (var x = 0; x < products.length; x++) {
    // console.log(products[i].img_url); 
    tableHTML += `
    <tr style="text-align:center ;">
      <td>${x}</td>
      <td><img style="width:60%; height:60%" src="${products[x].img_url}"></td>
      <td>${products[x].name}</td>
      <td>${products[x].class_prod}</td>
      <td>${products[x].desc}</td>
      <td>${products[x].sizes}</td>
      <td>${products[x].colors}</td>
      <td>${products[x].price}</td>
      <td><button onclick="updateProduct(${x})" style="margin-left:12% ;" type="button" class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button></td>
      <td><button onclick="deleteProduct(${x})" style="margin-left:12% ;" type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
    </tr>
    `;
  
  }
  table.innerHTML = tableHTML;

}

for (var x = 0; x < products.length; x++) {
  // console.log(products[i].img_url); 
  tableHTML += `
  <tr style="text-align:center ;">
    <td>${x}</td>
    <td><img style="width:60%; height:60%" src="${products[x].img_url}"></td>
    <td>${products[x].name}</td>
    <td>${products[x].class_prod}</td>
    <td>${products[x].desc}</td>
    <td>${products[x].sizes}</td>
    <td>${products[x].colors}</td>
    <td>${products[x].price}</td>
    <td><button onclick="updateProduct(${x})" style="margin-left:12% ;" type="button" class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button></td>
    <td><button onclick="deleteProduct(${x})" style="margin-left:12% ;" type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
  </tr>
  `;

}
table.innerHTML = tableHTML;


async function uploadPhoto() {
  const { value: file } = await Swal.fire({
    title: 'Select image',
    input: 'file',
    inputAttributes: {
      'accept': 'image/*',
      'aria-label': 'Upload your profile picture'
    }
  })

  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      Swal.fire({
        title: 'Your uploaded picture',
        imageUrl: e.target.result,
        imageAlt: 'The uploaded picture'
      })
    }
    img.src = "assets/imgs/" + file.name;
    img_url = img.src;
    reader.readAsDataURL(file)
  }
}

function productUpload() {
  var name = document.getElementById("name");
  var desc = document.getElementById("desc");
  var pric = document.getElementById("price");
  var class_prod = document.getElementById("class");
  var clrs = document.getElementsByClassName("clr");
  var size = document.getElementsByClassName("siz");
  var colors = "";
  var sizes = "";

  for (var i = 0; i < clrs.length; i++) {
    if (clrs[i].checked) {
      colors += clrs[i].value + ",";
    }
  }

  for (var i = 0; i < size.length; i++) {
    if (size[i].checked) {
      sizes += size[i].value + ",";
    }
  }

  var product = {
    name: name.value,
    desc: desc.value,
    price: pric.value,
    class_prod: class_prod.value,
    sizes: sizes,
    colors: colors,
    img_url: img_url
  }

  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success');
      products.push(product);
      var prod_arr = JSON.stringify(products);
      localStorage.setItem("Products", prod_arr);
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })










}


function updateProduct(x) {
  console.log(x);
  update_pop_up.style.display = "block";
  ovrly.style.display = "block";

  edited_img.src = products[x].img_url;
  updatename.value = products[x].name;
  updateDdesc.value = products[x].desc;
  updatePrice.value = products[x].price;
  oldcolors.innerHTML = "The Last Colors are:" + products[x].colors;
  oldsize.innerHTML = "The Old Sizes are: " + products[x].sizes;
  oldClass.innerHTML = "The Last Class is :" + products[x].class_prod;
  edited_obj = x;


}

async function editedUploadedPhoto() {
  const { value: file } = await Swal.fire({
    title: 'Select image',
    input: 'file',
    inputAttributes: {
      'accept': 'image/*',
      'aria-label': 'Upload your profile picture'
    }
  })


  edited_img.src = "assets/imgs/" + file.name;
  edited_img_url = edited_img.src;
  reader.readAsDataURL(file)
}


function submitUpdate() {

  products[edited_obj].name = updatename.value;
  products[edited_obj].desc = updateDdesc.value;
  products[edited_obj].price = updatePrice.value;

  var colors = "";
  var sizes = "";

  for (var i = 0; i < upclr.length; i++) {
    if (upclr[i].checked) {
      colors += upclr[i].value + ",";
    }
  }

  for (var i = 0; i < upsiz.length; i++) {
    if (upsiz[i].checked) {
      sizes += upsiz[i].value + ",";
    }
  }

  if (edited_img_url != "") {
    products[edited_obj].img_url = edited_img_url;
  }

  if (sizes != "") {
    products[edited_obj].sizes = sizes;

  }

  if (colors != "") {
    products[edited_obj].colors = colors;

  }

  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      var final_obj = JSON.stringify(products);
      localStorage.setItem("Products", final_obj);
      update_pop_up.style.display = "none";
      ovrly.style.display = "none";
      displayData(); 

      Swal.fire('Saved!', 'Try To Refresh The Page', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
      update_pop_up.style.display = "none";
      ovrly.style.display = "none";
    }
  })







}


function deleteProduct(x) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      products.splice(x, 1);
      var array_after_deletion = JSON.stringify(products);
      localStorage.setItem("Products", array_after_deletion);
      displayData(); 
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}


function searchByName(key) {
  var resultOfSearch = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].name.toUpperCase().includes(key) || products[i].name.toLowerCase().includes(key)) {
    resultOfSearch += `
    <tr style="text-align:center ;">
    <td>${i}</td>
    <td><img style="width:60%; height:60%" src="${products[i].img_url}"></td>
    <td>${products[i].name}</td>
    <td>${products[i].class_prod}</td>
    <td>${products[i].desc}</td>
    <td>${products[i].sizes}</td>
    <td>${products[i].colors}</td>
    <td>${products[i].price}</td>
    <td><button onclick="updateProduct(${i})" style="margin-left:12% ;" type="button" class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button></td>
    <td><button onclick="deleteProduct(${i})" style="margin-left:12% ;" type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
    </tr>
    `;

    }
  }
  table.innerHTML = resultOfSearch; 

}

function closeUpdateWindow(){
  ovrly.style.display = "none"; 
  update_pop_up.style.display = "none"; 
}



