import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding min-h-screen flex items-center">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl heading-primary text-secondary-900 mb-6">
                Hi, I'm <span className="gradient-text">Sherly</span>
              </h1>
              <h2 className="text-2xl md:text-3xl heading-primary text-secondary-700 mb-8">
                Computer Science Engineering Graduate
              </h2>
              <p className="text-lg body-text text-secondary-600 mb-8">
              I create clean and practical solutions, ranging from web experiences to cloud workflows, grounded in a strong foundation of computer science and driven by a passion for real-world impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="btn-primary text-center">
                  View My Work
                </Link>
                <Link to="/contact" className="btn-secondary text-center">
                  Get In Touch
                </Link>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile-photo.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center shadow-2xl" style={{display: 'none'}}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">JD</span>
                      </div>
                      <p className="text-gray-600 font-medium">Portfolio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl heading-primary text-secondary-900 mb-4">
              About Me
            </h2>
            <p className="text-lg body-text text-secondary-600 max-w-3xl mx-auto">
            Computer Science graduate with practical experience in developing real-time web apps using Java, Azure, and SQL. Quick learner, team player, and problem-solver eager to drive innovation in tech-forward environments.
            </p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home; 