const db = require('./db');

(async () => {
    try {
        // Ejecutamos una consulta simple para verificar la conexión a la DB
        const result = await db.query('SELECT NOW()');
        console.log('Conexion Exitosa. Fecha y hora actual:', result.rows[0]); // Muestra el resultado de la consulta
    } catch (error) {
        console.error('Error en la conexión:', error);
    }
})();