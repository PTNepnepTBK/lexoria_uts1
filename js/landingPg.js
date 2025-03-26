
const searchInput = document.querySelector('.search-bar input');

searchInput.addEventListener('focus', function() {
    this.style.border = '2px solid var(--text-color)';
});

searchInput.addEventListener('blur', function() {
    this.style.border = 'none';
});
