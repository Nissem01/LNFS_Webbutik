let container = document.getElementById('specificProductDisplay');
const params  = new URLSearchParams(window.location.search);
const productId  = params.get("id");
console.log(productId)

function getProductById(productId) {
    let APIlink = `https://dummyjson.com/products/${productId}`;

    container.innerHTML = "";

    fetch(APIlink)
        .then(response => response.json())
        .then(product => {

                const cardHTML = `
                    <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="card h-100 shadow-sm border-0 d-flex flex-column text-center">
                              <img src="${product.images[0]}" class="card-img-top p-3" style="height:180px; object-fit: contain;">
                                <div class="card-body d-flex flex-column">
                                    <p class="card-title">${product.title}</p>
                                    ${product.price} €                                
                                    <br>
                                </div>
                            </div>
                    </div>
                `

                container.innerHTML += cardHTML;
            ;
        })
        .catch(error => console.error('Error:', error));
}
getProductById(productId);