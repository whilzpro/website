const projects = [
  {
    number: "01",
    title: "Above the Clouds",
    category: "Fashion editorial · Obudu, Nigeria",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1800&q=85",
    className: "project-large",
  },
  {
    number: "02",
    title: "Portraits in Presence",
    category: "Portraiture · People",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85",
    className: "",
  },
  {
    number: "03",
    title: "Form & Function",
    category: "Fashion · Campaign",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85",
    className: "",
  },
];

const services = [
  ["01", "Fashion & editorial", "Campaigns, lookbooks and visual stories."],
  ["02", "Commercial", "Images for brands, products and businesses."],
  ["03", "Portraits", "Personal, creative and professional portraits."],
  ["04", "Travel & hospitality", "Places, people and destination stories."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Whilzpro home">WHILZPRO<span>®</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">Start a project <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Independent photography & visual storytelling · Lagos, Nigeria</p>
          <h1>Photography for<br /><em>people, brands</em><br />and places.</h1>
          <div className="hero-bottom">
            <p>Creating considered images shaped by identity, atmosphere and the feeling of a moment.</p>
            <a className="text-link" href="#work">Explore selected work <span>↓</span></a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-image" role="img" aria-label="Fashion editorial placeholder image" />
          <div className="image-note"><span>SELECTED FRAME / 001</span><span>WHILZPRO VISUALS</span></div>
        </div>
        <div className="hero-index"><span>01 / 04</span><span>FASHION · PORTRAITURE · COMMERCIAL</span></div>
      </section>

      <section className="intro-strip">
        <p>Images with a point of view.</p>
        <p>Available for selected commissions and collaborations.</p>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">A selection of stories</p><h2>Selected <em>work.</em></h2></div>
          <p className="section-aside">A growing archive of people, clothing, places and ideas.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.className}`} key={project.number}>
              <div className={`project-image image-${project.number}`} style={{ backgroundImage: `url("${project.image}")` }}>
                <span className="project-number">{project.number}</span>
                <span className="project-arrow">↗</span>
              </div>
              <div className="project-meta"><div><h3>{project.title}</h3><p>{project.category}</p></div><span className="project-open">View story ↗</span></div>
            </article>
          ))}
        </div>
        <p className="placeholder-note">Preview imagery is temporary. Replace these with your own selected photographs before launch.</p>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="section-heading">
          <div><p className="eyebrow">What we do</p><h2>Made for the <em>brief.</em></h2></div>
          <p className="section-aside">A focused creative practice for brands, individuals and places.</p>
        </div>
        <div className="service-list">
          {services.map(([number, title, description]) => (
            <a className="service-row" href="#contact" key={number}>
              <span className="service-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="service-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="about-label"><p className="eyebrow">Behind the images</p><span>WHILZPRO / LAGOS</span></div>
        <div className="about-copy">
          <h2>Visual stories rooted in <em>feeling.</em></h2>
          <p>Whilzpro is the photography practice of Nigerian photographer Godswill, working across fashion, portraiture and visual storytelling. The work explores identity, movement, culture and human emotion through a calm, cinematic lens.</p>
          <a className="text-link" href="#contact">More about Whilzpro <span>↗</span></a>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <p className="eyebrow">Have a project in mind?</p>
        <h2>Let's make something<br /><em>worth looking at.</em></h2>
        <a className="contact-email" href="mailto:clients@whilzpro.com">clients@whilzpro.com <span>↗</span></a>
        <div className="contact-foot"><span>Lagos, Nigeria · Available worldwide</span><a href="https://www.instagram.com/whilzpro/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
      </section>

      <footer className="site-footer"><a className="wordmark" href="#home">WHILZPRO<span>®</span></a><p>Photography for people, brands and places.</p><span>© {new Date().getFullYear()} WHILZPRO</span></footer>
    </main>
  );
}