let navbar = document.querySelector('.header .navbar');
window.onscroll=()=>{
    navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload=()=>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

    const cart = {};

    function addToCart(itemId, itemName, itemPrice) {
        if (cart[itemId]) {
            cart[itemId].quantity++;
        } else {
            cart[itemId] = {
                name: itemName,
                price: itemPrice,
                quantity: 1
            };
        }
        updateCart();
    }

    var total = 0;
    function updateCart() {
        const cartItemsElement = document.getElementById('cartItems');
        const totalElement = document.getElementById('total');

        cartItemsElement.innerHTML = '';

        for (const itemId in cart) {
            const item = cart[itemId];
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
                <p>${item.name} - ${item.price} x ${item.quantity} = Rs ${itemTotal}</p>
                <button class="remove" onclick="removeFromCart('${itemId}')">Remove</button>
            `;
            cartItemsElement.appendChild(itemElement);
        }

        totalElement.textContent = total;
        random();
    }

    function random(){
        document.querySelector('.containerPop>.total').innerHTML="Total amount: Rs "+ total
    }

    function removeFromCart(itemId) {
        delete cart[itemId];
        updateCart();
    }

    const paymentForm = document.getElementById('paymentForm');
    paymentForm.addEventListener("'submit'", function(event) {
        event.preventDefault();
        const cardholderName = this.elements['cardholderName'].value;
        const cardNumber = this.elements['cardNumber'].value;
        const expirationDate = this.elements['expirationDate'].value;
        const cvv = this.elements['cvv'].value;
        console.log('Payment details:', cardholderName, cardNumber, expirationDate, cvv);
        alert("Payment Done");
    });

    let popup=document.querySelector('.containerPop')
    

    function hide(){
        popup.classList.add('hide')
        popup.classList.remove('unhide')
        popup.innerHTML=""
        alert("Payment Done!")
    }

    function unhide(){
        popup.classList.add('unhide')
        popup.classList.remove('hide')
        popup.innerHTML=' <img src="./images/QR.jpeg" alt="QR" ><p  class="total ">Total Amount: Rs 0</p><button  onclick="hide()" class="remove">Pay</button>'
        random();
    }
    