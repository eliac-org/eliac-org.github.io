export const metadata = {
  title: "ELIAC",
  description: "European Lineal Acelerator Challenge:",
};

export default function Home() {
  return (
    <div className="app-root">
      <header className="top-nav" aria-label="site navigation">
        <nav>
          <ul className="nav-list">
            <li>
              <a className="nav-link"
                href="https://innova-physics-upv.github.io"
                target="_blank"
                rel="noopener noreferrer">
                About us
              </a>
            </li>
            <li><a className="nav-link"  href="NormativaEliac.pdf" target="_blank" rel="noopener noreferrer ">Handbook</a></li>
          </ul>
        </nav>
      </header>

      <main className="content" role="main">
        <div className="site-grid">
          <h1>ELIAC</h1>
          <h2>European Linear Accelerator Challenge</h2>
          <div className="cta-wrap">
            <button className="cta" disabled>Enroll</button>
          </div>
        </div>
      </main>
    </div>
  );
}
