const grid = document.getElementById("grid");

(async () => {
  const resp = await getAllProducts();
  console.log(resp);
  renderGridCard(resp);
})();


function renderGridCard(data){
  let gridcard="";

  for (let i = 0; i < data.rows.length; i++) {
    let product = data.rows[i];
    gridcard += `<div class="card" style="width: 18rem;">
      <img src="${product.url_image}" class="card-img-top" alt="...">
      <div class="card-body">
        <span class="text-bold">${product.name}</span>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <span>Price: $${product.price}</span>
      </div>
    </div>`;
  }
  grid.innerHTML = gridcard;
}