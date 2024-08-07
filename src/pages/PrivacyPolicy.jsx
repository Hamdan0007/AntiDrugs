import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const PrivacyPolicy = () => {
  return (
<>
    <div>
    <Navbar/>
  <header className="bg-green-600 text-white p-4 py-24 text-center">
    <h1 className="text-3xl font-bold">ZINDAGI Welfare Organization (ZWO)</h1>
    <p className="text-xl">Privacy Policy</p>
  </header>
  <main className="container mx-auto p-4 bg-white mt-6">
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
      <p>ZINDAGI Welfare Organization (ZWO) is committed to protecting the privacy of the most marginalized and vulnerable groups in society. This privacy policy outlines how we collect, use, disclose, and safeguard your information.</p>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul className="list-disc list-inside ml-4">
        <li>Personal identification information (name, email address, phone number, etc.)</li>
        <li>Demographic information (age, gender, etc.)</li>
        <li>Health-related information for providing appropriate services</li>
        <li>Usage data (how you use our services)</li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
      <p>We use the information we collect in the following ways:</p>
      <ul className="list-disc list-inside ml-4">
        <li>To provide and improve our services</li>
        <li>To communicate with you</li>
        <li>To comply with legal obligations</li>
        <li>To protect the safety and security of our users</li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
      <p>We do not sell or trade your personal information to third parties. We may share your information with:</p>
      <ul className="list-disc list-inside ml-4">
        <li>Service providers who assist us in our operations</li>
        <li>Legal authorities if required by law</li>
        <li>Other third parties with your consent</li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Security of Your Information</h2>
      <p>We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure.</p>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Your Data Protection Rights</h2>
      <p>You have the right to:</p>
      <ul className="list-disc list-inside ml-4">
        <li>Access your personal data</li>
        <li>Correct any inaccuracies in your data</li>
        <li>Request deletion of your personal data</li>
        <li>Object to the processing of your data</li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
      <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website. You are advised to review this policy periodically for any changes.</p>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p>If you have any questions about this privacy policy, please contact us:</p>
      <p>Email: <a href="mailto:info@zwo.org" className="text-green-600">info@zwo.org</a></p>
      <p>Address: 123 Charity Lane, City, Country</p>
    </section>
  </main>
 <Footer/>
</div>

</>

  )
}

export default PrivacyPolicy