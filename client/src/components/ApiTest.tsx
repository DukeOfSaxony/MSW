import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const ApiTest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Test the API connectivity
  const testApi = async (endpoint: string) => {
    setLoading(true);
    setResults(null);
    setError(null);

    try {
      console.log(`Testing API endpoint: ${endpoint}`);
      const response = await fetch(endpoint);
      console.log(`Response status: ${response.status}`);

      const data = await response.json();
      console.log('Response data:', data);

      setResults({
        status: response.status,
        statusText: response.statusText,
        data
      });

      toast({
        title: "API Test Successful",
        description: `Endpoint ${endpoint} responded with status ${response.status}`,
      });
    } catch (err: any) {
      console.error('API test error:', err);
      setError(err.message || 'Unknown error occurred');

      toast({
        title: "API Test Failed",
        description: err.message || 'Could not connect to the API',
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">API Test Utility</h2>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => testApi('/api/health')}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Test /api/health
        </button>
        
        <button
          onClick={() => testApi('/api/debug')}
          disabled={loading}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
        >
          Test /api/debug
        </button>

        <button
          onClick={() => testApi('/api/test-sendgrid')}
          disabled={loading}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50"
        >
          Test SendGrid Config
        </button>
      </div>
      
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Test Contact Form API</h3>
        <button
          onClick={() => {
            const testData = {
              name: 'Test User',
              email: 'test@example.com',
              message: 'This is a test message from the API Test utility.',
            };
            
            setLoading(true);
            setResults(null);
            setError(null);
            
            fetch('/api/send', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(testData),
            })
            .then(response => {
              console.log('POST Response status:', response.status);
              return response.json();
            })
            .then(data => {
              console.log('POST Response data:', data);
              setResults({
                endpoint: '/api/send',
                method: 'POST',
                requestData: testData,
                responseData: data,
              });
              
              if (data.success) {
                toast({
                  title: "Test Email Sent",
                  description: "The contact form API endpoint is working correctly!",
                });
              } else {
                toast({
                  title: "API Error",
                  description: data.error || "The contact form API returned an error.",
                  variant: "destructive",
                });
              }
            })
            .catch(err => {
              console.error('POST error:', err);
              setError(err.message || 'Unknown error');
              toast({
                title: "Request Failed",
                description: err.message || "Could not connect to the contact form API",
                variant: "destructive",
              });
            })
            .finally(() => {
              setLoading(false);
            });
          }}
          disabled={loading}
          className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 disabled:opacity-50"
        >
          Test Contact Form POST
        </button>
      </div>
      
      {loading && (
        <div className="flex items-center justify-center p-4">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-2">Testing API...</span>
        </div>
      )}
      
      {error && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded mb-4">
          <h3 className="font-bold">Error</h3>
          <p>{error}</p>
        </div>
      )}
      
      {results && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Results</h3>
          <div className="p-4 bg-gray-100 rounded overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap">
              {JSON.stringify(results, null, 2)}
            </pre>
          </div>
        </div>
      )}
      
      <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
        <h3 className="font-bold text-yellow-700">Deployment Notes</h3>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-yellow-800">
          <li>API endpoints should return proper status codes and JSON responses</li>
          <li>Status 200 indicates the endpoint is working correctly</li>
          <li>Network errors may indicate Vercel configuration issues</li>
          <li>Check that the SENDGRID_API_KEY exists in your Vercel environment variables</li>
          <li>CORS headers should be set correctly for production</li>
        </ul>
      </div>
    </div>
  );
};

export default ApiTest;