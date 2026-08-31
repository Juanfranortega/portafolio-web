# Guía para agregar evidencias por parcial

El portafolio divide las evidencias en **tres parciales**. El primer parcial ya contiene páginas independientes para las Actividades 01, 02, 03 y 04; los parciales 2 y 3 quedan reservados hasta que existan nuevas actividades.

## Contenido mínimo de cada actividad

Para que una evidencia sea clara y verificable debe incluir:

1. Título oficial y fecha.
2. Objetivo o consigna.
3. Procedimiento realizado y herramientas utilizadas.
4. Resultado, hallazgos o producto obtenido.
5. Reflexión personal sobre el aprendizaje.
6. Archivos verificables: capturas, PDF, código o enlaces.

No se debe inventar información. Si falta algún dato, la actividad se conserva con estado **Pendiente de datos**.

## Dónde colocar los archivos

Usar una carpeta distinta para cada actividad:

```text
assets/evidencias/
└── parcial-1/
    ├── actividad-01/
    ├── actividad-02/
    ├── actividad-03/
    └── actividad-04/
```

Ejemplos de nombres recomendados:

```text
reporte.pdf
captura-01.webp
captura-02.webp
codigo-fuente.zip
resultado-final.png
```

Usar minúsculas, guiones y nombres sin espacios ni acentos reduce errores en GitHub Pages.

## Cómo enlazar un archivo en la página

En `evidencias/parcial-1/actividad-02.html`, por ejemplo:

```html
<a
  class="evidence-file"
  href="../../assets/evidencias/parcial-1/actividad-02/reporte.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <span>PDF</span>
  <strong>Abrir reporte final ↗</strong>
</a>
```

Después se sustituye el título genérico y el estado de la tarjeta correspondiente en `index.html`.

## Evidencia disponible de la Actividad 04

La página `evidencias/parcial-1/actividad-04.html` enlaza los siguientes recursos:

- reporte final en PDF y DOCX;
- consigna oficial en PDF;
- diagrama del flujo de captura;
- 30 capturas con nombres consecutivos y descriptivos.

El repositorio conserva únicamente documentación. No deben publicarse el portal funcional, archivos de configuración de SET, logs de captura ni reportes XML reutilizables.

## Cómo actualizar GitHub desde el navegador

1. Abrir el repositorio `Juanfranortega/portafolio-web`.
2. Seleccionar **Add file → Upload files**.
3. Arrastrar todos los archivos y carpetas actualizados, conservando la estructura.
4. Escribir un mensaje claro, por ejemplo: `docs: agregar evidencia de actividad 02`.
5. Presionar **Commit changes**.
6. Esperar la publicación y comprobar la actividad desde la URL pública.

Para actualizar específicamente la Actividad 04 mediante Git, consultar `INSTRUCCIONES_GITHUB_ACTIVIDAD04.md`.

## Revisión después de publicar

- Abrir cada tarjeta del parcial.
- Probar todos los archivos y enlaces.
- Revisar las capturas en computadora y celular.
- Confirmar que ningún recurso muestre error 404.
- Verificar que la descripción coincida con la evidencia real.

Si se entregan al asistente la consigna, fecha, explicación y archivos, se puede devolver la página de la actividad ya completada y lista para subir.
