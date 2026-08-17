import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div>
          <h1 className="site-title">My Blog</h1>
          <p className="site-description">
            Ideas, technology, and stories for the modern world.
          </p>
        </div>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/posts/future-of-technology">Articles</Link>
        </nav>
      </header>

      <section className="hero">
        <p className="hero-label">WELCOME TO MY BLOG</p>

        <h2>Explore Ideas That Shape the Future</h2>

        <p>
          Discover articles about technology, innovation, artificial
          intelligence, and the changing digital world.
        </p>
      </section>

      <section className="articles">
        <h2>Latest Article</h2>

        <article className="blog-card">
          <div>
            <p className="category">TECHNOLOGY</p>

            <h3>
              <Link href="/posts/future-of-technology">
                The Future of Technology
              </Link>
            </h3>

            <p>
              Technology is changing the way we work, communicate, learn,
              and live. Discover how new technologies are creating new
              opportunities for individuals and businesses.
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
    </main>
  );
}