// serverless-email-service.js

class EmailService {
    constructor() {
      // Initialize any resources or configurations here
    }
  
    async sendEmail({ to, subject, body }) {
      try {
        // Simulate sending email (replace with actual implementation)
        console.log(`Sending email to: ${to}`);
        console.log(`Subject: ${subject}`);
        console.log(`Body: ${body}`);
        console.log('Email sent successfully');
        return true;
      } catch (error) {
        console.error('Error sending email:', error);
        throw error;
      }
    }
  }
  
  module.exports = EmailService;
  
  // Example:
  // const EmailService = require('./serverless-email-service');
  // Create a new instance of EmailService
  // const emailService = new EmailService();
  // Define email details
  // const email = {
  //   to: 'recipient@example.com',
  //   subject: 'Test Email',
  //   body: 'This is a test email from the Serverless Email Service package.'
  // };
  // Send email
  // emailService.sendEmail(email);
  