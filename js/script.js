// Toggle class active

const navbarNav = document.querySelector('.navbar-nav');

// ketika humberger menu diklik 
document.querySelector("#humberger-menu").onclick = () => {
    navbarNav.classList.toggle('active');
}


// Klik diluar side bar untuk menutup menu 

const humbergerMenu = document.querySelector('#humberger-menu');

document.addEventListener('click', function(e) {
    if(!humbergerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

function buat() {
    Swal.fire({
        title: "Mohon maaf",
        text: "Masih tahap pengembangan",
        icon: "info"
      });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir

    const name = document.getElementById('name').value; // Ambil nilai dari input nama

    // Tampilkan SweetAlert
    Swal.fire({
        title: 'Pesan Terkirim!',
        html: `Halo <strong>${name}</strong>, Mohon maaf untuk saat ini fitur belum dapat digunakan karena masih tahap pengembangan. 😢`,
        icon: 'info',
        confirmButtonText: 'OK'
    });
});