const container = document.getElementById("categories");

const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
];

categories.forEach((category) => {
    fetch(
            `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`,
        )
        .then((res) => res.json())
        .then((products) => {
            const product = products[0];

            const image = product.image;

            const card = `
            <div class="col-12 col-md-6 col-lg-3">
            <div class="card h-100 shadow-sm border-0 text-center overflow-hidden">

            <a href="products.html?category=${category}"
                class="text-decoration-none text-dark d-flex flex-column h-100">

                <img src="${image}" class="card-img-top p-3"
                style="height:180px; object-fit: contain;">

                <div class="card-body d-flex flex-column justify-content-center">   
                    <h5 class="card-title">${category}</h5>
                    </div>
                    </a>
                    </div>
                    </div>
            
           `;

            container.innerHTML += card;
        });
});