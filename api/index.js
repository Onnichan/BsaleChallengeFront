const API_URL = "http://localhost:4000/api/v1";

async function getAllProducts(){
  const resp = await fetch(`${API_URL}/products`);
  const products = await resp.json();
  return products;
}

async function getFilteredProducts(){
  const resp = await fetch(API_URL);
  const products = await resp.json();
  return products;
}
