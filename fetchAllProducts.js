let container = document.getElementById('productDisplay');
const params  = new URLSearchParams(window.location.search);
const category  = params.get("category");


function getProductsByCategory(category) {
    let APIlink = "https://dummyjson.com/products";

    container.innerHTML = "";

    fetch(APIlink)
        .then(response => response.json())
        .then(data => {
            
             let filterCategory = data.products; 
                if(category !== null){
                 filterCategory = data.products.filter(product => product.category === category);
              } 

            filterCategory.forEach(product => {
                const cardHTML = `
                    <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="card h-100 shadow-sm border-0 d-flex flex-column text-center">
                              <img src="${product.images[0]}" class="card-img-top p-3" style="height:180px; object-fit: contain;">
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">${product.title}</h5>
                                    ${product.price} €                                
                                    <br>
                                    <a href="checkout.html?id=${product.id}" class="btn btn-dark mt-auto mx-auto"> Buy</a>
                                </div>
                            </div>
                    </div>
                `

                container.innerHTML += cardHTML;
            });
        })
        .catch(error => console.error('Error:', error));
}


getProductsByCategory(category);