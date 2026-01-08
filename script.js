const products = [
    {id: 1, name: "Wireless Bluetooth Headphones", price: 2499, originalPrice: 2999, description: "Noise cancelling headphones with 30hr battery", category: "Electronics", image: "images/products/headphone1.jpg", rating: 4.5, discount: 17},
    {id: 2, name: "Smart Watch Pro", price: 3999, originalPrice: 4999, description: "Fitness tracker with heart rate & GPS", category: "Electronics", image: "images/products/smartpro.jpg", rating: 4.3, discount: 20},
    {id: 3, name: "Bluetooth Speaker", price: 1599, description: "Portable speaker with 12-hour battery", category: "Electronics", image: "images/products/pexels-cottonbro-6322724.jpg", rating: 4.2},
    {id: 4, name: "Gaming Mouse", price: 1299, description: "RGB gaming mouse with 6 buttons", category: "Electronics", image: "images/products/pexels-tima-miroshnichenko-7047612.jpg", rating: 4.4},
    {id: 5, name: "USB-C Hub", price: 899, description: "7-in-1 USB-C hub for laptops", category: "Electronics", image: "images/products/pexels-rann-vijay-677553-7742583.jpg", rating: 4.1},
    {id: 6, name: "Wireless Charger", price: 799, description: "15W fast wireless charger", category: "Electronics", image: "images/products/pexels-rann-vijay-677553-7742585.jpg", rating: 4.0},
    {id: 7, name: "External Hard Drive 2TB", price: 3299, description: "Portable hard drive for backup", category: "Electronics", image: "images/products/b426131c-2206-4ddc-a864-72d22388b9bf._CR0,0,800,600_PT0_SX800__.jpg", rating: 4.4},
    {id: 8, name: "Mechanical Keyboard", price: 2199, description: "RGB mechanical gaming keyboard", category: "Electronics", image: "images/products/pexels-yankrukov-9072292.jpg", rating: 4.6},
    {id: 9, name: "Action Camera", price: 6899, description: "4K waterproof action camera", category: "Electronics", image: "images/products/pexels-michaeldupuis-4068343.jpg", rating: 4.4},
    {id: 10, name: "Portable SSD 1TB", price: 4599, description: "High-speed portable solid state drive", category: "Electronics", image: "images/products/pexels-juanico-11553188.jpg", rating: 4.7},
    {id: 11, name: "Denim Jacket", price: 1899, description: "Classic denim jacket for all seasons", category: "Clothing", image: "images/products/pexels-julia-kuzenkov-442028-1176618.jpg", rating: 4.3},
    {id: 12, name: "Running Shoes", price: 2899, originalPrice: 3499, description: "Lightweight running shoes with cushion", category: "Clothing", image: "images/products/pexels-pixabay-163535.jpg", rating: 4.6, discount: 17},
    {id: 13, name: "Cotton T-Shirt Pack", price: 999, description: "Pack of 3 basic cotton t-shirts", category: "Clothing", image: "images/products/pexels-tima-miroshnichenko-6764917.jpg", rating: 4.2},
    {id: 14, name: "Winter Coat", price: 3499, description: "Waterproof winter coat with hood", category: "Clothing", image: "images/products/pexels-bymuratisikofficial-35551563.jpg", rating: 4.4},
    {id: 15, name: "Yoga Pants", price: 1299, description: "Stretchy yoga pants for workouts", category: "Clothing", image: "images/products/pexels-cottonbro-7341729.jpg", rating: 4.5},
    {id: 16, name: "Formal Shirt", price: 1499, description: "Premium cotton formal shirt", category: "Clothing", image: "images/products/pexels-cottonbro-8466221.jpg", rating: 4.3},
    {id: 17, name: "Summer Dress", price: 1899, description: "Floral print summer dress", category: "Clothing", image: "images/products/pexels-evoking-ephemerality-222334091-35501785.jpg", rating: 4.7},
    {id: 18, name: "Backpack", price: 1299, description: "Water-resistant backpack", category: "Clothing", image: "images/products/pexels-jibarofoto-3731256.jpg", rating: 4.4},
    {id: 19, name: "Coffee Maker", price: 1899, description: "Automatic coffee maker", category: "Home & Kitchen", image: "images/products/pexels-chevanon-324028.jpg", rating: 4.5},
    {id: 20, name: "Air Fryer", price: 2999, originalPrice: 3999, description: "Digital air fryer 5L capacity", category: "Home & Kitchen", image: "images/products/81w8+kLTeXL._AC_UF350,350_QL80_.jpg", rating: 4.6, discount: 25},
    {id: 21, name: "Desk Lamp", price: 799, description: "LED desk lamp adjustable", category: "Home & Kitchen", image: "images/products/pexels-daniel-568290.jpg", rating: 4.2},
    {id: 22, name: "Non-stick Pan Set", price: 1499, description: "3-piece non-stick pan set", category: "Home & Kitchen", image: "images/products/non-stickpanset.jpg", rating: 4.4},
    {id: 23, name: "Electric Kettle", price: 899, description: "1.5L electric kettle", category: "Home & Kitchen", image: "images/products/pexels-fotios-photos-11255397.jpg", rating: 4.3},
    {id: 24, name: "Vacuum Cleaner", price: 3899, description: "Cordless vacuum cleaner", category: "Home & Kitchen", image: "images/products/pexels-cottonbro-4107278.jpg", rating: 4.5},
    {id: 25, name: "Blender", price: 1599, description: "High-speed blender 1000W", category: "Home & Kitchen", image: "images/products/pexels-valeria-ushakova-3094227.jpg", rating: 4.4},
    {id: 26, name: "Rice Cooker", price: 1299, description: "10-cup rice cooker", category: "Home & Kitchen", image: "images/products/ricecooker1.jpg", rating: 4.6},
    {id: 27, name: "Web Development Guide", price: 899, description: "Complete web development handbook", category: "Books", image: "images/products/webdev1.jpg", rating: 4.7},
    {id: 28, name: "Cookbook Collection", price: 1299, description: "500+ recipes from around the world", category: "Books", image: "images/products/cookbook1.jpg", rating: 4.5},
    {id: 29, name: "Business Strategy", price: 699, description: "Best-selling business strategy book", category: "Books", image: "images/products/daria-nepriakhina-474558-unsplash-e1546599640715-1000x500.jpg", rating: 4.4},
    {id: 30, name: "Science Fiction Novel", price: 499, description: "Award-winning sci-fi novel", category: "Books", image: "images/products/fictionnovel1.jpg", rating: 4.8},
    {id: 31, name: "Self-Help Guide", price: 599, description: "Personal development guide", category: "Books", image: "images/products/OnePageBookCoverImage.jpg", rating: 4.3},
    {id: 32, name: "Children's Storybook", price: 399, description: "Colorful illustrated storybook", category: "Books", image: "images/products/childrenbook1.jpg", rating: 4.6},
    {id: 33, name: "Yoga Mat", price: 699, description: "Non-slip yoga mat", category: "Sports", image: "images/products/pexels-cottonbro-4325439.jpg", rating: 4.4},
    {id: 34, name: "Dumbbell Set", price: 1899, description: "Adjustable dumbbell set 20kg", category: "Sports", image: "images/products/pexels-dropshado-32543165.jpg", rating: 4.5},
    {id: 35, name: "Basketball", price: 899, description: "Official size basketball", category: "Sports", image: "images/products/pexels-pixabay-220383.jpg", rating: 4.3},
    {id: 36, name: "Running Shorts", price: 799, description: "Breathable running shorts", category: "Sports", image: "images/products/pexels-wesleydavi-33417687.jpg", rating: 4.2},
    {id: 37, name: "Tennis Racket", price: 2499, description: "Professional tennis racket", category: "Sports", image: "images/products/pexels-pixabay-209977.jpg", rating: 4.6},
    {id: 38, name: "Swimming Goggles", price: 499, description: "Anti-fog swimming goggles", category: "Sports", image: "images/products/pexels-shvets-production-8028456.jpg", rating: 4.1},
    {id: 39, name: "Skincare Set", price: 1599, description: "Complete skincare routine set", category: "Beauty", image: "images/products/pexels-makrufinmuhammad-33538457.jpg", rating: 4.7},
    {id: 40, name: "Hair Dryer", price: 1299, description: "Ionic hair dryer 2000W", category: "Beauty", image: "images/products/pexels-element5-973406.jpg", rating: 4.4},
    {id: 41, name: "Perfume Collection", price: 2299, description: "3-piece perfume set", category: "Beauty", image: "images/products/pexels-valeriya-965990.jpg", rating: 4.6},
    {id: 42, name: "Makeup Brush Set", price: 899, description: "12-piece makeup brush set", category: "Beauty", image: "images/products/pexels-mart-production-7290669.jpg", rating: 4.3},
    {id: 43, name: "Sunscreen Lotion", price: 499, description: "SPF 50+ sunscreen lotion", category: "Beauty", image: "images/products/pexels-yaazhini-16443631.jpg", rating: 4.5},
    {id: 44, name: "Face Mask Pack", price: 299, description: "Sheet mask pack 10 pieces", category: "Beauty", image: "images/products/pexels-cottonbro-3952240.jpg", rating: 4.2}
];

const productImages = {
    1: ["images/products/headphone1.jpg", "images/products/mahavir-shah-izcprdHbC8A-unsplash.jpg", "images/products/chris-panas-UeITqYE-Xxw-unsplash.jpg"],
    2: ["images/products/smartpro.jpg", "images/products/andrey-matveev-9mU2L4dVYFA-unsplash.jpg", "images/products/krishna-kumar-mNOVV4Ple2A-unsplash.jpg"],
    3: ["images/products/pexels-cottonbro-6322724.jpg", "images/products/pexels-moises-ribeiro-121009898-11031429.jpg", "images/products/pexels-peterfazekas-880864.jpg"],
    4: ["images/products/pexels-tima-miroshnichenko-7047612.jpg", "images/products/pexels-fox-58267-1486294.jpg", "images/products/pexels-zeleboba-33307580.jpg"],
    5: ["images/products/pexels-rann-vijay-677553-7742583.jpg", "images/products/pexels-rann-vijay-677553-7742586.jpg", "images/products/pexels-rann-vijay-677553-7952599.jpg"],
    6: ["images/products/pexels-rann-vijay-677553-7742585.jpg", "images/products/pexels-cottonbro-5083411.jpg", "images/products/pexels-oscar-helgstrand-3692072-5961044.jpg"],
    7: ["images/products/hardrive1.jpg", "images/products/hardrive2.jpg", "images/products/b426131c-2206-4ddc-a864-72d22388b9bf._CR0,0,800,600_PT0_SX800__.jpg"],
    8: ["images/products/pexels-yankrukov-9072292.jpg", "images/products/pexels-tima-miroshnichenko-5380602.jpg", "images/products/pexels-yankrukov-9072345.jpg"],
    9: ["images/products/pexels-michaeldupuis-4068343.jpg", "images/products/pexels-witheline-30522080.jpg", "images/products/pexels-hikaique-90366.jpg"],
    10: ["images/products/pexels-juanico-11553188.jpg", "images/products/pexels-japy-5335964.jpg", "images/products/pexels-avinash-kumar-299518778-13595094.jpg"],
    11: ["images/products/pexels-julia-kuzenkov-442028-1176618.jpg", "images/products/pexels-imdennyz-2229712.jpg", "images/products/pexels-steshkacroes-2344601.jpg"],
    12: ["images/products/pexels-pixabay-163535.jpg", "images/products/pexels-pixabay-258453.jpg", "images/products/pexels-lilartsy-1625620.jpg"],
    13: ["images/products/pexels-tima-miroshnichenko-6764917.jpg", "images/products/pexels-ivan-s-7671168.jpg", "images/products/pexels-dasha-musohranova-1745017-6051248.jpg"],
    14: ["images/products/pexels-bymuratisikofficial-35551563.jpg", "images/products/pexels-2156836211-35551347.jpg", "images/products/pexels-gizem-gokce-1072613075-35538686.jpg"],
    15: ["images/products/yoga1.jpg", "images/products/yoga2.jpg", "images/products/pexels-cottonbro-7341729.jpg"],
    16: ["images/products/pexels-cottonbro-8465275.jpg", "images/products/pexels-cottonbro-8466221.jpg", "images/products/pexels-cottonbro-8465272.jpg"],
    17: ["images/products/pexels-evoking-ephemerality-222334091-35501785.jpg", "images/products/pexels-mohammadabbasi-30644458.jpg", "images/products/pexels-pelageia-zelenina-58865108-8444364.jpg"],
    18: ["images/products/pexels-jibarofoto-3731256.jpg", "images/products/pexels-matthardy-1928078.jpg", "images/products/pexels-vlad-714063.jpg"],
    19: ["images/products/pexels-chevanon-324028.jpg", "images/products/pexels-ekrulila-2128018.jpg", "images/products/pexels-jonathanborba-2878709.jpg"],
    20: ["images/products/81w8+kLTeXL._AC_UF350,350_QL80_.jpg", "images/products/51Omh8DLQgL._AC_UF1000,1000_QL80_.jpg", "images/products/images.jpg"],
    21: ["images/products/pexels-daniel-568290.jpg", "images/products/pexels-fariphotography-1112598.jpg", "images/products/pexels-julienblt-923311.jpg"],
    22: ["images/products/non-stickpanset.jpg", "images/products/non-stickpanse2.jpg", "images/products/non-stickpanse3.jpg"],
    23: ["images/products/pexels-fotios-photos-11255397.jpg", "images/products/pexels-enginakyurt-10965752.jpg", "images/products/pexels-mohammadabbasi-30319671.jpg"],
    24: ["images/products/pexels-cottonbro-4107278.jpg", "images/products/pexels-cottonbro-4107286.jpg", "images/products/pexels-cottonbro-4107257.jpg"],
    25: ["images/products/pexels-valeria-ushakova-3094227.jpg", "images/products/pexels-mikhail-nilov-6707609.jpg", "images/products/pexels-cottonbro-6802632.jpg"],
    26: ["images/products/ricecooker1.jpg", "images/products/ricecooker2.jpg", "images/products/ricecooker3.jpg"],
    27: ["images/products/webdev1.jpg", "images/products/webdev2.jpg", "images/products/webdev3.jpg"],
    28: ["images/products/cookbook1.jpg", "images/products/cookbook2.jpg", "images/products/pexels-brettjordan-34731136.jpg"],
    29: ["images/products/daria-nepriakhina-474558-unsplash-e1546599640715-1000x500.jpg", "images/products/daria-nepriakhina-474558-unsplash-e1546599640715-1000x501.jpg", "images/products/chtm-news1.jpg"],
    30: ["images/products/fictionnovel1.jpg", "images/products/scifi-books-2.jpg", "images/products/scifi-books-3.jpg"],
    31: ["images/products/OnePageBookCoverImage.jpg", "images/products/OnePageBookCoverImage2.jpg", "images/products/OnePageBookCoverImage3.jpg"],
    32: ["images/products/childrenbook1.jpg", "images/products/childrenbook2.jpg", "images/products/childrenbook3.jpg"],
    33: ["images/products/pexels-cottonbro-4325439.jpg", "images/products/pexels-karlsolano-2780762.jpg", "images/products/pexels-cottonbro-4327014.jpg"],
    34: ["images/products/pexels-dropshado-32543165.jpg", "images/products/pexels-andres-ayrton-6550857.jpg", "images/products/pexels-alesiakozik-7289298.jpg"],
    35: ["images/products/pexels-pixabay-220383.jpg", "images/products/pexels-markusspiske-3001822.jpg", "images/products/pexels-pixabay-159611.jpg"],
    36: ["images/products/pexels-wesleydavi-33417687.jpg", "images/products/pexels-koolshooters-8520627.jpg", "images/products/pexels-ketut-subiyanto-5037385.jpg"],
    37: ["images/products/pexels-pixabay-209977.jpg", "images/products/pexels-gonchifacello-1432039.jpg", "images/products/pexels-cottonbro-5739121.jpg"],
    38: ["images/products/pexels-shvets-production-8028456.jpg", "images/products/pexels-shvets-production-8028417.jpg", "images/products/pexels-kindelmedia-8688570.jpg"],
    39: ["images/products/pexels-makrufinmuhammad-33538457.jpg", "images/products/pexels-denys-11935630.jpg", "images/products/pexels-denys-11935634.jpg"],
    40: ["images/products/pexels-element5-973406.jpg", "images/products/pexels-cottonbro-3993328.jpg", "images/products/pexels-vics-11879094.jpg"],
    41: ["images/products/pexels-valeriya-965990.jpg", "images/products/pexels-cottonbro-7598173.jpg", "images/products/pexels-larissafarber-30770233.jpg"],
    42: ["images/products/pexels-mart-production-7290669.jpg", "images/products/pexels-n-voitkevich-5128193.jpg", "images/products/pexels-by-natallia-311038782-13714624.jpg"],
    43: ["images/products/pexels-yaazhini-16443631.jpg", "images/products/pexels-hadis-13624926.jpg", "images/products/pexels-olena-ushakova-214375532-11812426.jpg"],
    44: ["images/products/pexels-cottonbro-3952240.jpg", "images/products/pexels-cdc-library-3993241.jpg", "images/products/facemask3.jpg"]
};

Object.keys(productImages).forEach(productId => {
    productImages[productId] = productImages[productId].map(img => img);
});

const categories = ['All', ...new Set(products.map(p => p.category))];
let cart = [], currentStep = 1, selectedPayment = 'cod', shippingInfo = {}, orderNumber = Math.floor(100000 + Math.random() * 900000);

// ====== NEW: Authentication Variables ======
let pendingCheckout = false;

// ====== DOM Elements ======
const productsContainer = document.getElementById('products-container');
const cartModal = document.getElementById('cart-modal');
const checkoutModal = document.getElementById('checkout-modal');
const successModal = document.getElementById('success-modal');
const productModal = document.getElementById('product-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartCountElement = document.querySelector('.cart-count');
const cartIcon = document.querySelector('.cart-icon');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryFilter = document.getElementById('category-filter');
const categoryDropdown = document.getElementById('category-dropdown');
const productCount = document.getElementById('product-count');
const checkoutBtn = document.getElementById('checkoutBtn');
const closeModalBtns = document.querySelectorAll('.close-modal');
const continueShoppingBtn = document.querySelector('.close-modal-btn');
const prevStepBtn = document.getElementById('prev-step');
const nextStepBtn = document.getElementById('next-step');
const placeOrderBtn = document.getElementById('place-order');
const shippingForm = document.getElementById('shipping-form');
const paymentMethods = document.querySelectorAll('.payment-method');
const continueShoppingSuccess = document.getElementById('continue-shopping');
const viewOrdersBtn = document.getElementById('view-orders');

// ====== NEW: Authentication DOM Elements ======
const loginModal = document.getElementById('login-modal');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userDisplay = document.getElementById('userDisplay');
const userDisplayText = document.getElementById('userDisplayText');
const userDropdownContent = document.getElementById('userDropdownContent');

// ====== NEW: Orders DOM Elements ======
const ordersModal = document.getElementById('orders-modal');
const myOrdersBtn = document.getElementById('myOrdersBtn');
const ordersContainer = document.getElementById('orders-container');
const startShoppingBtn = document.getElementById('start-shopping-btn');

// Order status types
const ORDER_STATUS = {
    PENDING: 'pending',
    PROCESSING: 'processing',
    SHIPPED: 'shipped',
    DELIVERED: 'delivered',
    CANCELLED: 'cancelled'
};

// Tracking steps
const TRACKING_STEPS = [
    { id: 'ordered', title: 'Order Placed', desc: 'Your order has been received' },
    { id: 'confirmed', title: 'Order Confirmed', desc: 'Order has been confirmed' },
    { id: 'processing', title: 'Processing', desc: 'Preparing your order for shipment' },
    { id: 'shipped', title: 'Shipped', desc: 'Your order is on the way' },
    { id: 'delivered', title: 'Delivered', desc: 'Order has been delivered' }
];

// ====== Initialize ======
displayCategories();
displayProducts(products);
loadCart();
checkAuthStatus();

// ====== Category Functions ======
function displayCategories() {
    categoryFilter.innerHTML = '';
    categoryDropdown.innerHTML = '';
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'category-btn';
        if (category === 'All') button.classList.add('active');
        button.textContent = category;
        button.onclick = () => filterByCategory(category);
        categoryFilter.appendChild(button);
        if (category !== 'All') {
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = category;
            link.onclick = (e) => { e.preventDefault(); filterByCategory(category); };
            categoryDropdown.appendChild(link);
        }
    });
}

function displayProducts(productsToShow) {
    productsContainer.innerHTML = '';
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.cursor = 'pointer';
        productCard.onclick = () => showProductDetails(product.id);
        
        let badgeHTML = product.discount ? `<div class="product-badge">-${product.discount}%</div>` : '';
        let priceHTML = `<div class="product-price">₱${product.price.toLocaleString()}`;
        if (product.originalPrice) {
            priceHTML += `<span class="original-price">₱${product.originalPrice.toLocaleString()}</span><span class="discount">Save ${product.discount}%</span>`;
        }
        priceHTML += '</div>';
        
        productCard.innerHTML = `
            ${badgeHTML}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="product-info">
                <div class="product-category"><i class="fas fa-tag"></i> ${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                ${priceHTML}
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
    productCount.textContent = `Showing ${productsToShow.length} products`;
}

function filterByCategory(category) {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === category) btn.classList.add('active');
    });
    displayProducts(category === 'All' ? products : products.filter(p => p.category === category));
}

function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm === '') { displayProducts(products); return; }
    displayProducts(products.filter(p => p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm) || p.category.toLowerCase().includes(searchTerm)));
}

// ====== Product Details Functions ======
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const images = productImages[productId] || [product.image, product.image, product.image];
    
    const detailsContainer = document.getElementById('product-details-container');
    
    detailsContainer.innerHTML = `
        <div class="product-gallery">
            <div class="main-image">
                <img src="${images[0]}" alt="${product.name}" id="main-product-image">
            </div>
            <div class="thumbnail-images">
                ${images.map((img, index) => `
                    <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
                        <img src="${img}" alt="${product.name} view ${index + 1}">
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="product-info-details">
            <div class="product-header">
                <h2>${product.name}</h2>
                <div class="product-rating">
                    ${getStarRating(product.rating)}
                    <span>(${product.rating}/5)</span>
                </div>
            </div>
            
            <div class="product-price-details">
                <div class="current-price">₱${product.price.toLocaleString()}</div>
                ${product.originalPrice ? `
                    <div class="original-price-details">
                        <span class="original-price">₱${product.originalPrice.toLocaleString()}</span>
                        <span class="discount-badge">-${product.discount}%</span>
                    </div>
                ` : ''}
            </div>
            
            <div class="product-category-details">
                <i class="fas fa-tag"></i> ${product.category}
            </div>
            
            <div class="product-description-details">
                <h3>Description</h3>
                <p>${product.description}</p>
            </div>
            
            <div class="product-specs">
                <h3>Features</h3>
                <ul>
                    <li><i class="fas fa-check-circle"></i> High quality materials</li>
                    <li><i class="fas fa-check-circle"></i> 1 year warranty</li>
                    <li><i class="fas fa-check-circle"></i> Free shipping nationwide</li>
                    <li><i class="fas fa-check-circle"></i> 30-day return policy</li>
                </ul>
            </div>
            
            <div class="product-actions">
                <button class="btn btn-primary add-to-cart-details" onclick="addToCartFromDetails(${product.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart - ₱${product.price.toLocaleString()}
                </button>
                <button class="btn btn-secondary" onclick="closeProductModal()">
                    Continue Shopping
                </button>
            </div>
        </div>
    `;
    
    productModal.style.display = 'flex';
}

function addToCartFromDetails(productId) {
    addToCart(productId);
    showNotification('Added to cart!');
}

function getStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

function changeMainImage(imageSrc, element) {
    document.getElementById('main-product-image').src = imageSrc;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    element.classList.add('active');
}

function closeProductModal() {
    productModal.style.display = 'none';
}

// ====== Cart Functions ======
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) existingItem.quantity += 1;
    else cart.push({ ...product, quantity: 1 });
    updateCart();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('Item removed from cart');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) removeFromCart(productId);
        else updateCart();
    }
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        checkoutBtn.disabled = true;
    } else {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `<div class="item-info"><h4>${item.name}</h4><div class="item-price">₱${item.price.toLocaleString()} × ${item.quantity}</div></div><div class="item-controls"><div class="item-quantity"><button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button><span>${item.quantity}</span><button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button></div><button class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button></div>`;
            cartItemsContainer.appendChild(cartItem);
        });
        checkoutBtn.disabled = false;
    }
    updateCartTotals();
    saveCart();
}

function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 50, total = subtotal + shipping;
    document.getElementById('cart-subtotal').textContent = subtotal.toLocaleString('en-PH', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('cart-total').textContent = total.toLocaleString('en-PH', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `position: fixed; top: 20px; right: 20px; background: linear-gradient(135deg, #00b09b 0%, #96c93d 100%); color: white; padding: 1rem 1.5rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 1001; animation: slideIn 0.3s ease;`;
    document.body.appendChild(notification);
    setTimeout(() => { notification.style.animation = 'slideOut 0.3s ease'; setTimeout(() => document.body.removeChild(notification), 300); }, 3000);
}

function saveCart() { localStorage.setItem('simpleEcommerceCart', JSON.stringify(cart)); }
function loadCart() { const savedCart = localStorage.getItem('simpleEcommerceCart'); if (savedCart) { cart = JSON.parse(savedCart); updateCart(); } }

// ====== NEW: Authentication Functions ======
function checkAuthStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const currentUser = localStorage.getItem("currentUser");
    
    if (isLoggedIn && currentUser) {
        // User is logged in
        const userName = currentUser.split('@')[0];
        const displayName = userName.charAt(0).toUpperCase() + userName.slice(1);
        userDisplayText.textContent = `Hi, ${displayName}`;
        if (loginBtn) loginBtn.style.display = "none";
        if (logoutBtn) logoutBtn.style.display = "block";
    } else {
        // User is not logged in
        userDisplayText.textContent = "Account";
        if (loginBtn) loginBtn.style.display = "block";
        if (logoutBtn) logoutBtn.style.display = "none";
    }
}

// ====== NEW: Proceed to Checkout with Authentication Check ======
function proceedToCheckout() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    
    if (!isLoggedIn) {
        // User not logged in, show login modal first
        pendingCheckout = true;
        loadLoginForm();
        loginModal.style.display = "flex";
        cartModal.style.display = "none";
        showNotification("Please login or register to proceed with checkout");
        return;
    }
    
    // User is logged in, proceed with checkout
    cartModal.style.display = "none";
    checkoutModal.style.display = "flex";
    resetCheckoutSteps();
    updateCheckoutSummary();
}

// ====== NEW: Load Login Form into Modal ======
function loadLoginForm() {
    const container = document.getElementById('login-form-container');
    
    container.innerHTML = `
        <div class="login-form-wrapper">
            <h2 id="modalFormTitle">Welcome Back</h2>
            <p class="form-subtitle" id="modalFormSubtitle">Please login to continue</p>

            <form id="modalAuthForm">
                <div class="input-group">
                    <i class="fas fa-envelope"></i>
                    <input type="email" id="modalUserEmail" placeholder="Email Address" required>
                </div>

                <div class="input-group">
                    <i class="fas fa-lock"></i>
                    <input type="password" id="modalPassword" placeholder="Password" required>
                </div>

                <div class="input-group" id="modalConfirmPasswordGroup" style="display:none;">
                    <i class="fas fa-lock"></i>
                    <input type="password" id="modalConfirmPassword" placeholder="Confirm Password">
                </div>

                <button type="submit" id="modalSubmitBtn" class="login-btn">
                    <span id="modalBtnText">Login</span>
                    <i class="fas fa-arrow-right"></i>
                </button>

                <p id="modalErrorMsg" class="error-message"></p>
            </form>

            <div class="divider">
                <span>OR</span>
            </div>

            <p class="switch-text">
                <span id="modalSwitchText">Don't have an account?</span>
                <a href="#" id="modalSwitchBtn" class="switch-link">Create Account</a>
            </p>
        </div>
    `;
    
    // Initialize the modal form functionality
    initializeModalAuth();
}

// ====== NEW: Initialize Modal Authentication ======
function initializeModalAuth() {
    const formTitle = document.getElementById("modalFormTitle");
    const switchBtn = document.getElementById("modalSwitchBtn");
    const switchText = document.getElementById("modalSwitchText");
    const confirmPasswordGroup = document.getElementById("modalConfirmPasswordGroup");
    const confirmPassword = document.getElementById("modalConfirmPassword");
    const submitBtn = document.getElementById("modalSubmitBtn");
    const btnText = document.getElementById("modalBtnText");
    const errorMsg = document.getElementById("modalErrorMsg");
    const formSubtitle = document.querySelector("#login-form-container .form-subtitle");
    
    let isLogin = true;

    // Switch between Login and Register
    switchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        isLogin = !isLogin;

        if (isLogin) {
            formTitle.innerText = "Welcome Back";
            formSubtitle.innerText = "Please login to continue";
            btnText.innerText = "Login";
            switchText.innerText = "Don't have an account?";
            switchBtn.innerText = "Create Account";
            confirmPasswordGroup.style.display = "none";
            confirmPassword.removeAttribute("required");
        } else {
            formTitle.innerText = "Create Account";
            formSubtitle.innerText = "Join ShopEasy today!";
            btnText.innerText = "Register";
            switchText.innerText = "Already have an account?";
            switchBtn.innerText = "Login";
            confirmPasswordGroup.style.display = "block";
            confirmPassword.setAttribute("required", "required");
        }

        errorMsg.innerText = "";
    });

    // Handle form submission
    document.getElementById("modalAuthForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("modalUserEmail").value.trim().toLowerCase();
        const password = document.getElementById("modalPassword").value;
        const confirm = document.getElementById("modalConfirmPassword").value;

        errorMsg.innerText = "";

        // Validate input
        if (!email || !password) {
            showModalError("Please fill in all fields");
            return;
        }

        if (!isValidEmail(email)) {
            showModalError("Please enter a valid email address");
            return;
        }

        if (password.length < 6) {
            showModalError("Password must be at least 6 characters");
            return;
        }

        // Get users from localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (!isLogin) {
            // REGISTER MODE
            if (password !== confirm) {
                showModalError("Passwords do not match");
                return;
            }

            // Check if email already exists
            const userExists = users.find(u => u.email === email);
            if (userExists) {
                showModalError("This email is already registered");
                return;
            }

            // Add new user
            users.push({ email, password });
            localStorage.setItem("users", JSON.stringify(users));

            // Show success message
            showModalSuccess("Account created successfully! Logging you in...");
            
            // Automatically log in after registration
            setTimeout(() => {
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("currentUser", email);
                checkAuthStatus();
                loginModal.style.display = "none";
                showNotification("Welcome to ShopEasy!");
                
                // If user was trying to checkout, proceed with checkout
                if (pendingCheckout) {
                    pendingCheckout = false;
                    proceedToCheckout();
                }
            }, 1500);
            return;
        }

        // LOGIN MODE
        const validUser = users.find(
            u => u.email === email && u.password === password
        );

        if (validUser) {
            // Login successful
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentUser", email);
            
            // Show success
            showModalSuccess("Login successful!");
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                checkAuthStatus();
                loginModal.style.display = "none";
                showNotification("Welcome back!");
                
                // If user was trying to checkout, proceed with checkout
                if (pendingCheckout) {
                    pendingCheckout = false;
                    proceedToCheckout();
                }
            }, 1000);
        } else {
            showModalError("Invalid email or password");
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showModalError(message) {
        errorMsg.innerText = message;
        errorMsg.style.background = "#ffe5e8";
        errorMsg.style.color = "#ff4757";
        errorMsg.style.animation = "shake 0.5s";
        setTimeout(() => {
            errorMsg.style.animation = "";
        }, 500);
    }

    function showModalSuccess(message) {
        errorMsg.innerText = message;
        errorMsg.style.background = "#d4edda";
        errorMsg.style.color = "#155724";
    }
}

// ====== Checkout Functions ======
function resetCheckoutSteps() { currentStep = 1; updateCheckoutSteps(); }

function updateCheckoutSteps() {
    document.querySelectorAll('.step').forEach((step, index) => { step.classList.remove('active'); if (index + 1 === currentStep) step.classList.add('active'); });
    document.querySelectorAll('.checkout-step').forEach(step => step.classList.remove('active'));
    document.getElementById(`step-${currentStep}`).classList.add('active');
    prevStepBtn.style.display = currentStep === 1 ? 'none' : 'inline-flex';
    nextStepBtn.style.display = currentStep === 3 ? 'none' : 'inline-flex';
    placeOrderBtn.style.display = currentStep === 3 ? 'inline-flex' : 'none';
    if (currentStep === 3) { updateOrderSummary(); placeOrderBtn.disabled = !document.getElementById('agree-terms').checked; }
}

function updateCheckoutSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = document.querySelector('input[name="shipping"]:checked').value === 'express' ? 150 : 50;
    const total = subtotal + shipping;
    document.getElementById('summary-subtotal').textContent = subtotal.toLocaleString('en-PH', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('summary-shipping').textContent = shipping.toLocaleString('en-PH', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('summary-total').textContent = total.toLocaleString('en-PH', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function updateOrderSummary() {
    document.getElementById('shipping-summary').innerHTML = `<p><strong>${shippingInfo.fullName || 'Not provided'}</strong></p><p>${shippingInfo.address || 'Not provided'}</p><p>${shippingInfo.city || ''}, ${shippingInfo.province || ''} ${shippingInfo.zip || ''}</p><p>Phone: ${shippingInfo.phone || 'Not provided'}</p><p>Email: ${shippingInfo.email || 'Not provided'}</p>`;
    const paymentMethodsMap = { cod: 'Cash on Delivery', gcash: 'GCash', maya: 'Maya', bank: 'Bank Transfer', card: 'Credit/Debit Card' };
    document.getElementById('payment-summary').innerHTML = `<p><strong>${paymentMethodsMap[selectedPayment]}</strong></p>`;
    const orderItemsSummary = document.getElementById('order-items-summary');
    orderItemsSummary.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'summary-item';
        itemElement.innerHTML = `<span>${item.name} × ${item.quantity}</span><span>₱${(item.price * item.quantity).toLocaleString()}</span>`;
        orderItemsSummary.appendChild(itemElement);
    });
    updateCheckoutSummary();
}

function placeOrder() {
    if (cart.length === 0) { showNotification('Your cart is empty!'); return; }
    if (!validateShippingForm()) { showNotification('Please complete all required fields'); return; }
    orderNumber = Math.floor(100000 + Math.random() * 900000);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingMethod = document.querySelector('input[name="shipping"]:checked').value;
    const shippingFee = shippingMethod === 'express' ? 150 : 50;
    const total = subtotal + shippingFee;
    let orderItemsList = '';
    cart.forEach(item => { orderItemsList += `• ${item.name} × ${item.quantity} = ₱${(item.price * item.quantity).toLocaleString()}\n`; });
    const emailParams = {
        order_number: orderNumber,
        customer_name: shippingInfo.fullName,
        customer_email: shippingInfo.email,
        customer_phone: shippingInfo.phone,
        shipping_address: shippingInfo.address,
        city: shippingInfo.city,
        province: shippingInfo.province,
        zip_code: shippingInfo.zip,
        order_date: new Date().toLocaleDateString('en-PH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        order_items: orderItemsList,
        subtotal: `₱${subtotal.toLocaleString()}`,
        shipping_fee: `₱${shippingFee.toLocaleString()}`,
        total_amount: `₱${total.toLocaleString()}`,
        payment_method: selectedPayment === 'cod' ? 'Cash on Delivery' : selectedPayment === 'gcash' ? 'GCash' : selectedPayment === 'maya' ? 'Maya' : selectedPayment === 'bank' ? 'Bank Transfer' : 'Credit/Debit Card',
        delivery_estimate: shippingMethod === 'express' ? '1-2 business days' : '3-5 business days',
        website_url: window.location.href
    };
    placeOrderBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    placeOrderBtn.disabled = true;
    
    // Save order before sending email
    const paymentMethod = selectedPayment === 'cod' ? 'Cash on Delivery' : 
                          selectedPayment === 'gcash' ? 'GCash' :
                          selectedPayment === 'maya' ? 'Maya' :
                          selectedPayment === 'bank' ? 'Bank Transfer' : 'Credit/Debit Card';
    
    // Save order first
    createOrderFromCart(shippingInfo, paymentMethod, shippingMethod);
    
    emailjs.send('service_5rt0kfr', 'template_udy9mmi', emailParams).then(function (response) {
        console.log('Email sent successfully!', response.status, response.text);
        document.getElementById('order-number').textContent = `#${orderNumber}`;
        document.getElementById('payment-method-display').textContent = selectedPayment === 'cod' ? 'Cash on Delivery' : selectedPayment === 'gcash' ? 'GCash' : selectedPayment === 'bank' ? 'Bank Transfer' : 'Credit/Debit Card';
        document.getElementById('delivery-date').textContent = shippingMethod === 'express' ? '1-2 business days' : '3-5 business days';
        checkoutModal.style.display = 'none';
        successModal.style.display = 'flex';
        cart = [];
        updateCart();
        saveCart();
        shippingForm.reset();
        document.getElementById('agree-terms').checked = false;
        placeOrderBtn.innerHTML = 'Place Order';
        placeOrderBtn.disabled = false;
        showNotification(`Order confirmed! Email sent to ${shippingInfo.email}`);
    }, function (error) {
        console.log('Email failed to send...', error);
        alert(`Order #${orderNumber} placed successfully!\n\nNote: Email sending failed. Please save your order number: #${orderNumber}`);
        document.getElementById('order-number').textContent = `#${orderNumber}`;
        checkoutModal.style.display = 'none';
        successModal.style.display = 'flex';
        cart = [];
        updateCart();
        saveCart();
        placeOrderBtn.innerHTML = 'Place Order';
        placeOrderBtn.disabled = false;
        showNotification('Order placed! (Email not sent - check console)');
    });
}

function validateShippingForm() {
    const requiredFields = ['full-name', 'phone', 'email', 'address', 'city', 'province', 'zip'];
    for (const fieldId of requiredFields) {
        if (!document.getElementById(fieldId).value.trim()) return false;
    }
    return true;
}

// ====== ORDERS FUNCTIONS ======
let orders = JSON.parse(localStorage.getItem('shopEasyOrders')) || [];

function saveOrders() {
    localStorage.setItem('shopEasyOrders', JSON.stringify(orders));
}

function createOrderFromCart(shippingInfo, paymentMethod, shippingMethod) {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingFee = shippingMethod === 'express' ? 150 : 50;
    const total = subtotal + shippingFee;
    
    // Get current user email
    const currentUser = localStorage.getItem("currentUser");
    
    const newOrder = {
        id: Date.now(),
        orderNumber: orderNumber,
        date: new Date().toISOString(),
        items: [...cart], // Deep copy of cart items
        shippingInfo: { 
            ...shippingInfo,
            userId: currentUser // Add userId to identify user
        },
        paymentMethod: paymentMethod,
        shippingMethod: shippingMethod,
        subtotal: subtotal,
        shippingFee: shippingFee,
        total: total,
        status: ORDER_STATUS.PENDING,
        tracking: {
            ordered: new Date().toISOString(),
            confirmed: null,
            processing: null,
            shipped: null,
            delivered: null
        },
        estimatedDelivery: shippingMethod === 'express' ? 
            '1-2 business days' : '3-5 business days',
        userId: currentUser // Add userId at root level for easy filtering
    };
    
    orders.unshift(newOrder); // Add to beginning
    saveOrders();
    return newOrder;
}

function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        if (newStatus === ORDER_STATUS.PROCESSING) {
            order.tracking.confirmed = new Date().toISOString();
        } else if (newStatus === ORDER_STATUS.SHIPPED) {
            order.tracking.processing = new Date().toISOString();
            order.tracking.shipped = new Date().toISOString();
        } else if (newStatus === ORDER_STATUS.DELIVERED) {
            order.tracking.delivered = new Date().toISOString();
        }
        saveOrders();
        return true;
    }
    return false;
}

function displayOrders() {
    const currentUser = localStorage.getItem("currentUser");
    const userEmail = currentUser ? currentUser.toLowerCase() : null;
    
    // Debug log
    console.log("Current User:", userEmail);
    console.log("All Orders:", orders);
    
    if (!userEmail) {
        ordersContainer.innerHTML = `
            <div class="empty-orders">
                <i class="fas fa-user-lock"></i>
                <h3>Please Login</h3>
                <p>You need to login to view your orders</p>
                <button class="btn btn-primary" id="login-from-orders">Login Now</button>
            </div>
        `;
        
        // Add event listener for login button
        setTimeout(() => {
            const loginBtn = document.getElementById('login-from-orders');
            if (loginBtn) {
                loginBtn.addEventListener('click', () => {
                    ordersModal.style.display = 'none';
                    loadLoginForm();
                    loginModal.style.display = 'flex';
                });
            }
        }, 100);
        
        return;
    }
    
    // Filter orders by current user email
    const userOrders = orders.filter(order => {
        // Check both userId fields and shippingInfo.email
        const orderUserId = order.userId || (order.shippingInfo && order.shippingInfo.userId);
        const orderEmail = order.shippingInfo && order.shippingInfo.email;
        
        return (orderUserId && orderUserId.toLowerCase() === userEmail) || 
               (orderEmail && orderEmail.toLowerCase() === userEmail);
    });
    
    console.log("User Orders:", userOrders);
    
    if (userOrders.length === 0) {
        ordersContainer.innerHTML = `
            <div class="empty-orders">
                <i class="fas fa-box-open"></i>
                <h3>No orders yet</h3>
                <p>Your order history will appear here</p>
                <button class="btn btn-primary" id="start-shopping-btn">Start Shopping</button>
            </div>
        `;
        
        // Add event listener for start shopping button
        setTimeout(() => {
            const startBtn = document.getElementById('start-shopping-btn');
            if (startBtn) {
                startBtn.addEventListener('click', () => {
                    ordersModal.style.display = 'none';
                });
            }
        }, 100);
        
        return;
    }
    
    // Sort orders by date (newest first)
    userOrders.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    ordersContainer.innerHTML = userOrders.map(order => `
        <div class="order-card" data-order-id="${order.id}">
            <div class="order-header">
                <div class="order-info">
                    <div class="order-number">Order #${order.orderNumber}</div>
                    <div class="order-date">${new Date(order.date).toLocaleDateString('en-PH', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}</div>
                </div>
                <div class="order-status status-${order.status}">${order.status}</div>
                <div class="order-total">₱${order.total.toLocaleString()}</div>
            </div>
            
            <div class="order-items-list">
                ${order.items.map(item => `
                    <div class="order-item">
                        <div class="item-image">
                            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/60x60?text=No+Image'">
                        </div>
                        <div class="item-details">
                            <div class="item-name">${item.name}</div>
                            <div class="item-price">₱${item.price.toLocaleString()} × ${item.quantity}</div>
                            <div class="item-quantity">Total: ₱${(item.price * item.quantity).toLocaleString()}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="order-footer">
                <div class="shipping-method">
                    <i class="fas fa-shipping-fast"></i>
                    ${order.shippingMethod === 'express' ? 'Express Delivery' : 'Standard Delivery'}
                </div>
                <div class="tracking-info">
                    <span class="estimated-delivery">
                        <i class="fas fa-calendar-alt"></i>
                        Est. Delivery: ${order.estimatedDelivery}
                    </span>
                    <button class="track-btn" onclick="showTracking('${order.id}')">
                        <i class="fas fa-map-marker-alt"></i>
                        Track Order
                    </button>
                </div>
            </div>
            
            <div class="tracking-steps" id="tracking-${order.id}">
                <h4><i class="fas fa-map-marked-alt"></i> Order Tracking</h4>
                <div class="timeline">
                    ${TRACKING_STEPS.map((step, index) => {
                        const stepDate = order.tracking[step.id];
                        const isActive = order.status === step.id;
                        const isCompleted = stepDate !== null;
                        
                        return `
                            <div class="timeline-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}">
                                <div class="timeline-content">
                                    <h4>${step.title}</h4>
                                    <p>${step.desc}</p>
                                    ${stepDate ? 
                                        `<div class="timeline-date">${new Date(stepDate).toLocaleDateString('en-PH', {
                                            month: 'short',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}</div>` 
                                        : ''
                                    }
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function showTracking(orderId) {
    const trackingElement = document.getElementById(`tracking-${orderId}`);
    const isVisible = trackingElement.classList.contains('show');
    
    // Hide all other tracking
    document.querySelectorAll('.tracking-steps').forEach(el => {
        el.classList.remove('show');
    });
    
    // Toggle current tracking
    if (!isVisible) {
        trackingElement.classList.add('show');
    }
}

function showMyOrders() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    
    if (!isLoggedIn) {
        // Show login modal first
        pendingCheckout = false;
        loadLoginForm();
        loginModal.style.display = "flex";
        ordersModal.style.display = "none";
        showNotification("Please login to view your orders");
        return;
    }
    
    // Refresh orders from localStorage
    orders = JSON.parse(localStorage.getItem('shopEasyOrders')) || [];
    
    // Display orders
    displayOrders();
    ordersModal.style.display = "flex";
}

// ====== Event Listeners ======
cartIcon.addEventListener('click', () => { cartModal.style.display = "flex"; });
searchBtn.addEventListener('click', searchProducts);
searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') searchProducts(); });
checkoutBtn.addEventListener('click', proceedToCheckout);

closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        cartModal.style.display = 'none';
        checkoutModal.style.display = 'none';
        successModal.style.display = 'none';
        productModal.style.display = 'none';
        loginModal.style.display = 'none';
        ordersModal.style.display = 'none';
    });
});

continueShoppingBtn.addEventListener('click', () => { cartModal.style.display = 'none'; });
prevStepBtn.addEventListener('click', () => { if (currentStep > 1) { currentStep--; updateCheckoutSteps(); } });

nextStepBtn.addEventListener('click', () => {
    if (currentStep === 1) {
        if (!validateShippingForm()) { showNotification('Please complete all required shipping information'); return; }
        shippingInfo = { fullName: document.getElementById('full-name').value, phone: document.getElementById('phone').value, email: document.getElementById('email').value, address: document.getElementById('address').value, city: document.getElementById('city').value, province: document.getElementById('province').value, zip: document.getElementById('zip').value, landmark: document.getElementById('landmark').value };
    }
    if (currentStep < 3) { currentStep++; updateCheckoutSteps(); }
});

placeOrderBtn.addEventListener('click', placeOrder);

paymentMethods.forEach(method => {
    method.addEventListener('click', () => {
        paymentMethods.forEach(m => m.classList.remove('selected'));
        method.classList.add('selected');
        selectedPayment = method.dataset.method;
        const instructions = document.getElementById('payment-instructions');
        const methodInstructions = {
            cod: `<div class="instructions cod-instructions"><h4><i class="fas fa-info-circle"></i> Cash on Delivery Instructions</h4><p>Please prepare the exact amount when the delivery arrives. Our rider will contact you 30 minutes before delivery.</p><p><strong>Note:</strong> A valid ID may be required upon delivery.</p></div>`,
            gcash: `<div class="instructions gcash-instructions"><h4><i class="fas fa-info-circle"></i> GCash Payment Instructions</h4><p>1. Open your GCash app</p><p>2. Go to "Send Money"</p><p>3. Enter GCash number: <strong>0917 123 4567</strong></p><p>4. Send the exact amount shown in your order summary</p><p>5. Take a screenshot of the transaction and send it to our Facebook page</p></div>`,
            maya: `<div class="instructions maya-instructions"><h4><i class="fas fa-info-circle"></i> Maya Payment Instructions</h4><p>1. Open your Maya app</p><p>2. Go to "Send Money"</p><p>3. Enter Maya number: <strong>0918 765 4321</strong></p><p>4. Send the exact amount shown in your order summary</p><p>5. Save the transaction reference number</p></div>`,
            bank: `<div class="instructions bank-instructions"><h4><i class="fas fa-info-circle"></i> Bank Transfer Instructions</h4><p><strong>BPI Account:</strong> 1234 5678 90</p><p><strong>Account Name:</strong> ShopEasy Inc.</p><p><strong>BDO Account:</strong> 9876 5432 10</p><p>Please use your order number as reference when transferring.</p></div>`,
            card: `<div class="instructions card-instructions"><h4><i class="fas fa-info-circle"></i> Card Payment Instructions</h4><p>You will be redirected to our secure payment gateway after clicking "Place Order".</p><p>We accept Visa, Mastercard, and JCB cards.</p><p><strong>Note:</strong> Your card will be charged the exact amount shown.</p></div>`
        };
        instructions.innerHTML = methodInstructions[selectedPayment];
    });
});

document.querySelectorAll('input[name="shipping"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const shippingFee = e.target.value === 'express' ? 150 : 50;
        document.getElementById('shipping-fee').textContent = shippingFee.toLocaleString('en-PH', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        updateCartTotals();
        updateCheckoutSummary();
    });
});

document.getElementById('agree-terms').addEventListener('change', (e) => { placeOrderBtn.disabled = !e.target.checked; });
continueShoppingSuccess.addEventListener('click', () => { successModal.style.display = 'none'; });
viewOrdersBtn.addEventListener('click', () => {
    successModal.style.display = 'none';
    showMyOrders();
});

// ====== NEW: Orders Event Listeners ======
if (myOrdersBtn) {
    myOrdersBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showMyOrders();
    });
}

// ====== NEW: Login/Logout Event Listeners ======
if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loadLoginForm();
        loginModal.style.display = 'flex';
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();
        
        if (confirm("Are you sure you want to logout?")) {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("currentUser");
            checkAuthStatus();
            showNotification("Logged out successfully");
        }
    });
}

// ====== Other Event Listeners ======
window.addEventListener('click', (e) => { 
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

if (window.innerWidth < 768) {
    document.querySelectorAll('.nav-link span:not(.cart-count)').forEach(span => { span.style.display = 'none'; });
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        document.querySelectorAll('.nav-link span:not(.cart-count)').forEach(span => { span.style.display = 'none'; });
    } else {
        document.querySelectorAll('.nav-link span:not(.cart-count)').forEach(span => { span.style.display = 'inline'; });
    }
});

const style = document.createElement('style');
style.textContent = `@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; }} @keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; }} @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-10px); } 75% { transform: translateX(10px); }}`;
document.head.appendChild(style);

// ====== Initialize on page load ======
document.addEventListener('DOMContentLoaded', function() {
    checkAuthStatus();
    displayOrders();
    
    // Check if there's a pending checkout after page load
    if (pendingCheckout) {
        proceedToCheckout();
    }
});