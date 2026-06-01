/**
 * CONFIGURACIÓN DE EMAILJS
 * 
 * Para configurar el envío de emails del formulario de contacto:
 * 
 * 1. Registrarse en https://www.emailjs.com/
 * 2. Crear un servicio de email (conectar Gmail, Outlook, etc.)
 * 3. Crear una plantilla de email con las siguientes variables:
 *    - {{nombre}}
 *    - {{apellido}}
 *    - {{email}}
 *    - {{telefono}}
 *    - {{mensaje}}
 * 
 * 4. Obtener las siguientes credenciales:
 *    - Public Key (User ID)
 *    - Service ID
 *    - Template ID
 * 
 * 5. Reemplazar los valores en la configuración abajo
 * 6. Agregar el script de EmailJS en el <head> de contacto.html:
 * 
 *    <script type="text/javascript" 
 *            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
 *    </script>
 *    <script type="text/javascript">
 *        (function(){
 *            emailjs.init("TU_PUBLIC_KEY");
 *        })();
 *    </script>
 * 
 * 7. Descomentar el código de EmailJS en js/main.js
 */

const EMAIL_CONFIG = {
    publicKey: 'YOUR_PUBLIC_KEY_HERE',     // Tu Public Key de EmailJS
    serviceId: 'YOUR_SERVICE_ID_HERE',     // Tu Service ID
    templateId: 'YOUR_TEMPLATE_ID_HERE',   // Tu Template ID
    recipientEmail: 'clubrenovaire@gmail.com'
};

/**
 * EJEMPLO DE PLANTILLA DE EMAIL EN EMAILJS:
 * 
 * Asunto: Nuevo contacto desde el sitio Web
 * 
 * Has recibido un nuevo mensaje de contacto desde el sitio web de Renova Salud:
 * 
 * Nombre: {{nombre}} {{apellido}}
 * Email: {{email}}
 * Teléfono: {{telefono}}
 * 
 * Mensaje:
 * {{mensaje}}
 * 
 * ---
 * Este mensaje fue enviado desde el formulario de contacto de renovasalud.com
 */

/**
 * ALTERNATIVA: FORMSPREE
 * 
 * Si prefieres usar Formspree:
 * 
 * 1. Ir a https://formspree.io/
 * 2. Crear una cuenta
 * 3. Crear un nuevo formulario
 * 4. Obtener el endpoint de Formspree
 * 5. Modificar el <form> en contacto.html:
 * 
 *    <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
 *        <!-- campos del formulario -->
 *    </form>
 * 
 * Formspree se encarga automáticamente del envío de emails.
 */

/**
 * CÓDIGO PARA js/main.js (descomentarlo después de configurar EmailJS):
 * 
 * if (contactForm) {
 *     contactForm.addEventListener('submit', async (e) => {
 *         e.preventDefault();
 *         
 *         const recaptchaResponse = grecaptcha.getResponse();
 *         
 *         if (recaptchaResponse.length === 0) {
 *             alert('Por favor, completa el reCAPTCHA para continuar.');
 *             return;
 *         }
 *         
 *         const formData = new FormData(contactForm);
 *         const data = {
 *             nombre: formData.get('nombre'),
 *             apellido: formData.get('apellido'),
 *             email: formData.get('email'),
 *             telefono: formData.get('telefono') || 'No proporcionado',
 *             mensaje: formData.get('mensaje'),
 *         };
 *         
 *         // Enviar con EmailJS
 *         emailjs.send(EMAIL_CONFIG.serviceId, EMAIL_CONFIG.templateId, data)
 *             .then(() => {
 *                 alert('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.');
 *                 contactForm.reset();
 *                 grecaptcha.reset();
 *             })
 *             .catch((error) => {
 *                 alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
 *                 console.error('Error:', error);
 *             });
 *     });
 * }
 */
