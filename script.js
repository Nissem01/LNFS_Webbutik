let container = document.getElementById('productDisplay');

function getProductsByCategory(category) {
    let APIlink = "https://fakestoreapi.com/products";

    if (category) {
        APIlink += `/category/${encodeURIComponent(category)}`;
    }

    container.innerHTML = "";

    fetch(APIlink)
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const cardHTML = `
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <a href="specificProduct.html?productId=${product.id}">
                            <div class="card">
                                <img src="${product.image}" class="card-img-top">
                                <div class="card-body">
                                    <h5>${product.title}</h5>
                                    ${product.price} €
                                </div>
                            </div>
                        </a>
                    </div>
                `;
                container.innerHTML += cardHTML;
            });
        })
        .catch(error => console.error('Error:', error));
}

getProductsByCategory("");