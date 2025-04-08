import React from 'react';
import './Legal.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>Introduction</h2>
          <p>
            At ATIGS Network, we take your privacy seriously. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Register for an account</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us through our website</li>
            <li>Participate in our events or surveys</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Professional details</li>
            <li>Payment information</li>
            <li>Communication preferences</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we automatically collect certain information about your device,
            including information about your web browser, IP address, time zone, and some of the cookies
            that are installed on your device.
          </p>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Process your transactions</li>
            <li>Send you marketing and promotional communications</li>
            <li>Improve our website and services</li>
            <li>Respond to your comments and questions</li>
          </ul>
        </section>

        <section>
          <h2>Information Sharing and Disclosure</h2>
          <p>
            We may share your information with third parties who provide services on our behalf to help
            with our business activities. These companies are authorized to use your personal information
            only as necessary to provide these services to us.
          </p>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your
            personal information. However, please note that no method of transmission over the Internet
            or electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            Email: privacy@atigsnetwork.com<br />
            Address: [Your Business Address]
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 