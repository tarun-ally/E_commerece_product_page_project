const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const showingNumber = document.getElementById('showingNumber');
const cart = document.getElementById('cart');
const cartButton = document.getElementById('cartButton');
const checkout = document.getElementById('checkout');
const deleteCart = document.getElementById("delete");
const productAdded = document.getElementById('product-added');
const close = document.getElementById('close');
const emptyCart = document.getElementById('empty-cart');
const shadow = document.querySelector("#mylink");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const lightGalery = document.getElementById("light-galery");
const lightGaleryClose = document.getElementById("lg-close");

const lightGalleryShow = document.getElementById("desktop-image");

lightGalleryShow.addEventListener('click',mydesktopImage);
function mydesktopImage(){
    lightGalery.style.display = 'block'; 
}

lightGaleryClose.addEventListener('click',myLightGaleryClose);

function myLightGaleryClose(){

    lightGalery.style.display='none';
    console.log('tar')
}
const lightGaleryThumbnail = document.getElementById("lg-thumbnail");

 

const lightGaleryPrevious=document.getElementById("lg-previous");


const lightGaleryNext=document.getElementById("lg-next");




// for Light -gallery..................................................
let count1 =1;

lightGaleryThumbnail.addEventListener('click',mylightGaleryThumbnail)


function mylightGaleryThumbnail(e){
    // console.log(e.target);
    // console.log(e.target.alt);
    if(e.target.alt !=undefined){
        count1 = e.target.alt;
        lightGalery.style.backgroundImage=`url(http://127.0.0.1:5500/images/image-product-${e.target.alt}.jpg)`;
        // lightGalery.childNodes[1].src = `http://127.0.0.1:5500/images/image-product-${e.target.alt}.jpg`
    }
    // console.log(lightGalery.childNodes[1].src);
  
}
lightGaleryPrevious.addEventListener('click',mylightGaleryPrevious);

lightGaleryNext.addEventListener('click',mylightGaleryNext);

function mylightGaleryNext(){
    if (count1==4){
        count1 =1;
    }else{
        count1+=1;
    }
    if( count1==1){
        lightGalery.style.backgroundImage='url(images/image-product-1.jpg)';
    }
    else if(count1 ==2){
        lightGalery.style.backgroundImage='url(images/image-product-2.jpg)';
    }
    else if(count1 ==3){
        lightGalery.style.backgroundImage='url(images/image-product-3.jpg)';
    }
    else if(count1 ==4){
        lightGalery.style.backgroundImage='url(images/image-product-4.jpg)';
    }
    console.log(count1);


}
function mylightGaleryPrevious(){

    
    if (count1==1){
        count1 =4;
    }else{
        count1-=1;
    }
    if( count1==1){
        lightGalery.style.backgroundImage='url(images/image-product-1.jpg)';
    }
    else if(count1 ==2){
        lightGalery.style.backgroundImage='url(images/image-product-2.jpg)';
    }
    else if(count1 ==3){
        lightGalery.style.backgroundImage='url(images/image-product-3.jpg)';
    }
    else if(count1 ==4){
        lightGalery.style.backgroundImage='url(images/image-product-4.jpg)';
    }
    console.log(count);


}

// .........................................................................
const heroImage = document.getElementById("hero-image");

// for desktop..........
const thumbnail = document.getElementById('thumbnail');

const desktopImage = document.getElementById('desktopImage');
// console.log(thumbnail.childNodes);
// console.log(thumbnail.childNodes[3].alt);

// console.log(desktopImage.childNodes);
// console.log(desktopImage.childNodes[1].src);

thumbnail.addEventListener('click',myThumbnail);
function myThumbnail(e){
    console.log(e.target);
    console.log(e.target.alt);
    if(e.target.alt !=undefined){

        desktopImage.childNodes[1].src = `http://127.0.0.1:5500/images/image-product-${e.target.alt}.jpg`
    }
    console.log(desktopImage.childNodes[1].src);
  
}



previous.addEventListener('click',myPrevious);
next.addEventListener('click',myNext);

let count =1;

function myNext(){
    if (count==4){
        count =1;
    }else{
        count+=1;
    }
    if( count==1){
        heroImage.style.backgroundImage='url(images/image-product-1.jpg)';
    }
    else if(count ==2){
        heroImage.style.backgroundImage='url(images/image-product-2.jpg)';
    }
    else if(count ==3){
        heroImage.style.backgroundImage='url(images/image-product-3.jpg)';
    }
    else if(count ==4){
        heroImage.style.backgroundImage='url(images/image-product-4.jpg)';
    }
    console.log(count);


}
function myPrevious(){


    if (count==1){
        count =4;
    }else{
        count-=1;
    }
    if( count==1){
        heroImage.style.backgroundImage='url(images/image-product-1.jpg)';
    }
    else if(count ==2){
        heroImage.style.backgroundImage='url(images/image-product-2.jpg)';
    }
    else if(count ==3){
        heroImage.style.backgroundImage='url(images/image-product-3.jpg)';
    }
    else if(count ==4){
        heroImage.style.backgroundImage='url(images/image-product-4.jpg)';
    }
    console.log(count);


}


// console.log(emptyCart);

close.addEventListener('click',()=>{shadow.style.display='none'})

const prizing = document.getElementById('name-value');
// console.log(prizing.childNodes)
// console.log(prizing.childNodes[3].textContent)

var number = 0;

cartButton.addEventListener('click', myPrizing);

deleteCart.addEventListener('click', removingProduct);

cart.addEventListener('click', wrapper);

function wrapper() {


    // let burgerTag = document.querySelector(".close");
    var x = document.getElementById("my-cart")
    if (x.style.display === "block") {
        x.style.display = "none";
        // burgerTag.src = "./images/icon-hamburger.svg";



    } else {
        x.style.display = "block";
        // burgerTag.src = "./images/icon-close.svg";
        // const shadow = document.querySelector("#my-cart ");
        // shadow.style.boxShadow = "0 30px 0px 0 hsl(0, 0%, 0%,0.3)"

    }

}

// removing element..................
function removingProduct() {

    countingNumber.style.display='none';
    productAdded.style.display = 'none';
    checkout.style.display = 'none';
    emptyCart.style.display = 'block';
    number = 0;
    let line = document.createElement('li');
    showingNumber.removeChild(showingNumber.childNodes[1]);
    showingNumber.appendChild(line.appendChild(document.createTextNode(number)));
    console.log('tarun')
}

// prizing .......................................

const countingNumber = document.getElementById('counting-number');
// countingNumber.addEventListener('click',myPrizing);

console.log(countingNumber.childNodes);
console.log(countingNumber.childNodes[1]);
function myPrizing() {

    if(number > -1){
        countingNumber.style.display='block';
        countingNumber.childNodes[1].textContent = `${number}`;
        let multiply = 125 * number;
        productAdded.style.display = 'flex';
        checkout.style.display = 'block';
        emptyCart.style.display = 'none';
        
        let calculation = `$125.00 x ${number}  $${multiply}`;
        prizing.childNodes[3].textContent = calculation;
        console.log(calculation);
    }
}
// myPrizing();
// cart...............................
cart.addEventListener('click', myCart)

function myCart() {
    // let burgerTag = document.querySelector(".close");
    var x = document.getElementById("mylink")
    if (x.style.display === "block") {
        x.style.display = "none";
        // burgerTag.src = "./images/icon-hamburger.svg";



    } else {
        // x.style.display = "block";
        // burgerTag.src = "./images/icon-close.svg";
        // const shadow = document.querySelector("#mylink");

    }

}


// ''''''''''''''''''''''''''''''''''''''''''
let line = document.createElement('li');
showingNumber.appendChild(line.appendChild(document.createTextNode(number)));

minus.addEventListener('click', myMinus);
plus.addEventListener('click', myPlus);

function myMinus() {
    // console.log(showingNumber.nodeValue);

    if (number > 0) {
        showingNumber.removeChild(showingNumber.childNodes[1]);
        number -= 1;
        let line = document.createElement('li');
        showingNumber.appendChild(line.appendChild(document.createTextNode(number)));
    }
}

function myPlus() {
    // console.log(showingNumber.nodeValue);

    if (number >= 0) {
        showingNumber.removeChild(showingNumber.childNodes[1]);
        number += 1;
        let line = document.createElement('li');
        showingNumber.appendChild(line.appendChild(document.createTextNode(number)));
    }
}
//--------------------------------------------------- 




//    menu function....................................
function menu() {
    // let burgerTag = document.querySelector(".close");
    let icon = document.getElementById('icon');
    let x = document.getElementById("mylink");
    if (x.style.display === "block") {
        x.style.display = "none";



    } else {
        x.style.display = "block";
    
        icon.style.width = "100px";
     

    }

}
// ......................................................