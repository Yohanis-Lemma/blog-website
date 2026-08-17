export default function DiabetesArticle() {
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
          <p className="article-category">
            HEALTH • DIABETES
          </p>

          <h1>Understanding Diabetes</h1>

          <p className="article-intro">
            Diabetes is a chronic health condition that affects how your body
            uses glucose, also known as blood sugar.
          </p>

          <section>
            <h2>What Is Diabetes?</h2>

            <p>
              Diabetes occurs when the body cannot properly regulate the
              amount of glucose in the blood. Glucose is an important source
              of energy for the body's cells.
            </p>

            <p>
              Insulin, a hormone produced by the pancreas, helps move glucose
              from the bloodstream into the cells where it can be used for
              energy.
            </p>
          </section>

          <section>
            <h2>Types of Diabetes</h2>

            <h3>Type 1 Diabetes</h3>

            <p>
              Type 1 diabetes occurs when the immune system attacks the
              insulin-producing cells of the pancreas. People with Type 1
              diabetes require insulin treatment.
            </p>

            <h3>Type 2 Diabetes</h3>

            <p>
              Type 2 diabetes occurs when the body becomes resistant to
              insulin or does not produce enough insulin to maintain normal
              blood glucose levels.
            </p>

            <h3>Gestational Diabetes</h3>

            <p>
              Gestational diabetes develops during pregnancy and requires
              monitoring to protect the health of both the mother and baby.
            </p>
          </section>

          <section>
            <h2>Common Symptoms</h2>

            <ul>
              <li>Increased thirst</li>
              <li>Frequent urination</li>
              <li>Increased hunger</li>
              <li>Unexplained weight loss</li>
              <li>Fatigue</li>
              <li>Blurred vision</li>
            </ul>
          </section>

          <section>
            <h2>Prevention and Healthy Living</h2>

            <p>
              Some cases of Type 2 diabetes may be prevented or delayed
              through healthy lifestyle choices.
            </p>

            <ul>
              <li>Maintain a healthy body weight</li>
              <li>Eat a balanced and nutritious diet</li>
              <li>Exercise regularly</li>
              <li>Limit highly processed foods and sugary drinks</li>
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