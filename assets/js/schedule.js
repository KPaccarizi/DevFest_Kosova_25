const tabButtons = document.querySelectorAll('.tab-btn');
const tabs = document.querySelectorAll('.schedule-tab');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Hide all tabs
        tabs.forEach(t => t.classList.remove('active'));

        // Show selected tab
        const target = btn.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});
