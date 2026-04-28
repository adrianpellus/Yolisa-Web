import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.png';
import viviendas from './assets/services/viviendas.jpg';
import comunidades from './assets/services/comunidades.jpg';
import locales from './assets/services/locales.jpg';
import eventos from './assets/services/eventos.jpg';
import fachadas from './assets/services/fachadas.jpg';
import cocheras from './assets/services/cocheras.jpg';
import puntualidad from './assets/whyus/puntualidad.jpg';
import garantia from './assets/whyus/garantia.jpg';
import profesionales from './assets/whyus/profesionales.jpg';
import precios from './assets/whyus/precios.jpg';

const services = [
  {
    image: viviendas,
    title: 'Viviendas',
    description: 'Limpieza a fondo de hogares con productos profesionales y atención al detalle.'
  },
  {
    image: comunidades,
    title: 'Comunidades',
    description: 'Zonas comunes, portales, escaleras y garajes. Resultados impecables.'
  },
  {
    image: locales,
    title: 'Locales Comerciales',
    description: 'Tu negocio siempre presentable. Scheduling flexible según tus necesidades.'
  },
  {
    image: eventos,
    title: 'Eventos',
    description: 'Limpieza post-evento. Bodas, fiestas, celebraciones y actos corporativos.'
  },
  {
    image: fachadas,
    title: 'Fachadas',
    description: 'Recuperamos el aspecto de tu edificio con limpieza profesional de exteriores.'
  },
  {
    image: cocheras,
    title: 'Cocheras',
    description: 'Eliminamos grasa, manchas y polvo. Garajes impecables garantizados.'
  }
];

const whyUs = [
  {
    image: puntualidad,
    title: 'Puntualidad',
    description: 'Respetamos tu tiempo. Llegamos cuando prometemos y terminamos en el plazo acordado.'
  },
  {
    image: garantia,
    title: 'Calidad Garantizada',
    description: 'Más de 10 años de experiencia respaldan cada servicio que realizamos.'
  },
  {
    image: profesionales,
    title: 'Profesionales',
    description: 'Equipo experimentado con productos profesionales y equipos de última generación.'
  },
  {
    image: precios,
    title: 'Precios Justos',
    description: 'Tarifas transparentes sin sorpresas. La mejor calidad al mejor precio de la zona.'
  }
];

const testimonials = [
  {
    name: 'María García',
    location: 'Orihuela',
    text: 'Llevamos 3 años con Yolisa y no podemos estar más satisfechos. Siempre puntuales, profesionales y dejan todo impecable.',
    rating: 5
  },
  {
    name: 'Carlos López',
    location: 'Alicante',
    text: 'Contratamos la limpieza de nuestra comunidad y el resultado ha sido excepcional. Totalmente recomendados.',
    rating: 5
  },
  {
    name: 'Ana Martínez',
    location: 'Orihuela',
    text: 'Necesitaba una limpieza profunda antes de una mudanza y lo dejaron todo perfecto. Muy contenta.',
    rating: 5
  }
];

const stats = [
  { value: '5/5', label: 'Valoración', suffix: '' },
  { value: '10', label: 'Años', suffix: '+' },
  { value: '100', label: 'Garantía', suffix: '%' },
  { value: '500', label: 'Clientes', suffix: '+' }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleStats, setVisibleStats] = useState(false);
  const [statsAnimated, setStatsAnimated] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleStats(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (visibleStats) {
      stats.forEach((stat, index) => {
        setTimeout(() => {
          setStatsAnimated(prev => ({ ...prev, [index]: true }));
        }, index * 150);
      });
    }
  }, [visibleStats]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Yolisa" className="logo-img" />
        </div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('inicio')}>Inicio</button></li>
          <li><button onClick={() => scrollToSection('servicios')}>Servicios</button></li>
          <li><button onClick={() => scrollToSection('nosotros')}>Nosotros</button></li>
          <li><button onClick={() => scrollToSection('testimonios')}>Opiniones</button></li>
          <li><button onClick={() => scrollToSection('contacto')}>Contacto</button></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-bg-gradient"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Disponible ahora en Orihuela y provincia
          </div>
          <div className="hero-title">
            <img src={logo} alt="Yolisa" className="hero-logo" />
            <h1>Limpiezas Integrales Yolisa</h1>
          </div>
          <p className="tagline">Profesionales que cuidan lo que más importa.<br/>Resultados impecables en cada servicio.</p>
          <div className="hero-buttons">
            <a href="tel:649136201" className="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Llamar ahora
            </a>
            <a href="https://wa.me/34649136201" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-item ${statsAnimated[index] ? 'visible' : ''}`}>
              <span className="stat-value">
                {stat.value}{stat.suffix}
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="services">
        <div className="section-header">
          <span className="section-tag">Servicios</span>
          <h2>Nuestros Servicios</h2>
          <p className="section-subtitle">Soluciones profesionales para cada necesidad</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section id="nosotros" className="why-us">
        <div className="section-header">
          <span className="section-tag">Por qué nosotros</span>
          <h2>¿Por qué elegir Yolisa?</h2>
          <p className="section-subtitle">Más de una década de experiencia nos avala</p>
        </div>
        <div className="why-us-grid">
          {whyUs.map((item, index) => (
            <div key={index} className="why-us-card">
              <div className="why-us-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="testimonials">
        <div className="section-header">
          <span className="section-tag">Opiniones</span>
          <h2>Lo que dicen nuestros clientes</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {Array(testimonial.rating).fill('★').join('')}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <span className="author-name">{testimonial.name}</span>
                  <span className="author-location">{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="contact">
        <div className="section-header">
          <span className="section-tag">Contacto</span>
          <h2>Hablemos</h2>
          <p className="section-subtitle">Estamos aquí para ayudarte</p>
        </div>
        <div className="contact-grid">
          <a href="tel:649136201" className="contact-card">
            <div className="contact-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3>Teléfono</h3>
            <p>649 136 201</p>
          </a>
          <a href="https://wa.me/34649136201" className="contact-card whatsapp" target="_blank" rel="noopener noreferrer">
            <div className="contact-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <h3>WhatsApp</h3>
            <p>Escríbenos directo</p>
          </a>
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3>Dirección</h3>
            <p>Av. Marqués de Molins, 03300<br/>Orihuela, Alicante</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
            </div>
            <h3>Horario</h3>
            <p>L - V: 9:00 - 20:00<br/>S-D: Cerrado</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <img src={logo} alt="Yolisa" className="footer-logo-img" />
          <p className="footer-tagline">Limpiezas Integrales Yolisa SL · CIF: B54765482</p>
          <p className="footer-address">Av. Marqués de Molins, 03300 Orihuela, Alicante</p>
          <div className="footer-links">
            <a href="tel:649136201">649 136 201</a>
            <span className="footer-divider">·</span>
            <a href="https://wa.me/34649136201" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
          <p className="copyright">© 2025 Yolisa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
