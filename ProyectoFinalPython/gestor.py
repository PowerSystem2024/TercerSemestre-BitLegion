import tkinter as tk
from tkinter import messagebox
from datetime import datetime
import database

def actualizar_lista():
    lista_tareas.delete(0, tk.END)
    for tarea in database.obtener_tareas():
        estado = "✓" if tarea[3] else "X"
        lista_tareas.insert(tk.END, f"{tarea[0]} - {estado} {tarea[1]} ({tarea[2]})")

def agregar():
    desc = entrada_desc.get()
    dia = entrada_dia.get()
    mes = entrada_mes.get()
    año = entrada_anio.get()
    hora = entrada_hora.get()
    minuto = entrada_minuto.get()

    if not all([desc.strip(), dia, mes, año, hora, minuto]):
        messagebox.showwarning("Error", "Todos los campos son obligatorios")
        return

    try:
        fecha_hora_obj = datetime(
            int(año), int(mes), int(dia),
            int(hora), int(minuto)
        )
        if fecha_hora_obj < datetime.now():
            messagebox.showwarning("Error", "La fecha y hora deben ser actuales o futuras")
            return
    except ValueError:
        messagebox.showwarning("Error", "Fecha u hora inválida")
        return

    fecha_hora_str = fecha_hora_obj.strftime("%d/%m/%Y %H:%M")

    entrada_desc.delete(0, tk.END)
    for e in [entrada_dia, entrada_mes, entrada_anio, entrada_hora, entrada_minuto]:
        e.delete(0, tk.END)

    actualizar_lista()

    database.agregar_tarea(desc, fecha_hora_str)
    entrada_desc.delete(0, tk.END)
    entrada_hora.delete(0, tk.END)
    actualizar_lista()

def completar():
    try:
        seleccion = lista_tareas.get(lista_tareas.curselection())
        id_tarea = int(seleccion.split(" - ")[0])
        database.marcar_completada(id_tarea)
        actualizar_lista()
    except:
        messagebox.showwarning("Error", "Selecciona una tarea")

def eliminar():
    try:
        seleccion = lista_tareas.get(lista_tareas.curselection())
        id_tarea = int(seleccion.split(" - ")[0])
        database.eliminar_tarea(id_tarea)
        actualizar_lista()
    except:
        messagebox.showwarning("Error", "Selecciona una tarea")

# Inicializar base de datos
database.conectar()

# Interfaz
ventana = tk.Tk()
ventana.title("Gestor de Tareas")
ventana.geometry("450x550")

tk.Label(ventana, text="Descripción:").pack()
entrada_desc = tk.Entry(ventana, width=50)
entrada_desc.pack(pady=5)

tk.Label(ventana, text="Fecha:").pack()
frame_fecha = tk.Frame(ventana)
entrada_dia = tk.Entry(frame_fecha, width=5)
entrada_mes = tk.Entry(frame_fecha, width=5)
entrada_anio = tk.Entry(frame_fecha, width=8)
tk.Label(frame_fecha, text="Día").pack(side=tk.LEFT)
entrada_dia.pack(side=tk.LEFT, padx=2)
tk.Label(frame_fecha, text="Mes").pack(side=tk.LEFT)
entrada_mes.pack(side=tk.LEFT, padx=2)
tk.Label(frame_fecha, text="Año").pack(side=tk.LEFT)
entrada_anio.pack(side=tk.LEFT, padx=2)
frame_fecha.pack(pady=5)

tk.Label(ventana, text="Hora:").pack()
frame_hora = tk.Frame(ventana)
entrada_hora = tk.Entry(frame_hora, width=5)
entrada_minuto = tk.Entry(frame_hora, width=5)
tk.Label(frame_hora, text="Hora").pack(side=tk.LEFT)
entrada_hora.pack(side=tk.LEFT, padx=2)
tk.Label(frame_hora, text="Min").pack(side=tk.LEFT)
entrada_minuto.pack(side=tk.LEFT, padx=2)
frame_hora.pack(pady=5)

tk.Button(ventana, text="Agregar Tarea", command=agregar).pack(pady=10)

lista_tareas = tk.Listbox(ventana, width=60, height=15)
lista_tareas.pack(pady=10)

tk.Button(ventana, text="Marcar como Completada", command=completar).pack(pady=5)
tk.Button(ventana, text="Eliminar Tarea", command=eliminar).pack(pady=5)

actualizar_lista()
ventana.mainloop()
