/* eslint-disable prettier/prettier */
// internal import
const ProductModel = require('../models/product');

// create a product
const postProduct = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const newProduct = new ProductModel(req.body);
            const product = await newProduct.save();

            res.status(200).json({
                message: product,
            });
        } catch {
            res.status(500).json({
                error: 'Failed to create a product',
            });
        }
    } else {
        res.status(500).json({
            error: 'Failed to create a product!',
        });
    }
};

// update a product
const updateProduct = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedProduct = await ProductModel.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true },
            );

            res.status(200).json({
                message: updatedProduct,
            });
        } catch {
            res.status(500).json({
                error: 'Failed to update a product',
            });
        }
    } else {
        res.status(500).json({
            error: 'Failed to update a product!',
        });
    }
};

// delete a product
const deleteProduct = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await ProductModel.findByIdAndDelete(req.params.id);

            res.status(200).json({
                message: 'Product deleted.',
            });
        } catch {
            res.status(500).json({
                error: 'Failed to delete a product',
            });
        }
    } else {
        res.status(500).json({
            error: 'Failed to delete a product!',
        });
    }
};

// find a product
const findOneProduct = async (req, res) => {
        try {
           const product = await ProductModel.findById(req.params.id);

            res.status(200).json({
                message: product,
            });
        } catch {
            res.status(500).json({
                error: 'Failed to find product',
            });
        }
};

// find a product by query(new & category & all)
// if(/) -> all || ?new=true -> latest item || ?category=man -> mans item
const findByQuery = async (req, res) => {
        try {
            const qNew = req.query.new;
            const qCategory = req.query.category;

            let product;
            if (qNew) {
                product = await ProductModel.find().sort({ createdAt: -1 }).limit(5);
            } else if (qCategory) {
                product = await ProductModel.find({
                    category: {
                    $in: [qCategory],
                },
            });
            } else {
                product = await ProductModel.find();
            }

            res.status(200).json({
                message: product,
            });
        } catch {
            res.status(500).json({
                error: 'Failed to find product',
            });
        }
};

module.exports = {
 postProduct, updateProduct, deleteProduct, findOneProduct, findByQuery,
};
