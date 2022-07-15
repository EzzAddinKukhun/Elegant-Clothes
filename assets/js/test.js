var navmobilelist = document.getElementById("navlist");
var imgslider = document.getElementById("Themes");
var textcontent = document.getElementById("adds");
var ovrLay = document.getElementById("overLay");
var list = document.getElementById("storeList");
var topheader = document.getElementById("topheader");
var dots = document.getElementsByClassName("dot");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var burger_btn = document.getElementById("burger"); 
var loader = document.getElementById("loader");
var wrapper = document.getElementById("wrapper");
var rollingBtn = document.getElementById("rollingbutton");




var toggle = 0;

var boolclk = [0, 1, 0];

dots[1].style.backgroundColor = "gray";



var i = 2;
var w = 2;
console.log(imgslider);

function changeIntroductionPhoto() {
    i++;

    if (i == 4) {
        i = 1;
        console.log(i); 


        changeContent(i);
    }
    else {
        changeContent(i);
    }


}


console.log("i bef"+i); 
setInterval(changeIntroductionPhoto, 5000);
console.log("i aft"+i); 






function changeContent(x) {
    if (x == 1) {
        imgslider.innerHTML = `
        <div data-wow-duration="5s" class="image d-flex w-100 h-100 wow fadeInUp">
                <img  class="wow slideInDown" src="assets/imgs/IMG1/image_part_001.jpg">
                <img  class="wow fadeInUp" src="assets/imgs/IMG1/image_part_002.jpg">
                <img  class="wow slideInDown" src="assets/imgs/IMG1/image_part_003.jpg">
                <img  class="wow fadeInUp" src="assets/imgs/IMG1/image_part_004.jpg">
                <img  class="wow slideInDown" src="assets/imgs/IMG1/image_part_005.jpg">
        </div>
        <div  id="adds" class="Intro position-absolute ">
        <div class="text-center" data-wow-delay="5s" id="inner-content wow jackInTheBox">
        <h1 class="mb-3"  style="font-size:54px">ELEGANT CLOTHES</h1>
        <h3 class="mb-3">New World For Men Clothes</h3>
        <h5 class="mb-3">View Our Products</h5>
        <div style="width:80%; margin:auto" class="btn-animation">
        <button  class="btn btn-light text-dark mid">Register Now</button>
       </div>
              </div>
        </div>
        `;

    }
    else {
      var  str1 = `<div data-wow-duration="5s" class="image d-flex w-100 h-100 wow fadeInUp">
    <img  class="wow slideInDown" src="assets/imgs/IMG${x}/image_part_001.jpg">
    <img  class="wow fadeInUp" src="assets/imgs/IMG${x}/image_part_002.jpg">
    <img  class="wow slideInDown" src="assets/imgs/IMG${x}/image_part_003.jpg">
    <img  class="wow fadeInUp" src="assets/imgs/IMG${x}/image_part_004.jpg">
    <img  class="wow slideInDown" src="assets/imgs/IMG${x}/image_part_005.jpg">
    </div>`;

        if (x == 2) {
       var  str2 =
                `<div id="adds" class="Intro position-absolute ">
         <div class="text-center" data-wow-delay="5s" id="inner-content wow jackInTheBox">
        <h1 class="mb-3" style="font-size:54px">YOUR WEDDING</h1>
        <h3 class="mb-3">SUMMER COLLECTION</h3>
        <h5 class="mb-3">Comfort Products</h5>
        <div style="width:80%; margin:auto" class="btn-animation">
        <button  class="btn btn-light text-dark mid">Register Now</button>
      </div>        </div>
        </div>
        `;
        }
        else if (x == 3) {
           var str2 =
                `<div id="adds" class="Intro position-absolute ">
        <div class="text-center" data-wow-delay="5s" id="inner-content wow jackInTheBox ">
        <h1 class="mb-3" style="font-size:54px">SMART WATCHES</h1>
        <h3 class="mb-3">New Watches</h3>
        <h5 class="mb-3">Register & View our watches</h5>
        <div style="width:80%; margin:auto" class="btn-animation">
        <button  class="btn btn-light text-dark mid">Register Now</button>
      </div>        </div>
        </div>
        `;
        }

        imgslider.innerHTML = str1 + str2;




    }
}



function changeImgInHover() {

}


function closeList() {
    var clsbtn = document.getElementById("closeListBtn");
    var list = document.getElementById("storeList");
    list.style.transform = "translateX(-102%)";
    list.style.transition = "1s all";
    ovrLay.style.opacity = "0";
    ovrLay.style.display = "none";

    if (toggle == 1){
        navmobilelist.style.transform = "translateX(102%)";
        ovrLay.style.opacity = "0.5";
        ovrLay.style.display = "none";
        navmobilelist.style.transition = "1s all";
        toggle = 0; 
    }

}


function viewBtn() {
    list.style.transform = "translateX(0%)";
    ovrLay.style.opacity = "0.5";
    ovrLay.style.display = "block";
    list.style.transition = "1s all";


}

function scrollToAboutUS() {
    window.scrollTo({
        top: 500,
        behavior: "smooth"

    })

}

// CHANGE COLOR OF TOP-FIXED BAR
window.onscroll = function () {
    var y = window.scrollY;
    if (y > 200) {
        topheader.style.backgroundColor = "#243340";
        topheader.style.color = "white";
        topheader.style.transition = "2.5s all";

    }
    else if (y < 200) {
        topheader.style.backgroundColor = "#000066";
        topheader.style.color = "white";
        topheader.style.transition = "2.5s all";
    }

    var x = window.scrollY; 
    if (x>700){
        rollingBtn.style.opacity = "1"; 
        rollingBtn.style.transition = "1s all"

    }
    else{
        rollingBtn.style.opacity = "0"; 
        rollingBtn.style.transition = "1s all"

    }



}

function scrollToTheTopPage() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"

    })

}



// SLIDER CHANGE ON DOT CLICK
// start from div2 / dots[1]==1
dots[0].onclick = function () {

    dots[0].style.backgroundColor = "gray";
    dots[1].style.backgroundColor = "white";
    dots[2].style.backgroundColor = "white";


    if (boolclk[1] == 1) {
        p2.style.transform = "translateX(100%)";
        p1.style.transform = "translateX(100%)";

        p1.style.transition = "1s all";
        p2.style.transition = "1s all";

        boolclk[0] = 1;
        boolclk[1] = 0;
        boolclk[2] = 0;


    }
    else if (boolclk[2] == 1) {
        p3.style.transform = "translateX(100%)";
        p2.style.transform = "translateX(100%)";
        p1.style.transform = "translateX(100%)";

        p1.style.transition = "1s all";
        p2.style.transition = "1s all";
        p3.style.transition = "1s all";

        boolclk[0] = 1;
        boolclk[1] = 0;
        boolclk[2] = 0;


    }

}

dots[1].onclick = function () {
    dots[0].style.backgroundColor = "white";
    dots[1].style.backgroundColor = "gray";
    dots[2].style.backgroundColor = "white";

    if (boolclk[0] == 1) {
        p1.style.transform = "translateX(0%)";
        p2.style.transform = "translateX(0%)";

        p1.style.transition = "1s all";
        p2.style.transition = "1s all";


        boolclk[0] = 0;
        boolclk[1] = 1;
        boolclk[2] = 0;

    }

    else if (boolclk[2] == 1) {
        p3.style.transform = "translateX(0%)";
        p1.style.transform = "translateX(0%)";
        p2.style.transform = "translateX(0%)";

        p1.style.transition = "1s all";
        p2.style.transition = "1s all";
        p3.style.transition = "1s all";


        boolclk[0] = 0;
        boolclk[1] = 1;
        boolclk[2] = 0;

    }


}

dots[2].onclick = function () {
    dots[0].style.backgroundColor = "white";
    dots[1].style.backgroundColor = "white";
    dots[2].style.backgroundColor = "gray";

    if (boolclk[0] == 1) {
        p1.style.transform = "translateX(-100%)";
        p2.style.transform = "translateX(-100%)";
        p3.style.transform = "translateX(-100%)";



        p1.style.transition = "1s all";
        p2.style.transition = "1s all";
        p3.style.transition = "1s all";


        boolclk[0] = 0;
        boolclk[1] = 0;
        boolclk[2] = 1;

    }

    else if (boolclk[1] == 1) {

        p1.style.transform = "translateX(-100%)";
        p2.style.transform = "translateX(-100%)";
        p3.style.transform = "translateX(-100%)";



        p1.style.transition = "1s all";
        p2.style.transition = "1s all";
        p3.style.transition = "1s all";


        boolclk[0] = 0;
        boolclk[1] = 0;
        boolclk[2] = 1;

    }


}


function viewNavMobile() {
    toggle = !toggle;
    console.log(toggle); 

    if (toggle == 1) {
        navmobilelist.style.transform = "translateX(0%)";
        ovrLay.style.opacity = "0.5";
        ovrLay.style.display = "block";
        navmobilelist.style.transition = "1s all";
        burger_btn.style.transition = "1s all";

    }
    else {
        navmobilelist.style.transform = "translateX(102%)";
        ovrLay.style.opacity = "0.5";
        ovrLay.style.display = "none";
        navmobilelist.style.transition = "1s all";
    }

}



