const Product = require('../models/Product');

// Add new product
exports.addProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const newProduct = new Product({
      name,
      price,
      description,
      imageUrl: `/uploads/${req.file.filename}`,
    });

    await newProduct.save();
    res.json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating product');
  }
};

// Get single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching product');
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching products');
  }
};

