import React, { useState, useEffect } from 'react';
import { Github, Linkedin, FileText, ExternalLink, Mail, Star } from 'lucide-react';

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profile = {
    name: "Jihane Chouhe",
    username: "jihanechouhe",
    title: "Computer Science Engineering Student",
    bio: "I am a computer science engineering student passionate about exploring new technologies to advance my career in IT. Additionally, I am highly engaged in extracurricular activities, actively contributing to various initiatives and events.",
    location: "Tétouan, Morocco",
    email: "jihanechouhe@hotmail.com",
    linkedin: "https://www.linkedin.com/in/jihane-chouhe-09a29a319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/jih7ne",
    cv: "https://drive.google.com/file/d/1s3y0_us0UsvOoLpSK1grqUZdKFFBN80c/view?usp=sharing",
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
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768521847/Gemini_Generated_Image_ajvjanajvjanajvj_wuw4yj.png",
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
      id: 13,
      title: "2D Multiplayer Video Game in Java",
      year: "2025",
      description: "Development of a 2D space shooter game using LibGDX framework. Implementation of game mechanics, graphics, and user interface.",
      tech: ["JAVA", "LibGDX", "Sockets", "JAVAFx"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768519332/Gemini_Generated_Image_9rp0749rp0749rp0_wpqziq.png",
      link: "https://github.com/jih7ne/JavaGame",
      rating: 4
    },
    {
      id: 6,
      title: "Mass Emailing Application",
      year: "2025",
      description: "A simple web application that allows users to send bulk emails to multiple recipients with personalized content and verifies the existence of email addresses before sending.",
      tech: ["PHP", "PHP Mailer", "GMAIL SMTP"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768518951/Gemini_Generated_Image_l2e27ml2e27ml2e2_cuaqfw.png",
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
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768520962/resized_1000x1500_no_stretch_lagtr1.png",
      link: "https://github.com/amosnyirenda123/e-ticket-backend",
      rating: 4
    },
    {
      id: 8,
      title: "Student Management System",
      year: "2024",
      description: "A simple Command Line Interface (CLI) application for managing student records, including adding, deleting, and displaying student information.",
      tech: ["C", "File Handling"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768521348/Gemini_Generated_Image_dedimldedimldedi_ldvfkp.png",
      link: "https://github.com/jih7ne/GestionEtudiants",
      rating: 2
    },
    {
      id: 20,
      title: "Club's event management web app",
      year: "2025",
      description: "A full web application that allows users to manage events organized by different clubs in an educational institution, and allows users to register for these events.",
      tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "TailwindCSS"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768518951/Gemini_Generated_Image_l2e27ml2e27ml2e2_cuaqfw.png",
      link: "https://github.com/jih7ne/Arrays-and-Files-manipulation",
      rating: 3
    },
    {
      id: 9,
      title: "Automata manipulation CLI",
      year: "2025",
      description: "A simple Command Line Interface (CLI) application for manipulating automata.",
      tech: ["C", "File Handling", "Automata Theory"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768519683/Gemini_Generated_Image_oq0asfoq0asfoq0a_anc2ij.png",
      link: "https://github.com/jih7ne/ProjectTHL",
      rating: 3
    },
    {
      id: 11,
      title: "Multi-DBMS Java API",
      year: "2025",
      description: "Design of a Java API enabling dynamic interaction with MySQL, PostgreSQL, and SQL Server. Use of JUnit for testing",
      tech: ["JAVA", "JUnit", "JBDC", "MAVEN"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768520210/Gemini_Generated_Image_6pccx96pccx96pcc_xpl5cp.png",
      link: "https://github.com/jih7ne/api",
      rating: 4
    },
    {
      id: 14,
      title: "Football field Booking Web Application",
      year: "2025",
      description: "A web application that allows field managers / owners to manage their football fields and users to book these fields online based on availability and their desired prefrences with a history of reservations and invoices.",
      tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "TailwindCSS"],
      image: "https://res.cloudinary.com/djdip9ni4/image/upload/v1768520750/Gemini_Generated_Image_fy7ndhfy7ndhfy7n_fy88ch.png",
      link: "https://github.com/jih7ne/reservation-terrains.git",
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
    <div className="min-h-screen bg-[#14181c] text-[#9ab] relative overflow-hidden">

      {/* Header */}
      <header className={`bg-[#1f2937]/95 backdrop-blur-sm border-b border-[#456] sticky top-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'shadow-lg shadow-black/20' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold text-white tracking-tight transform hover:scale-105 transition-transform">
                {profile.name}
              </h1>
              <nav className="hidden md:flex gap-6 text-sm">
                <a href="#projects" className="hover:text-[#00c030] transition-colors relative group">
                  PROJECTS
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c030] group-hover:w-full transition-all duration-300" />
                </a>
                <a href="#about" className="hover:text-[#00c030] transition-colors relative group">
                  ABOUT
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c030] group-hover:w-full transition-all duration-300" />
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" 
                 className="text-[#9ab] hover:text-[#00c030] transition-all hover:scale-110 transform">
                <Linkedin size={18} />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                 className="text-[#9ab] hover:text-[#00c030] transition-all hover:scale-110 transform">
                <Github size={18} />
              </a>
              <a href={`mailto:${profile.email}`}
                 className="text-[#9ab] hover:text-[#00c030] transition-all hover:scale-110 transform">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Profile Section */}
      <section className="bg-[#1f2937] border-b border-[#456] relative" id="about">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 rounded-full bg-[#2c3e50] flex items-center justify-center text-4xl font-bold text-white overflow-hidden hover:scale-105 transition-all duration-300 transform">
              {profile.image && profile.image !== "YOUR_CLOUDINARY_IMAGE_LINK_HERE" ? (
                <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
              ) : (
                profile.name.charAt(0)
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-white mb-2 animate-fade-in">{profile.name}</h2>
              <p className="text-[#678] mb-4">@{profile.username}</p>
              <p className="text-base leading-relaxed mb-4 max-w-2xl">{profile.bio}</p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 mb-6 text-sm">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-[#9ab] hover:text-[#ff8000] transition-colors">
                  <Mail size={16} />
                  {profile.email}
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#9ab] hover:text-[#ff8000] transition-colors">
                  <Github size={16} />
                  {profile.github.split('/').pop()}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#9ab] hover:text-[#ff8000] transition-colors">
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-sm mb-6">
                <div className="group cursor-default">
                  <span className="text-white font-bold text-2xl group-hover:text-[#00c030] transition-colors">{stats.projects}</span>
                  <span className="text-[#678] ml-2">Projects</span>
                </div>
                <div className="group cursor-default">
                  <span className="text-white font-bold text-2xl group-hover:text-[#00c030] transition-colors">{stats.thisYear}</span>
                  <span className="text-[#678] ml-2">This year</span>
                </div>
                <div className="group cursor-default">
                  <span className="text-white font-bold text-2xl group-hover:text-[#00c030] transition-colors">{stats.technologies}</span>
                  <span className="text-[#678] ml-2">Technologies</span>
                </div>
              </div>
              <a 
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00c030] text-white px-5 py-2 rounded text-sm font-semibold hover:bg-[#00e054] transition-all hover:scale-105 transform hover:shadow-lg hover:shadow-[#00c030]/50"
              >
                <FileText size={16} />
                View CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <h3 className="text-sm uppercase tracking-wider text-[#678] font-semibold mb-8">
          Tech Stack
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {techStack.map((stack, idx) => (
            <div key={idx} 
                 className="bg-[#1f2937] rounded p-6 border border-[#456] hover:border-[#ff8000] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff8000]/20 hover:-translate-y-1 transform group"
                 style={{ animationDelay: `${idx * 100}ms` }}>
              <h4 className="text-white font-bold mb-4 text-lg group-hover:text-[#ff8000] transition-colors">{stack.category}</h4>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((tech, i) => (
                  <span key={i} className="bg-[#2c3440] text-[#9ab] px-3 py-1 rounded text-xs font-medium hover:bg-[#00c030] hover:text-white transition-all cursor-default transform hover:scale-110">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12 relative z-10" id="projects">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-sm uppercase tracking-wider text-[#678] font-semibold">
            Projects
          </h3>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {projects.map((project, idx) => (
            <div 
              key={project.id}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-[2/3] rounded-sm overflow-hidden bg-[#2c3440] shadow-lg hover:shadow-2xl hover:shadow-[#ff8000]/30 transition-all duration-300 hover:-translate-y-2 transform">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Always visible title at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3">
                    <h4 className="text-white text-xs font-semibold leading-tight line-clamp-2">
                      {project.title}
                    </h4>
                  </div>

                  {/* Hover overlay with year and rating */}
                  {hoveredProject === project.id && (
                    <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center p-3 animate-fade-in">
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={12} 
                            className={`${i < project.rating ? "fill-[#00c030] text-[#00c030]" : "text-[#456]"} transition-all`}
                            style={{ animationDelay: `${i * 50}ms` }}
                          />
                        ))}
                      </div>
                      <p className="text-[#9ab] text-xs">{project.year}</p>
                    </div>
                  )}
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Project Details Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <h3 className="text-sm uppercase tracking-wider text-[#678] font-semibold mb-8">
          Project Details
        </h3>
        <div className="space-y-4">
          {projects.map((project, idx) => (
            <div key={project.id} 
                 className="bg-[#1f2937] rounded p-6 border border-[#456] hover:border-[#ff8000] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff8000]/20 animate-fade-in group"
                 style={{ animationDelay: `${idx * 50}ms` }}>
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-24 h-36 object-cover rounded shadow-lg group-hover:shadow-[#ff8000]/40 transition-all transform group-hover:scale-105"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#ff8000] transition-colors">{project.title}</h4>
                      <p className="text-[#678] text-sm">{project.year}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={`${i < project.rating ? "fill-[#00c030] text-[#00c030]" : "text-[#456]"} transition-all hover:scale-125 transform`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#9ab] mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map(tech => (
                      <span 
                        key={tech}
                        className="bg-[#2c3440] text-[#9ab] px-3 py-1 rounded text-xs font-medium hover:bg-[#00c030] hover:text-white transition-all cursor-default transform hover:scale-110"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#40bcf4] hover:text-[#ff8000] transition-all text-sm group/link"
                  >
                    View on GitHub
                    <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#456] mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-[#678] text-sm">
          <p className="hover:text-[#ff8000] transition-colors cursor-default">© 2026 {profile.name}. Built with React & Tailwind CSS (and Love).</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}