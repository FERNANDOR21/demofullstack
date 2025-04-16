const ProductService = require('../services/productService'); // Asegúrate de importar el servicio

class ProductController {
    async getProducts(req, res) {
        try {
            const products = await ProductService.getProducts(); // Usamos ProductService
            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener los productos', error });
        }
    }

    async getProductById(req, res) {
        const { DNI } = req.params;
        try {
            const product = await ProductService.getProductById(DNI); // Usamos ProductService
            if (!product) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener el producto' });
        }
    }

    async createProduct(req, res) {
        try {
            const { DNI, nombre, ape_pate, ape_mate, fecha_naci } = req.body;
            const newProduct = await ProductService.addProduct({ DNI, nombre, ape_pate, ape_mate, fecha_naci });
            res.status(201).json(newProduct);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al crear el producto' });
        }
    }

    async updateProduct(req, res) {
        try {
            const { DNI } = req.params;
            const { nombre, ape_pate, ape_mate, fecha_naci } = req.body;
            const updatedProduct = await ProductService.modifyProduct(DNI, { nombre, ape_pate, ape_mate, fecha_naci });
            res.json(updatedProduct);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al actualizar el producto' });
        }
    }

    async deleteProduct(req, res) {
        try {
            const { DNI } = req.params;
            await ProductService.removeProduct(DNI);
            res.sendStatus(204);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar el producto' });
        }
    }
}

module.exports = new ProductController();
