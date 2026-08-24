# Guía para terminar, publicar y entregar el portafolio

## 1. Personalización final

Antes de publicar, revisar `index.html` y confirmar:

- Nombre: **Juan Francisco Ortega Jiménez**.
- Alias: **JFOJ**.
- Asignatura: **CNO IV – Seguridad Informática**.
- Institución: **Universidad Politécnica de San Luis Potosí**.
- Semestre: **7mo Semestre**.
- Perfil e intereses académicos.

## 2. Activación del formulario

El destinatario ya está configurado como **twitchjfortnez@gmail.com**. No se requiere ni se debe compartir contraseña, token o código de acceso.

1. Publicar esta versión del portafolio.
2. Enviar un primer mensaje desde el formulario.
3. Abrir `twitchjfortnez@gmail.com` y confirmar la activación enviada por FormSubmit.
4. Enviar una segunda prueba.
5. Verificar que:
   - llega el mensaje al dueño del portafolio;
   - aparece la pantalla visible de envío correcto;
   - el visitante recibe el correo automático;
   - los campos obligatorios impiden envíos incompletos.

Nota: la dirección usada en la propiedad `action` será visible en el código fuente público. Conviene usar un correo académico o uno destinado al portafolio.

La autorespuesta utiliza el campo `email` escrito por el visitante. Debe conservarse el envío HTML normal y reCAPTCHA; no debe transformarse el formulario en AJAX.

## 3. Prueba en la computadora

Desde PowerShell o Git Bash, entrar en la carpeta del proyecto y ejecutar:

```bash
python -m http.server 8000
```

Abrir `http://localhost:8000` y comprobar:

- navegación entre secciones;
- menú móvil;
- tema claro y oscuro;
- formulario y validaciones;
- ausencia de textos cortados o elementos fuera de la pantalla.

## 4. Creación del repositorio

1. Iniciar sesión en GitHub.
2. Seleccionar **New repository**.
3. Nombre del repositorio: `portafolio-web`.
4. Descripción recomendada: `Portafolio académico de CNO IV – Seguridad Informática desarrollado con HTML, CSS y JavaScript.`
5. Seleccionar **Public**.
6. No agregar README, `.gitignore` ni licencia desde GitHub, porque el proyecto ya contiene esos archivos.
7. Crear el repositorio.

## 5. Subir los archivos

Abrir PowerShell o Git Bash dentro de la carpeta y ejecutar, cambiando `USUARIO` por el nombre real de GitHub:

```bash
git init
git add .
git commit -m "feat: crear portafolio de Seguridad Informática"
git branch -M main
git remote add origin https://github.com/Juanfranortega/portafolio-web.git
git push -u origin main
```

Si Git solicita autenticación, iniciar sesión mediante el navegador o usar un token personal; no escribir la contraseña normal de GitHub como contraseña de Git.

## 6. Activar GitHub Pages

1. Entrar al repositorio.
2. Abrir **Settings**.
3. En la barra lateral, abrir **Pages**.
4. En **Build and deployment**, elegir **Deploy from a branch**.
5. Seleccionar la rama **main**.
6. Seleccionar la carpeta **/(root)**.
7. Presionar **Save**.
8. Esperar a que GitHub muestre la dirección publicada.

La URL tendrá esta forma:

```text
https://juanfranortega.github.io/portafolio-web/
```

## 7. Pantalla de agradecimiento

La redirección ya se encuentra configurada dentro del formulario de `index.html`:

```html
<input type="hidden" name="_next" value="https://juanfranortega.github.io/portafolio-web/gracias.html">
```

Solo hay que conservarla al actualizar el repositorio. La página destino es `gracias.html`.

Después de guardar el cambio, ejecutar:

```bash
git add index.html
git commit -m "feat: activar formulario de contacto"
git push
```

## 8. Revisión final para buscar 10/10

- [ ] La URL abre sin iniciar sesión.
- [ ] La URL comienza con `https://`.
- [ ] El sitio carga en computadora y celular.
- [ ] El encabezado muestra nombre, alias, materia, institución y periodo.
- [ ] El menú lleva correctamente a cada sección.
- [ ] La presentación explica propósito, enfoque e importancia.
- [ ] El perfil incluye semblanza e intereses.
- [ ] La sección técnica menciona HTML, CSS, JavaScript, Git y GitHub Pages.
- [ ] Los apartados de los siguientes parciales están preparados.
- [ ] Cada actividad del primer parcial abre su página individual.
- [ ] Los archivos de evidencia se abren sin errores 404.
- [ ] Las animaciones se observan sin afectar la lectura ni la navegación.
- [ ] El formulario muestra la confirmación visible y envía la autorespuesta.
- [ ] El pie de página aparece correctamente.
- [ ] No hay faltas de ortografía.
- [ ] El repositorio muestra el archivo `README.md`.
- [ ] No se publicaron contraseñas, tokens ni datos sensibles.

## 9. Evidencias recomendadas

Guardar estas capturas por si el profesor las solicita:

1. Inicio completo con la barra de dirección mostrando HTTPS.
2. Secciones Perfil, Evidencias e Información técnica.
3. Formulario de contacto.
4. Correo recibido por el dueño.
5. Respuesta automática recibida por el visitante.
6. Repositorio de GitHub con los archivos y el README.
7. Configuración de GitHub Pages indicando la URL publicada.

## 10. Qué entregar

Entregar principalmente:

1. **URL pública del portafolio:** `https://juanfranortega.github.io/portafolio-web/`
2. **URL del repositorio:** `https://github.com/Juanfranortega/portafolio-web`

Si la plataforma permite anexos, incluir también una captura del Inicio y otra donde se observe el formulario probado.
