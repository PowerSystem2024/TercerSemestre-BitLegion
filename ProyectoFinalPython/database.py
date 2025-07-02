import sqlite3

def conectar():
    conn = sqlite3.connect('tareas.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS tareas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            descripcion TEXT NOT NULL,
            fecha_hora TEXT NOT NULL,
            completada INTEGER DEFAULT 0
        )
    ''')
    conn.commit()
    conn.close()

def agregar_tarea(descripcion, fecha_hora):
    conn = sqlite3.connect('tareas.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO tareas (descripcion, fecha_hora) VALUES (?, ?)', (descripcion, fecha_hora))
    conn.commit()
    conn.close()

def obtener_tareas():
    conn = sqlite3.connect('tareas.db')
    cursor = conn.cursor()
    cursor.execute('SELECT id, descripcion, fecha_hora, completada FROM tareas')
    tareas = cursor.fetchall()
    conn.close()
    return tareas

def marcar_completada(id_tarea):
    conn = sqlite3.connect('tareas.db')
    cursor = conn.cursor()
    cursor.execute('UPDATE tareas SET completada = 1 WHERE id = ?', (id_tarea,))
    conn.commit()
    conn.close()

def eliminar_tarea(id_tarea):
    conn = sqlite3.connect('tareas.db')
    cursor = conn.cursor()
    cursor.execute('DELETE FROM tareas WHERE id = ?', (id_tarea,))
    conn.commit()
    conn.close()
