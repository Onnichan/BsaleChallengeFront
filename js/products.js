const grid = document.getElementById("grid");


// window.onload(async() => {
(async () => {
  const resp = await getAllProducts();
  console.log(resp);
})();


function renderGridCard(data){
  const gridcard="";

  for (let i = 0; i < data.rows.length; i++) {
    const element = data.row[i];
  }
  
  gridcard += '<div class="card" style="width: 18rem;">';
  gridcard +=  '<img src="..." class="card-img-top" alt="...">'
  //   <div class="card-body">
  //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //   </div>
  // </div>'

  grid.innerHTML = gridcard;
}
  // console.log(resp);
// })