function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Optional: Close dropdown when clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('.fixed-nav-button')) {
        const dropdown = document.getElementById('dropdown');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    }
}
