const formPendaftaran = document.getElementById("formPendaftaran");
const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const sesiSelect = document.getElementById("sesi");
const infoKarakter = document.getElementById("infoKarakter");
const pesanStatus = document.getElementById("pesanStatus");

// 1. Fitur Penghitung Karakter Secara Langsung
namaInput.addEventListener("input", function () {
    const panjang = namaInput.value.length;
    infoKarakter.textContent = `Jumlah karakter: ${panjang}`;
});

// 2. Fitur Validasi saat Form disubmit
formPendaftaran.addEventListener("submit", function (event) {
    // Mencegah halaman reload otomatis
    event.preventDefault();

    const nama = namaInput.value.trim();
    const email = emailInput.value.trim();
    const sesi = sesiSelect.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validasi Nama
    if (nama === "") {
        pesanStatus.textContent = "Nama lengkap wajib diisi!";
        pesanStatus.className = "error";
        namaInput.focus();
        return;
    }

    // Validasi Email
    if (!polaEmail.test(email)) {
        pesanStatus.textContent = "Format email tidak valid!";
        pesanStatus.className = "error";
        emailInput.focus();
        return;
    }

    // Validasi Pilihan Sesi
    if (sesi === "") {
        pesanStatus.textContent = "Silakan pilih salah satu sesi workshop!";
        pesanStatus.className = "error";
        sesiSelect.focus();
        return;
    }

    // Jika Semua Validasi Lolos
    pesanStatus.textContent = `Pendaftaran berhasil! Terima kasih, ${nama}, Anda terdaftar pada Sesi ${sesi}.`;
    pesanStatus.className = "sukses";
});

// 3. Fitur Reset Pesan saat tombol Reset diklik
formPendaftaran.addEventListener("reset", function () {
    pesanStatus.textContent = "";
    infoKarakter.textContent = "Jumlah karakter: 0";
});