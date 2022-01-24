// external impotrt
const express = require('express');
const checkLogin = require('../middleware/checkLogin');

// internal import
const {
    postProduct,
    updateProduct,
    deleteProduct,
    findOneProduct,
    findByQuery,
} = require('../controller/productController');

// internal import

const router = express.Router();

// create a product
router.post('/', checkLogin, postProduct);

// update a product
router.put('/:id', checkLogin, updateProduct);

// delete a product
router.delete('/:id', checkLogin, deleteProduct);

// get a product
router.get('/find/:id', findOneProduct);

// get all product & find by query
// if(/) -> all || ?new=true -> latest item || ?category=man -> mans item
router.get('/', findByQuery);

module.exports = router;
