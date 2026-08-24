# Portafolio académico — CNO IV – Seguridad Informática

Portafolio digital de **Juan Francisco Ortega Jiménez (JFOJ)**, estudiante de séptimo semestre de Ingeniería en Tecnologías de la Información en la Universidad Politécnica de San Luis Potosí. El sitio documenta las evidencias y el proceso de aprendizaje de la asignatura **CNO IV – Seguridad Informática**.

## Propósito y enfoque

El portafolio reúne actividades, análisis, prácticas y conclusiones relacionadas con seguridad informática, análisis de vulnerabilidades y pruebas de penetración realizadas en entornos controlados y autorizados. Cada evidencia deberá mostrar el resultado, el procedimiento, las herramientas utilizadas, los hallazgos y la reflexión obtenida.

## Tecnologías

- HTML5 semántico.
- CSS3: variables, Grid, Flexbox, diseño responsivo y modo claro/oscuro.
- JavaScript ES6+: menú adaptable, navegación activa, tema y validación de configuración.
- Git y GitHub para control de versiones.
- GitHub Pages para publicación con HTTPS.
- FormSubmit para recepción de mensajes y respuesta automática.

La semblanza técnica también documenta experiencia con Laravel, PHP, MySQL, SQL, GitLab, Linux, VirtualBox, redes, Packet Tracer, Java y Python.

## Estructura

```text
portafolio-web/
├── index.html
├── gracias.html
├── 404.html
├── README.md
├── RUBRICA.md
├── site.webmanifest
└── assets/
    ├── css/styles.css
    ├── img/favicon.svg
    └── js/main.js
```

## Funcionamiento general

`index.html` define la estructura y el contenido. `styles.css` controla la identidad visual y la adaptación a distintos tamaños de pantalla. `main.js` añade interacción progresiva sin impedir que el contenido funcione cuando JavaScript no está disponible. Las secciones de los parciales quedaron preparadas para incorporar nuevas evidencias durante el curso.

## Configuración obligatoria del formulario

GitHub Pages publica archivos estáticos y no procesa formularios por sí solo. El proyecto usa FormSubmit como intermediario:

1. En `index.html`, localizar:

   ```html
   action="https://formsubmit.co/TU_CORREO@EJEMPLO.COM"
   ```

2. Reemplazar `TU_CORREO@EJEMPLO.COM` por el correo real que recibirá los mensajes.
3. Publicar el sitio.
4. Enviar una prueba desde el formulario.
5. Abrir el mensaje de activación recibido y confirmar la dirección.
6. Enviar una segunda prueba y verificar:
   - que el dueño recibe los datos;
   - que el visitante recibe la respuesta automática.
7. Cuando se conozca la URL definitiva, agregar dentro del formulario:

   ```html
   <input type="hidden" name="_next" value="https://USUARIO.github.io/REPOSITORIO/gracias.html">
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
