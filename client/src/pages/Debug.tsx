import React from 'react';
import { Link } from 'wouter';
import ApiTest from '@/components/ApiTest';

const Debug = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">API Debug Tools</h1>
          <Link href="/">
            <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Back to Website
            </a>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Vercel Deployment Troubleshooting</h2>
          <p className="mb-2">This page helps diagnose issues with your Vercel deployment, specifically related to API connectivity.</p>
          
          <div className="mt-4 space-y-2">
            <h3 className="font-semibold">Common Issues & Solutions:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Make sure your <code className="bg-gray-100 px-1 rounded">SENDGRID_API_KEY</code> is properly set in Vercel environment variables</li>
              <li>Check that API routes in <code className="bg-gray-100 px-1 rounded">/api</code> folder are being properly deployed</li>
              <li>Verify that your <code className="bg-gray-100 px-1 rounded">vercel.json</code> rewrites are configured correctly</li>
              <li>Ensure CORS headers are properly set for production environment</li>
              <li>Check browser dev tools for any network errors when submitting the form</li>
            </ul>
          </div>
        </div>

        <ApiTest />

        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Contact Form Implementation</h2>
          <p className="mb-4">The contact form should be using this implementation to call the API:</p>
          
          <div className="bg-gray-100 p-4 rounded overflow-x-auto">
            <pre className="text-sm">
{`// In your contact form submit handler:
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      }),
    });
    
    const data = await response.json();
    
    if (response.ok) {
      // Success handling
    } else {
      // Error handling
    }
  } catch (error) {
    // Network error handling
  } finally {
    setIsSubmitting(false);
  }
};`}
            </pre>
          </div>
        </div>
        
        <div className="text-center mt-8 text-gray-600 text-sm">
          <p>This debug page is only available in development mode.</p>
        </div>
      </div>
    </div>
  );
};

export default Debug;