export default function HealthyLivingArticle() {
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
            <a href="/#articles">Articles</a>
            <a href="/#about">About</a>
            <a href="/#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main className="article-page">
        <article className="full-article">
          <p className="article-category">WELLNESS • HEALTHY LIVING</p>

          <h1>Healthy Living: Simple Habits for a Better Life</h1>

          <p className="article-intro">
            Healthy living does not always require dramatic changes. Small,
            consistent habits can make a meaningful difference to your physical
            and mental well-being.
          </p>

          <section>
            <h2>Eat a Balanced Diet</h2>

            <p>
              A balanced diet provides the body with the nutrients needed for
              energy, growth, and normal body function.
            </p>

            <ul>
              <li>Eat a variety of fruits and vegetables</li>
              <li>Choose nutritious sources of protein</li>
              <li>Include whole grains when possible</li>
              <li>Limit highly processed foods</li>
              <li>Reduce excessive sugary drinks</li>
            </ul>
          </section>

          <section>
            <h2>Stay Physically Active</h2>

            <p>
              Regular physical activity can support cardiovascular health,
              strengthen muscles, improve mood, and contribute to overall
              well-being.
            </p>
          </section>

          <section>
            <h2>Get Enough Sleep</h2>

            <p>
              Good sleep is important for physical recovery, concentration,
              memory, and emotional well-being. Creating a regular sleep
              routine can help improve sleep quality.
            </p>
          </section>

          <section>
            <h2>Manage Stress</h2>

            <p>
              Stress is a normal part of life, but long-term stress can affect
              overall health. Taking time to rest, exercise, connect with
              supportive people, and practice relaxation can be helpful.
            </p>
          </section>

          <section>
            <h2>Build Healthy Habits</h2>

            <p>
              The key to healthy living is consistency. Start with small,
              realistic changes and gradually build habits that you can
              maintain over time.
            </p>

            <ul>
              <li>Drink enough water</li>
              <li>Move your body regularly</li>
              <li>Eat nutritious foods</li>
              <li>Get adequate rest</li>
              <li>Attend regular health checkups</li>
            </ul>
          </section>

          <div className="article-warning">
            <strong>Important:</strong> This article provides general health
            information and does not replace professional medical advice,
            diagnosis, or treatment.
          </div>

          <a href="/#articles" className="back-home">
            ← Back to Articles
          </a>
        </article>
      </main>

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