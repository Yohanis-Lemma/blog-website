import Link from "next/link";

export default function FutureOfTechnology() {
  return (
    <main>
      <article className="article-page">
        <Link className="back-link" href="/">
          ← Back to Home
        </Link>

        <header className="article-header">
          <p className="category">TECHNOLOGY</p>

          <h1>The Future of Technology</h1>

          <p className="article-date">August 7, 2026</p>
        </header>

        <div className="article-content">
          <p>
            Technology is changing the way we work, communicate, learn, and
            live.
          </p>

          <p>
            From artificial intelligence to cloud computing and modern web
            applications, technology continues to create new opportunities
            for individuals and businesses.
          </p>

          <h2>How Technology Is Changing Our World</h2>

          <p>
            New technologies are making it easier for people to connect,
            create, and solve complex problems. Businesses can now reach
            customers around the world and build powerful digital products
            faster than ever before.
          </p>

          <h2>The Role of Artificial Intelligence</h2>

          <p>
            Artificial intelligence is becoming an important part of modern
            technology. AI can help people analyze information, automate
            repetitive tasks, and discover new solutions to difficult
            problems.
          </p>

          <h2>Looking Toward the Future</h2>

          <p>
            The future will bring even more powerful tools that can help
            people solve problems faster and create new possibilities.
          </p>
        </div>

        <div className="article-footer">
          <Link className="back-link" href="/">
            ← Back to Home
          </Link>
        </div>
      </article>
    </main>
  );
}