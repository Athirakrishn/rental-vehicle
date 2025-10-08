import React from "react";
import { Link } from "react-router-dom";

function Term() {
  return (
   <div className="bg-black w-full">
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-100 ">
        <div className="bg-gray-800/60 p-8 rounded-2xl shadow-lg">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-1">UrbanGo – Terms &amp; Conditions</h1>
            <p className="text-sm text-gray-300">Last Updated: October 8, 2025</p>
          </header>
  
          <section className="prose prose-invert text-sm sm:text-base">
            <p>
              Welcome to <strong>UrbanGo</strong>. These Terms &amp; Conditions (“Terms”) govern
              your use of the UrbanGo website, mobile app, and related rental services (collectively, the “Services”).
              By accessing or using UrbanGo, you agree to comply with and be bound by these Terms.
            </p>
  
            <h2>1. Eligibility</h2>
            <ul>
              <li>Be at least 18 years of age (or the legal driving age in your country).</li>
              <li>Hold a valid driver’s license appropriate for the vehicle type (car, bike, or cycle).</li>
              <li>Provide valid identification and payment details when required.</li>
            </ul>
            <p>
              UrbanGo reserves the right to refuse or cancel bookings if any eligibility requirements are not met.
            </p>
  
            <h2>2. Vehicle Rental Policy</h2>
            <ul>
              <li>Vehicles listed on UrbanGo are available for temporary rental for the duration selected by the user.</li>
              <li>Users must inspect the vehicle before pickup and report any visible damage immediately.</li>
              <li>Renters are responsible for maintaining the vehicle in good condition during the rental period.</li>
              <li>
                Any damage, loss, or theft of the vehicle during the rental period will be the renter’s responsibility.
              </li>
            </ul>
  
            <h2>3. Booking &amp; Payment</h2>
            <ul>
              <li>Rental charges are displayed at the time of booking and may vary depending on vehicle type, duration, and location.</li>
              <li>All payments must be completed through UrbanGo’s secure payment gateway before pickup.</li>
              <li>Bookings are confirmed only after successful payment.</li>
              <li>In case of cancellation, UrbanGo’s <Link to="/refund-policy" className="underline">Refund &amp; Cancellation Policy</Link> will apply.</li>
            </ul>
  
            <h2>4. User Responsibilities</h2>
            <p>By renting a vehicle through UrbanGo, you agree to:</p>
            <ul>
              <li>Follow all local traffic, parking, and safety laws.</li>
              <li>Use the vehicle responsibly and not for illegal or unsafe activities (e.g., racing, towing, or subleasing).</li>
              <li>Never drive under the influence of alcohol, drugs, or any intoxicating substance.</li>
              <li>Return the vehicle at the agreed time and to the designated location.</li>
            </ul>
            <p className="text-sm text-yellow-300">
              Failure to follow these rules may result in penalties, suspension, or permanent account termination.
            </p>
  
            <h2>5. Security Deposit</h2>
            <ul>
              <li>Certain bookings may require a refundable security deposit.</li>
              <li>Deposits will be refunded within <strong>5–7 working days</strong> after the vehicle is returned in good condition.</li>
              <li>Deductions may be made for late returns, damages, or traffic fines incurred during the rental.</li>
            </ul>
  
            <h2>6. Insurance &amp; Liability</h2>
            <ul>
              <li>Some UrbanGo vehicles may include basic insurance coverage.</li>
              <li>Renters are liable for any expenses not covered by insurance, including those due to negligence, accidents, or misuse.</li>
              <li>UrbanGo is not responsible for personal injuries, lost belongings, or indirect damages during the rental period.</li>
            </ul>
  
            <h2>7. Late Returns</h2>
            <ul>
              <li>Late returns may incur additional hourly or daily charges.</li>
              <li>Returns exceeding <strong>3 hours</strong> after the scheduled time will be charged as an extra rental day.</li>
            </ul>
  
            <h2>8. Refund &amp; Cancellation Policy</h2>
            <ul>
              <li>Cancellations made at least <strong>24 hours</strong> before the rental start time may be eligible for a full or partial refund.</li>
              <li>No refunds will be issued for cancellations made after the rental period begins.</li>
              <li>Refunds will be processed to the original payment method within <strong>7 business days</strong>.</li>
              <li>For detailed information, see our <Link to="/refund-policy" className="underline">Refund &amp; Cancellation Policy</Link>.</li>
            </ul>
  
            <h2>9. Privacy Policy</h2>
            <p>
              Your privacy matters to us. Please review the <Link to="/privacy-policy" className="underline">Privacy Policy</Link> to understand how
              UrbanGo collects, uses, and protects your information.
            </p>
  
            <h2>10. Limitation of Liability</h2>
            <p>UrbanGo shall not be liable for:</p>
            <ul>
              <li>Any loss or damage arising from accidents, theft, or misuse of vehicles.</li>
              <li>Any indirect, incidental, or consequential damages.</li>
              <li>Any technical interruptions, errors, or system failures of the platform.</li>
            </ul>
            <p>Our total liability shall not exceed the total rental amount paid by you.</p>
  
            <h2>11. Termination</h2>
            <p>
              UrbanGo reserves the right to suspend or terminate user accounts and cancel bookings without notice if any violation of these Terms
              or fraudulent activity is detected.
            </p>
  
            <h2>12. Updates to Terms</h2>
            <p>
              UrbanGo may revise these Terms periodically. All changes will be updated on this page with a new “Last Updated” date. Continued use
              of our platform means you accept the revised Terms.
            </p>
  
            <h2>13. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding these Terms &amp; Conditions, please contact:
            </p>
            <address className="not-italic">
              <div>📧 <a href="mailto:support@urbango.com" className="underline">support@urbango.com</a></div>
              <div>📍 UrbanGo Pvt. Ltd.</div>
              <div>🏙️ [Kerala,India]</div>
            </address>
          </section>
        </div>
      </div>
   </div>
  );
}

export default Term;
