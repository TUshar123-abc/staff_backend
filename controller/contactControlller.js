import contactModel from '../models/contactModel.js';

// Create a new user

import nodemailer from 'nodemailer';

// Import your contactModel if it's defined in a separate file

export const createContact = async (req, res) => {
  try {
    // Assuming you have a contact model defined
    const { name, email, mobile, category, message } = req.body;
    const user = new contactModel({ name, email, mobile, category, message });
    await user.save();

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'GMAIL', // e.g., 'Gmail'
      auth: {
        user: 'info.manasvitech@gmail.com', 
        pass: 'xupg tcwc ecpb ginr',    
      },
      tls: {
        rejectUnauthorized: false, 
      },
    });

    // Define email data
    const mailOptions = {
      from: req.body.email,    // Sender's email address
      to: 'info.manasvitech@gmail.com', // Recipient's email address
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Category: ${category}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



/* export const createContact = async (req, res) => {
  try {
    const user = new contactModel(req.body)
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; */

// Read all users
export const ReadContact =  async (req, res) => {
  try {
    const users = await contactModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read user by ID
 export const ReadContactById = async (req, res) => {
  try {
    const user = await contactModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user by ID
export const UpdateContact =  async (req, res) => {
  try {
    const user = await contactModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete user by ID
export const DeleteContact =  async (req, res) => {
  try {
    const user = await contactModel.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


