import React from 'react';
import './Legal.css';

const TermsOfService: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using ATIGS Network's website and services, you agree to be bound 
            by these Terms of Service and all applicable laws and regulations. If you do not 
            agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section>
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily access the materials (information or software) 
            on ATIGS Network's website for personal, non-commercial transitory viewing only. 
            This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section>
          <h2>3. User Account</h2>
          <p>
            To access certain features of the website, you may be required to create an account. 
            You are responsible for:
          </p>
          <ul>
            <li>Maintaining the confidentiality of your account information</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use of your account</li>
          </ul>
        </section>

        <section>
          <h2>4. Service Modifications</h2>
          <p>ATIGS Network reserves the right to:</p>
          <ul>
            <li>Modify or discontinue any part of our services without notice</li>
            <li>Update these terms at any time</li>
            <li>Block access to users who violate these terms</li>
          </ul>
        </section>

        <section>
          <h2>5. Disclaimer</h2>
          <p>
            The materials on ATIGS Network's website are provided on an 'as is' basis. 
            ATIGS Network makes no warranties, expressed or implied, and hereby disclaims 
            and negates all other warranties including, without limitation, implied warranties 
            or conditions of merchantability, fitness for a particular purpose, or non-infringement 
            of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2>6. Limitations</h2>
          <p>
            In no event shall ATIGS Network or its suppliers be liable for any damages 
            (including, without limitation, damages for loss of data or profit, or due to 
            business interruption) arising out of the use or inability to use the materials 
            on ATIGS Network's website.
          </p>
        </section>

        <section>
          <h2>7. Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p>
            Email: legal@atigsnetwork.com<br />
            Address: [Your Business Address]
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService; 