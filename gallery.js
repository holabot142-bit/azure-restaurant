// gallery.js - Lightbox Functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    let currentIndex = 0;
    
    const captions = [
        { title: 'صالة الطعام الرئيسية', desc: 'أجواء فاخرة مع إطلالة بحرية' },
        { title: 'طبق السمك المشوي', desc: 'تشكيلة من البحر الأحمر' },
        { title: 'البار', desc: 'كوكتيلات حصرية' },
        { title: 'الإطلالة', desc: 'غروب الشمس على البحر الأحمر' },
        { title: 'مناسبات خاصة', desc: 'نحتفل معك بأجمل لحظاتك' },
        { title: 'المطبخ', desc: 'الشيف ماركو في عمله' },
        { title: 'الجلسات الخارجية', desc: 'هواء البحر ونجوم الليل' },
        { title: 'سي فود بلاتر', desc: 'تشكيلة بحرية فاخرة' }
    ];
    
    function openLightbox(index) {
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function updateLightbox() {
        const item = galleryItems[currentIndex];
        const icon = item.querySelector('i').className;
        const overlay = item.querySelector('.gallery-overlay');
        const title = overlay.querySelector('h4').textContent;
        
        lightboxImage.innerHTML = `<i class="${icon}" style="font-size: 8rem; color: var(--secondary);"></i>`;
        lightboxCaption.querySelector('h4').textContent = title;
    }
    
    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateLightbox();
    }
    
    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateLightbox();
    }
    
    // Event Listeners
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', nextImage);
    lightboxPrev.addEventListener('click', prevImage);
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') prevImage();
        if (e.key === 'ArrowLeft') nextImage();
    });
});
