const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/loginUserModel');
const { request } = require('express');


exports.register = async (req, res) => {
  try {
    const { email, password, fullName, username, phoneNumber } = req.body;

  
    //  const existingUser = await User.findOne({ email });
    const existingUser = await User.findOne({ email:req.body.email });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }


    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

  
    const newUser = new User({
      fullName,
      email,
      username,
      phoneNumber,
      password: hashedPassword,
    });
    
    const savedUser = await newUser.save();



    const token = jwt.sign({ userId: savedUser._id }, '122122AB', {
      expiresIn: '1h', 
    });

    res.status(201).json({ id:savedUser._id, fullName: savedUser.fullName,email: savedUser.email, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({email: email })

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

   
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

   
    const token = jwt.sign({ userId: user._id }, '122122AB', {
      expiresIn: '1h', // Token expiration time
    });

    res.json({id:user._id, fullName: user.fullName,email: user.email, accessToken: token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
