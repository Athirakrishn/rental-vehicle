import React from "react";

function RefundPolicy() {
  return (
    <div className="bg-black">
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-100">
        <div className="bg-gray-900/60 p-8 rounded-2xl shadow-lg">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-1">UrbanGo – Refund &amp; Cancellation Policy</h1>
            <p className="text-sm text-gray-300">Last Updated: October 8, 2025</p>
          </div>
  
          <section className="prose prose-invert text-sm sm:text-base">
            <p>
              This Refund &amp; Cancellation Policy outlines how <strong>UrbanGo</strong> handles booking cancellations,
              refunds, and payment adjustments for all vehicle rentals.
            </p>
  
            <h2>1. Cancellation by User</h2>
            <ul>
              <li>Cancellations made at least <strong>24 hours</strong> before the rental start time are eligible for a full refund.</li>
              <li>Cancellations made within <strong>24 hours</strong> of the booking start time may incur a cancellation fee.</li>
              <li>No refund is available once the rental period has started.</li>
            </ul>
  
            <h2>2. Cancellation by UrbanGo</h2>
            <p>
              UrbanGo may cancel a booking due to unforeseen circumstances such as vehicle unavailability, maintenance
              issues, or safety concerns. In such cases, users will receive a full refund or an option to reschedule.
            </p>
  
            <h2>3. Refund Processing</h2>
            <ul>
              <li>Refunds will be processed to the original payment method within <strong>7 business days</strong>.</li>
              <li>Refund timelines may vary depending on your bank or payment provider.</li>
            </ul>
  
            <h2>4. No-Show Policy</h2>
            <p>
              Failure to pick up the vehicle at the scheduled time without prior notice will be treated as a no-show and
              will not be eligible for a refund.
            </p>
  
            <h2>5. Contact Us</h2>
            <p>
              For refund or cancellation assistance, please contact:
              <br />
              📧 <a href="mailto:support@urbango.com" className="underline">support@urbango.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RefundPolicy;
