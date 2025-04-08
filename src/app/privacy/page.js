'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignupPage from '../components/SignupPage';

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className="container  mx-auto mb-10 p-6 ">

        <section>
          <h1 className="text-xl mx-auto mt-15"> Effective Date: March 21, 2025</h1>
          <br></br>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>Welcome to solvehire ai.</p>
          <p>solvehire ai ("Company", "we", "us", or "our") operates the website     <a
            href="https://www.solvehire.ai"
            target="_blank"
            rel="noopener noreferrer"
            className=" underline"
          >
            https://www.solvehire.ai
          </a>  (hereinafter referred to as "Service").</p>
          <br></br>
          <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used have the same meanings as in our Terms and Conditions.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">2. Definitions</h2>

          <ul className="list-disc pl-6  list-inside  mt-2 space-y-1">
            <li>
              <strong>Service:</strong> The
              <a
                href="https://www.solvehire.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                https://www.solvehire.ai
              </a>
              website operated by SolveHire AI.
            </li>
            <li>
              <strong>Personal Data:</strong> Data about a living individual who can be identified from those data
              (or from those and other information either in our possession or likely to come into our possession).
            </li>
            <li>
              <strong>Usage Data:</strong> Data collected automatically, either generated by the use of the Service or from the Service infrastructure itself
              (for example, the duration of a page visit).
            </li>
            <li>
              <strong>Cookies:</strong> Small files stored on your device (computer or mobile device).
            </li>
            <li>
              <strong>Data Controller:</strong> A natural or legal person who determines the purposes for which and the manner in which any personal data are,
              or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.
            </li>
            <li>
              <strong>Data Processors (or Service Providers):</strong> Any natural or legal person who processes the data on behalf of the Data Controller.
              We may use the services of various Service Providers to process your data more effectively.
            </li>
            <li>
              <strong>Data Subject (or User):</strong> Any living individual who is using our Service and is the subject of Personal Data.
            </li>
          </ul>
        </section>




        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">3. Information Collection and Use</h2>
          <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">3.1 Types of Data Collected</h2>

          {/* Personal Data */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Personal Data</h3>
            <p className=" mt-2">
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be used
              to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6  list-inside  mt-2 space-y-1">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Cookies and Usage Data</li>
            </ul>
          </div>

     
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Usage Data</h3>
            <p className=" mt-2">
              We may also collect information about how the Service is accessed and used ("Usage Data").
              This Usage Data may include information such as:
            </p>
            <ul className="list-disc  pl-6 list-inside  mt-2 space-y-1">
              <li>Your computer's Internet Protocol address (IP address)</li>
              <li>Browser type and version</li>
              <li>Pages of our website that you visit</li>
              <li>The time and date of your visit</li>
              <li>The time spent on those pages</li>
              <li>Unique device identifiers and other diagnostic data</li>
            </ul>

          </div>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">4. Tracking Cookies Data</h2>
          <p>We use cookies and similar tracking technologies to track activity on our Service and hold certain information.</p>
          <br></br>
          <p>
            Cookies are files with a small amount of data that may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies, such as beacons, tags, and scripts, are also used to collect and track information and to improve and analyze our Service.
          </p>
          <br></br>
          <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Examples of Cookies We Use</h2>
          <ul className="list-disc pl-6 list-inside space-y-1">
            <li><strong>Session Cookies:</strong> We use Session Cookies to operate our Service.</li>
            <li><strong>Preference Cookies:</strong> We use Preference Cookies to remember your preferences and various settings.</li>
            <li><strong>Security Cookies:</strong> We use Security Cookies for security purposes.</li>
            <li><strong>Advertising Cookies:</strong> Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.</li>
          </ul>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">5. Social Media Data</h2>
          <p>
            If you access our website/platform through a third-party platform such as a social media service or connect our Services to a third-party platform, the information we collect may include your username associated with that third-party platform, any information or content the third-party platform has the right to share with us, such as your profile picture, email address, friends list or connections list, and any information you have made public in connection with the respective third-party platform. When you access our website/platform through a third-party platform, such as LinkedIn, you authorize us to collect, store, use, and retain such information from the third-party platform in accordance with this Privacy Policy.
          </p>
        </section>


        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">6. Use of Data</h2>
          <p>SolveHire AI uses the collected data for various purposes, including but not limited to:</p>
          <ul className="list-disc pl-6 list-inside space-y-1 mt-2">
            <li>To provide and maintain our Service.</li>
            <li>To notify you about changes to our Service.</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so.</li>
            <li>To provide customer support.</li>
            <li>To gather analysis or valuable information so that we can improve our Service.</li>
            <li>To monitor the usage of our Service.</li>
            <li>To detect, prevent, and address technical issues.</li>
            <li>To fulfill any other purpose for which you provide it.</li>
            <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
            <li>To provide you with notices about your account and/or subscription.</li>
            <li>To provide you with news, special offers, and general information about our services, unless you have opted not to receive such information.</li>
            <li>For any other purpose with your consent.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">7. Retention of Data</h2>
          <p>
            We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
          </p>

        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">8. Transfer of Data</h2>
          <p>
            Your information, including Personal Data, may be transferred to – and maintained on – computers located outside of your jurisdiction where data protection laws may differ. By submitting your information, you agree to this transfer.
          </p>

        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">9. Disclosure of Data</h2>
          <p>We may disclose personal information that we collect or you provide under certain circumstances, including:</p>
          <ul className="list-disc pl-6 list-inside space-y-1 mt-2">
            <li>For law enforcement purposes.</li>
            <li>In the case of a business transaction, such as a merger or acquisition.</li>
            <li>To contractors, service providers, and other third parties who support our business.</li>
            <li>To protect the rights, property, or safety of our company, customers, or others.</li>
          </ul>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">10. Security of Data</h2>
          <p>
            We take appropriate security measures to protect your personal information; however, no method of transmission over the Internet is 100% secure. We cannot guarantee the security of your data, but we use best industry practices to ensure its protection.
          </p>

        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Information we collect‍</h2>

          <div className="mb-4">
            <p>We collect the personal information you provide to us when you are a Candidate. The categories of information we may collect include:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Other Sensitive Data, including contents of mail, email or text messages;</li>
              <li>Inferences, including inferences from other data;</li>
              <li>Personal Identifiers, including name, email address, and telephone number; and</li>
              <li>Professional, including professional information.</li>
              <li>We collect the personal information you provide to us when you are Scouts. The categories of information we may collect include:</li>

              <li>Characteristics of Protected Classifications, including age and sex or gender;</li>
              <li>Other Sensitive Data, including contents of mail, email or text messages;</li>
              <li>Personal Identifiers, including name, email address, and telephone number; and</li>
              <li>Personal Identifiers, including name, email address, and telephone number;</li>
              <li>Professional, including professional information; and</li>
              <li>Inferences, including inferences from other data.</li>
              <br></br>
              <p>
                We collect the personal information you provide to us when you are Website Visitors. The categories of information we may collect include:
              </p>
              <br></br>
              <p>
                We collect the personal information you provide to us when you are a company. The categories of information we may collect include:
              </p>
              <br></br>
              <p>
                Commercial and Financial Information, including credit card or debit card number, purchases, and bank or other financial account number;
              </p>
              <br></br>
              <li>Personal Identifiers, including tax ID number, name, email address, and telephone number;</li>
              <li>Other Sensitive Data, including contents of mail, email or text messages;</li>
              <li>Inferences, including inferences from other data; and</li>
              <li>Professional, including professional information.</li>
              <li>Information collected automatically.</li>
            </ul>
            <br></br>
            <p>We automatically collect internet or other electronic information about you when you visit our website, such as IP address, browsing history and interactions with our website. This data may be collected using browser cookies and other unique personal identifiers.</p>
            <br></br>
            <p>
              Do Not Track. Your browser settings may allow you to automatically transmit a “Do Not Track” signal to online services you visit. When we detect a Do Not Track signal, we place a U.S. Privacy String setting in your browser so that any third party who respects that signal will not track your activity on our website. We also respect the
            </p>
            <br>
            </br>
            <p>
              Global Privacy Control (GPC)
            </p>

            <br></br>
            <p>
              signal, a user-enabled global privacy control that opts you out of the sale of personal information. GPC is supported by certain internet browsers or as a browser extension.
            </p>
            <br></br>
            <p>‍Information from other sourcesWe may collect personal information about you from third-party sources, including Data Brokers, Other consumers (e.g., referrals), and Social Networks.</p>
          </div>
          <h3>solvehire ai Chrome Extension </h3>
          <p>If you access our website/platform through a third-party platform such as a social media service (e.g. LinkedIn) or connect our Services to a third-party platform, the information we collect may include your user name associated with that third-party platform, any information or content the third-party platform has the right to share with us, such as your profile picture, email address, friends list or connections list, and any information you have made public in connection with the respective third-party platform (“Social Media Data”). When you access our website/platform through a third-party platform, such as LinkedIn, you are authorizing us to collect, store, and use and retain such Social Media Data from the third-party platform in accordance with this Privacy Policy. </p>
          <br></br>
          <p>You can control the amount of data that we collect about you by adjusting your LinkedIn privacy settings. You can learn more about LinkedIn's privacy policy here.</p>
          <br></br>
          <p>We collect and utilize Social Media Data for specific purposes, including, but not limited to, ​facilitating job searches, extending referrals, furnishing responses to inquiries regarding connections, and enhancing the functionality of our solvehire ai chrome extension.</p>
          <br></br>
          <p>By electing to install or download our solvehire ai Chrome Extension, you expressly grant your informed and unambiguous consent to the collection, processing, and utilization of your Social Media Data, as outlined in this Privacy Policy. You agree and acknowledge that the Company does not endorse, warrant, or make representations pertaining to the accuracy, quality, or legality of Social Media Data acquired through the solvehire ai chrome extension.</p>
          <br></br>
          <p>We may, as part of our Services, share your Social Media Data with third-party service providers, such as but not limited to actively recruiting entities and their designated points of contact within such organizations, for the purpose of facilitating job searches, extending referrals, and furnishing responses to inquiries regarding connection.</p>
          <br></br>
          <p>This Privacy Policy is subject to updates.If you have any questions, please contact us at contact@solvehire.ai</p>


        </section>

      </main>

      <SignupPage />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;