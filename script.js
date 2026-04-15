/* ============================================================
   AHIMSA VILLA — script.js
   Sections: Translations | Language Toggle | Navigation |
             Scroll Animations | Gallery | Lightbox | Reviews
   ============================================================ */

/* ============================================================
   1. TRANSLATIONS
   ============================================================ */
var translations = {
  de: {
    navAbout:    'Über die Villa',
    navGallery:  'Galerie',
    navLocation: 'Lage',
    navReviews:  'Bewertungen',
    navBook:     'Buchen',
    heroTagline: 'Dein tropischer Rückzugsort in Uluwatu, Bali',
    heroBtn:     'Auf Airbnb buchen',
    aboutTitle:  'Über die Villa',
    aboutIntro:  'Gönn dir eine geräumige Villa mit 5 Schlafzimmern, Panoramablick auf den Ozean und lebendiger tropischer Surf-Atmosphäre. Entspanne am extragroßen Privatpool, genieße goldene Sonnenuntergänge vom Balkon oder mach es dir im gemütlichen Wohnzimmer bequem.',
    factGuests:   'Gäste',
    factBedrooms: 'Schlafzimmer',
    factBathrooms:'Badezimmer',
    factPoolVal:  'Privat',
    factViewVal:  'Ozean',
    factView:     'Meerblick',
    hlOcean:    'Panorama-Ozeanblick',
    hlPool:     'Extragroßer Privatpool + Kinderbereich',
    hlKaraoke:  '55" TV mit Karaoke-System',
    hlCoffee:   'Nespresso-Kaffeemaschine',
    hlDining:   'Outdoor-Dining & Pavillon',
    hlAC:       'Klimaanlage in allen Zimmern',
    hlParking:  'Kostenloser Parkplatz',
    hlBath:     'SENSATIA Badprodukte',
    galleryTitle: 'Galerie',
    tabPool:      'Pool',
    tabBedrooms:  'Schlafzimmer',
    tabBathrooms: 'Badezimmer',
    tabLiving:    'Wohnzimmer',
    tabKitchen:   'Küche',
    tabBalcony:   'Balkon',
    tabTerrace:   'Terrasse',
    tabDining:    'Essbereich',
    galleryBedroomCaption: 'Kingsize-Bett, eigenes Badezimmer',
    locationTitle: 'Lage',
    locationIntro: 'Uluwatu liegt an der südwestlichen Spitze Balis und ist bekannt für atemberaubende Klippen, erstklassige Surfspots und unvergessliche Sonnenuntergänge. Die Villa ist nur 30 Autominuten vom internationalen Flughafen Ngurah Rai entfernt.',
    locBeaches: 'Strände',
    locClubs:   'Beach Clubs',
    locDining:  'Essen & Cafés',
    reviewsTitle: 'Bewertungen',
    reviewsCount: '16 Bewertungen auf Airbnb',
    review1: 'Traumhafte Villa mit wunderschönem Meerblick. Moderner Stil, großzügig geschnitten. Der private Pool war unser Highlight. Wir kommen wieder!',
    review2: 'Ein absoluter Traum! Atemberaubender Meerblick, stilvolles Design, erstklassige Annehmlichkeiten. Alles super sauber und gepflegt. Sehr zu empfehlen!',
    review3: 'Schöner Aufenthalt in den Höhen von Uluwatu mit Blick auf das Meer. Großes, gemütliches Haus, warmer Pool. Flexibler Gastgeber. Sehr empfehlenswert!',
    review4: 'Großartige Unterkunft mit riesigen Zimmern und Wohnzimmer. Perfekt zum Entspannen und die Aussicht zu genießen.',
    reviewsLink:  'Alle Bewertungen auf Airbnb lesen →',
    ctaTitle:     'Bereit für deinen Bali-Traum?',
    ctaBtn:       'Auf Airbnb buchen',
    footerManaged:'Managed by House of Reservations'
  },
  en: {
    navAbout:    'About',
    navGallery:  'Gallery',
    navLocation: 'Location',
    navReviews:  'Reviews',
    navBook:     'Book',
    heroTagline: 'Your tropical retreat in Uluwatu, Bali',
    heroBtn:     'Book on Airbnb',
    aboutTitle:  'About the Villa',
    aboutIntro:  'Treat yourself to a spacious 5-bedroom villa with panoramic ocean views and a vibrant tropical surf atmosphere. Relax by the extra-large private pool, enjoy golden sunsets from the balcony, or unwind in the cozy living room.',
    factGuests:   'Guests',
    factBedrooms: 'Bedrooms',
    factBathrooms:'Bathrooms',
    factPoolVal:  'Private',
    factViewVal:  'Ocean',
    factView:     'Ocean View',
    hlOcean:    'Panoramic ocean view',
    hlPool:     'Extra-large private pool + kids area',
    hlKaraoke:  '55" TV with karaoke system',
    hlCoffee:   'Nespresso coffee machine',
    hlDining:   'Outdoor dining & pavilion',
    hlAC:       'Air conditioning in all rooms',
    hlParking:  'Free parking',
    hlBath:     'SENSATIA bath products',
    galleryTitle: 'Gallery',
    tabPool:      'Pool',
    tabBedrooms:  'Bedrooms',
    tabBathrooms: 'Bathrooms',
    tabLiving:    'Living Room',
    tabKitchen:   'Kitchen',
    tabBalcony:   'Balcony',
    tabTerrace:   'Terrace',
    tabDining:    'Dining Area',
    galleryBedroomCaption: 'King-size bed, en-suite bathroom',
    locationTitle: 'Location',
    locationIntro: 'Uluwatu sits on the southwestern tip of Bali, famous for its stunning cliffs, world-class surf spots, and unforgettable sunsets. The villa is just a 30-minute drive from Ngurah Rai International Airport.',
    locBeaches: 'Beaches',
    locClubs:   'Beach Clubs',
    locDining:  'Dining & Cafés',
    reviewsTitle: 'Reviews',
    reviewsCount: '16 reviews on Airbnb',
    review1: 'Dream villa with beautiful ocean views. Modern style, generously laid out. The private pool was our highlight. We will come back!',
    review2: 'An absolute dream! Breathtaking ocean views, stylish design, top-class amenities. Everything super clean and well maintained. Highly recommended!',
    review3: 'Beautiful stay in the heights of Uluwatu with a view of the sea. Large, cozy house, warm pool. Flexible host. Highly recommended!',
    review4: 'Great accommodation with huge rooms and living room. Perfect for relaxing and enjoying the view.',
    reviewsLink:  'Read all reviews on Airbnb →',
    ctaTitle:     'Ready for your Bali dream?',
    ctaBtn:       'Book on Airbnb',
    footerManaged:'Managed by House of Reservations'
  }
};

/* ============================================================
   2. LANGUAGE TOGGLE
   ============================================================ */
var currentLang = localStorage.getItem('ahimsa-lang') || 'de';

function setLanguage(lang) {
  currentLang = lang;
  var t = translations[lang];

  // Update all data-i18n elements
  var elements = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  }

  // Update html lang attribute
  document.documentElement.setAttribute('lang', lang);

  // Save preference
  localStorage.setItem('ahimsa-lang', lang);

  // Update nav lang toggle active states
  var navLangOptions = document.querySelectorAll('.nav__lang-option');
  for (var j = 0; j < navLangOptions.length; j++) {
    var opt = navLangOptions[j];
    if (opt.getAttribute('data-lang') === lang) {
      opt.classList.add('nav__lang-option--active');
    } else {
      opt.classList.remove('nav__lang-option--active');
    }
  }

  // Update footer lang button active states
  var footerLangBtns = document.querySelectorAll('.footer__lang-btn');
  for (var k = 0; k < footerLangBtns.length; k++) {
    var btn = footerLangBtns[k];
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('footer__lang-btn--active');
    } else {
      btn.classList.remove('footer__lang-btn--active');
    }
  }

  // Update gallery caption if gallery is rendered
  if (typeof updateGalleryCaption === 'function') {
    updateGalleryCaption();
  }
}

// Nav lang toggle click
var langToggleBtn = document.getElementById('langToggle');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', function() {
    setLanguage(currentLang === 'de' ? 'en' : 'de');
  });
}

// Footer lang buttons
var footerLangButtons = document.querySelectorAll('.footer__lang-btn');
for (var fi = 0; fi < footerLangButtons.length; fi++) {
  footerLangButtons[fi].addEventListener('click', function() {
    setLanguage(this.getAttribute('data-lang'));
  });
}

/* ============================================================
   3. NAVIGATION
   ============================================================ */
var navEl = document.getElementById('nav');
var hamburgerBtn = document.getElementById('hamburger');
var navLinksEl = document.getElementById('navLinks');

// Scroll: add/remove nav--scrolled class
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navEl.classList.add('nav--scrolled');
  } else {
    navEl.classList.remove('nav--scrolled');
  }
});

// Hamburger toggle
if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', function() {
    navLinksEl.classList.toggle('nav__links--open');
  });
}

// Close mobile nav on link click
var navLinkItems = navLinksEl ? navLinksEl.querySelectorAll('a') : [];
for (var ni = 0; ni < navLinkItems.length; ni++) {
  navLinkItems[ni].addEventListener('click', function() {
    navLinksEl.classList.remove('nav__links--open');
  });
}

/* ============================================================
   4. SCROLL ANIMATIONS
   ============================================================ */
var animatedEls = document.querySelectorAll('.section, .cta');
for (var ai = 0; ai < animatedEls.length; ai++) {
  animatedEls[ai].classList.add('fade-in');
}

if ('IntersectionObserver' in window) {
  var fadeObserver = new IntersectionObserver(function(entries) {
    for (var ei = 0; ei < entries.length; ei++) {
      if (entries[ei].isIntersecting) {
        entries[ei].target.classList.add('fade-in--visible');
        fadeObserver.unobserve(entries[ei].target);
      }
    }
  }, { threshold: 0.1 });

  for (var oi = 0; oi < animatedEls.length; oi++) {
    fadeObserver.observe(animatedEls[oi]);
  }
} else {
  // Fallback: show all immediately
  for (var fbi = 0; fbi < animatedEls.length; fbi++) {
    animatedEls[fbi].classList.add('fade-in--visible');
  }
}

/* ============================================================
   5. GALLERY DATA
   ============================================================ */
var galleryData = {
  'Pool': [
    'Fotos/Pool/314763be-2783-4c5f-8a15-2b522a6caad2.avif',
    'Fotos/Pool/345b7fbf-2eb4-4007-9d81-43dfd5feb8eb.avif',
    'Fotos/Pool/5dd1ea6f-7c20-4994-9a8c-ecf9ed0d6eb0.avif',
    'Fotos/Pool/5e5a4751-70ea-418a-9f2a-f9fa2c926a97.webp',
    'Fotos/Pool/677680f4-77d4-4486-b2b5-eb1434075351.avif',
    'Fotos/Pool/8172a0e9-5376-4fc3-86ea-8b30d6f5b617.avif',
    'Fotos/Pool/b2ca2f22-c679-4446-9f8c-cbde3a71f62a.avif',
    'Fotos/Pool/e7352dff-580c-4aad-ba13-9299125f0978.webp'
  ],
  'Schlafzimmer': [
    'Fotos/Schlafzimmer 1/041cee32-7882-4ea0-a1a4-9f57a1a18df3.avif',
    'Fotos/Schlafzimmer 1/0840d8b9-1a24-4f13-8d07-d97c627d5aaa.avif',
    'Fotos/Schlafzimmer 1/a7a34bbd-0f4b-464b-9296-eae9e656415d.avif',
    'Fotos/Schlafzimmer 2/7261e569-b5e2-4a43-8e6c-756aa1da4026.avif',
    'Fotos/Schlafzimmer 2/a676377d-3064-4cd5-97f6-4facc23bff98.avif',
    'Fotos/Schlafzimmer 3/986722ae-55bb-4733-be3b-5f5116d6fdde.avif',
    'Fotos/Schlafzimmer 3/b03bf9f2-1820-49c6-b757-d7e307ba3f3a.avif',
    'Fotos/Schlafzimmer 4/08ecf833-7622-4c7c-9ec2-42c2a95087fa.avif',
    'Fotos/Schlafzimmer 4/b90c6e7b-1be9-4c9a-af58-1a30d0b584a2.avif',
    'Fotos/Schlafzimmer 5/11a0247a-0036-4ff4-9136-073bb22f6c10.avif',
    'Fotos/Schlafzimmer 5/796e574e-e0f2-4adc-8488-43c422bf60e7.avif'
  ],
  'Badezimmer': [
    'Fotos/Badezimmer 1/203e88d1-de09-4076-a8a4-d9a7bf88f7ae.avif',
    'Fotos/Badezimmer 1/4839ac3a-24af-45b3-a514-3a549f57cd85.avif',
    'Fotos/Badezimmer 1/8f028d79-e65d-4890-a6c3-5f3a32717bc0.avif',
    'Fotos/Badezimmer 2/69672a09-f139-4b91-9661-e5dde9417266.avif',
    'Fotos/Badezimmer 2/cadc818d-62bb-4e39-83fe-9a122a334972.avif',
    'Fotos/Badezimmer 3/7467b1fe-c139-4432-aaca-96e4eb08a6ef.avif',
    'Fotos/Badezimmer 3/85e98184-ac77-4a07-bc89-790dcce788ba.avif',
    'Fotos/Badezimmer 4/22625a84-47fc-45a2-bb04-72770e2fb992.avif',
    'Fotos/Badezimmer 4/cf3b594c-a86c-474e-a971-2bae090541d3.avif',
    'Fotos/Badezimmer 5/c60ef1cb-4df7-4197-9f33-17c23119fb90.jpeg',
    'Fotos/Badezimmer 5/f1196fba-deda-4649-b3ca-0ae2d41f4def.jpeg'
  ],
  'Wohnzimmer': [
    'Fotos/Wohnzimmer/02f8c9fa-e3db-4430-a00e-de8a1791f86c.avif',
    'Fotos/Wohnzimmer/1a904228-9618-4222-b8c1-0eecd84efdc7.avif',
    'Fotos/Wohnzimmer/7a47569b-4193-4fa5-807f-363d4bd9a93e.avif',
    'Fotos/Wohnzimmer/b029d739-8c55-46bb-8605-f5ba06705dc1.avif'
  ],
  'Küche': [
    'Fotos/Küche/3a783869-74e1-4cf7-9cd3-7582a7c2b76f.avif',
    'Fotos/Küche/a6dcb874-01c7-4afd-8fbe-d5b8681534a0.avif',
    'Fotos/Küche/ed776b26-2131-48be-95d0-d725d10a548f.avif'
  ],
  'Balkon': [
    'Fotos/Balkon/83f34ae5-8fbb-416b-a509-1621ef8d6c6d.avif',
    'Fotos/Balkon/8486425b-7dcc-47d5-9ea0-800d83313ce1.avif',
    'Fotos/Balkon/db667312-1768-435a-811e-16a333d9a453.avif',
    'Fotos/Balkon/e460f01b-bf06-4e05-94e8-036d1c2baa03.avif',
    'Fotos/Balkon/fb8c1a73-60ce-4a98-8e76-cde4707cc158.avif'
  ],
  'Terrasse': [
    'Fotos/Terasse/41fc1e5c-4a91-4312-8440-d335de9d9215.avif'
  ],
  'Essbereich': [
    'Fotos/Essbereich/af77f20e-4391-4ab8-b9f3-d9b9a69145b0.avif'
  ]
};

/* ============================================================
   6. GALLERY TABS & RENDERING
   ============================================================ */
var currentTab = 'Pool';
var currentImages = galleryData['Pool'];
var galleryGrid = document.getElementById('galleryGrid');
var galleryTabBtns = document.querySelectorAll('.gallery__tab');
var galleryCaption = null;

function updateGalleryCaption() {
  if (!galleryCaption) return;
  if (currentTab === 'Schlafzimmer') {
    galleryCaption.textContent = translations[currentLang]['galleryBedroomCaption'];
    galleryCaption.style.display = '';
  } else {
    galleryCaption.style.display = 'none';
  }
}

function renderGallery(tab) {
  currentTab = tab;
  currentImages = galleryData[tab] || [];

  // Update active tab button
  for (var ti = 0; ti < galleryTabBtns.length; ti++) {
    var tabBtn = galleryTabBtns[ti];
    if (tabBtn.getAttribute('data-tab') === tab) {
      tabBtn.classList.add('gallery__tab--active');
    } else {
      tabBtn.classList.remove('gallery__tab--active');
    }
  }

  // Clear grid using DOM methods (no innerHTML)
  while (galleryGrid.firstChild) {
    galleryGrid.removeChild(galleryGrid.firstChild);
  }

  // Create gallery items
  for (var gi = 0; gi < currentImages.length; gi++) {
    (function(index) {
      var item = document.createElement('div');
      item.className = 'gallery__item';

      var img = document.createElement('img');
      img.src = currentImages[index];
      img.alt = tab + ' ' + (index + 1);
      img.loading = 'lazy';

      item.appendChild(img);
      item.addEventListener('click', function() {
        openLightbox(index);
      });

      galleryGrid.appendChild(item);
    })(gi);
  }

  // Add caption element (visible only for Schlafzimmer)
  galleryCaption = document.createElement('p');
  galleryCaption.className = 'gallery__caption';
  galleryGrid.appendChild(galleryCaption);
  updateGalleryCaption();
}

// Tab click handlers
for (var tbi = 0; tbi < galleryTabBtns.length; tbi++) {
  galleryTabBtns[tbi].addEventListener('click', function() {
    renderGallery(this.getAttribute('data-tab'));
  });
}

/* ============================================================
   7. LIGHTBOX
   ============================================================ */
var lightboxEl = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightboxImg');
var lightboxClose = document.getElementById('lightboxClose');
var lightboxPrev = document.getElementById('lightboxPrev');
var lightboxNext = document.getElementById('lightboxNext');
var currentLightboxIndex = 0;

function openLightbox(index) {
  currentLightboxIndex = index;
  lightboxImg.src = currentImages[index];
  lightboxImg.alt = currentTab + ' ' + (index + 1);
  lightboxEl.classList.add('lightbox--open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightboxEl.classList.remove('lightbox--open');
  document.body.style.overflow = '';
}

function prevImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + currentImages.length) % currentImages.length;
  lightboxImg.src = currentImages[currentLightboxIndex];
  lightboxImg.alt = currentTab + ' ' + (currentLightboxIndex + 1);
}

function nextImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % currentImages.length;
  lightboxImg.src = currentImages[currentLightboxIndex];
  lightboxImg.alt = currentTab + ' ' + (currentLightboxIndex + 1);
}

// Close button
if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

// Prev / Next buttons
if (lightboxPrev) {
  lightboxPrev.addEventListener('click', prevImage);
}
if (lightboxNext) {
  lightboxNext.addEventListener('click', nextImage);
}

// Click on backdrop (lightbox background) closes
if (lightboxEl) {
  lightboxEl.addEventListener('click', function(e) {
    if (e.target === lightboxEl) {
      closeLightbox();
    }
  });
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  if (!lightboxEl.classList.contains('lightbox--open')) return;
  if (e.key === 'Escape') {
    closeLightbox();
  } else if (e.key === 'ArrowLeft') {
    prevImage();
  } else if (e.key === 'ArrowRight') {
    nextImage();
  }
});

/* ============================================================
   8. REVIEWS CAROUSEL
   ============================================================ */
var reviewsTrack = document.getElementById('reviewsTrack');
var reviewDotsContainer = document.getElementById('reviewDots');
var reviewPrevBtn = document.getElementById('reviewPrev');
var reviewNextBtn = document.getElementById('reviewNext');
var reviewCards = document.querySelectorAll('.review-card');
var currentReview = 0;
var autoplayInterval = null;

// Create dot buttons dynamically
var dots = [];
for (var di = 0; di < reviewCards.length; di++) {
  (function(dotIndex) {
    var dot = document.createElement('button');
    dot.className = 'reviews__dot';
    dot.setAttribute('aria-label', 'Go to review ' + (dotIndex + 1));
    if (dotIndex === 0) {
      dot.classList.add('reviews__dot--active');
    }
    dot.addEventListener('click', function() {
      goToReview(dotIndex);
    });
    reviewDotsContainer.appendChild(dot);
    dots.push(dot);
  })(di);
}

function goToReview(index) {
  currentReview = index;
  var offset = index * 100;
  reviewsTrack.style.transform = 'translateX(-' + offset + '%)';

  // Update active dot
  for (var dui = 0; dui < dots.length; dui++) {
    dots[dui].classList.remove('reviews__dot--active');
  }
  if (dots[index]) {
    dots[index].classList.add('reviews__dot--active');
  }
}

function nextReview() {
  goToReview((currentReview + 1) % reviewCards.length);
}

function prevReview() {
  goToReview((currentReview - 1 + reviewCards.length) % reviewCards.length);
}

function startAutoplay() {
  autoplayInterval = setInterval(nextReview, 5000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = null;
}

// Prev / Next arrows
if (reviewPrevBtn) {
  reviewPrevBtn.addEventListener('click', function() {
    prevReview();
  });
}
if (reviewNextBtn) {
  reviewNextBtn.addEventListener('click', function() {
    nextReview();
  });
}

// Pause autoplay on hover, resume on leave
var reviewsCarouselEl = document.getElementById('reviewsCarousel');
if (reviewsCarouselEl) {
  reviewsCarouselEl.addEventListener('mouseenter', stopAutoplay);
  reviewsCarouselEl.addEventListener('mouseleave', function() {
    if (!autoplayInterval) {
      startAutoplay();
    }
  });
}

// Touch swipe support
var touchStartX = 0;
var touchEndX = 0;

if (reviewsCarouselEl) {
  reviewsCarouselEl.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  reviewsCarouselEl.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].clientX;
    var diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextReview();
      } else {
        prevReview();
      }
    }
  }, { passive: true });
}

/* ============================================================
   9. INIT
   ============================================================ */
setLanguage(currentLang);
renderGallery('Pool');
startAutoplay();
