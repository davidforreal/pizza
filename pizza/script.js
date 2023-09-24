document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.querySelector('.cart-items');
    const total = document.querySelector('.total span');
    const checkoutButton = document.querySelector('.checkout');

    let cart = [];
    let totalPrice = 0;

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const pizzaName = button.parentElement.querySelector('h2').textContent;
            const pizzaPrice = 10; // Árakat itt módosíthatod
            cart.push({ name: pizzaName, price: pizzaPrice });
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = '';
        totalPrice = 0;

        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('cart-item');
            listItem.innerHTML = `${item.name}: ${item.price} Ft`;
            cartItems.appendChild(listItem);
            totalPrice += item.price;
        });

        total.textContent = totalPrice + ' Ft';
    }

    checkoutButton.addEventListener('click', () => {
        // Ellenőrizzük, hogy van-e valami a kosárban
        if (cart.length === 0) {
            alert('A kosár üres. Kérlek, adj hozzá pizzákat a kosárhoz, mielőtt leadod a rendelést.');
        } else {
            // Ide írd a rendelés elküldésének logikáját
            alert('Rendelés elküldve!');
            cart = [];
            updateCart();
        }
    });
});
