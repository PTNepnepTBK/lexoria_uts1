//Menyimpan ukuran font awal
let ukuranFont = 16;

//memperbesar ukuran font
document.getElementById('increase').addEventListener('click', function () {
    if (ukuranFont < 24) { // Batas maksimal 24px
        ukuranFont += 2;
        document.body.style.fontSize = ukuranFont + 'px';
    }
});

//memperkecil ukuran font
document.getElementById('decrease').addEventListener('click', function () {
    if (ukuranFont > 10) { // Batas minimal 10px
        ukuranFont -= 2;
        document.body.style.fontSize = ukuranFont + 'px';
    }
});

//mengganti tema (light mode & dark mode)
document.getElementById('themeSwitch').addEventListener('change', function () {
    if (this.checked) {
        document.body.style.backgroundColor = '#8d6e4d'; // Warna dark mode
    } else {
        document.body.style.backgroundColor = '#fdfbf9'; // Warna light mode
    }
});
