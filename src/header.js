const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

<link rel="stylesheet" href="../css/header.css">
<link rel="stylesheet" href="../css/base.css">

<div>
<div class="header_main">
        <div class="header_content">
            <img src="../icons/ticket-percent-icon.svg" alt="ticket_percent">
            <h4>30% off storewide - Limited time! </h4>
            <div class="shop_now_link">
            <a href="#"><b>Shop Now</b> <img src="../icons/right_arrow_icon.svg" alt="right_arrow"></a>
            </div>
        </div>
        <div>
            <img src="../icons/close_icon.svg" alt="close_icon">
        </div>
</div>

<div class="sub_header">
    <img src="../icons/Logo.svg" alt="logo">
    <nav>
        <a href="../html_files/home.html"><b>Home</b></a>
        <a href="../html_files/shop_page1.html">Shop</a>
        <a href="../html_files/product.html">Product</a>
        <a href="../html_files/contact.html">Contact Us</a>
    </nav>
    <div class="header_icons">
        <img src="../icons/search_icon.svg" alt="search_icon" id="sub_header_icons">
        <img src="../icons/account-icon.svg" alt="account_icon" id="sub_header_icons">
        <img src="../icons/cart_icon.svg" alt="cart_icon">
    </div>
 </div>
</div>
`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);


var navElements = document.querySelectorAll('a');
      //looping through each anchor element
      navElements.forEach(function(element){
           //adding click event on each anchor element
            element.addEventListener('click',function(e){
                 //stop default behaviour
                 e.preventDefault();
                 //select current active element
                 let active = document.querySelector('.selected');
                 active?.classList.remove('selected'); //remove class  
                 this.classList.add('selected'); //add class to current click element
      });
});