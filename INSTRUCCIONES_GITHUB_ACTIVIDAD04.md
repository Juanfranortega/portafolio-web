# Cómo publicar la Actividad 04 en GitHub Pages

Esta versión del portafolio ya contiene la página, el reporte y las 30 capturas de la Actividad 04. La actualización debe hacerse sobre el repositorio existente:

- Repositorio: `https://github.com/Juanfranortega/portafolio-web`
- Sitio público: `https://juanfranortega.github.io/portafolio-web/`
- Página nueva: `https://juanfranortega.github.io/portafolio-web/evidencias/parcial-1/actividad-04.html`

## Opción recomendada: actualizar con Git

### 1. Preparar una copia local del repositorio

Si todavía no existe una carpeta local del repositorio, abrir PowerShell o Git Bash y ejecutar:

```bash
git clone https://github.com/Juanfranortega/portafolio-web.git
cd portafolio-web
```

Si la carpeta ya existe, abrir una terminal dentro de ella y obtener los cambios recientes:

```bash
git status
git pull --rebase origin main
```

Si `git status` muestra archivos modificados que todavía se necesitan, guardarlos o confirmarlos antes de ejecutar `git pull --rebase`.

### 2. Sustituir el contenido por la versión actualizada

1. Descomprimir `portafolio-wap-juan.zip` en una carpeta temporal.
2. Copiar todos sus archivos y carpetas dentro de la carpeta local `portafolio-web`.
3. Aceptar la sustitución de los archivos existentes.
4. No borrar la carpeta oculta `.git` del repositorio local.

La actualización debe agregar, entre otros, estos elementos:

```text
evidencias/parcial-1/actividad-04.html
assets/evidencias/parcial-1/actividad-04/
INSTRUCCIONES_GITHUB_ACTIVIDAD04.md
```

### 3. Revisar y publicar

Ejecutar:

```bash
git status
git add .
git commit -m "docs: agregar Actividad 04 y reporte SET"
git push origin main
```

Si Git solicita identidad en la primera confirmación:

```bash
git config --global user.name "Juan Francisco Ortega Jiménez"
git config --global user.email "TU_CORREO_DE_GITHUB"
```

Después, repetir `git commit` y `git push`.

## Opción alternativa: subir desde el navegador

1. Abrir el repositorio en GitHub.
2. Seleccionar **Add file → Upload files**.
3. Arrastrar el contenido completo de la carpeta descomprimida, conservando todas las rutas.
4. Escribir el mensaje `docs: agregar Actividad 04 y reporte SET`.
5. Confirmar en la rama `main`.

La opción con Git es preferible porque conserva mejor las carpetas anidadas y permite comprobar qué archivos cambiaron.

## Configuración de GitHub Pages

El repositorio existente ya debe publicar desde `main` y `/(root)`. Solo si la página deja de estar activa:

1. Abrir **Settings → Pages**.
2. En **Build and deployment**, seleccionar **Deploy from a branch**.
3. Elegir la rama **main** y la carpeta **/(root)**.
4. Guardar y esperar a que GitHub muestre la dirección pública.

## Verificación final

Esperar uno o dos minutos y abrir las siguientes direcciones en una ventana privada:

```text
https://juanfranortega.github.io/portafolio-web/
https://juanfranortega.github.io/portafolio-web/evidencias/parcial-1/actividad-04.html
https://juanfranortega.github.io/portafolio-web/assets/evidencias/parcial-1/actividad-04/Actividad04_Reporte_Juan_Francisco_Ortega.pdf
```

Comprobar que:

- la portada indique cuatro actividades;
- la tarjeta A04 abra la página correcta;
- el reporte PDF se visualice y se descargue;
- las 30 capturas se abran sin error 404;
- el tema claro/oscuro y la navegación funcionen;
- la dirección utilice HTTPS;
- el repositorio no contenga el portal funcional, logs, XML ni credenciales reales.

## Evidencia sugerida para la entrega

Tomar dos capturas finales:

1. la página principal con la tarjeta A04 visible;
2. la página pública de la Actividad 04 con la barra de direcciones y HTTPS.

Estas capturas demuestran que la evidencia no solo fue generada, sino integrada y publicada correctamente.
