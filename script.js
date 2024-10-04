let cart = [];
let total = 0;

// List of 50 products
const products = [
    { name: "T-Shirt", price: 10 },
    { name: "Shirt", price: 15 },
    { name: "Pants", price: 20 },
    { name: "Sweater", price: 25 },
    { name: "Jacket", price: 50 },
    { name: "Hat", price: 12 },
    { name: "Socks", price: 8 },
    { name: "Shorts", price: 18 },
    { name: "Scarf", price: 15 },
    { name: "Gloves", price: 10 },
    { name: "Belt", price: 5 },
    { name: "Sneakers", price: 30 },
    { name: "Boots", price: 40 },
    { name: "Watch", price: 100 },
    { name: "Sunglasses", price: 35 },
    { name: "Cap", price: 15 },
    { name: "Jeans", price: 40 },
    { name: "Shoes", price: 60 },
    { name: "Slippers", price: 25 },
    { name: "Bracelet", price: 15 },
    { name: "Necklace", price: 50 },
    { name: "Ring", price: 70 },
    { name: "Wallet", price: 30 },
    { name: "Backpack", price: 45 },
    { name: "Suit", price: 150 },
    { name: "Blazer", price: 80 },
    { name: "Tie", price: 20 },
    { name: "Cufflinks", price: 35 },
    { name: "Pocket Square", price: 12 },
    { name: "Duffel Bag", price: 65 },
    { name: "Umbrella", price: 15 },
    { name: "Belt Bag", price: 50 },
    { name: "Headphones", price: 80 },
    { name: "Laptop Case", price: 50 },
    { name: "Phone Case", price: 20 },
    { name: "Travel Pillow", price: 25 },
    { name: "Water Bottle", price: 15 },
    { name: "Gym Bag", price: 45 },
    { name: "Camera", price: 500 },
    { name: "Headband", price: 10 },
    { name: "Earbuds", price: 60 },
    { name: "Charging Cable", price: 10 },
    { name: "Wireless Mouse", price: 35 },
    { name: "Keyboard", price: 40 },
    { name: "Smartwatch", price: 120 },
    { name: "Monitor", price: 250 },
    { name: "Gaming Chair", price: 300 },
    { name: "Desk Lamp", price: 20 },
    { name: "Bookshelf", price: 90 }
];

// Render products dynamically on page load
function renderProducts() {
    const productContainer = document.querySelector('.products');
    products.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;

        productContainer.appendChild(productDiv);
    });
}

// Add item to cart
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    updateCart();
}

// Remove item from cart
function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Clear the cart display

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - $${item.price}
            <button class="remove-item" onclick="removeFromCart(${index})">&times;</button>
        `;
        cartItems.appendChild(li);
    });

    document.getElementById('totalPrice').innerText = `Total: $${total}`;
}

// Checkout function
function checkout() {
    if (cart.length > 0) {
        alert(`Your total is $${total}. Thanks for shopping with us!`);
        cart = [];
        total = 0;
        updateCart();
    } else {
        alert("Your cart is empty!");
    }
}

// Initial rendering of products
renderProducts();
