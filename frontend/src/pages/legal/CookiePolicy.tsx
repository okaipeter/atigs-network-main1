import React from 'react';
import './Legal.css';

const CookiePolicy: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Cookie Policy</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when 
            you visit our website. They are widely used to make websites work more efficiently 
            and provide a better user experience.
          </p>
        </section>

        <section>
          <h2>2. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li>Essential cookies: Required for the website to function properly</li>
            <li>Analytics cookies: Help us understand how visitors interact with our website</li>
            <li>Functionality cookies: Remember your preferences and settings</li>
            <li>Marketing cookies: Track your visit across our website to help us deliver relevant advertising</li>
          </ul>
        </section>

        <section>
          <h2>3. Types of Cookies We Use</h2>
          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function and cannot be switched off 
            in our systems. They are usually set in response to actions made by you such as 
            setting your privacy preferences, logging in, or filling in forms.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            These cookies allow us to count visits and traffic sources so we can measure and 
            improve the performance of our site. They help us know which pages are the most 
            and least popular and see how visitors move around the site.
          </p>

          <h3>Functionality Cookies</h3>
          <p>
            These cookies enable the website to provide enhanced functionality and personalization. 
            They may be set by us or by third-party providers whose services we have added to our pages.
          </p>
        </section>

        <section>
          <h2>4. Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings preferences. 
            However, if you limit the ability of websites to set cookies, you may worsen your 
            overall user experience.
          </p>
          <p>To manage cookies in your browser:</p>
          <ul>
            <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
            <li>Firefox: Options → Privacy & Security → Cookies and Site Data</li>
            <li>Safari: Preferences → Privacy → Cookies and website data</li>
            <li>Edge: Settings → Cookies and site permissions → Cookies and site data</li>
          </ul>
        </section>

        <section>
          <h2>5. Third-Party Cookies</h2>
          <p>
            Some cookies are placed by third-party services that appear on our pages. We use 
            trusted third-party services that track this information on our behalf. These 
            third-party services have their own privacy policies and may collect information 
            about you as described in their respective privacy policies.
          </p>
        </section>

        <section>
          <h2>6. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. We will notify you of any changes 
            by posting the new Cookie Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2>7. Contact Us</h2>
          <p>If you have any questions about our Cookie Policy, please contact us at:</p>
          <p>
            Email: privacy@atigsnetwork.com<br />
            Address: [Your Business Address]
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy; 