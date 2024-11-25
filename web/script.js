function showSection(sectionId) {
    // Menyembunyikan semua section
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Menampilkan section yang dipilih
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Menampilkan section Home secara default saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; // Sembunyikan semua bagian
    });
    document.getElementById(sectionId).style.display = 'block'; // Tampilkan bagian yang dipilih
}

function openModal(imageSrc, captionText) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const caption = document.getElementById("caption");

    // modal.style.display = "block";
    // modalImg.src = imageSrc;
    // caption.innerHTML = captionText;
    if (modal && modalImg && caption) {
        modal.style.display = "block";
        modalImg.src = imageSrc;
        caption.innerHTML = captionText;
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "none";
    }
}

function openModal(imageSrc, creatorName) {
    document.getElementById('modal-image').src = imageSrc; // Mengatur sumber gambar modal
    document.getElementById('modal-name').innerText = creatorName; // Mengatur nama pembuat
    document.getElementById('myModal').style.display = 'flex'; // Menampilkan modal
}

// Menambahkan event listener untuk menutup modal saat diklik di luar konten
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none'; // Menyembunyikan modal
    }
};

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active'); // Menambahkan atau menghapus kelas 'active'
}

function hideMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active'); // Menghapus kelas 'active' untuk menyembunyikan menu
}

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu a'); // Mengambil semua item menu

// Menambahkan event listener untuk hamburger
burger.addEventListener('click', () => {
    menu.classList.toggle('active'); // Menambahkan atau menghapus kelas 'active'
});

// Menambahkan event listener untuk setiap item menu
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active'); // Menghapus kelas 'active' untuk menyembunyikan menu
    });
});