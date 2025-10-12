import React from "react";
import UserHeader from "../user/components/UserHeader";
import Footer from "../components/Footer";

function RentalAgreement() {
  return (
   <>
   <UserHeader/>
     <div className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12 text-gray-100">
          <div className="bg-gray-900/60 p-8 rounded-2xl shadow-lg">
            <header className="mb-6">
              <h1 className="text-3xl font-bold text-white mb-1">UrbanGo – Rental Agreement</h1>
              <p className="text-sm text-gray-300">Last Updated: October 8, 2025</p>
            </header>
    
            <section className="prose prose-invert text-sm sm:text-base">
              <p>
                This Rental Agreement (“Agreement”) outlines the terms between <strong>UrbanGo</strong> and the renter (“User”) regarding the use of vehicles (cars, bikes, and cycles) rented through the UrbanGo platform.
              </p>
    
              <h2>1. Vehicle Condition</h2>
              <ul>
                <li>All vehicles are provided in good working condition with necessary safety checks.</li>
                <li>The renter must inspect the vehicle before use and report any damages immediately.</li>
              </ul>
    
              <h2>2. User Obligations</h2>
              <ul>
                <li>The renter agrees to operate the vehicle responsibly and follow all traffic laws.</li>
                <li>The vehicle must not be used for illegal activities, racing, or towing.</li>
                <li>Smoking or carrying hazardous materials in the vehicle is strictly prohibited.</li>
              </ul>
    
              <h2>3. Fuel & Maintenance</h2>
              <ul>
                <li>Vehicles must be returned with the same fuel level as provided during pickup.</li>
                <li>The renter is responsible for any damage resulting from negligence or misuse.</li>
              </ul>
    
              <h2>4. Damage & Liability</h2>
              <ul>
                <li>The renter is liable for any damage, loss, or theft of the vehicle during the rental period.</li>
                <li>Insurance coverage, if applicable, will be stated at the time of booking.</li>
              </ul>
    
              <h2>5. Return Policy</h2>
              <ul>
                <li>Vehicles must be returned on time at the designated drop-off location.</li>
                <li>Late returns will incur additional charges as per UrbanGo’s Terms & Conditions.</li>
              </ul>
    
              <h2>6. Termination</h2>
              <p>
                UrbanGo reserves the right to terminate the rental agreement if the user violates any terms, causes damage, or engages in unlawful activities.
              </p>
    
              <h2>7. Governing Law</h2>
              <p>
                This Agreement is governed by the laws of [Your Country]. Any disputes arising under this Agreement shall be handled in the jurisdiction of [Your City].
              </p>
    
              <h2>8. Contact Us</h2>
              <address className="not-italic">
                📧 <a href="mailto:support@urbango.com" className="underline">support@urbango.com</a><br />
                📍 UrbanGo Pvt. Ltd.
              </address>
            </section>
          </div>
        </div>
     </div>
     <Footer/>
   </>
  );
}

export default RentalAgreement;
