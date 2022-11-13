const API_URL = "http://localhost:4000/api/v1";

async function getAllProducts(offset = 5, limit = 5) {
  const resp = await fetch(
    `${API_URL}/products?offset=${offset}&limit=${limit}`
  );
  const products = await resp.json();
  return products;
}

async function getAllCategories() {
  const resp = await fetch(`${API_URL}/categories`);
  const categories = await resp.json();
  return categories;                                                                                                                                                                  
}

async function searchProduct(search) {
  console.log(search);
  const resp = await fetch(`${API_URL}/products/${search}`);
  const filteredProducts = await resp.json();
  return filteredProducts;
}

async function getProductsByCategory(offset = 5, limit = 5, category) {
  const resp = await fetch(
    `${API_URL}/categories/${category}?offset=${offset}&limit=${limit}`
  );
  const products = await resp.json();
  return products;
}
