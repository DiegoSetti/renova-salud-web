// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// WhatsApp Modal
const whatsappButton = document.getElementById('whatsappButton');
const whatsappModal = document.getElementById('whatsappModal');
const modalClose = document.querySelector('.modal-close');
const openWhatsAppBtn = document.getElementById('openWhatsAppBtn');

if (whatsappButton) {
    whatsappButton.addEventListener('click', () => {
        whatsappModal.classList.add('active');
    });
}

if (modalClose) {
    modalClose.addEventListener('click', () => {
        whatsappModal.classList.remove('active');
    });
}

if (whatsappModal) {
    whatsappModal.addEventListener('click', (e) => {
        if (e.target === whatsappModal) {
            whatsappModal.classList.remove('active');
        }
    });
}

if (openWhatsAppBtn) {
    openWhatsAppBtn.addEventListener('click', () => {
        // Verificar si el reCAPTCHA fue completado
        const recaptchaResponse = grecaptcha.getResponse();
        
        if (recaptchaResponse.length === 0) {
            alert('Por favor, completa el reCAPTCHA para continuar.');
            return;
        }
        
        // Abrir WhatsApp
        const phoneNumber = '5491130096299';
        const message = encodeURIComponent('Hola, me gustaría obtener más información sobre Renova Salud.');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        
        window.open(whatsappUrl, '_blank');
        whatsappModal.classList.remove('active');
        
        // Resetear reCAPTCHA
        grecaptcha.reset();
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Character Counter
const messageTextarea = document.getElementById('mensaje');
const charCounter = document.getElementById('charCounter');

if (messageTextarea && charCounter) {
    messageTextarea.addEventListener('input', () => {
        const currentLength = messageTextarea.value.length;
        const maxLength = messageTextarea.getAttribute('maxlength');
        charCounter.textContent = `${currentLength}/${maxLength} caracteres`;
        
        if (currentLength >= maxLength * 0.9) {
            charCounter.style.color = 'var(--primary-orange)';
        } else {
            charCounter.style.color = 'var(--text-light)';
        }
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Verificar reCAPTCHA
        const recaptchaResponse = grecaptcha.getResponse();
        
        if (recaptchaResponse.length === 0) {
            alert('Por favor, completa el reCAPTCHA para continuar.');
            return;
        }
        
        // Obtener datos del formulario
        const formData = new FormData(contactForm);
        const data = {
            nombre: formData.get('nombre'),
            apellido: formData.get('apellido'),
            email: formData.get('email'),
            telefono: formData.get('telefono') || 'No proporcionado',
            mensaje: formData.get('mensaje'),
            recaptcha: recaptchaResponse
        };
        
        // OPCIÓN 1: Usar EmailJS (descomentar después de configurar)
        /*
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
            .then(() => {
                alert('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
                grecaptcha.reset();
            })
            .catch((error) => {
                alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
                console.error('Error:', error);
            });
        */
        
        // OPCIÓN 2: Mensaje de éxito temporal (hasta configurar EmailJS)
        alert('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
        grecaptcha.reset();
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.metodo-card, .team-member').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});