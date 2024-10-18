const Product = require("../models/product_model");

exports.getAllProducts = async(req,res) => {
    try {
        const { price, category, brand } = req.query;

        const query = {};

        if (price) {
            query.price = { $lte: parseFloat(price) };
        }

        if (category) {
            query.category = category;
        }

        if (brand) {
            query.brand = brand;
        }

        const products = await Product.find(query).sort({ createdAt: -1 });
        // console.log(products[0].createdAt)
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
}

// Get a single product by ID
exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
};

// Create a new product
exports.createProduct = async (req, res) => {
    const { name, description, price, category, brand, image, stock } = req.body;
    
    try {
        const newProduct = new Product({
            name,
            description,
            price,
            category,
            brand,
            image,
            stock
        });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
};

// Update an existing product by ID
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category, brand, image, stock } = req.body;
    if (
        !name || !description || !price || !category ||
        !brand || !image || stock === null || stock === undefined
    ) {
        return res.status(400).json({ message: 'All fields are required and should not be null or empty' });
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, description, price, category, brand, image, stock },
            { new: true }
        );
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error });
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
};
