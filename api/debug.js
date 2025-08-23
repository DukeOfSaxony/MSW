// Diagnostic API endpoint for Vercel

export default function handler(req, res) {
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

  // Don't expose sensitive information like API keys or tokens
  // Just check if they exist
  const diagnosticInfo = {
    timestamp: new Date().toISOString(),
    serverInfo: {
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      env: process.env.NODE_ENV || 'development',
    },
    vercelInfo: {
      isVercel: process.env.VERCEL === '1',
      environment: process.env.VERCEL_ENV || 'unknown',
      region: process.env.VERCEL_REGION || 'unknown',
      url: process.env.VERCEL_URL || 'unknown',
    },
    apiKeys: {
      hasSendgridApiKey: !!process.env.SENDGRID_API_KEY,
    },
    headers: {
      host: req.headers.host,
      origin: req.headers.origin,
      userAgent: req.headers['user-agent'],
      // Other safe headers
      referer: req.headers.referer,
      accept: req.headers.accept,
    },
    apiRoutes: {
      current: '/api/debug',
      health: '/api/health',
      contact: '/api/send',
    }
  };

  console.log('Debug endpoint accessed', {
    timestamp: diagnosticInfo.timestamp,
    host: req.headers.host,
    path: req.url,
  });

  res.status(200).json(diagnosticInfo);
}