import styles from "./page.module.css";
import Link from "next/link";

export default function About() {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className="headline-primary">Architecting<br/>The West.</h1>
          <p className="editorial-text">Wijha West is an exclusive curation portal dedicated to the most monumental architectural developments in West Cairo. We bridge the gap between visionary developers and discerning collectors of living spaces.</p>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.missionLeft}>
          <h2 className="headline-secondary">Our Curatorial Philosophy</h2>
        </div>
        <div className={styles.missionRight}>
          <p>
            We do not simply list properties; we curate architecture. Our team of architectural directors meticulously selects developments that adhere to our strict standards of materiality, flow, and integration with the surrounding topography. 
          </p>
          <p>
            From the deep limestone cuts of The Avant-Garde Townhomes to the sheer glass facades of The Monolith Estate, every project featured on Wijha West is a testament to structural integrity and timeless design.
          </p>
        </div>
      </section>

      <section className={styles.team}>
        <h2 className="headline-secondary">The Directors</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format" alt="Director 1" referrerPolicy="no-referrer" />
            <h3>Omar Khufu</h3>
            <span className={styles.role}>Head of Curation</span>
          </div>
          <div className={styles.teamMember}>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format" alt="Director 2" referrerPolicy="no-referrer" />
            <h3>Laila Mimar</h3>
            <span className={styles.role}>Architectural Liaison</span>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.contactBox}>
          <h2 className="headline-secondary">Begin a Dialogue</h2>
          <p className="editorial-text">Connect with our directors to discuss private acquisitions or list your master-planned space.</p>
          <div className={styles.actions}>
            <Link href="/list" className={styles.primaryBtn} data-interactive="true">LIST YOUR SPACE</Link>
            <a href="mailto:curation@wijhawest.com" className={styles.secondaryBtn} data-interactive="true">curation@wijhawest.com</a>
          </div>
        </div>
      </section>
    </main>
  );
}
