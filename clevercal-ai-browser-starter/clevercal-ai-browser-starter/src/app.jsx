const navLinks = [
  { label: "Produkt", href: "#products" },
  { label: "Philosophie", href: "#science" },
  { label: "Stimmen", href: "#voices" },
  { label: "Kontakt", href: "#cta" }
];

const features = [
  {
    icon: "🔄",
    title: "Circadian Stacking",
    copy: "Drei Phasen passen sich deinem 24h-Rhythmus an und modulieren Energie, Fokus und Regeneration im richtigen Moment."
  },
  {
    icon: "🧪",
    title: "Klinisch dosierte Wirkstoffe",
    copy: "Laborgeprüfte Aminos, Adaptogene und Elektrolyte in pharmagerechter Bioverfügbarkeit – ohne Füllstoffe."
  },
  {
    icon: "📡",
    title: "Sensor Ready",
    copy: "rythm3 synchronisiert sich mit deiner Wearable-Data, um individuelle Mikronährstoff-Impulse zu steuern."
  }
];

const products = [
  {
    phase: "Phase 01",
    name: "Dawn Charge",
    description: "Aktiviert Cortisol & Dopamin sanft für einen fokussierten Start ohne Crash.",
    benefits: ["B-Vitamin-Komplex", "Adaptogen-Komplex aus Rhodiola & L-Theanin", "Bioverfügbares Magnesium"],
    price: "€38"
  },
  {
    phase: "Phase 02",
    name: "Flow Sustain",
    description: "Stabile Energie & Mood Support für den intensiven Tagesabschnitt.",
    benefits: ["Precision Aminos", "Elektrolyt-Balance", "Natürliche Koffein-Mikrodosierung"],
    price: "€42"
  },
  {
    phase: "Phase 03",
    name: "Night Restore",
    description: "Schlaf- & Recovery-Komplex für tiefere REM- und Delta-Phasen.",
    benefits: ["GABA & Glycin", "Ashwagandha KSM-66", "Melatonin-Matrix 0,5 mg"],
    price: "€44"
  }
];

const testimonials = [
  {
    quote:
      "Ich habe viele Booster getestet – rythm3 ist das erste System, das meinen Puls und meine Schlafwerte gleichzeitig optimiert.",
    name: "Mara Keller",
    role: "Functional Fitness Athletin"
  },
  {
    quote:
      "Der Flow Sustain Blend hält mich stundenlang im Fokus. Keine Nervosität, kein Crash – einfach präzise Energie.",
    name: "Leon Bach",
    role: "Musikproduzent & Biohacker"
  },
  {
    quote:
      "Mein Team trackt HRV & Laktat. Mit Night Restore sehen wir messbar bessere Regeneration innerhalb von zwei Wochen.",
    name: "Coach Rivera",
    role: "Performance Coach"
  }
];

const Header = () => (
  <header className="header">
    <a href="#home" className="brand">
      <img src="./assets/rythm3-logo.svg" alt="rythm3" />
      <span>nutritional rhythm engineering</span>
    </a>
    <nav>
      {navLinks.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
    <div className="header-actions">
      <a href="#journal" className="link">Journal</a>
      <button>Shop öffnen</button>
    </div>
  </header>
);

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-copy">
      <span className="eyebrow">rythm3 essentials</span>
      <h1>Supplements, die mit deinem Rhythmus atmen.</h1>
      <p>
        Wir kombinieren Chronobiologie, Neurochemie und adaptives Tracking zu einem dreistufigen Supplement-System.
        Entwickelt in Zürich, getestet von High Performern weltweit.
      </p>
      <div className="cta-group">
        <button>Shop Essentials</button>
        <a className="ghost" href="#science">
          Formel entdecken
        </a>
      </div>
      <div className="metrics">
        <div>
          <strong>24h</strong>
          <span>Synchronisierte Wirkzyklen</span>
        </div>
        <div>
          <strong>+18%</strong>
          <span>Ø HRV-Boost im Beta-Test</span>
        </div>
        <div>
          <strong>0%</strong>
          <span>Künstliche Zusätze</span>
        </div>
      </div>
    </div>
    <div className="hero-visual">
      <div className="capsule"></div>
      <div className="orbit"></div>
      <div className="glow"></div>
    </div>
  </section>
);

const FeatureSection = () => (
  <section className="section" id="features">
    <header className="section-head">
      <span className="eyebrow">Warum rythm3?</span>
      <h2>Design für Menschen, die Leistung fühlen statt messen.</h2>
    </header>
    <div className="feature-grid">
      {features.map((feature) => (
        <article key={feature.title} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.copy}</p>
        </article>
      ))}
    </div>
  </section>
);

const ProductShowcase = () => (
  <section className="section product-section" id="products">
    <div className="section-head">
      <span className="eyebrow">Drei Phasen. Ein Rhythmus.</span>
      <h2>Das modulare Supplement-System.</h2>
      <p>
        Kombiniere die Phasen oder abonniere das komplette Stack – jede Komponente ist einzeln dosierbar und laborkontrolliert.
      </p>
    </div>
    <div className="product-grid">
      {products.map((product) => (
        <article key={product.name} className="product-card">
          <span className="product-phase">{product.phase}</span>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <ul>
            {product.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
          <div className="product-footer">
            <span className="price">{product.price}</span>
            <button className="ghost">Details ansehen</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const ScienceSection = () => (
  <section className="section science" id="science">
    <div className="section-head">
      <span className="eyebrow">Philosophie</span>
      <h2>Wo Chronobiologie auf Performance trifft.</h2>
      <p>
        rythm3 wird zusammen mit Sportwissenschaftler:innen und Neurowissenschaftler:innen entwickelt. Jedes Batch ist transparent
        rückverfolgbar – von der Quelle bis zum Laborbericht.
      </p>
    </div>
    <div className="science-grid">
      <article className="science-card">
        <h3>01 — Diagnostics</h3>
        <p>Blutwerte, HRV und Schlafdaten formen deinen individuellen Supplement-Pfad.</p>
      </article>
      <article className="science-card">
        <h3>02 — Formulation</h3>
        <p>Wirkstoffe werden nach Tageszeit clustert, um Peaks und Plateaus präzise auszubalancieren.</p>
      </article>
      <article className="science-card">
        <h3>03 — Integration</h3>
        <p>App-Sync & Wearable-APIs liefern Mikro-Adjustments für deinen Alltag und Zyklus.</p>
      </article>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="section testimonials" id="voices">
    <div className="section-head">
      <span className="eyebrow">Stimmen aus der Community</span>
      <h2>Validiert von Menschen mit hohem Takt.</h2>
    </div>
    <div className="testimonial-grid">
      {testimonials.map((testimonial) => (
        <figure key={testimonial.name} className="testimonial-card">
          <blockquote>“{testimonial.quote}”</blockquote>
          <figcaption>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);

const CTASection = () => (
  <section className="section closing" id="cta">
    <div className="cta-card">
      <span className="eyebrow">Ready, Set, Sync</span>
      <h2>Bring deinen Körper in seinen natürlichen Takt.</h2>
      <p>
        Sichere dir Early-Access auf das abonnementbasierte rythm3-System mit exklusiven Coachings und Wearable-Integrationen.
      </p>
      <div className="cta-group">
        <button>Early Access sichern</button>
        <a className="ghost" href="mailto:hello@rythm3.com">
          Mit Expert:in sprechen
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <img src="./assets/rythm3-logo.svg" alt="rythm3" />
        <p>rythm3 entwickelt intelligente Supplement-Zyklen für Menschen mit hohen Anforderungen.</p>
      </div>
      <div className="footer-links">
        <div>
          <h4>Explore</h4>
          <a href="#features">Features</a>
          <a href="#products">Produkte</a>
          <a href="#voices">Community</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="mailto:support@rythm3.com">Support@rythm3.com</a>
          <a href="#journal">Journal</a>
          <a href="#">Impressum</a>
        </div>
        <div>
          <h4>Follow</h4>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>
      </div>
    </div>
    <p className="footer-meta">© {new Date().getFullYear()} rythm3 labs. All rights reserved.</p>
  </footer>
);

const App = () => (
  <div className="page">
    <Header />
    <main>
      <Hero />
      <FeatureSection />
      <ProductShowcase />
      <ScienceSection />
      <TestimonialSection />
      <CTASection />
    </main>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
