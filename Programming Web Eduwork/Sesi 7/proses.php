<?php
// Pastikan request datang dari POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dan bersihkan
    $nama = trim($_POST['nama']);
    $deskripsi = trim($_POST['deskripsi']);
    $harga = trim($_POST['harga']);
    $kategori = trim($_POST['kategori']);

    // Validasi sederhana
    $errors = [];

    // Cek nama
    if (empty($nama || strlen($nama) < 3)) {
        $errors[] = "Nama produk wajib diisi.";
    }

    // Cek deskripsi
    if (empty($deskripsi)) {
        $errors[] = "Deskripsi wajib diisi.";
    }

    // Cek harga (harus angka positif)
    if (!is_numeric($harga) || $harga <= 0) {
        $errors[] = "Harga harus angka positif.";
    }

    // Cek kategori
    $kategori_valid = ["elektronik", "fashion", "makanan", "lainnya"];
    if (!in_array($kategori, $kategori_valid)) {
        $errors[] = "Kategori tidak valid.";
    }

    // Kalau ada error, tampilkan
    if (count($errors) > 0) {
        echo "<h3>Terjadi Kesalahan:</h3>";
        echo "<ul>";
        foreach ($errors as $error) {
            echo "<li>$error</li>";
        }
        echo "</ul>";
        echo "<a href='form.php'>Kembali ke Form</a>";
    } else {
        // Kalau lolos validasi, simpan data (contoh: tampilkan saja)
        echo "<h3>Data Produk Berhasil Disimpan</h3>";
        echo "<p><strong>Nama:</strong> $nama</p>";
        echo "<p><strong>Deskripsi:</strong> $deskripsi</p>";
        echo "<p><strong>Harga:</strong> Rp " . number_format($harga, 0, ',', '.') . "</p>";
        echo "<p><strong>Kategori:</strong> $kategori</p>";
        echo "<a href='form.php'>Input Lagi</a>";
    }
} else {
    echo "Akses tidak valid.";
}
