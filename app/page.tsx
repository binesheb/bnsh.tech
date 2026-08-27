const projects = [
  ["B.I.N.E.S.H. OS", "A modular operating ecosystem for automation, connected devices and intelligent systems."],
  ["Universal Scanner", "A flexible scanning platform designed for practical, everyday workflows."],
  ["Smart Parking", "Parking intelligence with occupancy awareness and predicted availability."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="mark" href="#top">BNSH</a>
        <div className="links">
          <a href="#projects">Projects</a>
          <a href="#lab">Lab</a>
          <a href="https://github.com/binesheb" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <p className="eyebrow">BNSH / INDEPENDENT TECHNOLOGY STUDIO</p>
        <h1>Ideas.<br />Systems.<br /><span>Reality.</span></h1>
        <p className="intro">BNSH explores the space between technology, design, automation and experimentation — turning useful ideas into systems that work.</p>
        <div className="actions">
          <a className="button primary" href="#projects">Explore projects</a>
          <a className="button" href="#lab">Enter the lab</a>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-heading">
          <p className="eyebrow">01 / PROJECTS</p>
          <h2>Things being built.</h2>
        </div>
        <div className="project-grid">
          {projects.map(([name, description], index) => (
            <article className="project" key={name}>
              <span>0{index + 1}</span>
              <h3>{name}</h3>
              <p>{description}</p>
              <a href="https://github.com/binesheb" target="_blank" rel="noreferrer">View on GitHub ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section id="lab" className="section lab">
        <div className="section-heading">
          <p className="eyebrow">02 / THE LAB</p>
          <h2>Work in progress.</h2>
        </div>
        <div className="terminal">
          <p><span>●</span> B.I.N.E.S.H. OS <b>ACTIVE</b></p>
          <p><span>○</span> COMPUTER VISION <b>EXPLORING</b></p>
          <p><span>○</span> AI AUTOMATION <b>BUILDING</b></p>
          <p><span>○</span> CONNECTED SYSTEMS <b>ONGOING</b></p>
        </div>
      </section>

      <footer>
        <div>
          <p className="eyebrow">BNSH.TECH</p>
          <h2>Built to evolve.</h2>
        </div>
        <a href="https://github.com/binesheb/bnsh.tech" target="_blank" rel="noreferrer">Open source ↗</a>
      </footer>
    </main>
  );
}
