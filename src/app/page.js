"use client";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import PropertyCard from "@/components/PropertyCard";

export default function Home() {
  const canvasRef = useRef(null);

  // Simulated properties
  const properties = [
    {
      id: "avant-garde-townhomes",
      idNumber: "01",
      collection: "WEST ALCOVE DEVELOPMENTS",
      title: "THE AVANT-GARDE TOWNHOMES",
      location: "NEW ZAYED",
      coordinates: "30°02'15.5\"N 30°58'42.1\"E",
      area: "420 SQM",
      materiality: "Travertine & Bronze",
      status: "Curated",
      delivery: "Q4 2027",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&auto=format"
    },
    {
      id: "the-monolith-estate",
      idNumber: "02",
      collection: "THE PLATEAU SERIES",
      title: "THE MONOLITH ESTATE",
      location: "6TH OF OCTOBER",
      coordinates: "29°58'34.2\"N 30°56'11.8\"E",
      area: "850 SQM",
      materiality: "Galala Marble & Glass",
      status: "Off-Market",
      delivery: "Q2 2026",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2000&auto=format"
    }
  ];

  useEffect(() => {
    // Atlas Canvas Simulation
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Custom cursor logic is handled by KineticCursor component globally
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={styles.videoWrapper}>
          <div className={styles.videoOverlay}></div>
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&auto=format" 
            alt="Hero Architectural Texture" 
            className={styles.heroVideo}
            referrerPolicy="no-referrer"
          />
        </div>
        <div className={styles.ticker}>
          [ 30.0131° N, 31.2089° E ] // ALTITUDE 110M
        </div>
      </section>

      <section className={styles.revealSection}>
        <div className={styles.editorialGrid}>
          <div className={styles.editorialLeft}>
            <h1 className={styles.headline}>
              We do not sell square meters.<br/>
              We curate the path of light<br/>
              through premium Egyptian limestone.
            </h1>
          </div>
          <div className={styles.editorialRight}>
            <p className="editorial-text">
              Wijha West represents a fundamental shift in Cairo's residential architecture. Moving away from homogeneous developments, we focus on spatial rhythm, geographic sincerity, and the tactile relationship between natural light and raw materiality.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.collectionsSection} id="collections">
        <div className={styles.sectionHeader}>
          <h2>Curated Objects</h2>
          <span className={styles.sectionMeta}>01 / Collections</span>
        </div>
        <div className={styles.propertiesGrid}>
          {properties.map(prop => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </section>

      <section className={styles.partners} id="partners">
        <h2 className="headline-secondary" data-interactive="true">Partners & Topography</h2>
        <div className={styles.partnerGrid}>
          <div className={styles.partnerCard} data-interactive="true" data-interactive-text="EXPLORE">
            <span className={styles.meta}>DEVELOPER</span>
            <h3>Studio Nūb</h3>
            <p>Architects of The Monolith Estate. Pioneers in brutalist minimalism and spatial gravity.</p>
          </div>
          <div className={styles.partnerCard} data-interactive="true" data-interactive-text="EXPLORE">
            <span className={styles.meta}>DEVELOPER</span>
            <h3>Mimar Elite</h3>
            <p>Curators of The Avant-Garde Townhomes. Blending Islamic geometry with contemporary flow.</p>
          </div>
          <div className={styles.partnerCard} data-interactive="true" data-interactive-text="EXPLORE">
            <span className={styles.meta}>REGION</span>
            <h3>New Zayed</h3>
            <p>The western expansion of luxury. High altitudes, immaculate air quality, and strict architectural zoning.</p>
          </div>
          <div className={styles.partnerCard} data-interactive="true" data-interactive-text="EXPLORE">
            <span className={styles.meta}>REGION</span>
            <h3>6th of October</h3>
            <p>The original desert plateau. Established communities with heritage and deep-rooted materiality.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
