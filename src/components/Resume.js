import React from 'react';

const Resume = () => {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl heading-primary text-black mb-4">
              My <span className="gradient-text">Resume</span>
            </h1>
            <p className="text-lg body-text text-gray-600 max-w-2xl mx-auto">
              Download my resume or explore my professional experience and education below.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-block mt-6 btn-primary"
            >
              Download Resume (PDF)
            </a>
          </div>

          {/* Experience */}
          <div className="mb-16">
            <h2 className="text-2xl heading-primary text-black mb-6">Experience</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-md card-hover">
                <h3 className="text-xl font-semibold text-black mb-1">IT Administration Intern</h3>
                <div className="text-gray-600 mb-2">The Leela Palace Hotel &middot; July 8 - Aug 4 2024</div>
                <ul className="list-disc list-inside text-gray-700 text-base">
                  <li>Supported the IT team in managing software and system issues, ensuring seamless operations across departments.</li>
                  <li>Engaged in data analysis and reporting, using tools like Excel macros and formulas to streamline IT-related data and aid decision-making.</li>
                  <li>Assisted in testing and troubleshooting ticketing systems, network management tools, and database systems to enhance operational efficiency.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h2 className="text-2xl heading-primary text-black mb-6">Education</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-md card-hover">
                <h3 className="text-xl font-semibold text-black mb-1">B.E. Computer Science and Engineering</h3>
                <div className="text-gray-600 mb-2">Loyola-ICAM College of Engineering and Technology (LICET), Anna University, Chennai, India &middot; 2021 – July 2025</div>
                <ul className="list-disc list-inside text-gray-700 text-base">
                  <li>Cumulative GPA: 7.5</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md card-hover">
                <h3 className="text-xl font-semibold text-black mb-1">HSC</h3>
                <div className="text-gray-600 mb-2">St. Ann’s Matric Higher Secondary School, Tirunelveli, India &middot; 2019 – 2021</div>
                <ul className="list-disc list-inside text-gray-700 text-base">
                  <li>Score: 94%</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md card-hover">
                <h3 className="text-xl font-semibold text-black mb-1">SSLC</h3>
                <div className="text-gray-600 mb-2">St. Ann’s Matric Higher Secondary School, Tirunelveli, India &middot; 2018 – 2019</div>
                <ul className="list-disc list-inside text-gray-700 text-base">
                  <li>Score: 93</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-2xl heading-primary text-black mb-6">Projects</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-md card-hover">
                <h3 className="text-xl font-semibold text-black mb-1">Bus Tracking App</h3>
                <div className="text-gray-600 mb-2">Real-time bus tracking system</div>
                <ul className="list-disc list-inside text-gray-700 text-base">
                  <li>Developed a real-time bus tracking system using React, Node.js, and Supabase, featuring live crowd updates and secure SMS-based OTP login.</li>
                  <li>Integrated a simulated Electronic Ticketing Machine (ETM) to update and manage passenger data dynamically based on bus registration numbers.</li>
                  <li>Engineered a responsive, route-based user interface with real-time data flow for a seamless experience across devices.</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md card-hover">
                <h3 className="text-xl font-semibold text-black mb-1">Book Recommendation App</h3>
                <div className="text-gray-600 mb-2">Personalized book recommendation platform</div>
                <ul className="list-disc list-inside text-gray-700 text-base">
                  <li>Built a personalized book recommendation platform using HTML and CSS, allowing users to select preferred genres for tailored suggestions.</li>
                  <li>Designed a clean, responsive user interface to ensure intuitive navigation and engaging user interactions.</li>
                  <li>Implemented a genre-matching logic system to provide accurate and relevant book recommendations based on user input.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume; 