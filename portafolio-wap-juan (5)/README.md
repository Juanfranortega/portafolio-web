# Portafolio académico — CNO IV – Seguridad Informática

Portafolio digital de **Juan Francisco Ortega Jiménez (JFOJ)**, estudiante de séptimo semestre de Ingeniería en Tecnologías de la Información en la Universidad Politécnica de San Luis Potosí. El sitio documenta las evidencias y el proceso de aprendizaje de la asignatura **CNO IV – Seguridad Informática**.

## Propósito y enfoque

El portafolio reúne actividades, análisis, prácticas y conclusiones relacionadas con seguridad informática, análisis de vulnerabilidades y pruebas de penetración realizadas en entornos controlados y autorizados. Cada evidencia deberá mostrar el resultado, el procedimiento, las herramientas utilizadas, los hallazgos y la reflexión obtenida.

## Información técnica del portafolio

- **HTML5:** estructura semántica del encabezado, navegación, secciones, formulario y pie de página.
- **CSS3:** identidad visual, variables, Grid, Flexbox, temas claro/oscuro, diseño responsivo, animaciones y estados de enfoque.
- **JavaScript ES6+:** menú móvil, tema, pestañas accesibles por parcial, navegación activa, progreso de lectura, animación progresiva y validación del formulario.
- **Git y GitHub:** control de versiones, historial de cambios y repositorio público.
- **GitHub Pages:** plataforma de publicación estática con URL pública y HTTPS.
- **FormSubmit:** procesamiento del formulario, confirmación visible en `gracias.html` y respuesta automática al visitante.

El sitio no usa frameworks ni bibliotecas externas. Todos los recursos funcionales se encuentran dentro del repositorio.

## Estructura

```text
portafolio-web/
├── index.html
├── gracias.html
├── 404.html
├── README.md
├── GUIA_EVIDENCIAS.md
├── RUBRICA.md
├── evidencias/
│   └── parcial-1/
│       ├── actividad-01.html
│       ├── actividad-02.html
│       └── actividad-03.html
├── site.webmanifest
└── assets/
    ├── css/styles.css
    ├── evidencias/parcial-1/
    │   ├── actividad-01/
    │   ├── actividad-02/
    │   └── actividad-03/
    ├── img/favicon.svg
    └── js/main.js
```

## Funcionamiento general

1. GitHub Pages toma los archivos de la rama `main` y los publica mediante HTTPS.
2. `index.html` define la estructura, el contenido académico y los enlaces a los recursos.
3. `styles.css` controla la identidad visual, el contraste y la adaptación a distintos tamaños de pantalla.
4. `main.js` añade pestañas por parcial, interacción y animación progresiva sin impedir el acceso al contenido principal.
5. El formulario valida sus campos y envía la información a FormSubmit mediante una conexión segura.

La separación entre contenido, presentación y comportamiento facilita el mantenimiento y permite agregar nuevas evidencias durante los siguientes parciales.

Las animaciones se implementan con transiciones y `@keyframes` de CSS, junto con `IntersectionObserver`. La regla `prefers-reduced-motion` reduce el movimiento cuando el sistema del visitante así lo solicita.

## Organización de evidencias

- **Primer parcial:** tres actividades registradas. La Actividad 01 está documentada y las Actividades 02 y 03 tienen plantillas listas para completar con información real.
- **Segundo parcial:** apartado reservado para futuras actividades.
- **Tercer parcial:** apartado reservado para actividades finales y conclusiones.

Consultar `GUIA_EVIDENCIAS.md` para conocer la ubicación de archivos, el formato recomendado y los pasos de actualización.

## Configuración obligatoria del formulario

GitHub Pages publica archivos estáticos y no procesa formularios por sí solo. El proyecto usa FormSubmit como intermediario:

1. El formulario ya está dirigido al correo del portafolio:

   ```html
   action="https://formsubmit.co/twitchjfortnez@gmail.com"
   ```

2. Publicar esta versión del sitio.
3. Enviar una primera prueba desde el formulario.
4. Abrir el mensaje de activación recibido en `twitchjfortnez@gmail.com` y confirmar la dirección.
5. Enviar una segunda prueba y verificar:
   - que el dueño recibe los datos;
   - que el visitante ve la pantalla “Tu mensaje fue enviado correctamente”;
   - que el visitante recibe por correo la respuesta automática.
6. La redirección final ya está configurada como:

   ```html
   <input type="hidden" name="_next" value="https://juanfranortega.github.io/portafolio-web/gracias.html">
   ```

No desactivar reCAPTCHA ni enviar el formulario por AJAX, porque la respuesta automática depende del envío HTML normal.

## Ejecución local

Se puede abrir `index.html` directamente o levantar un servidor local:

```bash
python -m http.server 8000
```

Después abrir `http://localhost:8000`.

## Publicación en GitHub Pages

Crear un repositorio público, colocar estos archivos en la raíz y ejecutar:

```bash
git init
git add .
git commit -m "feat: crear portafolio de Seguridad Informática"
git branch -M main
git remote add origin https://github.com/Juanfranortega/portafolio-web.git
git push -u origin main
```

En GitHub: **Settings → Pages → Deploy from a branch → main → /(root) → Save**.

La dirección resultante tendrá este formato:

```text
https://juanfranortega.github.io/portafolio-web/
```

## Pruebas antes de entregar

- Abrir el enlace en una ventana de incógnito.
- Probar el menú y todos los enlaces.
- Revisar la vista en computadora y celular.
- Navegar únicamente con `Tab`, `Shift + Tab` y `Enter`.
- Probar tema claro y oscuro.
- Enviar dos formularios de prueba después de activar el correo.
- Confirmar que la URL inicia con `https://`.
- Revisar ortografía, identidad académica y periodo.
- Ejecutar una auditoría Lighthouse y corregir errores críticos.

## Licencia y uso

Proyecto académico. El contenido personal y las evidencias pertenecen a su autor.
