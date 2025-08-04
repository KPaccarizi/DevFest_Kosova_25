const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Replace with your email service credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gdgprishtina@gmail.com',
    pass: '1234567890'
  }
});

app.post('/send', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: '',
    subject: subject,
    text: `Message from ${name} (${email}):\n\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent successfully');
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

<script src="https://cdn.emailjs.com/dist/email.min.js"></script>

  (function() {
    emailjs.init("P6qKxWI7O2OVwmRD5"); // Replace with your EmailJS user ID
  })();

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Send the message to yourself
    emailjs.sendForm('service_orm07ro', 'template_hzkrdfm', this)
      .then(function(response) {
        // Send an autoreply to the user
        emailjs.sendForm('service_orm07ro', 'template_autoreply', this)
          .then(function(response) {
            document.getElementById('msgSubmit').textContent = 'Message sent successfully!';
            document.getElementById('msgSubmit').classList.remove('hidden');
            document.getElementById('contactForm').reset(); // Optional: Reset the form after submission
          }, function(error) {
            document.getElementById('msgSubmit').textContent = 'Failed to send autoreply. Please try again.';
            document.getElementById('msgSubmit').classList.remove('hidden');
          });
      }, function(error) {
        document.getElementById('msgSubmit').textContent = 'Failed to send message. Please try again.';
        document.getElementById('msgSubmit').classList.remove('hidden');
      });
  });




