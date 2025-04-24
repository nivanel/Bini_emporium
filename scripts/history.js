document.addEventListener('DOMContentLoaded', () => {
    const history = JSON.parse(localStorage.getItem('history')) || [];

    function updateHistoryUI() {
        const historyTable = document.querySelector('#history tbody');
        if (!historyTable) return;

        historyTable.innerHTML = '';
        history.forEach(transaction => {
            const row = document.createElement('tr');
            const items = transaction.items.map(item => `${item.quantity} x ${item.name}`).join(', ');
            row.innerHTML = `
                <td>${transaction.date}</td>
                <td>${items}</td>
                <td>P${transaction.total}</td>
            `;
            historyTable.appendChild(row);
        });
    }

    updateHistoryUI();
});
