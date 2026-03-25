let container = document.getElementById('productDisplay');

function getProductsByCategory(category) {
    let APIlink = "https://fakestoreapi.com/products"
    let categoryURL = encodeURI(category)
    APIlink += categoryURL
    fetch(APIlink)
.then(response => response.json())
.then(data => {
    data.forEach(product => {
        const cardHTML = `
            <div class="col-sm-12 col-md-6 col-lg-3 style="width: 18rem;"> 
                <a href="specificProduct.html?productId=${product.id}" class="card-text">
                    <div class="card border-white">
                        <img src="${product.image}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
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