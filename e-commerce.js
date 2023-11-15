// e-commerce.js

document.addEventListener('DOMContentLoaded', function () {
    // Sample product data
    const products = [
      { id: 1, name: 'Product 1', price: 19.99 },
      { id: 2, name: 'Product 2', price: 29.99 },
      { id: 3, name: 'Product 3', price: 39.99 },
    ];
  
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
    alert(`Product with ID ${productId} added to cart! (Simulated)`);
  }
  
  // Function to handle "View Project" button click
  function viewEcommerceProject() {
    alert('Redirecting to the E-commerce project page! (Simulated)');
  }
  