import React, { useState } from 'react';
import './App.css';
import page1 from './assets/page_000.png';
import page2 from './assets/page_001.png';
import page3 from './assets/page_002.png';
import page4 from './assets/page_003.png';

const services = [
  {
    icon: '🏠',
    title: 'Viviendas',
    description: 'Limpieza a fondo de hogares con productos profesionales y atención al detalle.'
  },
  {
    icon: '🏢',
    title: 'Comunidades',
    description: 'Zonas comunes, portales, escaleras y garajes. Resultados impecables.'
  },
  {
    icon: '🛍️',
    title: 'Locales Comerciales',
    description: 'Tu negocio siempre presentable. Scheduling flexible según tus necesidades.'
  },
  {
    icon: '🎪',
    title: 'Eventos',
    description: 'Limpieza post-evento. Bodas, fiestas, celebraciones y actos corporativos.'
  },
  {
    icon: '🏛️',
    title: 'Fachadas',
    description: 'Recuperamos el aspecto de tu edificio con limpieza profesional de exteriores.'
  },
  {
    icon: '🛒',
    title: 'Cocheras',
    description: 'Eliminamos grasa, manchas y polvo. Garajes impecables garantizados.'
  }
];

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const images = [page1, page2, page3, page4];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">
          <span className="logo-text">YOLISA</span>
        </div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('inicio')}>Inicio</button></li>
          <li><button onClick={() => scrollToSection('servicios')}>Servicios</button></li>
          <li><button onClick={() => scrollToSection('galeria')}>Galería</button></li>
          <li><button onClick={() => scrollToSection('nosotros')}>Nosotros</button></li>
          <li><button onClick={() => scrollToSection('contacto')}>Contacto</button></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h1>Limpiezas Integrales<br/>Yolisa</h1>
          <p className="tagline">Profesionales que cuidan lo que más importa.<br/>Resultados impecables en cada servicio.</p>
          <div className="hero-buttons">
            <a href="tel:649136201" className="btn-primary">Llamar ahora</a>
            <a href="https://wa.me/34649136201" className="btn-secondary" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">5/5</span>
              <span className="stat-label">Valoración</span>
            </div>
            <div className="stat">
              <span className="stat-value">+10</span>
              <span className="stat-label">Años</span>
            </div>
            <div className="stat">
              <span className="stat-value">100%</span>
              <span className="stat-label">Garantía</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="services">
        <h2>Nuestros Servicios</h2>
        <p className="section-subtitle">Soluciones profesionales para cada necesidad</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="gallery">
        <h2>Documentación</h2>
        <p className="section-subtitle">Documentos y certificaciones de la empresa</p>
        <div className="gallery-container">
          <div className="gallery-main">
            <img src={images[currentImage]} alt={`Documento ${currentImage + 1}`} />
          </div>
          <div className="gallery-thumbs">
            {images.map((img, index) => (
              <button
                key={index}
                className={`thumb ${currentImage === index ? 'active' : ''}`}
                onClick={() => setCurrentImage(index)}
              >
                <img src={img} alt={`Miniatura ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="about">
        <h2>Sobre Nosotros</h2>
        <div className="about-content">
          <p>
            <strong>Limpiezas Integrales Yolisa SL</strong> es una empresa consolidada en Orihuela 
            y toda la provincia de Alicante. Desde nuestra fundación, hemos apostado por la 
            profesionalidad, la puntualidad y los resultados impecables.
          </p>
          <p>
            Nuestro equipo está formado por profesionales comprometidos con la satisfacción 
            del cliente. Cada servicio es una oportunidad para demostrar nuestra dedicación 
            al trabajo bien hecho.
          </p>
          <div className="about-grid">
            <div className="about-card">
              <span className="card-icon">📍</span>
              <h4>Ubicación</h4>
              <p>Av. Marqués de Molins, 03300 Orihuela, Alicante</p>
            </div>
            <div className="about-card">
              <span className="card-icon">🏢</span>
              <h4>Empresa</h4>
              <p>Limpiezas Integrales Yolisa SL<br/>CIF: B54765482</p>
            </div>
            <div className="about-card">
              <span className="card-icon">🕐</span>
              <h4>Horario</h4>
              <p>Lunes - Viernes<br/>9:00 - 20:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="contact">
        <h2>Contacto</h2>
        <p className="section-subtitle">Estamos aquí para ayudarte</p>
        <div className="contact-grid">
          <a href="tel:649136201" className="contact-card">
            <span className="contact-icon">📞</span>
            <h3>Teléfono</h3>
            <p>649 136 201</p>
          </a>
          <a href="https://wa.me/34649136201" className="contact-card" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon">💬</span>
            <h3>WhatsApp</h3>
            <p>Escríbenos directo</p>
          </a>
          <div className="contact-card">
            <span className="contact-icon">📍</span>
            <h3>Dirección</h3>
            <p>Av. Marqués de Molins, 03300<br/>Orihuela, Alicante</p>
          </div>
          <div className="contact-card">
            <span className="contact-icon">⏰</span>
            <h3>Horario</h3>
            <p>L - V: 9:00 - 20:00<br/>S-D: Cerrado</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">YOLISA</div>
          <p>Limpiezas Integrales Yolisa SL · CIF: B54765482</p>
          <p>Av. Marqués de Molins, 03300 Orihuela, Alicante</p>
          <p className="copyright">© 2025 Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default App;