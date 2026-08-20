import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div>
          <h1 className="site-title">
            Health<span>Blog</span>
          </h1>

          <p className="site-description">
            Follow Health Blog for more articles, health information, and
            healthy living tips.
          </p>
        </div>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/about">About</Link>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <p className="hero-label">WELCOME TO HEALTH BLOG</p>

        <h2>Health Information for a Better Life</h2>

        <p>
          Discover helpful health information, articles, wellness tips, and
          resources for healthier living.
        </p>

        <a href="#contact" className="contact-us-button">
          Contact Us
        </a>
      </section>

      <section className="articles">
        <h2>Latest Articles</h2>

        <article className="blog-card">
          <div>
            <p className="category">HEALTH</p>

            <h3>
              <Link href="/posts/future-of-technology">
                Health Information and Healthy Living
              </Link>
            </h3>

            <p>
              Explore useful health information and learn more about maintaining
              a healthy lifestyle.
            </p>

            <Link
              className="read-more"
              href="/posts/future-of-technology"
            >
              Read the full article →
            </Link>
          </div>
        </article>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact">
        <h2>Contact & Book a Consultation</h2>

        <p>
          Have questions? Contact me directly or book a consultation at a
          convenient time.
        </p>

        <div className="contact-links">

          <a
            href="tel:+25149405424"
            className="contact-button"
          >
            📞 Call Me
            <span>+251 494 05424</span>
          </a>

          <a
            href="https://wa.me/25149405424"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            💬 WhatsApp Me
          </a>

          <a
            href="mailto:yohanislemma2017@gmail.com"
            className="contact-button"
          >
            ✉️ Email Me
          </a>

          <a
            href="https://calendar.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button booking-button"
          >
            📅 Book a Health Consultation
          </a>

        </div>
      </section>
    </main>
  );
}