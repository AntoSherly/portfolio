import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const skillCategories = [
    {
      id: 'technical',
      name: 'Technical Skills',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'soft',
      name: 'Soft Skills',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const skills = {
    technical: [
      { name: 'Java', level: 70, color: 'from-gray-800 to-gray-900' },
      { name: 'SQL', level: 85, color: 'from-gray-700 to-gray-800' },
      { name: 'Azure', level: 75, color: 'from-gray-500 to-gray-600' }
    ],
    soft: [
      { name: 'Problem Solving', level: 90, color: 'from-gray-800 to-gray-900' },
      { name: 'Communication', level: 88, color: 'from-gray-700 to-gray-800' },
      { name: 'Team Leadership', level: 85, color: 'from-gray-600 to-gray-700' },
      { name: 'Time Management', level: 92, color: 'from-gray-500 to-gray-600' },
      { name: 'Adaptability', level: 87, color: 'from-gray-400 to-gray-500' },
      { name: 'Creativity', level: 83, color: 'from-gray-300 to-gray-400' }
    ]
  };

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl heading-primary text-secondary-900 mb-4">
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-lg body-text text-secondary-600 max-w-2xl mx-auto">
              I've developed a diverse set of skills through years of experience and continuous learning. 
              Here's what I bring to the table.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills[activeCategory].map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-secondary-900">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-secondary-600">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
    </div>
  );
};

export default Skills; 