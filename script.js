/* ===== SMOOTH SCROLLING ===== */
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active navigation highlighting based on scroll position
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const headerHeight = document.querySelector('header').offsetHeight;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight - 100;
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  // Update active nav on scroll
  window.addEventListener('scroll', updateActiveNav);
  
  // Initial call to set active nav
  updateActiveNav();
});

/* ===== MODAL FUNCTIONS ===== */

/* PDF modal functions */
function openPdfModal() {
  // Store current scroll position
  const scrollY = window.scrollY;
  const modal = document.getElementById('pdfModal');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
}

function closePdfModal() {
  const modal = document.getElementById('pdfModal');
  const scrollY = document.body.style.top;
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

/* PCA modal functions */
function openPcaModal() {
  // Store current scroll position
  const scrollY = window.scrollY;
  const modal = document.getElementById('pcaModal');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
}

function closePcaModal() {
  const modal = document.getElementById('pcaModal');
  const scrollY = document.body.style.top;
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

/* Wearable modal functions */
function openWearableModal() {
  // Store current scroll position
  const scrollY = window.scrollY;
  const modal = document.getElementById('wearableModal');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
}

function closeWearableModal() {
  const modal = document.getElementById('wearableModal');
  const scrollY = document.body.style.top;
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

/* Garden modal functions */
function openGardenModal() {
  // Store current scroll position
  const scrollY = window.scrollY;
  const modal = document.getElementById('gardenModal');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
}

function closeGardenModal() {
  const modal = document.getElementById('gardenModal');
  const scrollY = document.body.style.top;
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

/* Wearable PDF modal functions */
function openWearablePdfModal() {
  // Store current scroll position
  const scrollY = window.scrollY;
  const modal = document.getElementById('wearablePdfModal');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
}

function closeWearablePdfModal() {
  const modal = document.getElementById('wearablePdfModal');
  const scrollY = document.body.style.top;
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

/* video fullscreen function */
function openVideoFullscreen() {
  const videoUrl = 'https://echo360.org/public/media/e8e34f3a-8871-48cb-b21f-b9b94755d60a?autoplay=true&automute=false';
  window.open(videoUrl, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
}

/* ===== MODAL CLICK OUTSIDE TO CLOSE ===== */
window.onclick = function(event) {
  const pdfModal = document.getElementById('pdfModal');
  const pcaModal = document.getElementById('pcaModal');
  const wearableModal = document.getElementById('wearableModal');
  const gardenModal = document.getElementById('gardenModal');
  const wearablePdfModal = document.getElementById('wearablePdfModal');
  
  if (event.target === pdfModal) {
    closePdfModal();
  }
  if (event.target === pcaModal) {
    closePcaModal();
  }
  if (event.target === wearableModal) {
    closeWearableModal();
  }
  if (event.target === gardenModal) {
    closeGardenModal();
  }
  if (event.target === wearablePdfModal) {
    closeWearablePdfModal();
  }
}

/* ===== PAUSE VIDEOS WHEN MODAL CLOSES ===== */
document.addEventListener('DOMContentLoaded', function() {
  // Function to pause all videos in modals
  function pauseModalVideos() {
    const modals = ['wearableModal', 'gardenModal'];
    modals.forEach(modalId => {
      const modal = document.getElementById(modalId);
      if (modal) {
        const video = modal.querySelector('video');
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }

  // Add event listeners to close buttons
  const closeButtons = document.querySelectorAll('.pdf-close-btn');
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      setTimeout(pauseModalVideos, 100);
    });
  });

  // Also pause videos when clicking outside modal
  window.addEventListener('click', function(event) {
    const modals = ['wearableModal', 'gardenModal'];
    modals.forEach(modalId => {
      const modal = document.getElementById(modalId);
      if (event.target === modal) {
        setTimeout(pauseModalVideos, 100);
      }
    });
  });
});

/* ===== SCROLL REVEAL ANIMATION ===== */
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all fade elements
  const fadeElements = document.querySelectorAll('.fade');
  fadeElements.forEach(el => observer.observe(el));
});

/* ===== THEME TOGGLE ===== */
document.addEventListener('DOMContentLoaded', function() {
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark');
    });
  }
}); 