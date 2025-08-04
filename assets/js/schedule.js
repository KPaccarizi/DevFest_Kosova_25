document.querySelectorAll('.schedule-item h2').forEach(item => {
    item.addEventListener('click', () => {
        const details = item.nextElementSibling;
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });
});
