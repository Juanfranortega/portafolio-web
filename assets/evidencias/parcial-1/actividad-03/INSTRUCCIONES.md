# Cómo realizar la Actividad 03

## Preparación

Necesitas Windows con Python 3, Kali Linux en VirtualBox, el adaptador de red en modo **solo-anfitrión** y los dos archivos Python de esta carpeta.

La práctica debe hacerse únicamente en tus propios equipos, de forma visible y utilizando una frase de prueba que no sea una contraseña.

## 1. Obtener la IP de Kali

En Kali ejecuta:

```bash
ip -br a
```

Identifica la IP de la red solo-anfitrión, por ejemplo `192.168.56.101`.

## 2. Modificar el emisor

Abre `UPSLPspyware_Actividad03.py` en Windows y reemplaza:

```python
IP_KALI = "192.168.56.101"
```

por la IP real mostrada en Kali.

## 3. Comprobar la red

En PowerShell:

```powershell
ping 192.168.56.101
```

Toma una captura del resultado correcto.

## 4. Instalar pynput en Windows

Desde la carpeta de la actividad:

```powershell
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

## 5. Iniciar primero el receptor de Kali

En la carpeta donde copiaste `receptor_kali.py`:

```bash
python3 receptor_kali.py
```

Debe mostrar: `Receptor esperando eventos en el puerto 5050...`

## 6. Iniciar el emisor en Windows

```powershell
.\.venv\Scripts\python.exe .\UPSLPspyware_Actividad03.py
```

Escribe `LABORATORIO`, presiona una frase inocua como `PRUEBA 123`, espera entre algunas teclas y presiona `Esc` al final.

## 7. Comprobar la persistencia

Después de terminar el emisor, en PowerShell:

```powershell
Get-Content .\Eventos.txt
```

Después de la desconexión, en Kali:

```bash
cat Eventos_Recibidos_Kali.txt
```

Los archivos deben conservar la información y mostrar eventos coincidentes.

## 8. Capturas requeridas

1. IP de Kali obtenida con `ip -br a`.
2. Ping desde Windows hacia Kali.
3. Receptor esperando en el puerto 5050.
4. Conexión establecida desde el emisor.
5. Eventos en la consola de Windows.
6. Eventos recibidos en Kali.
7. Finalización al liberar `Esc`.
8. Contenido persistente de `Eventos.txt`.
9. Contenido persistente de `Eventos_Recibidos_Kali.txt`.
10. Actividad publicada en el portafolio.

## 9. Presentación recomendada

1. Portada.
2. Introducción y objetivo.
3. Código base y ampliaciones realizadas.
4. Librerías utilizadas: `pynput`, `datetime`, `socket` y `time`.
5. Función `generar_evento()`.
6. Función `guardar_evento()` y persistencia.
7. Funciones `on_press()` y `on_release()`.
8. Asociación temporal: fecha, consecutivo y `delta_ms`.
9. Envío TCP y receptor de Kali.
10. Pruebas y capturas.
11. Implicaciones de ciberseguridad y uso ético.
12. Conclusiones y enlaces al portafolio.

La presentación de referencia es clara para explicar el código local, pero a tu versión se deben añadir obligatoriamente la transmisión a Kali y la publicación HTML para cubrir toda la rúbrica.
