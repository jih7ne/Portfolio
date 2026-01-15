import React, { useState } from 'react';
import { Github, Linkedin, FileText, ExternalLink, Mail, Star } from 'lucide-react';

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const profile = {
    name: "Jihane Chouhe",
    username: "jihanechouhe",
    title: "Computer Science Engineering Student",
    bio: "I am a computer science engineering student passionate about exploring new technologies to advance my career in IT. Additionally, I am highly engaged in extracurricular activities, actively contributing to various initiatives and events.",
    location: "Tétouan, Morocco",
    email: "your.email@example.com",
    linkedin: "https://www.linkedin.com/in/jihane-chouhe-09a29a319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/jih7ne",
    cv: "YOUR_GOOGLE_DRIVE_LINK_HERE",
    image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768516242/_MG_3729_bi6hfp.jpg"
  };

  const projects = [
    {
      id: 1,
      title: "Uber Mockup Web Application (Under Development)",
      year: "2026",
      description: "A simple web application that mimics Uber's core functionalities, allowing users to request rides, and track drivers",
      tech: ["Laravel", "Livewire", "TailwindCSS", "MySQL", "GitHub"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768513168/Gemini_Generated_Image_6hs4tk6hs4tk6hs4_bjvz5p.png",
      link: "https://github.com/jih7ne/JavaGame",
      rating: 4
    },
    {
      id: 2,
      title: "Helpora - Services Platform",
      year: "2025",
      description: "Complete web platform enabling clients to connect with professionals (service providers) for home services such as babysitting, pet keeping and tutoring. The system manages the entire lifecycle of a service request, from the initial demand to invoicing and mutual evaluation.",
      tech: ["Laravel", "Livewire", "TailwindCSS", "MySQL", "GitHub", "Jira", "Figma", "Hostinger"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768513869/Gemini_Generated_Image_6ixocz6ixocz6ixo_cboimw.png",
      link: "https://github.com/jih7ne/service-platform",
      rating: 5
    },
    {
      id: 3,
      title: "Pharmacy Management System",
      year: "2025",
      description: "A Desktop application to manage pharmacy operations including inventory, sales, and customer management, with invoice generation",
      tech: ["ASP .NET", "Cloudinary", "C#", "SQL Server"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768513788/Gemini_Generated_Image_ert603ert603ert6_fvr83p.png",
      link: "https://github.com/amosnyirenda123/PharmacieApp",
      rating: 4.5
    },
    {
      id: 4,
      title: "Multi Cooperative E-Commerce App",
      year: "2023",
      description: "A modern e-commerce application that allows multi-cooperative selling with delivery tracking and coupons integration",
      tech: ["ASP .NET", "SQL Server", "Bootstrap", "C#", "JavaScript", "HTML"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768514096/Gemini_Generated_Image_8y65828y65828y65_kpmye5.png",
      link: "https://github.com/yourusername/project4",
      rating: 5
    },
    {
      id: 5,
      title: "Document System Management",
      year: "2025",
      description: "A platform designed to simplify administrative procedures for ENSA Tétouan students. Students can easily and quickly request different school documents.",
      tech: ["PHP", "HTML", "JavaScript", "CSS", "MySQL", "TailwindCSS"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768517975/Gemini_Generated_Image_9juvzl9juvzl9juv_y21l1j.png",
      link: "https://github.com/jih7ne/GestionDemandesWeb",
      rating: 4
    },
    {
      id: 7,
      title: "AFCON Web Portal",
      year: "2025",
      description: "A responsive web portal for the Africa Cup of Nations (AFCON) tournament, providing users with up-to-date information on matches, teams, players, and statistics.",
      tech: ["HTML", "JavaScript", "CSS", "GitHub", "Bootstrap", "GitHub Pages"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768518607/Gemini_Generated_Image_62lpto62lpto62lp_mqdi7q.png",
      link: "https://github.com/jih7ne/projet_web25",
      rating: 4
    },
    {
      id: 6,
      title: "Mass EMailing Application",
      year: "2025",
      description: "A simple web application that allows users to send bulk emails to multiple recipients with personalized content and verifies the existence of email addresses before sending.",
      tech: ["PHP", "PHP Mailer", "GMAIL SMTP"],
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=400&h=600&fit=crop",
      link: "https://github.com/jih7ne/Arrays-and-Files-manipulation",
      rating: 3
    },
    {
      id: 10,
      title: "Petition Management System",
      year: "2025",
      description: "A web application for managing /signing petitions.",
      tech: ["PHP", "HTML", "AJAX", "MySQL", "TailwindCSS"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768492861/ChatGPT_Image_15_janv._2026_17_00_43_irl47s.jpg",
      link: "https://github.com/jih7ne/Platefrome-Petitions",
      rating: 4
    },
    {
      id: 12,
      title: "Web Environment Development with Docker",
      year: "2025",
      description: "Creation of a standardized environment with Laravel and MySQL under Docker, Version control management via GitHub\n\nAgile methodology with Jira",
      tech: ["Docker", "Firebase", "GitHub", "Jira", "Laravel"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768493230/image_2026-01-15_170703103_pt7h8r.png",
      link: "https://github.com/amosnyirenda123/e-ticket-backend",
      rating: 4
    },
    {
      id: 8,
      title: "Student Management System",
      year: "2024",
      description: "A simple Command Line Interface (CLI) application for managing student records, including adding, deleting, and displaying student information.",
      tech: ["C", "File Handling"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768490819/image_2026-01-15_162653356_audjw1.png",
      link: "https://github.com/jih7ne/GestionEtudiants",
      rating: 2
    },
    {
      id: 9,
      title: "Automaton manipulation CLI",
      year: "2025",
      description: "A simple Command Line Interface (CLI) application for manipulating automata.",
      tech: ["C", "File Handling", "Automata Theory"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768491195/image_2026-01-15_163309521_evla0a.png",
      link: "https://github.com/jih7ne/ProjectTHL",
      rating: 3
    },
    {
      id: 11,
      title: "Multi-DBMS Java API",
      year: "2025",
      description: "Design of a Java API enabling dynamic interaction with MySQL, PostgreSQL, and SQL Server. Use of JUnit for testing",
      tech: ["JAVA", "JUnit", "JBDC", "MAVEN"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768491995/image_2026-01-15_164628518_h18wjr.png",
      link: "https://github.com/jih7ne/api",
      rating: 4
    },
    {
      id: 13,
      title: "2D Multiplayer Video Game in Java",
      year: "2025",
      description: "Development of a 2D space shooter game using LibGDX framework. Implementation of game mechanics, graphics, and user interface.",
      tech: ["JAVA", "LibGDX", "Sockets", "JAVAFx"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768492292/image_2026-01-15_165125672_kfwyql.png",
      link: "https://github.com/jih7ne/JavaGame",
      rating: 4
    },
    {
      id: 14,
      title: "Terrins management system",
      year: "2025",
      description: "Development of a 2D space shooter game using LibGDX framework. Implementation of game mechanics, graphics, and user interface.",
      tech: ["JAVA", "LibGDX", "Sockets", "JAVAFx"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768492292/image_2026-01-15_165125672_kfwyql.png",
      link: "https://github.com/jih7ne/JavaGame",
      rating: 4
    }
  ];

  const stats = {
    projects: projects.length,
    thisYear: projects.filter(p => p.year === "2026").length,
    technologies: [...new Set(projects.flatMap(p => p.tech))].length
  };

  const techStack = [
    { category: "Frontend", items: ["React", "TailwindCSS", "Bootstrap", "HTML", "CSS", "JavaScript", "Livewire", "JavaFx"] },
    { category: "Backend", items: ["Laravel", "PHP", "ASP .NET", "C#", "Node.js", "Java"] },
    { category: "Database", items: ["MySQL", "SQL Server", "PostgreSQL", "Firebase"] },
    { category: "Tools & Others", items: ["Docker", "GitHub", "Jira", "Figma", "MAVEN", "JUnit", "LibGDX"] }
  ];

  return (
    <div className="min-h-screen bg-[#14181c] text-[#9ab]">
      {/* Header */}
      <header className="bg-[#1f2937] border-b border-[#456]">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold text-white tracking-tight">
                {profile.name}
              </h1>
              <nav className="hidden md:flex gap-6 text-sm">
                <a href="#projects" className="hover:text-white transition">PROJECTS</a>
                <a href="#about" className="hover:text-white transition">ABOUT</a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" 
                 className="text-[#9ab] hover:text-white transition">
                <Linkedin size={18} />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                 className="text-[#9ab] hover:text-white transition">
                <Github size={18} />
              </a>
              <a href={`mailto:${profile.email}`}
                 className="text-[#9ab] hover:text-white transition">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Profile Section */}
      <section className="bg-[#1f2937] border-b border-[#456]" id="about">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 rounded-full bg-[#2c3e50] flex items-center justify-center text-4xl font-bold text-white overflow-hidden">
              {profile.image && profile.image !== "YOUR_CLOUDINARY_IMAGE_LINK_HERE" ? (
                <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
              ) : (
                profile.name.charAt(0)
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-white mb-2">{profile.name}</h2>
              <p className="text-[#678] mb-4">@{profile.username}</p>
              <p className="text-base leading-relaxed mb-6 max-w-2xl">{profile.bio}</p>
              <div className="flex flex-wrap gap-6 text-sm mb-6">
                <div>
                  <span className="text-white font-bold text-2xl">{stats.projects}</span>
                  <span className="text-[#678] ml-2">Projects</span>
                </div>
                <div>
                  <span className="text-white font-bold text-2xl">{stats.thisYear}</span>
                  <span className="text-[#678] ml-2">This year</span>
                </div>
                <div>
                  <span className="text-white font-bold text-2xl">{stats.technologies}</span>
                  <span className="text-[#678] ml-2">Technologies</span>
                </div>
              </div>
              <a 
                href={profile.cv}
                download
                className="inline-flex items-center gap-2 bg-[#00c030] text-white px-5 py-2 rounded text-sm font-semibold hover:bg-[#00e054] transition"
              >
                <FileText size={16} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-sm uppercase tracking-wider text-[#678] font-semibold mb-8">
          Tech Stack
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {techStack.map((stack, idx) => (
            <div key={idx} className="bg-[#1f2937] rounded p-6 border border-[#456]">
              <h4 className="text-white font-bold mb-4 text-lg">{stack.category}</h4>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((tech, i) => (
                  <span key={i} className="bg-[#2c3440] text-[#9ab] px-3 py-1 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12" id="projects">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-sm uppercase tracking-wider text-[#678] font-semibold">
            Projects
          </h3>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {projects.map(project => (
            <div 
              key={project.id}
              className="relative group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-[2/3] rounded-sm overflow-hidden bg-[#2c3440] shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Always visible title at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3">
                    <h4 className="text-white text-xs font-semibold leading-tight line-clamp-2">
                      {project.title}
                    </h4>
                  </div>

                  {/* Hover overlay with year and rating */}
                  {hoveredProject === project.id && (
                    <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center p-3">
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={12} 
                            className={i < project.rating ? "fill-[#00c030] text-[#00c030]" : "text-[#456]"}
                          />
                        ))}
                      </div>
                      <p className="text-[#9ab] text-xs">{project.year}</p>
                    </div>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Project Details Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-sm uppercase tracking-wider text-[#678] font-semibold mb-8">
          Project Details
        </h3>
        <div className="space-y-4">
          {projects.map(project => (
            <div key={project.id} className="bg-[#1f2937] rounded p-6 border border-[#456]">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-24 h-36 object-cover rounded shadow-lg"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                      <p className="text-[#678] text-sm">{project.year}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < project.rating ? "fill-[#00c030] text-[#00c030]" : "text-[#456]"}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#9ab] mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map(tech => (
                      <span 
                        key={tech}
                        className="bg-[#2c3440] text-[#9ab] px-3 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#40bcf4] hover:text-white transition text-sm"
                  >
                    View on GitHub
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#456] mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-[#678] text-sm">
          <p>© 2026 {profile.name}. Built with React & Tailwind CSS (and Love).</p>
        </div>
      </footer>
    </div>
  );
}