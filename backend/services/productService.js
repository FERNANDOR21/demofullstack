const productModel = require('../models/productModel'); // Importamos el modelo de productos

class ProductService {
    async getProducts() {
        return await productModel.getAllProducts(); // Llamamos al método para obtener todos los productos
    }

    async getProductById(DNI) {
        return await productModel.getProductById(DNI); // Llamamos al método para obtener un producto por DNI
    }

    async addProduct(data) {
        return await productModel.createProduct(data); // Llamamos al método para crear un producto
    }

    async modifyProduct(DNI, data) {
        return await productModel.updateProduct(DNI, data); // Llamamos al método para actualizar el producto por DNI
    }

    async removeProduct(DNI) {
        await productModel.deleteProduct(DNI); // Llamamos al método para eliminar un producto por DNI
    }
}

module.exports = new ProductService();
