const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    toggleButton.textContent = body.classList.contains('light-mode') ? '🌑' : '🌒';
});
