const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); // Se mantiene el nombre

// Solicitud GET para obtener todos los clientes
router.get('/', productController.getProducts);

// Solicitud GET para obtener un cliente por DNI
router.get('/:DNI', productController.getProductById);

// Solicitud POST para crear un nuevo cliente
router.post('/', productController.createProduct);

// Solicitud PUT para actualizar un cliente por DNI
router.put('/:DNI', productController.updateProduct);

// Solicitud DELETE para eliminar un cliente por DNI
router.delete('/:DNI', productController.deleteProduct);

module.exports = router;
