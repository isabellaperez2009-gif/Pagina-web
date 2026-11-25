let cart = [];

function formatBs(amount) {
    return 'Bs. ' + amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function toggleCart() {
    document.getElementById('cart-modal').classList.toggle('open');
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
    document.getElementById('cart-modal').classList.add('open');
}

function updateCartUI() {
    const count = document.getElementById('cart-count');
    const itemsContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');

    count.textContent = cart.length;

    if (cart.length === 0) {
        itemsContainer.innerHTML = '<p class="empty-msg">Tu bolsa de compras está vacía.</p>';
        totalEl.textContent = 'Bs. 0.00';
        return;
    }

    let html = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        html += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong>
                    <span>${formatBs(item.price)}</span>
                </div>
                <button onclick="removeItem(${index})">Eliminar</button>
            </div>
        `;
    });

    itemsContainer.innerHTML = html;
    totalEl.textContent = formatBs(total);
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function checkout() {
    if (cart.length === 0) return;
    alert('¡Gracias por tu compra exclusiva en Aurelia Paris! Procesando tu pedido VIP.');
    cart = [];
    updateCartUI();
    toggleCart();
}