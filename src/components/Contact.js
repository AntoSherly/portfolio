import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });
    if (res.ok) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl heading-primary text-black mb-4">
              <span className="gradient-text">Contact</span> Me
            </h1>
            <p className="text-lg body-text text-gray-600 max-w-xl mx-auto">
              Have a question, project, or want to connect? Fill out the form below or email me directly.
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-100 text-green-800 rounded-lg p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
              <p>Your message has been sent. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-secondary-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-secondary-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-secondary-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          )}

          {/* Contact Details */}
          <div className="mt-12 text-center text-gray-700">
            <div className="mb-2">
              <span className="font-semibold">Email:</span> antosherly.25cs@licet.ac.in
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 