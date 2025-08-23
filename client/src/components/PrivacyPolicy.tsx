import React from 'react';
import michaelsLogo from '@assets/michaels-logo-newer.png';

const TermsOfService: React.FC = () => {
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

        <h1 className="text-4xl font-bold mb-6 text-white">Terms of Service</h1>
        <p className="mb-8 text-gray-400">Effective Date: May 1, 2025</p>

        <p className="mb-6">
          Welcome to Michael's Shoe & Watch Repair. By using our services, you agree to the following terms. Please read them carefully.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff3e00]">1. Services Offered</h2>
          <p className="mb-4">We provide repair and restoration services for:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Footwear (including heels, soles, stitching, and leather care)</li>
            <li>Watches (battery replacement, movement repair, band adjustments)</li>
            <li>Jewelry (clasp repair, resizing, stone setting, polishing)</li>
          </ul>
          <p>All work is performed by experienced technicians using high-quality materials. We aim to restore items as closely as possible to their original condition.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff3e00]">2. Estimates & Approvals</h2>
          <p>Upon inspection, we will provide an estimate for the repair. No work will commence without your approval. If additional issues are discovered during the repair process, we will contact you for authorization before proceeding.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff3e00]">3. Payment Terms</h2>
          <p>Payment is due upon completion of the repair. We accept cash, major credit cards, and other agreed-upon payment methods. For items mailed in, payment must be received before return shipping.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff3e00]">4. Turnaround Time</h2>
          <p>Repair times vary based on the complexity of the work and availability of parts. We will provide an estimated completion date at the time of drop-off or upon receiving your item. While we strive to meet these estimates, delays may occur.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff3e00]">5. Shipping & Handling</h2>
          <p className="mb-4">If you choose to mail your item to us:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>You are responsible for shipping costs to our facility.</li>
            <li>We recommend using a trackable and insured shipping method.</li>
            <li>We are not responsible for items lost or damaged during transit to our facility.</li>
            <li>Return shipping costs will be included in your final invoice.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff3e00]">6. Risk of Loss</h2>
          <p>Items left with us are handled with care. However, we are not liable for loss or damage due to unforeseen events such as theft, fire, or natural disasters. We recommend that valuable items be insured.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff3e00]">7. Unclaimed Items</h2>
          <p>Items not claimed within 90 days of the completion date may be considered abandoned. We will make reasonable efforts to contact you before taking further action, which may include disposal or donation of the item.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff3e00]">8. Warranty & Limitations</h2>
          <p className="mb-4">We stand behind our workmanship. If you experience issues related to the repair within 30 days, please return the item with your receipt, and we will assess and address the problem. This warranty does not cover:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Normal wear and tear</li>
            <li>Damage due to misuse or accidents</li>
            <li>Issues unrelated to the original repair</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff3e00]">9. Limitation of Liability</h2>
          <p>Our liability is limited to the cost of the repair service provided. We are not responsible for any indirect, incidental, or consequential damages arising from the use of our services.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff3e00]">10. Modifications to Terms</h2>
          <p>We reserve the right to update these Terms of Service at any time. Changes will be posted on our website with the effective date. Continued use of our services constitutes acceptance of the revised terms.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff3e00]">11. Contact Information</h2>
          <p>If you have questions or concerns about these terms, please contact us:</p>
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

export default TermsOfService;