function toggleDropdown() {
    let dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Menutup dropdown jika klik di luar
document.addEventListener("click", function(event) {
    let dropdown = document.getElementById("dropdownMenu");
    let button = document.querySelector(".dropdown-btn");
    
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});
