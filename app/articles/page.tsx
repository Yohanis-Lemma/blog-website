export default function ArticlesPage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <a href="/" className="logo">
            Health<span>Blog</span>
          </a>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/articles">Articles</a>
            <a href="/#about">About</a>
            <a href="/#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main className="all-articles-page">
        {/* Page Header */}
        <section className="articles-hero">
          <p className="hero-tag">HEALTH • WELLNESS • MEDICINE</p>

          <h1>All Health Articles</h1>

          <p>
            Explore our collection of easy-to-understand articles about health,
            medicine, wellness, and healthy living.
          </p>
        </section>

        {/* Articles Grid */}
        <section className="all-articles-section">
          <div className="articles">
            {/* Diabetes */}
            <article>
              <div className="article-icon">🩺</div>

              <p className="article-label">HEALTH & MEDICINE</p>

              <h3>Understanding Diabetes</h3>

              <p>
                Learn about diabetes, including its causes, symptoms, common
                types, prevention, and healthy lifestyle habits.
              </p>

              <a href="/articles/diabetes" className="read-more">
                Read Full Article →
              </a>
            </article>

            {/* Anemia */}
            <article>
              <div className="article-icon">🩸</div>

              <p className="article-label">HEALTH & MEDICINE</p>

              <h3>Understanding Anemia</h3>

              <p>
                Learn about anemia, its common causes, symptoms, prevention,
                and the importance of proper diagnosis and treatment.
              </p>

              <a href="/articles/anemia" className="read-more">
                Read Full Article →
              </a>
            </article>

            {/* Healthy Living */}
            <article>
              <div className="article-icon">❤️</div>

              <p className="article-label">HEALTH & WELLNESS</p>

              <h3>Healthy Living</h3>

              <p>
                Discover simple and practical habits that can support your
                physical health, mental well-being, and overall quality of life.
              </p>

              <a href="/articles/healthy-living" className="read-more">
                Read Full Article →
              </a>
            </article>
          </div>
        </section>

        {/* Back Home */}
        <section className="articles-bottom">
          <h2>Want to Explore More?</h2>

          <p>
            We will continue adding more useful articles about health, medicine,
            wellness, and healthy living.
          </p>

          <a href="/" className="back-home">
            ← Back to Home
          </a>
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