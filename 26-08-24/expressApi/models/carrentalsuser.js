const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt=require("bcrypt");

const CarUserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['male', 'female'], required: true },
  dob: { type: Date, required: true },
  city: { type: String, required: true },
  profession: { type: String, enum: ['IT', 'Sales', 'Unemployed'], required: true },
  password: { type: String, required: true }
});

// Encrypt password before saving
CarUserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
CarUserSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('CarUser', CarUserSchema);
