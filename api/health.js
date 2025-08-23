// Enhanced health check API endpoint

export default function handler(req, res) {
  // Enable CORS for development and production
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const currentTime = new Date().toISOString();
  const environment = process.env.NODE_ENV || 'development';
  const hasApiKey = !!process.env.SENDGRID_API_KEY;
  
  // Check if we're running on Vercel
  const isVercel = process.env.VERCEL === '1';
  const vercelEnv = process.env.VERCEL_ENV || 'unknown';
  const vercelRegion = process.env.VERCEL_REGION || 'unknown';
  
  // Log the health check for debugging
  console.log(`Health check performed at ${currentTime} - SendGrid API key configured: ${hasApiKey}`);
  
  // Return health information
  res.status(200).json({
    status: 'ok',
    timestamp: currentTime,
    env: environment,
    sendgridConfigured: hasApiKey,
    isVercel,
    vercelInfo: isVercel ? {
      environment: vercelEnv,
      region: vercelRegion,
      url: process.env.VERCEL_URL || 'unknown'
    } : undefined
  });
}