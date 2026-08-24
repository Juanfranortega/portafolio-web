"""Receptor local para ejecutar en Kali Linux durante la Actividad 03."""

from datetime import datetime
import socket


HOST = "0.0.0.0"
PUERTO = 5050
ARCHIVO_RECIBIDO = "Eventos_Recibidos_Kali.txt"


def guardar_recepcion(registro, ip_origen):
    fecha_recepcion = datetime.now().astimezone().isoformat(timespec="milliseconds")
    linea = f"{fecha_recepcion} | origen={ip_origen} | {registro}"

    with open(ARCHIVO_RECIBIDO, "a", encoding="utf-8") as archivo:
        archivo.write(linea + "\n")

    print(f"[RECIBIDO] {linea}")


def main():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as servidor:
        servidor.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        servidor.bind((HOST, PUERTO))
        servidor.listen(1)

        print(f"Receptor esperando eventos en el puerto {PUERTO}...")
        conexion, direccion = servidor.accept()

        with conexion:
            ip_origen = direccion[0]
            print(f"Conexión recibida desde {ip_origen}:{direccion[1]}")
            acumulado = ""

            while True:
                datos = conexion.recv(4096)
                if not datos:
                    break

                acumulado += datos.decode("utf-8", errors="replace")

                while "\n" in acumulado:
                    registro, acumulado = acumulado.split("\n", 1)
                    if registro:
                        guardar_recepcion(registro, ip_origen)

        print("El emisor se desconectó.")
        print(f"La telemetría permanece en {ARCHIVO_RECIBIDO}")


if __name__ == "__main__":
    main()
