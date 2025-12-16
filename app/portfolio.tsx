"use client";
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['About', 'Experience', 'Projects', 'Blog', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Andrew
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-purple-500/20">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-purple-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Andrew Mintah</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Senior Engineer | Creative Problem Solver
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors">
              <Github className="text-white" size={24} />
            </a>
            <a href="#" className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors">
              <Linkedin className="text-white" size={24} />
            </a>
            <a href="#" className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors">
              <Mail className="text-white" size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
          <div className="bg-slate-900/50 rounded-lg p-8 border border-purple-500/20">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Senior Backend Engineer with 6+ years' experience designing and delivering distributed
systems, high-scale APIs and event-driven architectures within financial services.
Strong track record of building cloud-native platforms, improving system reliability, and
collaborating cross-functionally to deliver impactful product features. Deep expertise in
large-scale transactional systems using technologies like Java, Kafka, AWS, Terraform and many others.
Passionate about building resilient services, simplifying complex systems, and
delivering high-quality engineering outcomes in regulated environments.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge through technical writing.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: 'Senior Engineer',
                company: 'Natwest Group/Bigspark',
                period: '2022 - Present',
                description: 'Designed and owned microservices powering a distributed data platform used across the bank, handling 1,000+ daily API requests with >99.9% reliability, facilitating data-driven decision making in banking operations.'
              },
              {
                title: 'Applications Engineer',
                company: 'Ecobank Transnational Inc.',
                period: '2020 - 2022',
                description: 'Built and integrated APIs connecting digital wallets, CRM, and loan management platforms, supporting services for 1M+ customers across 33 countries. Improved customer journeys by implementing backend integrations for account services and digital onboarding.'
              },
              {
                title: 'Integrations Engineer',
                company: 'Ecobank Transnational Inc.',
                period: '2016- 2020',
                description: ' Developed a centralised API gateway improving transaction throughput andreducing failure rates across multiple financial products.'
              }
            ].map((job, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <h3 className="text-2xl font-semibold text-purple-400 mb-2">{job.title}</h3>
                <p className="text-gray-400 mb-2">{job.company} • {job.period}</p>
                <p className="text-gray-300">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-featured e-commerce solution with payment integration and admin dashboard.',
                tech: ['Next.js', 'Stripe', 'PostgreSQL']
              },
              {
                title: 'Task Management App',
                description: 'Collaborative task management tool with real-time updates and team features.',
                tech: ['React', 'Firebase', 'Tailwind CSS']
              },
              {
                title: 'Analytics Dashboard',
                description: 'Data visualization dashboard with interactive charts and real-time metrics.',
                tech: ['React', 'D3.js', 'Node.js']
              }
            ].map((project, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Latest Blog Posts</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Getting Started with Next.js 14',
                date: 'December 1, 2024',
                excerpt: 'Explore the latest features and improvements in Next.js 14 and how to leverage them in your projects.'
              },
              {
                title: 'Building Scalable React Applications',
                date: 'November 15, 2024',
                excerpt: 'Best practices and patterns for structuring large-scale React applications that are maintainable and performant.'
              },
              {
                title: 'The Power of Tailwind CSS',
                date: 'November 1, 2024',
                excerpt: 'Why Tailwind CSS has become my go-to styling solution and how it improves developer productivity.'
              }
            ].map((post, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <h3 className="text-2xl font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{post.date}</p>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Get In Touch</h2>
          <div className="bg-slate-900/50 rounded-lg p-8 border border-purple-500/20">
            <p className="text-gray-300 text-center mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-800 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-800 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-800 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert('Message sent! (This is a demo)');
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-purple-500/20">
        <p className="text-gray-400">© 2025 Andrew Mintah. All rights reserved.</p>
      </footer>
    </div>
  );
}