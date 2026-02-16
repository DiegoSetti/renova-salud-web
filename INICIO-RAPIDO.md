# 🚀 Guía de Inicio Rápido - Renova Salud

## Pasos para Poner el Sitio en Línea

### ✅ PASO 1: Preparar las Imágenes

1. **Logo Principal**
   - Convierte tu logo actual (el que subiste) a formato PNG con fondo transparente
   - Guárdalo como `logo-renova.png`
   - Colócalo en la carpeta `images/`

2. **Fotos del Equipo**
   - Prepara fotos profesionales de las Dras. Sabrina Pérsico y Luciana Niz
   - Guárdalas como `dra-sabrina-persico.jpg` y `dra-luciana-niz.jpg`
   - Colócalas en la carpeta `images/`

### ✅ PASO 2: Configurar Google reCAPTCHA

1. Ve a https://www.google.com/recaptcha/admin
2. Haz clic en "+" para crear un nuevo sitio
3. Configuración:
   - **Etiqueta**: Renova Salud
   - **Tipo de reCAPTCHA**: reCAPTCHA v2 → Casilla "No soy un robot"
   - **Dominios**: Agrega tu dominio (o deja en blanco para probar en localhost)
4. Acepta los términos y haz clic en "Enviar"
5. **IMPORTANTE**: Copia la "Clave del sitio" (Site Key)
6. Busca en todos los archivos HTML y reemplaza `YOUR_RECAPTCHA_SITE_KEY` con tu clave


-- 6LfA_20sAAAAALkHnY-K8E53bTPTzoa2a1t9w4dF -- Clave de sitio Recién generada
-- Clave Secreta 6LfA_20sAAAAAGhep3k7GVfnUWs18QKKX-pZxYcI (por ahora no sirve para nada)

   Archivos a modificar:
   - `index.html`
   - `pages/contacto.html`
   - `pages/sobre-renova.html`
   - `pages/quienes-somos.html`
   - `pages/politica-privacidad.html`
   - `pages/politica-cookies.html`

### ✅ PASO 3: Configurar el Formulario de Contacto

**Opción A: EmailJS (Recomendado - 200 emails gratis/mes)**

1. Crea cuenta en https://www.emailjs.com/
2. Ve a "Email Services" → Agregar servicio (Gmail recomendado)
3. Ve a "Email Templates" → Crear nueva plantilla
4. Usa esta plantilla:

```
Asunto: Nuevo contacto desde el sitio Web

Nombre: {{nombre}} {{apellido}}
Email: {{email}}
Teléfono: {{telefono}}

Mensaje:
{{mensaje}}
```

5. Obtén tus credenciales:
   - Public Key (en Account)
   - Service ID
   - Template ID

6. Agrega este código al final del `<head>` en `pages/contacto.html`:

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script type="text/javascript">
    (function(){
        emailjs.init("TU_PUBLIC_KEY_AQUI"); // Reemplazar con tu Public Key
    })();
</script>
```

7. En `js/main.js`, busca el comentario `// Ejemplo con EmailJS` y descomenta todo ese bloque de código
8. Reemplaza los valores en el código con tus credenciales de EmailJS

**Opción B: Formspree (Más Simple)**

1. Crea cuenta en https://formspree.io/
2. Crea un nuevo formulario
3. Obtén tu Form ID
4. En `pages/contacto.html`, modifica la línea del `<form>`:

```html
<form id="contactForm" action="https://formspree.io/f/TU_FORM_ID" method="POST">
```

5. ¡Listo! Formspree manejará todo automáticamente

### ✅ PASO 4: Desplegar en Cloudflare Pages

1. Ve a https://pages.cloudflare.com/
2. Inicia sesión o crea una cuenta (es gratis)
3. Haz clic en "Create a project"
4. Selecciona "Upload assets"
5. Arrastra toda la carpeta `renova-salud` o comprime en ZIP y sube
6. Haz clic en "Deploy site"
7. Espera 1-2 minutos mientras Cloudflare procesa todo
8. ¡Tu sitio estará en línea! URL: `https://tu-proyecto.pages.dev`

### ✅ PASO 5: Configurar Dominio Personalizado (Opcional)

Si ya tienes un dominio (ej: renovasalud.com.ar):

1. En Cloudflare Pages, ve a tu proyecto
2. Haz clic en "Custom domains"
3. Agrega tu dominio
4. Sigue las instrucciones para actualizar los registros DNS
5. Espera la propagación DNS (puede tardar hasta 24 horas)

## 📝 Lista de Verificación Final

Antes de lanzar, verifica:

- [ ] Logo está correctamente colocado y se ve bien
- [ ] Fotos de las doctoras están en su lugar
- [ ] reCAPTCHA está configurado y funcionando
- [ ] Formulario de contacto envía emails correctamente
- [ ] Botón de WhatsApp abre correctamente
- [ ] Todos los enlaces funcionan
- [ ] Sitio se ve bien en móvil
- [ ] Sitio se ve bien en desktop
- [ ] No hay errores en la consola del navegador

## 🆘 Solución de Problemas Comunes

### El logo no aparece
- Verifica que el archivo se llame exactamente `logo-renova.png`
- Asegúrate de que esté en la carpeta `images/`
- Verifica que la ruta sea correcta en el HTML

### El formulario no envía emails
- Verifica que hayas configurado EmailJS o Formspree
- Revisa la consola del navegador para ver errores
- Asegúrate de que reCAPTCHA esté configurado

### reCAPTCHA no aparece
- Verifica que hayas reemplazado `YOUR_RECAPTCHA_SITE_KEY` con tu clave real
- Asegúrate de que el script de reCAPTCHA esté cargando
- Revisa la consola del navegador

### El botón de WhatsApp no funciona
- Verifica que el número de teléfono esté en formato correcto: `5491130096299`
- Asegúrate de que reCAPTCHA esté funcionando
- Prueba en un dispositivo móvil con WhatsApp instalado

## 📞 Información de Contacto del Sitio

- **Teléfono**: +54 11 3009 6299
- **Email**: clubrenovaire@gmail.com
- **WhatsApp**: +54 11 3009 6299

## 🎉 ¡Listo!

Una vez completados estos pasos, tu sitio estará completamente funcional y en línea.

## 📚 Recursos Adicionales

- [Documentación de Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Guía de Google reCAPTCHA](https://developers.google.com/recaptcha/docs/display)
- [Documentación de EmailJS](https://www.emailjs.com/docs/)
- [Documentación de Formspree](https://help.formspree.io/)

---

Si tienes algún problema o necesitas ayuda adicional, revisa el archivo README.md para más detalles.
