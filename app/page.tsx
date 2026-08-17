export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <a href="#home" className="logo">
            Health<span>Blog</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#articles">Articles</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main id="home">
        {/* Hero Section */}
        <section className="hero">
          <p className="hero-tag">HEALTH • WELLNESS • MEDICINE</p>

          <h1>Your Guide to Better Health</h1>

          <p className="hero-description">
            Discover reliable and easy-to-understand information about health,
            medicine, wellness, and healthy living.
          </p>

          <a href="#articles" className="hero-button">
            Explore Articles
          </a>
        </section>

        {/* Articles Section */}
        <section id="articles" className="articles-section">
          <div className="section-heading">
            <p>OUR LATEST CONTENT</p>

            <h2>Latest Health Articles</h2>

            <span>
              Explore useful information to help you understand and improve
              your health.
            </span>
          </div>

          <div className="articles">
            {/* Diabetes Article */}
            <article>
              <div className="article-icon">🩺</div>

              <h3>Understanding Diabetes</h3>

              <p>
                Learn about the causes, symptoms, prevention, and management
                of diabetes.
              </p>

              <a href="/articles/diabetes" className="read-more">
                Read More →
              </a>
            </article>

            {/* Anemia Article */}
            <article>
              <div className="article-icon">🩸</div>

              <h3>Understanding Anemia</h3>

              <p>
                Learn about the different types, causes, symptoms, and
                treatment of anemia.
              </p>

              <a href="/articles/anemia" className="read-more">
                Read More →
              </a>
            </article>

            {/* Healthy Living Article */}
            <article>
              <div className="article-icon">❤️</div>

              <h3>Healthy Living</h3>

              <p>
                Discover simple habits that can help you live a healthier,
                happier, and more active life.
              </p>

              <a href="/articles/healthy-living" className="read-more">
                Read More →
              </a>
            </article>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="about-content">
            <div>
              <p className="section-tag">ABOUT US</p>

              <h2>Health Information Made Simple</h2>

              <p>
                Health Blog is dedicated to sharing clear and useful information
                about health, medicine, wellness, and healthy living.
              </p>

              <p>
                Our goal is to make health topics easier to understand and
                encourage people to make informed decisions about their
                well-being.
              </p>
            </div>

            <div className="about-box">
              <h3>Our Mission</h3>

              <p>
                To provide accessible health education and promote healthier
                lifestyles through useful and understandable articles.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <h2>Stay Connected</h2>

          <p>
            Follow Health Blog for more articles, health information, and
            healthy living tips.
          </p>

          <a href="mailto:contact@healthblog.com" className="contact-button">
            Contact Us
          </a>
        </section>

        {/* Disclaimer */}
        <section className="disclaimer">
          <h3>Important Health Information</h3>

          <p>
            The information provided on this website is for educational purposes
            only and should not replace professional medical advice, diagnosis,
            or treatment. Always consult a qualified healthcare professional
            regarding your health.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <h2>
            Health<span>Blog</span>
          </h2>

          <p>Learn. Understand. Live Healthier.</p>

          <p className="copyright">
            © {currentYear} Health Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}