<script type="text/javascript">

        /*Menampilkan atau menyembunyikan dropdown menu saat tombol "Menulis" diklik*/
        function toggleDropdown() {
            const dropdown = document.getElementById("dropdown-menu");
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        }

        /*Menutup dropdown jika pengguna mengklik di luar tombol "Menulis"*/
        document.addEventListener("click", function(event) {
            const dropdown = document.getElementById("dropdown-menu");
            if (!event.target.closest(".write-btn")) {
                dropdown.style.display = "none";
            }
        });

        /*Ketika tombol diklik, pengguna dapat memasukkan nama baru, lalu nama tersebut diperbarui di tampilan*/
        function editProfile() {
        // Ubah Nama
        let newName = prompt("Masukkan nama baru:");
        if (newName) {
            document.getElementById("username").textContent = newName;
        }}
        document.getElementById("editProfileBtn").addEventListener("click", editProfile);

        /*Setiap kali pengguna mengetik sesuatu di kolom pencarian, teksnya ditampilkan di console*/
        document.getElementById("searchInput").addEventListener("keyup", function () {
            console.log("User sedang mencari: " + this.value);
        });
    </script>