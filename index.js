// This file helps Vercel understand how to serve our app
// It's needed because we're using a custom setup with a vite-based frontend
// and a separate backend

const path = require('path');
const fs = require('fs');

// This is only used in production on Vercel
module.exports = (req, res) => {
  // Get the path from the URL
  const url = req.url === '/' ? '/index.html' : req.url;
  
  // Check if this is an API request
  if (url.startsWith('/api')) {
    // We don't handle API requests in this file
    // They should be handled by API routes in the /api directory
    res.statusCode = 404;
    res.end('Not found');
    return;
  }
  
  // Determine the file path
  const filePath = path.join(__dirname, 'dist/public', url);
  
  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Serve the static file
    const stat = fs.statSync(filePath);
    res.writeHead(200, {
      'Content-Type': getContentType(filePath),
      'Content-Length': stat.size
    });
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } else {
    // For SPA, serve index.html for any non-file routes
    const indexPath = path.join(__dirname, 'dist/public', 'index.html');
    if (fs.existsSync(indexPath)) {
      const stat = fs.statSync(indexPath);
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': stat.size
      });
      const readStream = fs.createReadStream(indexPath);
      readStream.pipe(res);
    } else {
      res.statusCode = 404;
      res.end('Not found');
    }
  }
};

// Helper function to determine content type based on file extension
function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'font/otf'
  };
  
  return contentTypes[ext] || 'text/plain';
}