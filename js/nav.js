


const createNav = () => {


    let nav = document.querySelector('.navbar');
     
    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                     <a  href='search.html'>
                    <button class="search-btn">search</button></a>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>

                
                   <i class="cart" value=${valuecount} > <img src="img/cart.png" alt="Added item"> </i>
                
            </div>
        </div>

        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">women</a></li>
            <li class="link-item"><a href="#" class="link">men</a></li>
            <li class="link-item"><a href="#" class="link">kids</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
        </ul>
    `;
    
}


createNav();
/*function addtocart() {
    
    var curr_count=Number(cart.getAttribute('value')||0);
    cart.setAttribute('value',curr_count+1);
    }*/

    /*var count = 0;
        var btn = document.getAttribute("card-btn");
        var disp = document.getElementById("cart");
  
        btn.onclick = function () {
            count++;
            disp.cart.setAttribute('value',count+1).innerHTML ;
        }*/
        