const products = [
    { name: "Laptop", price: 60000, category: "electronics" },
    { name: "Mobile Phone", price: 30000, category: "electronics" },
    { name: "T-Shirt", price: 800, category: "clothing" },
    { name: "Jeans", price: 1500, category: "clothing" },
    { name: "Novel Book", price: 400, category: "books" },
    { name: "Notebook", price: 150, category: "books" }
];

function renderProducts(list) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    list.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <p><strong>Name:</strong> ${product.name}</p>
            <p><strong>Price:</strong> ₹${product.price}</p>
            <p><strong>Category:</strong> ${product.category}</p>
        `;
        grid.appendChild(card);
    });
}

function filterProducts() {
    let filtered = [...products];

    const category = document.getElementById("categoryFilter").value;
    const price = document.getElementById("priceFilter").value;

    if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
    }

    if (price === "low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (price === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    renderProducts(filtered);
}

document.getElementById("categoryFilter").addEventListener("change", filterProducts);
document.getElementById("priceFilter").addEventListener("change", filterProducts);

renderProducts(products);
