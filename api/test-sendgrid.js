// Test SendGrid API Connection
import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if API key exists
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY is not set in environment variables');
    return res.status(500).json({ 
      success: false, 
      error: 'SendGrid API key is not configured',
      environment: process.env.NODE_ENV || 'development'
    });
  }

  try {
    // Initialize SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    // Get API key information without exposing the actual key
    const apiKeyInfo = {
      exists: true,
      length: process.env.SENDGRID_API_KEY.length,
      // We're masking all but the last 4 characters for security
      lastFourChars: process.env.SENDGRID_API_KEY.slice(-4),
      // No full key is exposed
    };
    
    return res.status(200).json({
      success: true,
      message: 'SendGrid API key is configured',
      apiKeyInfo,
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error testing SendGrid API:', error);
    return res.status(500).json({
      success: false,
      error: 'Error initializing SendGrid',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      environment: process.env.NODE_ENV || 'development'
    });
  }
}