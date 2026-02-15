document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica del Widget de WhatsApp ---
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const modal = document.getElementById('whatsapp-modal');
    const closeBtn = document.querySelector('.close-modal');
    const humanCheck = document.getElementById('human-check');
    const startChatBtn = document.getElementById('start-chat');

    // Abrir modal
    if(whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            modal.style.display = 'flex';
        });
    }

    // Cerrar modal
    if(closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Cerrar si se hace clic fuera del contenido
    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Validar checkbox humano
    if(humanCheck) {
        humanCheck.addEventListener('change', function() {
            if(this.checked) {
                startChatBtn.removeAttribute('disabled');
            } else {
                startChatBtn.setAttribute('disabled', 'true');
            }
        });
    }

    // Iniciar chat
    if(startChatBtn) {
        startChatBtn.addEventListener('click', function() {
            // Número: +54 11 3009 6299 -> Formato API: 5491130096299 (a veces requiere el 9 para celulares de Arg)
            // Probamos formato estándar internacional sin el +
            const phone = "5491130096299"; 
            const text = encodeURIComponent("Hola, me gustaría más información sobre Renova Salud.");
            const url = `https://wa.me/${phone}?text=${text}`;
            
            window.open(url, '_blank');
            modal.style.display = 'none';
        });
    }

    // --- Validación básica del formulario de contacto (opcional si usas Formspree) ---
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Aquí Formspree maneja el envío. 
            // Si no usas Formspree, tendrías que prevenir el default y mostrar un alert.
            // e.preventDefault(); 
            // alert('Mensaje enviado (Simulación).');
        });
    }
});