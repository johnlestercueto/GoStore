const User = require('../models/User');

// sign up
exports.registerUser = async (req, res) => {
    try {
        const {username, email, password } = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({message: 'Email already exist'});

        const newUser = new User({username, email, password});
        await newUser.save();

        res.status(201).json({message: 'User created successfully'});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// Login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const Email = await User.findOne({ email });
    if (!Email) return res.status(400).json({ message: 'Invalid credential' });

    const Password = await User.findOne({ password });
    if (!Password) return res.status(400).json({ message: 'Invalid credential' });

    res.status(201).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
  
};

// Get single user
exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

// Update user
exports.updateUser = async (req, res) => {
  const { name } = req.body;
  const user = await User.findByIdAndUpdate(req.params.id, { name }, { new: true }).select('-password');
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

// Delete user
exports.deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'User deleted' });
};