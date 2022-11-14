let productsOfCart = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

const addProductToCart = product => {
  productsOfCart.push(product);
  localStorage.setItem("products", JSON.stringify(productsOfCart));
  renderCart(productsOfCart);
  countToCart(productsOfCart);
  initialzeCantProductToCart();
};

const countToCart = (product) => {
  localStorage.setItem("cantProducts", product.length)
}

const getProductsOfCart = () => {
  const productsToJson = localStorage.getItem("products");
  return JSON.parse(productsToJson);
};

const removeProductToCart = () => {};

function renderCart(products) {
  const offCanvasBody = document.getElementById("offcanvas-body");
  countToCart(productsOfCart);
  let canvasBodyHTML = "";

  if (products.length > 0) {
    products.forEach(product => {
      canvasBodyHTML += `<div class="d-flex p-3">
      <img src="${product.url_image}" style="width: 50%">
        <div>
          <span class="fw-bold">${product.name}</span><br>
          <span class="text-danger">$${product.price}</span><br><br>
        </div>
      </div>`;
    });
    offCanvasBody.innerHTML = canvasBodyHTML;
  } else {
    offCanvasBody.innerHTML =
      "<span>No se encontraron productos en el carrito</span>";
  }
}

const initialzeCantProductToCart = () => {
  document.getElementById("cantProductToCart").innerHTML = localStorage.getItem("cantProducts")
}

(() => {
  renderCart(productsOfCart);
  initialzeCantProductToCart();
})();
