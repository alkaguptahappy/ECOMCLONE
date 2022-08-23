const productImages = document.querySelectorAll(".product-images img"); 
const productImageSlide = document.querySelector(".image-slider"); // seclecting image slider element

let activeImageSlide = 0; 

productImages.forEach((item, i) => { 
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide = i; // updating the image slider variable to track current thumb
    })
})
const sizeBtns = document.querySelectorAll('.size-radio-btn'); // selecting size buttons
let checkedBtn = 0; // current selected button

sizeBtns.forEach((item, i) => { // looping through each button
    item.addEventListener('click', () => { // adding click event to each 
        sizeBtns[checkedBtn].classList.remove('check'); // removing check class from the current button
        item.classList.add('check'); // adding check class to clicked button
        checkedBtn = i; // upading the variable
    })
})


let valuecount=0
let buttonHome = document.querySelector('.cart-btn');
var disp = document.getElementById("cartid");
let CountButtonHomeClicks =Number( disp.getAttribute('value')|| 0);
console.log(CountButtonHomeClicks);
buttonHome.addEventListener('click', function()  {
CountButtonHomeClicks += 1;
console.log(CountButtonHomeClicks);
valuecount = CountButtonHomeClicks;
console.log(valuecount);
disp.setAttribute('value',valuecount)

});