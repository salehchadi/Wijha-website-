"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function ListSpace() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={styles.container}>
      <div className={styles.editorialLeft}>
        <div className={styles.stickyContent}>
          <span className={styles.meta}>CURATION PORTAL</span>
          <h1 className={styles.headline}>List Your Space</h1>
          <p className="editorial-text">
            Wijha West accepts only the most exceptional properties into our curated collections. 
            Submit your architectural details below for appraisal by our curation directors.
          </p>
        </div>
      </div>
      <div className={styles.formRight}>
        {submitted ? (
          <div className={styles.successMessage}>
            <h2>Submission Received</h2>
            <p>Our architectural directors will review your dossier and contact you shortly.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Owner Identity</label>
              <input type="text" placeholder="Full Name" required />
            </div>
            
            <div className={styles.formGroup}>
              <label>Correspondence</label>
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>Compound / Topography</label>
                <input type="text" placeholder="e.g. The Plateau Series" required />
              </div>
              <div className={styles.formGroup}>
                <label>Area (SQM)</label>
                <input type="number" placeholder="0" required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Materiality & Architectural Notes</label>
              <textarea rows={4} placeholder="Describe the structural and material integrity of the space..." required></textarea>
            </div>

            <button type="submit" className={styles.submitBtn} data-interactive="true" data-interactive-text="SUBMIT">
              Submit Dossier
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
