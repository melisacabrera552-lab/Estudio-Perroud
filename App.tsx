import React, { useState } from 'react';
import { 
  Scale, 
  MessageCircle, 
  Gavel, 
  Handshake, 
  Users, 
  Home, 
  Briefcase, 
  Building2, 
  UserPlus, 
  FileText, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Menu,
  X
} from 'lucide-react';
import { ValueProp, PracticeArea } from './types';

// --- Data ---

const valueProps: ValueProp[] = [
  {
    icon: Gavel,
    title: "Análisis Riguroso",
    description: "Estudio exhaustivo de cada detalle para construir una defensa sólida y estratégica."
  },
  {
    icon: Handshake,
    title: "Asesoramiento Estratégico",
    description: "Orientación clara y soluciones prácticas, pensadas para la tranquilidad de nuestros clientes."
  },
  {
    icon: Scale,
    title: "Gestión Transparente",
    description: "Comunicación constante y procesos eficientes para una experiencia legal sin incertidumbres."
  }
];

const practiceAreas: PracticeArea[] = [
  {
    icon: Users,
    title: "Derecho de Familia",
    description: "Asesoramiento integral en divorcios, cuotas alimentarias, régimen de comunicación y filiaciones."
  },
  {
    icon: Home,
    title: "Derecho Patrimonial",
    description: "Gestión de sucesiones, reclamos por daños y perjuicios, y la redacción y revisión de contratos."
  },
  {
    icon: Briefcase,
    title: "Derecho Laboral",
    description: "Defensa en despidos, accidentes laborales (ART), regularización de trabajo y conflictos gremiales."
  },
  {
    icon: Building2,
    title: "Civil y Comercial",
    description: "Asistencia en ejecuciones, cobranzas, amparos y defensa del consumidor."
  },
  {
    icon: UserPlus,
    title: "Derecho Previsional",
    description: "Tramitación y seguimiento de jubilaciones y pensiones, así como reajustes de haberes."
  },
  {
    icon: FileText,
    title: "Derecho Tributario",
    description: "Defensas fiscales, asesoramiento impositivo especializado y gestión de moratorias."
  }
];

// --- Components ---

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/95 backdrop-blur-sm border-b border-background-alt">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 text-primary">
          <div className="size-8 text-primary flex items-center justify-center">
            <Scale className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <h2 className="text-text-dark text-lg font-bold font-display leading-tight tracking-[-0.015em] hidden sm:block">
            Estudio Jurídico Perroud
          </h2>
          <h2 className="text-text-dark text-lg font-bold font-display leading-tight tracking-[-0.015em] sm:hidden">
            EJ Perroud
          </h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#hero" className="text-text-dark text-sm font-body hover:text-primary transition-colors font-medium">Inicio</a>
          <a href="#areas" className="text-text-dark text-sm font-body hover:text-primary transition-colors font-medium">Áreas de Práctica</a>
          <a href="#nosotros" className="text-text-dark text-sm font-body hover:text-primary transition-colors font-medium">Sobre Nosotros</a>
        </nav>

        <div className="flex gap-3 items-center">
          <a href="#contacto" className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary-hover transition-colors text-white text-sm font-bold font-sans leading-normal tracking-[0.015em]">
            <span className="truncate">Contactar</span>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-background-alt hover:bg-background-light text-text-dark gap-2 text-sm font-bold font-sans leading-normal tracking-[0.015em] px-3">
            <MessageCircle className="w-5 h-5" />
          </a>
           {/* Mobile Menu Button */}
           <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-light border-b border-background-alt p-4 flex flex-col gap-4 shadow-lg animate-fade-in-up">
           <a href="#hero" onClick={() => setIsMenuOpen(false)} className="text-text-dark text-base font-body py-2 border-b border-gray-100">Inicio</a>
           <a href="#areas" onClick={() => setIsMenuOpen(false)} className="text-text-dark text-base font-body py-2 border-b border-gray-100">Áreas de Práctica</a>
           <a href="#nosotros" onClick={() => setIsMenuOpen(false)} className="text-text-dark text-base font-body py-2 border-b border-gray-100">Sobre Nosotros</a>
           <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-primary font-bold font-sans py-2">Solicitar Consulta</a>
        </div>
      )}
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section 
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[600px] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 44, 62, 0.85), rgba(26, 44, 62, 0.85)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtvONXLJ_ojxZKmRtYq8Wkvoa1ZQox0AIA_42JA2bnsuvX4Wp3-8R0CbDdgKBufJCLqdLeIUcGqAxsZLnLpTp9hnKlSJ_Lkb4qMehgXz_gGE4TgzPN_iS4CE-cYo5Q07KLdnKDnjqofufCyAoPxcX71mvZsHxjms_Q--amdTCOiH2kRu-AsCq0u3tNUq87rvkEbv4VrSLCrCr1bRGXxKOxAn_gTdQowvPonQZtJo1qBW6HQCJEUYCX6nuDao6CRSCBQtiVaYbaupQ")`
      }}
    >
      <div className="max-w-[960px] px-4 py-20 text-center flex flex-col gap-6 animate-fade-in-up">
        <h1 className="text-white text-4xl font-display font-bold leading-tight tracking-[-0.033em] md:text-5xl md:leading-[1.2]">
          Soluciones Legales con Visión Estratégica en Santa Rosa, La Pampa
        </h1>
        <h2 className="text-white/80 text-lg font-body leading-relaxed max-w-[720px] mx-auto">
          Nuestro compromiso es con la excelencia y la comprensión profunda de cada caso, ofreciendo asesoramiento experto en Familia, Laboral y Sucesiones.
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <a href="#contacto" className="flex items-center justify-center rounded-lg h-12 px-8 bg-accent text-primary hover:bg-accent/90 transition-colors text-base font-bold font-sans tracking-[0.015em] shadow-lg">
            SOLICITAR CONSULTA EXPERTA
          </a>
          <a href="#areas" className="flex items-center justify-center rounded-lg h-12 px-8 border-2 border-white text-white hover:bg-white/10 transition-colors text-base font-bold font-sans tracking-[0.015em]">
            Explorar Áreas de Práctica
          </a>
        </div>
      </div>
    </section>
  );
};

const ValueProposition: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-10 bg-background-light">
      <div className="max-w-[1080px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center items-center">
          <h2 className="text-primary font-display text-[32px] font-bold leading-tight md:text-4xl">
            Nuestra Propuesta de Valor
          </h2>
          <p className="text-text-light font-body text-lg max-w-[720px]">
            Ofrecemos claridad y soluciones estratégicas, abordando cada desafío legal con la rigurosidad y el enfoque que su caso merece.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4 p-6 rounded-xl border border-background-alt shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="size-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2">
                <prop.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-text-dark font-display text-xl font-bold mb-2">{prop.title}</h3>
                <p className="text-text-light font-body">{prop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PracticeAreas: React.FC = () => {
  return (
    <section id="areas" className="py-20 px-4 md:px-10 bg-background-alt">
      <div className="max-w-[1080px] mx-auto flex flex-col gap-12">
        <div className="text-center md:text-left border-l-4 border-accent pl-6">
          <h2 className="text-primary font-display text-[32px] font-bold leading-tight tracking-[-0.015em]">Áreas de Práctica</h2>
          <p className="text-text-light font-body mt-2 text-lg">Nuestra experiencia en diversas ramas del derecho, enfocada en resultados.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Grid of Areas */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {practiceAreas.map((area, index) => (
              <div key={index} className="group flex flex-col gap-4 p-6 rounded-xl bg-white shadow-sm border border-transparent hover:border-accent/30 hover:shadow-md transition-all">
                <div className="size-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
                  <area.icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-text-dark font-display text-lg font-bold">{area.title}</h3>
                  <p className="text-text-light font-body text-sm leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Highlight Box */}
          <div className="md:col-span-4 bg-primary text-white p-8 rounded-xl shadow-lg flex flex-col gap-6 self-start">
            <h3 className="font-display text-xl font-bold border-b border-accent/50 pb-4">Conocimiento Profundo</h3>
            <p className="font-body text-white/90 text-sm leading-relaxed">
              En Estudio Jurídico Perroud, no solo gestionamos casos; nos dedicamos a la comprensión profunda de cada área del derecho para ofrecer estrategias innovadoras y sólidas. Nuestra prioridad es su tranquilidad, respaldada por un análisis jurídico de alta calidad.
            </p>
            <ul className="list-disc list-inside text-white/80 text-sm font-body space-y-2">
              <li>Análisis detallado de cada expediente.</li>
              <li>Estrategias personalizadas para maximizar resultados.</li>
              <li>Actualización constante en legislación vigente.</li>
              <li>Comunicación transparente y efectiva.</li>
            </ul>
            <a href="#contacto" className="inline-flex items-center justify-center rounded-lg h-12 px-8 bg-accent hover:bg-accent/90 text-primary text-base font-bold font-sans transition-colors shadow-md mt-4">
              Plantear mi Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 px-4 md:px-10 bg-background-light">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-primary font-display text-[32px] font-bold leading-tight">Sobre Nosotros</h2>
            <h3 className="text-text-dark font-display text-xl font-medium">Liderazgo y experiencia en el ámbito legal de La Pampa</h3>
            <div className="text-text-light font-body flex flex-col gap-4 leading-relaxed">
              <p>
                En Estudio Jurídico Perroud, nos distinguimos por la combinación de una vasta experiencia legal con un enfoque metodológico riguroso y humano. Entendemos que cada situación legal es única y requiere una comprensión profunda de sus complejidades.
              </p>
              <p>
                Nuestra misión es posicionarnos como referentes en Santa Rosa y toda la provincia de La Pampa, ofreciendo asesoramiento estratégico y soluciones legales de vanguardia que no solo resuelven conflictos, sino que también anticipan desafíos futuros y protegen los intereses de nuestros clientes con la máxima diligencia y confidencialidad.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4 text-primary font-body font-semibold">
              <MapPin className="w-5 h-5" />
              <span>Santa Rosa, La Pampa</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-auto md:h-[400px]">
              <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCXgihn1T2QwpkknwenwVLRthDJSQYC44bz37pWcEwaD27V5IQin7EDHm7Q41Nr7jVdxF9FYMi76J3jP4_yPvvn_IKVAL5te4xQzZlkxLnsebCKUgrD-V_CPjXgC7wilkl6bYOuHUw5DvIYC3-WncTJw2lNymLuWBdeOmxKIgmFhtaf1zxnaYE-CpyesKCjmQ2kizQ8KjcmEzbkuihGPxhSsZrqsnh5MateN010pNapE8gjuNOdCe5zi7trtbFwXpc14-Gm4NClDY" 
                alt="Equipo de abogados reunido" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuoteSection: React.FC = () => {
  return (
    <section className="bg-primary py-12 px-4">
      <div className="max-w-[800px] mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Gavel className="text-accent/50 w-10 h-10" />
        </div>
        <blockquote className="font-display text-2xl md:text-3xl text-white italic leading-relaxed">
          "Nuestra reputación se basa en la integridad, el conocimiento profundo del derecho y el compromiso inquebrantable con la confidencialidad de cada caso."
        </blockquote>
      </div>
    </section>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-20 px-4 md:px-10 bg-background-alt">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-primary font-display text-[32px] font-bold mb-4">Sección de Contacto</h2>
          <p className="text-text-light font-body text-lg">Su consulta es el primer paso hacia una solución efectiva. Estamos aquí para guiarlo.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Info Side */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-background-alt">
              <h3 className="text-lg font-display font-bold text-text-dark mb-4">Información de Contacto</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <Phone className="text-accent mt-1 w-5 h-5" />
                  <div>
                    <p className="text-xs text-text-light uppercase font-sans font-bold tracking-wider">Teléfono</p>
                    <p className="text-text-dark font-body font-medium">+54 2954 12-3456</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-accent mt-1 w-5 h-5" />
                  <div>
                    <p className="text-xs text-text-light uppercase font-sans font-bold tracking-wider">Email</p>
                    <p className="text-text-dark font-body font-medium">contacto@estudioperroud.com.ar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-accent mt-1 w-5 h-5" />
                  <div>
                    <p className="text-xs text-text-light uppercase font-sans font-bold tracking-wider">Horarios</p>
                    <p className="text-text-dark font-body font-medium">Lunes a Viernes: 8:00 - 17:00 hs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-accent mt-1 w-5 h-5" />
                  <div>
                    <p className="text-xs text-text-light uppercase font-sans font-bold tracking-wider">Dirección</p>
                    <p className="text-text-dark font-body font-medium">Av. San Martín 123, Santa Rosa, La Pampa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div 
              className="h-[250px] w-full rounded-xl overflow-hidden shadow-sm bg-background-alt relative group cursor-pointer"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4LOKgzBfGzWWMVjXDgWmsjr9yrG33FrCXSBmO3D6mKNPTbPQEJ1G97AlpBNHZajSxsBgsviaAQWUPNYGId3S0dLMbtO7fNCpK2AmrO4shHYF2eIHHroqhGvs44D4c8oWKzlYw9oaKcPyR2YcAhuXl_M7daZTuUA48EVltm6QlznDMZUSJkN7qsnUxAG_UuCgul2FkUJg5VO6ticJ2MR47Cz7P9cXAMYDhG3IeRgwK7kKCg0Go3jQItRnxyR70LF1TO06Nu7eObbg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors"></div>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded text-xs font-bold shadow text-text-dark">Ver en Google Maps</div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-accent order-1 lg:order-2">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-sans font-semibold text-text-dark">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full rounded-lg border-background-alt border bg-background-light/50 px-3 py-2 focus:border-primary focus:ring-primary h-11 text-text-dark outline-none transition-all"
                  placeholder="Tu nombre" 
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm font-sans font-semibold text-text-dark">Teléfono / WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full rounded-lg border-background-alt border bg-background-light/50 px-3 py-2 focus:border-primary focus:ring-primary h-11 text-text-dark outline-none transition-all"
                  placeholder="Ej: 2954 123456" 
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="subject" className="text-sm font-sans font-semibold text-text-dark">Asunto</label>
                <select 
                  id="subject"
                  className="w-full rounded-lg border-background-alt border bg-background-light/50 px-3 py-2 focus:border-primary focus:ring-primary h-11 text-text-dark outline-none transition-all"
                >
                  <option>Consulta General</option>
                  <option>Familia</option>
                  <option>Laboral</option>
                  <option>Sucesiones</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-sm font-sans font-semibold text-text-dark">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full rounded-lg border-background-alt border bg-background-light/50 px-3 py-2 focus:border-primary focus:ring-primary p-3 text-text-dark outline-none transition-all"
                  placeholder="Breve descripción de tu caso..." 
                ></textarea>
              </div>
              <button 
                type="button" 
                className="mt-2 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary hover:bg-primary-hover text-white text-base font-bold font-sans transition-all shadow-md active:transform active:scale-95"
              >
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-white py-10 px-4 border-t border-primary">
      <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <Scale className="text-secondary w-6 h-6" />
          <span className="font-bold font-display text-lg">Estudio Jurídico Perroud</span>
        </div>
        <div className="text-sm text-white/70 font-sans text-center md:text-right">
          <p>© 2023 Estudio Jurídico Perroud. Todos los derechos reservados.</p>
          <p className="mt-1">Diseño web accesible y profesional.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <PracticeAreas />
        <AboutUs />
        <QuoteSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Chat en WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-transform cursor-pointer group"
      >
        <MessageCircle className="text-white w-8 h-8" />
        <span className="absolute right-full mr-3 bg-white text-text-dark text-xs font-bold py-1 px-2 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-sans">
          ¡Escríbenos!
        </span>
      </a>
    </div>
  );
}