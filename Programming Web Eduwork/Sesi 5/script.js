const produk = [
  {
    nama: "Kopi Hitam Arabika",
    deskripsi: "Kopi arabika murni dengan rasa khas pegunungan.",
    harga: 30000,
    gambar: "https://down-id.img.susercontent.com/file/7bd36470297fa18fc8a4d21e82b402b4",
    kategori: "Minuman"
  },
  {
    nama: "Kaos Polos Hitam",
    deskripsi: "Kaos katun 100% premium.",
    harga: 70000,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgfAKWJC-RDcNQij2YIO45szdSvtCrMrOUg&s",
    kategori: "Pakaian"
  },
  {
    nama: "Jas Hujan PVC",
    deskripsi: "Jas hujan awet tahan lama, cocok untuk pengendara motor.",
    harga: 95000,
    gambar: "https://down-id.img.susercontent.com/file/2456faca42fef2bd6800d5f4924307a2",
    kategori: "Perlengkapan"
  },
  {
    nama: "Teh Hijau Celup",
    deskripsi: "Teh hijau sehat dan menyegarkan.",
    harga: 25000,
    gambar: "https://res-1.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1726846487_kepala_djenggot_teh_hijau_celup_25_pcs",
    kategori: "Minuman"
  },
  {
    nama: "Celana Jeans Slim Fit",
    deskripsi: "Celana jeans gaya modern dan nyaman dipakai.",
    harga: 120000,
    gambar: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/10/24/9bd30f09-df44-4318-998b-42e9bf196667.jpg",
    kategori: "Pakaian"
  }
];

function tampilkanKategori() {
  const kategoriSet = new Set(produk.map(p => p.kategori));
  const filterKategori = document.getElementById('filterKategori');
  kategoriSet.forEach(kat => {
    const option = document.createElement('option');
    option.value = kat;
    option.textContent = kat;
    filterKategori.appendChild(option);
  });
}

function renderProduk(data) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  if (data.length === 0) {
    container.innerHTML = "<p class='text-muted'>Produk tidak ditemukan.</p>";
    return;
  }

  data.forEach((item) => {
    const card = `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${item.gambar}" class="card-img-top" alt="${item.nama}" />
          <div class="card-body">
            <h5 class="card-title">${item.nama}</h5>
            <p class="card-text">${item.deskripsi}</p>
            <p class="text-primary fw-bold">Rp ${item.harga.toLocaleString("id-ID")}</p>
            <span class="badge bg-secondary">${item.kategori}</span>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", card);
  });
}

function applyFilter() {
  const kategori = document.getElementById("filterKategori").value;
  const hargaSort = document.getElementById("filterHarga").value;
  const keyword = document.getElementById("searchInput").value.toLowerCase();

  let hasil = produk.filter(p => 
    (kategori === "" || p.kategori === kategori) &&
    (p.nama.toLowerCase().includes(keyword))
  );

  if (hargaSort === "asc") {
    hasil.sort((a, b) => a.harga - b.harga);
  } else if (hargaSort === "desc") {
    hasil.sort((a, b) => b.harga - a.harga);
  }

  renderProduk(hasil);
}

document.getElementById("filterKategori").addEventListener("change", applyFilter);
document.getElementById("filterHarga").addEventListener("change", applyFilter);
document.getElementById("searchInput").addEventListener("input", applyFilter);

window.addEventListener("DOMContentLoaded", () => {
  tampilkanKategori();
  renderProduk(produk);
});