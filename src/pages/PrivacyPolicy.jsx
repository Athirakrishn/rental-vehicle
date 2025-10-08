import React from "react";

function PrivacyPolicy() {
  return (
    <div className="bg-black">
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-100">
        <div className="bg-gray-900/60 p-8 rounded-2xl shadow-lg">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-1">UrbanGo – Privacy Policy</h1>
            <p className="text-sm text-gray-300">Last Updated: October 8, 2025</p>
          </header>
  
          <section className="prose prose-invert text-sm sm:text-base">
            <p>
              This Privacy Policy explains how <strong>UrbanGo</strong> collects, uses, and protects
              the personal information of users who access or use our platform, including the website, mobile app, and
              related services (collectively, the “Services”).
            </p>
  
            <h2>1. Information We Collect</h2>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and payment details.</li>
              <li><strong>Identification Details:</strong> Driver’s license, ID proof, and address verification.</li>
              <li><strong>Usage Data:</strong> Device info, location data, browser type, and interactions with the platform.</li>
            </ul>
  
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To process bookings and payments.</li>
              <li>To verify identity and eligibility for rentals.</li>
              <li>To improve customer experience and platform functionality.</li>
              <li>To send updates, offers, and important notifications.</li>
            </ul>
  
            <h2>3. Data Sharing</h2>
            <p>
              We do not sell your personal data. Information may be shared only with trusted partners such as payment
              processors, insurance providers, or legal authorities when required by law.
            </p>
  
            <h2>4. Data Security</h2>
            <p>
              UrbanGo employs strong encryption and security measures to protect your data. However, no system is
              completely secure, and we cannot guarantee absolute protection against breaches.
            </p>
  
            <h2>5. Cookies</h2>
            <p>
              We use cookies to enhance user experience and analyze platform performance. You can control cookie usage
              through your browser settings.
            </p>
  
            <h2>6. Your Rights</h2>
            <ul>
              <li>Access, update, or delete your personal data.</li>
              <li>Withdraw consent for marketing communication at any time.</li>
              <li>Request a copy of the information we hold about you.</li>
            </ul>
  
            <h2>7. Updates to This Policy</h2>
            <p>
              UrbanGo may modify this Privacy Policy periodically. Updates will be reflected on this page with a new
              “Last Updated” date.
            </p>
  
            <h2>8. Contact Us</h2>
            <p>
              For any privacy-related concerns, reach out to:
              <br />
              📧 <a href="mailto:support@urbango.com" className="underline">support@urbango.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
