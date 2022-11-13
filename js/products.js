const grid = document.getElementById("grid");
const pagination = document.getElementById("pagination");
let cantProductByPage;
let cantProducts;

(async () => {
  renderHTML();
})();

async function renderHTML(index = 0) {
  const products = await showProducts(index);
  cantProducts = products.count;
  renderGridCard(products.rows);
  renderPagination(cantProducts);
  renderCategories();
}

function renderGridCard(data) {
  let gridcard = "";

  for (let i = 0; i < data.length; i++) {
    let product = data[i];
    gridcard += `<div class="card" style="width: 18rem;">
      <img src="${product.url_image}" class="card-img-top" alt="...">
      <div class="card-body">
        <span class="fw-bold">${product.name}</span><br>
        <span>Price: $${product.price}</span><br><br>
        <button class="btn btn-outline btn-primary">Add to cart</button>
      </div>
    </div>`;
  }
  grid.innerHTML = gridcard;
}

function renderPagination(cantProducts) {
  let paginate = "";
  let productByPage = Math.ceil(cantProducts / cantProductByPage);
  paginate += `<li class="page-item">
    <a class="page-link" href="#">Previous</a>
  </li>`;
  for (let i = 0; i < productByPage; i++) {
    paginate += `<li class="page-item"><a class="page-link" href="#" onclick="renderHTML(${i})">${i+1}</a></li>`;
  }
  paginate += `<li class="page-item"><a class="page-link" href="#">Next</a></li>`;
  pagination.innerHTML = paginate;
}

async function showProducts(index) {
  cantProductByPage = document.getElementById("productsByPage").value;
  const resp = await getAllProducts(
    cantProductByPage * index,
    cantProductByPage
  );
  return resp;
}

async function renderProduct(element, e) {
  // console.log(e);
  if (e.keyCode == 13) {
    if(element.value.length > 0){
      const findProduct = await searchProduct(element.value);
      renderGridCard(findProduct.rows);
      renderPagination(findProduct.count);
      console.log(findProduct);
    }else{
      const resp = await getAllProducts(
        cantProductByPage * 0,
        cantProductByPage
      );
      renderGridCard(resp.rows);
      renderPagination(resp.count);
    }
    // console.log(element.value);
  }
}

async function renderCategories() {
  const asideCategories = document.getElementById("aside-categories");
  let htmlCategories = `<h3 class="text-muted text-center">Categories</h3>`;
  htmlCategories += `<nav class="d-flex flex-column gap-2 p-5">`;

  const categories = await getAllCategories();

  categories.forEach(category => {
    console.log(category.name);
    htmlCategories += `<button type="button" onclick="renderProductsByCategory('${category.name}')" class="btn btn-dark">${category.name}</button>`;
  });

  htmlCategories += `</nav>`;
  asideCategories.innerHTML = htmlCategories;
}

async function renderProductsByCategory(category, index = 1) {
  console.log(category);
  cantProductByPage = document.getElementById("productsByPage").value;
  const productsByCategory = await getProductsByCategory(
    cantProductByPage*0,
    cantProductByPage,
    category
  );

  console.log(productsByCategory);
  renderGridCard(productsByCategory.rows[0].products);
  renderPagination(productsByCategory.count);
}
