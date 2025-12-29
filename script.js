const products = [
   {id: 1, name: "Wireless Bluetooth Headphones", price: 2499, originalPrice: 2999, description: "Noise cancelling headphones with 30hr battery", category: "Electronics", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400", rating: 4.5, discount: 17},
    {id: 2, name: "Smart Watch Pro", price: 3999, originalPrice: 4999, description: "Fitness tracker with heart rate & GPS", category: "Electronics", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400", rating: 4.3, discount: 20},
    {id: 3, name: "Bluetooth Speaker", price: 1599, description: "Portable speaker with 12-hour battery", category: "Electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400", rating: 4.2},
    {id: 4, name: "Gaming Mouse", price: 1299, description: "RGB gaming mouse with 6 buttons", category: "Electronics", image: "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=400", rating: 4.4},
    {id: 5, name: "USB-C Hub", price: 899, description: "7-in-1 USB-C hub for laptops", category: "Electronics", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400", rating: 4.1},
{id: 6, name: "Wireless Charger", price: 799, description: "15W fast wireless charger", category: "Electronics", image: "https://images.unsplash.com/photo-1594830098162-7c6e897b75fe?w=400&h=300&fit=crop&crop=center", rating: 4.0},    {id: 9, name: "Action Camera", price: 6899, description: "4K waterproof action camera", category: "Electronics", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400", rating: 4.4},
    {id: 10, name: "Portable SSD 1TB", price: 4599, description: "High-speed portable solid state drive", category: "Electronics", image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400", rating: 4.7},
    {id: 11, name: "Denim Jacket", price: 1899, description: "Classic denim jacket for all seasons", category: "Clothing", image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=400", rating: 4.3},
    {id: 12, name: "Running Shoes", price: 2899, originalPrice: 3499, description: "Lightweight running shoes with cushion", category: "Clothing", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400", rating: 4.6, discount: 17},
    {id: 13, name: "Cotton T-Shirt Pack", price: 999, description: "Pack of 3 basic cotton t-shirts", category: "Clothing", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400", rating: 4.2},
    {id: 14, name: "Winter Coat", price: 3499, description: "Waterproof winter coat with hood", category: "Clothing", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400", rating: 4.4},
    {id: 15, name: "Yoga Pants", price: 1299, description: "Stretchy yoga pants for workouts", category: "Clothing", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400", rating: 4.5},
    {id: 16, name: "Formal Shirt", price: 1499, description: "Premium cotton formal shirt", category: "Clothing", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400", rating: 4.3},
    {id: 17, name: "Summer Dress", price: 1899, description: "Floral print summer dress", category: "Clothing", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400", rating: 4.7},
    {id: 18, name: "Backpack", price: 1299, description: "Water-resistant backpack", category: "Clothing", image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400", rating: 4.4},
    {id: 19, name: "Coffee Maker", price: 1899, description: "Automatic coffee maker", category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400", rating: 4.5},
    {id: 20, name: "Air Fryer", price: 2999, originalPrice: 3999, description: "Digital air fryer 5L capacity", category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400", rating: 4.6, discount: 25},
    {id: 21, name: "Desk Lamp", price: 799, description: "LED desk lamp adjustable", category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400", rating: 4.2},
    {id: 22, name: "Non-stick Pan Set", price: 1499, description: "3-piece non-stick pan set", category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400", rating: 4.4},
    {id: 23, name: "Electric Kettle", price: 899, description: "1.5L electric kettle", category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1632215933905-8f0c13c24718?w=400", rating: 4.3},
    {id: 24, name: "Vacuum Cleaner", price: 3899, description: "Cordless vacuum cleaner", category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400", rating: 4.5},
    {id: 25, name: "Blender", price: 1599, description: "High-speed blender 1000W", category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400", rating: 4.4},
    {id: 26, name: "Rice Cooker", price: 1299, description: "10-cup rice cooker", category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400", rating: 4.6},
    {id: 27, name: "Web Development Guide", price: 899, description: "Complete web development handbook", category: "Books", image: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?w=400", rating: 4.7},
    {id: 28, name: "Cookbook Collection", price: 1299, description: "500+ recipes from around the world", category: "Books", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400", rating: 4.5},
    {id: 29, name: "Business Strategy", price: 699, description: "Best-selling business strategy book", category: "Books", image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400", rating: 4.4},
    {id: 30, name: "Science Fiction Novel", price: 499, description: "Award-winning sci-fi novel", category: "Books", image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400", rating: 4.8},
    {id: 31, name: "Self-Help Guide", price: 599, description: "Personal development guide", category: "Books", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400", rating: 4.3},
    {id: 32, name: "Children's Storybook", price: 399, description: "Colorful illustrated storybook", category: "Books", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400", rating: 4.6},
    {id: 33, name: "Yoga Mat", price: 699, description: "Non-slip yoga mat", category: "Sports", image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=400", rating: 4.4},
    {id: 34, name: "Dumbbell Set", price: 1899, description: "Adjustable dumbbell set 20kg", category: "Sports", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400", rating: 4.5},
    {id: 35, name: "Basketball", price: 899, description: "Official size basketball", category: "Sports", image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400", rating: 4.3},
    {id: 36, name: "Running Shorts", price: 799, description: "Breathable running shorts", category: "Sports", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400", rating: 4.2},
    {id: 37, name: "Tennis Racket", price: 2499, description: "Professional tennis racket", category: "Sports", image: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=400", rating: 4.6},
    {id: 38, name: "Swimming Goggles", price: 499, description: "Anti-fog swimming goggles", category: "Sports", image: "https://images.unsplash.com/photo-1600965962102-9d260a71890d?w=400", rating: 4.1},
    {id: 39, name: "Skincare Set", price: 1599, description: "Complete skincare routine set", category: "Beauty", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400", rating: 4.7},
    {id: 40, name: "Hair Dryer", price: 1299, description: "Ionic hair dryer 2000W", category: "Beauty", image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400", rating: 4.4},
    {id: 41, name: "Perfume Collection", price: 2299, description: "3-piece perfume set", category: "Beauty", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400", rating: 4.6},
    {id: 42, name: "Makeup Brush Set", price: 899, description: "12-piece makeup brush set", category: "Beauty", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400", rating: 4.3},
    {id: 43, name: "Sunscreen Lotion", price: 499, description: "SPF 50+ sunscreen lotion", category: "Beauty", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400", rating: 4.5},
    {id: 44, name: "Face Mask Pack", price: 299, description: "Sheet mask pack 10 pieces", category: "Beauty", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400", rating: 4.2}
  ];



const categories = ['All', ...new Set(products.map(p => p.category))];
let cart = [], currentStep = 1, selectedPayment = 'cod', shippingInfo = {}, orderNumber = Math.floor(100000 + Math.random() * 900000);

const productsContainer = document.getElementById('products-container');
const cartModal = document.getElementById('cart-modal');
const checkoutModal = document.getElementById('checkout-modal');
const successModal = document.getElementById('success-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartCountElement = document.querySelector('.cart-count');
const cartIcon = document.querySelector('.cart-icon');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryFilter = document.getElementById('category-filter');
const categoryDropdown = document.getElementById('category-dropdown');
const productCount = document.getElementById('product-count');
const checkoutBtn = document.querySelector('.checkout-btn');
const closeModalBtns = document.querySelectorAll('.close-modal');
const continueShoppingBtn = document.querySelector('.close-modal-btn');
const prevStepBtn = document.getElementById('prev-step');
const nextStepBtn = document.getElementById('next-step');
const placeOrderBtn = document.getElementById('place-order');
const shippingForm = document.getElementById('shipping-form');
const paymentMethods = document.querySelectorAll('.payment-method');
const continueShoppingSuccess = document.getElementById('continue-shopping');
const viewOrdersBtn = document.getElementById('view-orders');

displayCategories();
displayProducts(products);
loadCart();

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
        let badgeHTML = product.discount ? `<div class="product-badge">-${product.discount}%</div>` : '';
        let priceHTML = `<div class="product-price">₱${product.price.toLocaleString()}`;
        if (product.originalPrice) {
            priceHTML += `<span class="original-price">₱${product.originalPrice.toLocaleString()}</span><span class="discount">Save ${product.discount}%</span>`;
        }
        priceHTML += '</div>';
        productCard.innerHTML = `${badgeHTML}<div class="product-image"><img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="product-info"><div class="product-category"><i class="fas fa-tag"></i> ${product.category}</div><h3 class="product-title">${product.name}</h3><p class="product-description">${product.description}</p>${priceHTML}<button class="add-to-cart" onclick="addToCart(${product.id})"><i class="fas fa-cart-plus"></i> Add to Cart</button></div>`;
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
function proceedToCheckout() { cartModal.style.display = 'none'; checkoutModal.style.display = 'flex'; resetCheckoutSteps(); updateCheckoutSummary(); }
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

cartIcon.addEventListener('click', () => { cartModal.style.display = 'flex'; });
searchBtn.addEventListener('click', searchProducts);
searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') searchProducts(); });
checkoutBtn.addEventListener('click', proceedToCheckout);
closeModalBtns.forEach(btn => { btn.addEventListener('click', () => { cartModal.style.display = 'none'; checkoutModal.style.display = 'none'; successModal.style.display = 'none'; }); });
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
viewOrdersBtn.addEventListener('click', () => { alert(`Your order #${orderNumber} has been placed successfully!\n\nWe have sent a confirmation email to ${shippingInfo.email || 'your email'}.`); successModal.style.display = 'none'; });

window.addEventListener('click', (e) => { if (e.target.classList.contains('modal')) e.target.style.display = 'none'; });

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
style.textContent = `@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; }} @keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; }}`;
document.head.appendChild(style);

// Logout functionality
document.getElementById("logoutBtn").addEventListener("click", function (e) {
    e.preventDefault();
    
    // Confirm logout
    if (confirm("Are you sure you want to logout?")) {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    }
});

// Display current user - Extract name from email
const userDisplay = document.getElementById("userDisplay");
const currentUser = localStorage.getItem("currentUser");

if (userDisplay && currentUser) {
    // Extract the name part before @ symbol
    const userName = currentUser.split('@')[0];
    
    // Capitalize first letter for nicer display
    const displayName = userName.charAt(0).toUpperCase() + userName.slice(1);
    
    userDisplay.innerHTML = `<i class="fas fa-user"></i> Hi, ${displayName} <i class="fas fa-chevron-down"></i>`;
}
