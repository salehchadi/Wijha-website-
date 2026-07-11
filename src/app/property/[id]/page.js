"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { useParams } from "next/navigation";

// Simulated database
const db = {
  "avant-garde-townhomes": {
    title: "THE AVANT-GARDE TOWNHOMES",
    collection: "WEST ALCOVE DEVELOPMENTS",
    location: "NEW ZAYED",
    description: "An uncompromising exploration of light and mass. The Avant-Garde Townhomes utilize raw Travertine and deep bronze accents to create a living space that feels carved from the desert itself. Our architects designed every angle to capture the precise quality of West Cairo's golden hour.",
    architect: "Studio Nūb",
    completion: "Q4 2027",
    blueprint: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format",
    simulations: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format", // Dawn
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format", // Noon
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&auto=format", // Dusk
    ],
    specs: {
      "Stone Origin": "Galala Limestone",
      "Structural Insulation": "R-30 Aerogel infused",
      "Smart Protocol": "KNX Standard",
      "Glazing": "Low-E Triple Pane",
    }
  },
  "the-monolith-estate": {
    title: "THE MONOLITH ESTATE",
    collection: "THE PLATEAU SERIES",
    location: "6TH OF OCTOBER",
    description: "A testament to monumental living. The Monolith Estate rises from the plateau with sheer verticality and unbroken planes of glass, reflecting the sky and the surrounding desert ecology.",
    architect: "Mimar Elite",
    completion: "Q2 2026",
    blueprint: "https://images.unsplash.com/photo-1498622872324-7f15431b99df?w=1200&auto=format",
    simulations: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&auto=format",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&auto=format",
    ],
    specs: {
      "Stone Origin": "Aswan Granite",
      "Structural Insulation": "R-35 Vacuum Panels",
      "Smart Protocol": "Control4 Central",
      "Glazing": "Acoustic Double Glazing",
    }
  }
};

export default function PropertyDetail() {
  const { id } = useParams();
  const property = db[id] || db["avant-garde-townhomes"];
  const [timeValue, setTimeValue] = useState(50);
  
  // Financial Calculator State
  const [downPaymentPct, setDownPaymentPct] = useState(10);
  const [installmentYears, setInstallmentYears] = useState(8);
  const propertyPrice = 15000000; // Simulated base price
  const downPaymentValue = propertyPrice * (downPaymentPct / 100);
  const remainingValue = propertyPrice - downPaymentValue;
  const monthlyInstallment = remainingValue / (installmentYears * 12);

  const getOpacities = () => {
    if (timeValue <= 50) {
      const noonOpacity = timeValue / 50;
      return [1 - noonOpacity, noonOpacity, 0];
    } else {
      const duskOpacity = (timeValue - 50) / 50;
      return [0, 1 - duskOpacity, duskOpacity];
    }
  };

  const opacities = getOpacities();

  return (
    <main className={styles.dossier}>
      <div className={styles.leftPane}>
        <div className={styles.blueprintWrapper}>
          <img src={property.blueprint} alt="Blueprint" className={styles.blueprintImg} referrerPolicy="no-referrer" />
          <div className={styles.blueprintOverlay}></div>
        </div>
      </div>

      <div className={styles.rightPane}>
        <div className={styles.content}>
          <header className={styles.header}>
            <span className={styles.meta}>{property.collection} // {property.location}</span>
            <h1 className={styles.title}>{property.title}</h1>
          </header>

          <section className={styles.narrative}>
            <p className="editorial-text">{property.description}</p>
          </section>

          <section className={styles.simulationSection}>
            <h3 className={styles.sectionTitle}>Environmental Simulation</h3>
            <div className={styles.simulationFrame}>
              {property.simulations.map((src, idx) => (
                <img 
                  key={idx}
                  src={src} 
                  alt={`Simulation ${idx}`} 
                  className={styles.simImg}
                  style={{ opacity: opacities[idx] }}
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className={styles.sliderControl}>
              <span className={styles.timeLabel}>06:00 Oasis Dawn</span>
              <input 
                type="range" 
                min="0" max="100" 
                value={timeValue} 
                onChange={(e) => setTimeValue(e.target.value)} 
                className={styles.slider}
                data-interactive="true"
                data-interactive-text="DRAG"
              />
              <span className={styles.timeLabel}>18:00 Desert Dusk</span>
            </div>
          </section>

          <section className={styles.specsSection}>
            <h3 className={styles.sectionTitle}>Specification Grid</h3>
            <div className={styles.specsTable}>
              {Object.entries(property.specs).map(([key, value]) => (
                <div className={styles.specRow} key={key}>
                  <div className={styles.specKey}>{key}</div>
                  <div className={styles.specValue}>{value}</div>
                </div>
              ))}
              <div className={styles.specRow}>
                <div className={styles.specKey}>Architect</div>
                <div className={styles.specValue}>{property.architect}</div>
              </div>
              <div className={styles.specRow}>
                <div className={styles.specKey}>Delivery</div>
                <div className={styles.specValue}>{property.completion}</div>
              </div>
            </div>
          </section>

          <section className={styles.financialSection}>
            <h3 className={styles.sectionTitle}>Financial Structure</h3>
            <div className={styles.calculator}>
              <div className={styles.calcHeader}>
                <div className={styles.priceTotal}>
                  <span className={styles.calcLabel}>Estimated Value</span>
                  <span className={styles.priceValue}>{(propertyPrice / 1000000).toFixed(1)}M EGP</span>
                </div>
              </div>

              <div className={styles.calcControls}>
                <div className={styles.calcGroup}>
                  <div className={styles.calcRow}>
                    <span className={styles.calcLabel}>Down Payment ({downPaymentPct}%)</span>
                    <span className={styles.calcAmount}>{(downPaymentValue / 1000000).toFixed(2)}M EGP</span>
                  </div>
                  <input 
                    type="range" min="0" max="100" step="5" 
                    value={downPaymentPct} 
                    onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                    className={styles.slider}
                    data-interactive="true" data-interactive-text="DRAG"
                  />
                </div>

                <div className={styles.calcGroup}>
                  <div className={styles.calcRow}>
                    <span className={styles.calcLabel}>Installment Period ({installmentYears} Years)</span>
                  </div>
                  <input 
                    type="range" min="1" max="10" step="1" 
                    value={installmentYears} 
                    onChange={(e) => setInstallmentYears(Number(e.target.value))}
                    className={styles.slider}
                    data-interactive="true" data-interactive-text="DRAG"
                  />
                </div>
              </div>

              <div className={styles.calcResult}>
                <div className={styles.resultBox}>
                  <span className={styles.calcLabel}>Monthly Installment</span>
                  <span className={styles.installmentValue}>{Math.round(monthlyInstallment).toLocaleString()} EGP</span>
                </div>
                <button className={styles.actionBtn} data-interactive="true" data-interactive-text="REQUEST">
                  Request Plan
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
