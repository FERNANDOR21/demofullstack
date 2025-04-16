const mysql = require('mysql2'); // Importando mysql2 para crear un pool de conexiones

class Database {
    constructor() {
        // Creamos un pool de conexiones para MySQL
        this.pool = mysql.createPool({
            host: 'localhost',       // Dirección del servidor MySQL
            user: 'mysql',            // Usuario de MySQL
            password: 'admin',  // Contraseña de MySQL
            database: 'qlalmacenv1',     // Nombre de la base de datos
            port: 3306,              // Puerto por defecto de MySQL
        });

        // Usamos `promise()` para que las consultas devuelvan promesas y podamos usar async/await
        this.promisePool = this.pool.promise();
    }

    // Este método se utiliza para ejecutar consultas SQL en la base de datos.
    query(sql, params) {
        return this.promisePool.query(sql, params);
    }
}

module.exports = new Database(); // Exporta una instancia única para usar la conexión a MySQL
