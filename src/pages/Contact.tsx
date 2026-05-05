import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const enquiryTypes = [
  'Governance Architecture',
  'Forensic Investigation',
  'Donor Compliance',
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
      {/* Header */}
      <section className="bg-navy-500 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-main px-6 lg:px-20">
          <h1 className="font-garamond text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contact
          </h1>
          <p className="font-arial text-navy-100 text-base md:text-lg leading-relaxed max-w-3xl">
            Begin a conversation about your institution's governance and forensic
            challenges.
          </p>
        </div>
      </section>

      {/* Form and Details */}
      <section className="bg-white section-padding">
        <div className="container-main px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-navy-50 border border-navy-200 p-8 text-center">
                  <h3 className="font-garamond text-navy-500 text-xl font-bold mb-3">
                    Enquiry Received
                  </h3>
                  <p className="font-arial text-gray-600 text-sm leading-relaxed">
                    Thank you for your enquiry. Austin Phiri Advisory will respond
                    within two business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-arial text-navy-500 text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 px-4 py-3 font-arial text-sm text-gray-800 focus:outline-none focus:border-navy-400 transition-colors"
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
                        className="w-full border border-gray-300 px-4 py-3 font-arial text-sm text-gray-800 focus:outline-none focus:border-navy-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-arial text-navy-500 text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 px-4 py-3 font-arial text-sm text-gray-800 focus:outline-none focus:border-navy-400 transition-colors"
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
                        className="w-full border border-gray-300 px-4 py-3 font-arial text-sm text-gray-800 focus:outline-none focus:border-navy-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-arial text-navy-500 text-sm font-semibold mb-2">
                      Nature of Enquiry *
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 px-4 py-3 font-arial text-sm text-gray-800 bg-white focus:outline-none focus:border-navy-400 transition-colors"
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
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full border border-gray-300 px-4 py-3 font-arial text-sm text-gray-800 focus:outline-none focus:border-navy-400 transition-colors resize-vertical"
                    />
                  </div>

                  {error && (
                    <p className="font-arial text-red-600 text-sm">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                    {submitting ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-2">
              <h3 className="font-garamond text-navy-500 text-xl font-bold mb-6">
                Direct Contact
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-crimson-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-arial text-navy-500 text-sm font-semibold mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:austinphiri@gmail.com"
                      className="font-arial text-gray-600 text-sm hover:text-crimson-400 transition-colors duration-200"
                    >
                      austinphiri@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-crimson-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-arial text-navy-500 text-sm font-semibold mb-1">
                      Phone
                    </p>
                    <p className="font-arial text-gray-600 text-sm">
                      +265 888 879 052
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-crimson-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-arial text-navy-500 text-sm font-semibold mb-1">
                      Location
                    </p>
                    <p className="font-arial text-gray-600 text-sm">
                      Zomba, Malawi
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Linkedin size={20} className="text-crimson-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-arial text-navy-500 text-sm font-semibold mb-1">
                      LinkedIn
                    </p>
                    <a
                      href="https://linkedin.com/in/austinphiriadvisory"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-arial text-gray-600 text-sm hover:text-crimson-400 transition-colors duration-200"
                    >
                      linkedin.com/in/austinphiriadvisory
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
