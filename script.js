document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const product = event.target.getAttribute('data-product');
        alert(`${product} added to cart!`);
        showCart();
    });
});

function showCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'block';
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    window.location.href = 'checkout.html';
});

document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});
