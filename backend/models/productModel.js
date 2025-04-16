const db = require('../config/db'); // Conexión a la base de datos

class ProductModel {
    // Obtener todos los productos (clientes)
    async getAllProducts() {
        const result = await db.query('SELECT * FROM cliente'); // Usamos la tabla cliente
        return result.rows;
    }

    // Obtener un producto por DNI
    async getProductById(DNI) {
        const result = await db.query('SELECT * FROM cliente WHERE dni = $1', [DNI]); // Buscamos por DNI
        return result.rows[0];
    }

    // Crear un nuevo cliente
    async createProduct({ DNI, nombre, ape_pate, ape_mate, fecha_naci }) {
        const result = await db.query(
            'INSERT INTO cliente (DNI, nombre, ape_pate, ape_mate, fecha_naci) VALUES ($1, $2, $3, $4, $5) RETURNING *', 
            [DNI, nombre, ape_pate, ape_mate, fecha_naci]
        );
        return result.rows[0];
    }

    // Actualizar cliente por DNI
    async updateProduct(DNI, { nombre, ape_pate, ape_mate, fecha_naci }) {
        const result = await db.query(
            'UPDATE cliente SET nombre = $1, ape_pate = $2, ape_mate = $3, fecha_naci = $4 WHERE dni = $5 RETURNING *', 
            [nombre, ape_pate, ape_mate, fecha_naci, DNI]
        );
        return result.rows[0];
    }

    // Eliminar cliente por DNI
    async deleteProduct(DNI) {
        await db.query('DELETE FROM cliente WHERE dni = $1', [DNI]);
    }
}

module.exports = new ProductModel();
