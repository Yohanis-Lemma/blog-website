export default function AnemiaArticle() {
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
          <p className="article-category">HEALTH • ANEMIA</p>

          <h1>Understanding Anemia</h1>

          <p className="article-intro">
            Anemia is a condition in which the blood does not have enough
            healthy red blood cells or hemoglobin to carry adequate oxygen to
            the body's tissues.
          </p>

          <section>
            <h2>What Is Anemia?</h2>

            <p>
              Red blood cells contain hemoglobin, a protein that carries oxygen
              from the lungs to different parts of the body. When hemoglobin
              levels or the number of healthy red blood cells is low, the body
              may not receive enough oxygen.
            </p>
          </section>

          <section>
            <h2>Common Causes of Anemia</h2>

            <ul>
              <li>Iron deficiency</li>
              <li>Vitamin B12 deficiency</li>
              <li>Folate deficiency</li>
              <li>Blood loss</li>
              <li>Chronic diseases</li>
              <li>Inherited blood disorders</li>
            </ul>
          </section>

          <section>
            <h2>Common Symptoms</h2>

            <ul>
              <li>Fatigue and weakness</li>
              <li>Pale skin</li>
              <li>Shortness of breath</li>
              <li>Dizziness or lightheadedness</li>
              <li>Headache</li>
              <li>Fast heartbeat</li>
            </ul>
          </section>

          <section>
            <h2>Prevention and Healthy Habits</h2>

            <p>
              Some forms of anemia can be prevented by maintaining a balanced
              diet and identifying underlying health problems early.
            </p>

            <ul>
              <li>Eat iron-rich foods</li>
              <li>Include foods containing vitamin B12 and folate</li>
              <li>Attend regular health checkups</li>
              <li>Seek medical advice for unusual or persistent symptoms</li>
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