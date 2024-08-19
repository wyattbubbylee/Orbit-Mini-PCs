// Basic shopping cart functionality
let cart = [];

function addToCart(product) {
    cart.push(product);
    console.log(`${product.name} added to cart!`);
    updateCartDisplay();
}

function updateCartDisplay() {
    let cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = cart.map(item => `<li>${item.name} - $${item.price}</li>`).join('');
    let totalPrice = cart.reduce((total, item) => total + item.price, 0);
    document.querySelector('.total-price').textContent = `$${totalPrice.toFixed(2)}`;
}

// Example usage:
let sampleProduct = { name: "Galactic Cruiser", price: 499.99 };
addToCart(sampleProduct);
