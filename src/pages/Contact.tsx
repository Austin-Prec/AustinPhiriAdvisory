import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Clock, Shield, CheckCircle } from 'lucide-react';

const enquiryTypes = [
  'Governance Architecture',
  'Forensic Investigation',
  'Donor & Corporate Compliance',
  'Forensic Readiness Assessment',
  'Capacity Building',
  'IFRS Advisory',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/xjglrvdj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          organisation: formData.organisation,
          email: formData.email,
          phone: formData.phone,
          enquiryType: formData.enquiryType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          organisation: '',
          email: '',
          phone: '',
          enquiryType: '',
          message: '',
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-navy-500 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-main px-6 lg:px-20">
          <div className="max-w-3xl">
            <h1 className="font-garamond text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Let's Talk
            </h1>
            <p className="font-arial text-navy-100 text-base md:text-lg leading-relaxed">
              Whether you have a specific governance challenge or want to understand 
              how advisory support could strengthen your institution — start here.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-main px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Form Section */}
            <div className="lg:col-span-3">
              <div className="bg-navy-50 border border-navy-100 rounded-lg p-4 mb-6 flex items-center gap-3">
                <Shield size={20} className="text-crimson-400" />
                <p className="font-arial text-navy-600 text-sm">
                  All enquiries are handled directly by the Managing Director. 
                  Initial consultations focus on understanding your governance risks.
                </p>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-3" />
                  <h3 className="font-garamond text-green-700 text-xl font-bold mb-2">
                    Enquiry Received
                  </h3>
                  <p className="font-arial text-green-600 text-sm leading-relaxed">
                    Thank you for your enquiry. Austin Phiri Advisory will respond 
                    within two business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-arial text-navy-500 text-sm font-semibold mb-2">
                        Full Name <span className="text-crimson-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 font-arial text-sm text-gray-800 focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-all"
                        placeholder="Austin Phiri"
                      />
                    </div>
                    <div>
                      <label className="block font-arial text-navy-500 text-sm font-semibold mb-2">
                        Organisation
                      </label>
                      <input
                        type="text"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 font-arial text-sm text-gray-800 focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-all"
                        placeholder="Your organisation name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-arial text-navy-500 text-sm font-semibold mb-2">
                        Email Address <span className="text-crimson-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 font-arial text-sm text-gray-800 focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-all"
                        placeholder="you@organisation.org"
                      />
                    </div>
                    <div>
                      <label className="block font-arial text-navy-500 text-sm font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 font-arial text-sm text-gray-800 focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-all"
                        placeholder="+265 888 879 052"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-arial text-navy-500 text-sm font-semibold mb-2">
                      Nature of Enquiry <span className="text-crimson-400">*</span>
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 font-arial text-sm text-gray-800 bg-white focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-all"
                    >
                      <option value="">Select an enquiry type</option>
                      {enquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-arial text-navy-500 text-sm font-semibold mb-2">
                      Message <span className="text-crimson-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 font-arial text-sm text-gray-800 focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-all resize-vertical"
                      placeholder="Briefly describe your governance or forensic challenge..."
                    />
                  </div>

                  {error && (
                    <p className="font-arial text-red-600 text-sm bg-red-50 p-3 rounded-lg">{error}</p>
                  )}
                  
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-navy-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    {submitting ? 'Sending...' : 'Send Enquiry'}
                  </button>
                  
                  <p className="font-arial text-gray-400 text-xs text-center mt-4">
                    Your information is confidential. We do not share data with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Details Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-lg p-8 sticky top-28">
                
                <h3 className="font-garamond text-navy-500 text-xl font-bold mb-6">
                  Direct Contact
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-crimson-100 p-2 rounded-lg">
                      <Mail size={18} className="text-crimson-400" />
                    </div>
                    <div>
                      <p className="font-arial text-navy-500 text-xs font-semibold uppercase tracking-wider mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:austinphiri@gmail.com"
                        className="font-arial text-gray-700 text-sm hover:text-crimson-400 transition-colors"
                      >
                        austinphiri@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-crimson-100 p-2 rounded-lg">
                      <Phone size={18} className="text-crimson-400" />
                    </div>
                    <div>
                      <p className="font-arial text-navy-500 text-xs font-semibold uppercase tracking-wider mb-1">
                        Phone /
