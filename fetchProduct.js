let container = document.getElementById("specificProductDisplay");
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
console.log(productId);

function getProductById(productId) {
  let APIlink = `https://fakestoreapi.com/products/${productId}`;

  container.innerHTML = "";

  fetch(APIlink)
    .then((response) => response.json())
    .then((product) => {
      const cardHTML = `
            
                              <img src="${product.image}" class="img-fluid p-3" style="max-height:180px; object-fit: contain;">
                               
                                    <h5>${product.title}</h5>
                                    
                                                              
                                    <br>
                                </div>
                            <p class="card-text">${product.description}</p> 
                            <p class="fw-bold mb-2">${product.price} € </p> 
                    </div>
                `;

      container.innerHTML += cardHTML;
    })
    .catch((error) => console.error("Error:", error));
}
getProductById(productId);
