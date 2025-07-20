const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// POST endpoint for contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure nodemailer transporter (Gmail SMTP)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'antosherly.25cs@licet.ac.in', // Replace with your Gmail address
      pass: 'ebdx awkk rrtf tglo',  // Replace with your Gmail App Password
    },
  });

  const mailOptions = {
    from: email,
    to: 'antosherly.25cs@licet.ac.in',
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send message.', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 