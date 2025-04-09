const db = require('./mysql'); // Importa la instancia de Database

(async () => {
    try {
        // Ejecuta una consulta simple para verificar la conexión
        const [rows, fields] = await db.query('SELECT NOW()');
        console.log('Conexión exitosa. Fecha y hora actual:', rows[0]); // Muestra el resultado de la consulta
    } catch (error) {
        console.error('Error en la conexión:', error);
    }
})();
