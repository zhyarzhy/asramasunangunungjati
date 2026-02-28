// ============================================
//  Mobile Menu Toggle - Asrama Sunan Gunung Jati
//  Digunakan di semua halaman
// ============================================

const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const icon = btn.querySelector('.material-symbols-outlined');

// Buka / tutup menu saat tombol diklik
btn.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
        menu.classList.remove('hidden');
        icon.textContent = 'close';
    } else {
        menu.classList.add('hidden');
        icon.textContent = 'menu';
    }
});

// Tutup menu saat klik di luar area menu
document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
        icon.textContent = 'menu';
    }
});

// Tutup menu saat salah satu link diklik
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
        icon.textContent = 'menu';
    });
});

// ============================================
//  Alumni Slider (hanya untuk index.html)
// ============================================

const scrollContainer = document.querySelector('.animate-\\[scroll_40s_linear_infinite\\]');

if (scrollContainer) {
    // Duplikasi konten agar animasi looping mulus tanpa gap
    const content = scrollContainer.innerHTML;
    scrollContainer.innerHTML = content + content;

    // Pause saat hover agar pengunjung bisa membaca testimoni
    scrollContainer.addEventListener('mouseenter', () => {
        scrollContainer.style.animationPlayState = 'paused';
    });

    scrollContainer.addEventListener('mouseleave', () => {
        scrollContainer.style.animationPlayState = 'running';
    });
}
