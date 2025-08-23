import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail } from "./utils/email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Add a simple health check API endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', env: process.env.NODE_ENV });
  });

  // Contact form email endpoint
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const { name, email, phone, service, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'Name, email, and message are required' 
        });
      }

      // Format email content
      const text = `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service: ${service || 'Not specified'}
Message: ${message}
      `.trim();

      const html = `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<p><strong>Service Requested:</strong> ${service || 'Not specified'}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
      `.trim();

      // Send email using SendGrid
      const success = await sendEmail({
        to: 'jdavydov@gmail.com', // Updated recipient email
        from: 'website@michaelsshoecraft.com', // Must be a verified sender in SendGrid
        subject: `Website Inquiry from ${name}`,
        text,
        html
      });

      if (success) {
        res.json({ success: true, message: 'Email sent successfully' });
      } else {
        res.status(500).json({ success: false, message: 'Failed to send email' });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
