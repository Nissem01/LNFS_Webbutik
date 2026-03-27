let container = document.getElementById('productDisplay');

function getProductsByCategory(category) {
    let APIlink = "https://fakestoreapi.com/products";

    if (category) {
        APIlink += `/category/${encodeURIComponent(category)}`;
       u
    }

    container.innerHTML = "";
      /*    <button id ="buyBut" class="btn btn-dark" href="checkout.html?productId=${product.id}"> Buy </button> */
    fetch(APIlink)
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const cardHTML = `
                    <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="card">
                              <img src="${product.image}" class="card-img-top" >
                                <div class="card-body">
                                    <h5>${product.title}</h5>
                                    ${product.price} €                                
                                    <br>
                                    <a href="checkout.html?id=${product.id}" class="btn btn-dark mt-3"> Buy </a>
                                </div>
                            </div></a>
                    </div>
                `

               
                    


                container.innerHTML += cardHTML;
                /* document.getElementById('buyBut').addEventListener('click', goToCheckout); */
            });
        })
        .catch(error => console.error('Error:', error));
}

/* function goToCheckout(){
 
    window.location.href = "checkout.html"
    
} */

getProductsByCategory("");