const express = require('express');
const router = express.Router();
const User = require('../models/carrentalsuser');
const { body, validationResult } = require('express-validator');

// POST /users - Create a new user
router.post(
  '/',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('age').isInt({ min: 0 }).withMessage('Age must be a positive integer'),
    body('gender').isIn(['male', 'female']).withMessage('Gender must be male or female'),
    body('dob').isISO8601().toDate().withMessage('Invalid date of birth'),
    body('city').notEmpty().withMessage('City is required'),
    body('profession').isIn(['IT', 'Sales', 'Unemployed']).withMessage('Profession must be IT, Sales, or Unemployed'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { username, email, age, gender, dob, city, profession, password } = req.body;
      const newUser = new User({ username, email, age, gender, dob, city, profession, password });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

router.get('/',async function(req,res,next){
    try{
        const user=await User.find();
        if(!user)
        {
            return res.status(404).json({message:"CarsUsers Not Available"}); 
        }
        res.json(user);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
})

// GET /users/:id - Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /users/:id - Update user by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PATCH /users/:id - Partially update user by ID
router.patch('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /users/:id - Delete user by ID
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
