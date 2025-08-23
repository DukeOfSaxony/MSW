import sgMail from '@sendgrid/mail';

// Check if API key exists and log status (without exposing the actual key)
if (!process.env.SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY is not set in environment variables');
} else {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log('SendGrid API key configured successfully');
}

export default async function handler(req, res) {
  // Enable CORS for development and production
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields', 
        received: { name: !!name, email: !!email, message: !!message } 
      });
    }

    // Check if API key is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.error('API request failed: SENDGRID_API_KEY is not set');
      return res.status(500).json({ 
        error: 'Email service not configured properly. Please contact the administrator.' 
      });
    }

    try {
      console.log(`Attempting to send email from ${email} to diddleysquatter@gmail.com`);
      
      await sgMail.send({
        to: 'diddleysquatter@gmail.com',
        from: 'diddleysquatter@gmail.com', // This must be a verified sender
        subject: `New message from ${name}`,
        text: message,
        replyTo: email,
      });
      
      console.log('Email sent successfully');
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('SendGrid error:', err);
      return res.status(500).json({ 
        error: 'Failed to send email', 
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
      });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}