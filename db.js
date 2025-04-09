const { Pool } = require('pg'); //importando la clase Pool desde el paquete pg
//Pool se utiliza para gestionar conexiones a la base de datos PostgreSQL

class Database { // Tiene un constructor que, al ser instanciada, crea una nueva instancia de Pool para la conexion a la base de datos.
    constructor() {
        this.pool = new Pool({ //Dentro de la configuración del Pool, se pasan varios parámetros:

            user: 'postgres', // Usuario de PostgreSQL
            host:'localhost', //'localhost' si mapeaste el puerto 5432 en el docker
            database:'prueba1', // Nombre de la base de datos
            password:'admin', // Contrseña de la base de datos
            port: 5432, // Puero por defecto de Posgrest
        })
    }

    // Este método se utiliza para ejecutar consultas SQL en la base de datos.
    query(text, parms){ //text es la consulta SQL que queremos ejecutar, y params son los parámetros.
        return this.pool.query(text, parms);
    }
}

module.exports = new Database(); //Crea una instancia única para gestionar consultas a PostgreSQL de manera eficiente en Node.js.