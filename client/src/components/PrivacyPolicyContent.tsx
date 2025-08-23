import React from 'react';
import michaelsLogo from '@assets/michaels-logo-newer.png';

const PrivacyPolicyContent: React.FC = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <button 
          onClick={handleBackClick}
          className="mb-8 flex items-center text-[#ff3e00] hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>

        <div className="flex items-center mb-8">
          <div className="h-12 mr-3">
            <img src={michaelsLogo} alt="Michael's Shoe Repair" className="h-full" />
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-white">Privacy Policy</h1>
        <p className="mb-8 text-gray-400">Effective Date: May 1, 2025</p>

        <p className="mb-6">
          At Michael's Shoe & Watch Repair, your privacy is important to us. We're committed to protecting any personal information you provide, whether you're booking a repair, sending a message, or simply browsing our site.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff3e00]">1. Information We Collect</h2>
          <p className="mb-4">We may collect personal information when you:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Fill out a contact form</li>
            <li>Request a quote or service</li>
            <li>Subscribe to updates (if available)</li>
          </ul>
          <p>This typically includes your name, phone number, email address, and any message you choose to include.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff3e00]">2. How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Respond to your inquiries</li>
            <li>Provide services you request</li>
            <li>Improve our communication and customer support</li>
          </ul>
          <p>We do not sell or share your personal data with third parties for marketing purposes.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff3e00]">3. Data Storage</h2>
          <p>All information submitted through our website is stored securely and used only for the purposes stated above. We take appropriate steps to protect it from unauthorized access.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff3e00]">4. Cookies & Tracking</h2>
          <p>Our website may use basic cookies to improve functionality and performance. We do not use cookies for advertising or to track you across other sites.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff3e00]">5. Your Rights</h2>
          <p className="mb-4">You can contact us at any time to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>See what personal data we hold about you (if any)</li>
            <li>Request corrections or deletions</li>
            <li>Ask us to stop using your data</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff3e00]">6. Contact</h2>
          <p className="mb-4">If you have any questions about our privacy practices, contact us at:</p>
          <p className="mt-2 font-bold text-white">Michael's Shoe & Watch Repair</p>
          <p>319 Smith Street, Carroll Gardens, Brooklyn, NY 11231</p>
          <p>(718) 243-0288</p>
          <p>info@michaelsshoerepair.com</p>
        </div>

        <button 
          onClick={handleBackClick}
          className="mb-12 px-6 py-3 bg-[#ff3e00] hover:bg-opacity-90 transition-colors text-white rounded-md"
        >
          Back to Main Site
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;