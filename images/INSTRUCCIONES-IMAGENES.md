# Instrucciones para Imágenes

## Imágenes Requeridas

Debes agregar las siguientes imágenes a la carpeta `images/`:

### 1. Logo Principal (logo-renova.png)
- **Archivo**: `images/logo-renova.png`
- **Fuente**: Ya lo tienes (la imagen que subiste con fondo negro)
- **Formato recomendado**: PNG con transparencia
- **Tamaño recomendado**: 
  - Alto: 60-80px (se ajustará automáticamente)
  - Ancho: proporcional
- **Notas**: 
  - Se mostrará en el header (fondo blanco) y footer (fondo oscuro)
  - Asegúrate de que tenga buena visibilidad en ambos fondos
  - Puedes crear dos versiones si es necesario (logo-light.png y logo-dark.png)

### 2. Foto Dra. Sabrina Pérsico (dra-sabrina-persico.jpg)
- **Archivo**: `images/dra-sabrina-persico.jpg`
- **Formato recomendado**: JPG o PNG
- **Tamaño recomendado**: 
  - Mínimo: 600x600px
  - Ideal: 800x800px o superior
  - Relación de aspecto: 1:1 (cuadrada) o 3:4 (vertical)
- **Notas**:
  - Foto profesional, fondo neutro
  - Buena iluminación
  - Encuadre: desde los hombros hacia arriba
  - Expresión amigable y profesional

### 3. Foto Dra. Luciana Niz (dra-luciana-niz.jpg)
- **Archivo**: `images/dra-luciana-niz.jpg`
- **Formato recomendado**: JPG o PNG
- **Tamaño recomendado**: 
  - Mínimo: 600x600px
  - Ideal: 800x800px o superior
  - Relación de aspecto: 1:1 (cuadrada) o 3:4 (vertical)
- **Notas**:
  - Foto profesional, fondo neutro
  - Buena iluminación
  - Encuadre: desde los hombros hacia arriba
  - Expresión amigable y profesional
  - Mantener consistencia de estilo con la foto de la Dra. Pérsico

## Recomendaciones Generales

### Optimización de Imágenes
- Comprime las imágenes antes de subirlas para mejorar la velocidad del sitio
- Herramientas recomendadas:
  - [TinyPNG](https://tinypng.com/) - Para PNG
  - [Compressor.io](https://compressor.io/) - Para JPG y PNG
  - [Squoosh](https://squoosh.app/) - Herramienta de Google

### Calidad
- Usa imágenes de alta calidad (no pixeladas)
- Evita imágenes borrosas o con ruido
- Mantén un estilo visual consistente

### Formato
- **Logo**: PNG con transparencia preferiblemente
- **Fotos profesionales**: JPG de alta calidad (85-90% de compresión)

## Imágenes Temporales

Si aún no tienes las imágenes definitivas, el sitio actualmente usa:
- **Logo**: Placeholder - necesitas reemplazarlo con tu logo real
- **Fotos profesionales**: Placeholders - necesitas reemplazarlos con fotos reales

## Cómo Agregar las Imágenes

1. Descarga las imágenes que necesitas usar
2. Renombra los archivos exactamente como se indica arriba
3. Coloca los archivos en la carpeta `images/` del proyecto
4. Verifica que las rutas en el código coincidan:
   - `images/logo-renova.png`
   - `images/dra-sabrina-persico.jpg`
   - `images/dra-luciana-niz.jpg`

## Verificación

Después de agregar las imágenes:
1. Abre el sitio en un navegador
2. Verifica que todas las imágenes se carguen correctamente
3. Revisa tanto en desktop como en móvil
4. Asegúrate de que el logo sea legible en todos los fondos
5. Confirma que las fotos profesionales se vean nítidas

## Notas Adicionales

- Si quieres usar un logo diferente para el header (fondo claro) y el footer (fondo oscuro):
  1. Crea dos versiones del logo
  2. Edita el CSS para usar imágenes diferentes según el contexto
  
- Para agregar más fotos del equipo en el futuro:
  1. Agrega las imágenes a la carpeta `images/`
  2. Edita `pages/quienes-somos.html`
  3. Duplica la estructura de `.team-member` y actualiza la información
