// e-commerce.js

// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
  ];
  
  // Cart to store added products
  const cart = [];
  
  document.addEventListener('DOMContentLoaded', function () {
    // Render products
    const productList = document.getElementById('product-list');
  
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.className = 'product-item';
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.price.toFixed(2)} USD</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productElement);
    });
  });
  
  // Function to simulate adding a product to the cart
  function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
      cart.push(selectedProduct);
      alert(`${selectedProduct.name} added to cart!`);
    }
  }
  
  // Function to view the cart
  function viewCart() {
    if (cart.length === 0) {
      alert('Your cart is empty.');
    } else {
      const cartItems = cart.map(item => `${item.name} - ${item.price.toFixed(2)} USD`).join('\n');
      alert(`Your Cart:\n${cartItems}\nTotal: ${calculateTotal(cart)} USD`);
    }
  }
  
  // Function to calculate the total price of items in the cart
  function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  }
  
  // Function to go back to the main page
  function goBack() {
    window.location.href = 'index.html';
  }
  