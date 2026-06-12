const form = document.getElementById('contattiForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('was-validated');

    if (form.checkValidity()) {
        form.reset();
        form.classList.remove('was-validated');
        document.getElementById('formSuccess').classList.remove('d-none');
    } else {
        document.getElementById('formSuccess').classList.add('d-none');
    }
});

const filterBtns = document.querySelectorAll('#lavoriFilter .filter-btn');
const lavoriCards = document.querySelectorAll('#lavori .row [data-category]');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        lavoriCards.forEach(card => {
            card.style.display = (filter === 'tutti' || card.dataset.category === filter) ? '' : 'none';
        });
    });
});

const themeToggle = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
