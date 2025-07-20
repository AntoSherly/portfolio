import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      category: "web",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that displays current weather conditions, forecasts, and interactive maps using weather APIs.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop",
      category: "web",
      technologies: ["JavaScript", "Weather API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "A mobile banking application with secure authentication, transaction history, and money transfer capabilities.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      category: "mobile",
      technologies: ["React Native", "Redux", "Firebase"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and clean design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      category: "design",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "AI Chatbot",
      description: "An intelligent chatbot powered by machine learning that can handle customer inquiries and provide automated responses.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      category: "ai",
      technologies: ["Python", "TensorFlow", "NLP", "Flask"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'ai', name: 'AI/ML' }
  ];

  const filteredProjects = projects;

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl heading-primary text-secondary-900 mb-4">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg body-text text-secondary-600 max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each project represents 
              a unique challenge and learning experience.
            </p>
          </div>



          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl heading-primary text-secondary-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="body-text text-secondary-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-black text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 btn-primary text-center text-sm"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 btn-secondary text-center text-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-black rounded-2xl p-8 text-white">
              <h3 className="text-2xl heading-primary mb-4">Have a project in mind?</h3>
              <p className="body-text text-gray-300 mb-6">
                Let's work together to bring your ideas to life. I'm always excited 
                to take on new challenges and create something amazing.
              </p>
              <a href="/contact" className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 