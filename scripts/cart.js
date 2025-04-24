document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartUI() {
        const cartTable = document.querySelector('#cart tbody');
        if (!cartTable) return;

        cartTable.innerHTML = '';
        let subtotal = 0;
        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><i class="far fa-times-circle remove" data-id="${item.id}"></i></td>
                <td><img src="${item.image}" alt="${item.name}"></td>
                <td>${item.name}</td>
                <td>P${item.price}</td>
                <td><input type="number" value="${item.quantity}" class="quantity" data-id="${item.id}"></td>
                <td>P${item.price * item.quantity}</td>
            `;
            cartTable.appendChild(row);
            subtotal += item.price * item.quantity;
        });

        document.querySelector('#subtotal td:nth-child(2)').textContent = `P${subtotal}`;
        document.querySelector('#subtotal strong:nth-child(2)').textContent = `P${subtotal}`;
    }

    document.querySelector('#cart').addEventListener('click', (e) => {
        if (e.target.classList.contains('remove')) {
            const id = e.target.dataset.id;
            removeFromCart(id);
        }
    });

    document.querySelector('#cart').addEventListener('input', (e) => {
        if (e.target.classList.contains('quantity')) {
            const id = e.target.dataset.id;
            const quantity = parseInt(e.target.value);
            updateQuantity(id, quantity);
        }
    });

    function removeFromCart(id) {
        const index = cart.findIndex(item => item.id === id);
        if (index !== -1) {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartUI();
        }
    }

    function updateQuantity(id, quantity) {
        const product = cart.find(item => item.id === id);
        if (product && quantity > 0) {
            product.quantity = quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartUI();
        }
    }

    document.querySelector('#subtotal button').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Proceeding to checkout!');
            saveTransactionHistory(cart);
            localStorage.removeItem('cart');
            window.location.href = 'history.html'; 
        } else {
            alert('Your cart is empty!');
        }
    });

    function saveTransactionHistory(cart) {
        const history = JSON.parse(localStorage.getItem('history')) || [];
        const transaction = {
            date: new Date().toLocaleString(),
            items: cart,
            total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
        };
        history.push(transaction);
        localStorage.setItem('history', JSON.stringify(history));
    }

    updateCartUI();
});
