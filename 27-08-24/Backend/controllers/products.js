

const Product = require('../models/product'); 

// Create a new product
exports.createProduct = async (req, res, next) => {
    try {
        const { name, price, availability } = req.body;
        const newProduct = new Product({ name, price, availability });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all products
exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a product by ID
exports.getIdProducts = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res, next) => {
    try {
        const result = await Product.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).json({ message: 'Product not found' });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a product by ID
exports.putProducts = async (req, res, next) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get products by name
exports.getNameProducts = async (req, res, next) => {
    try {
        const products = await Product.find({ name: req.params.name });
        if (products.length === 0) return res.status(404).json({ message: 'No products found' });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.findProductsByAvailability = async (req, res) => {
    try {
        const products = await Product.find({ availability: req.params.availability });
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Find products greater than a certain price
exports.findProductsGreaterThanPrice = async (req, res) => {
    try {
        const products = await Product.find({ price: { $gt: req.params.price } });
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



