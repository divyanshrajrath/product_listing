// Select DOM elements
const productGrid = document.getElementById('product-grid');
const loader = document.getElementById('loader');
const error = document.getElementById('error');

// Updated API URL (CORS-friendly)
const API_URL = 'https://fakestoreapi.com/products';

// Fetch products using Axios
async function fetchProducts() {
  try {
    const response = await axios.get(API_URL);
    const products = response.data.slice(0, 10); // Limit to 10 products

    loader.style.display = 'none'; // Hide loader
    renderProducts(products);      // Render products
  } catch (err) {
    loader.style.display = 'none';
    error.textContent = 'Failed to fetch products. Please try again later.';
    console.error('API Error:', err);
  }
}

// Render product cards
function renderProducts(products) {
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h2>${product.title}</h2>
      <div class="price">$${product.price}</div>
      <div class="category">${product.category || 'Uncategorized'}</div>
    `;

    productGrid.appendChild(card);
  });
}

// Trigger fetch
fetchProducts();