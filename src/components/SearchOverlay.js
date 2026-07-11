"use client";
import { useState } from "react";
import styles from "./SearchOverlay.module.css";
import { X } from "lucide-react";

export default function SearchOverlay({ isOpen, onClose }) {
  const [propertyType, setPropertyType] = useState("Villa");
  const [location, setLocation] = useState("New Zayed");
  const [price, setPrice] = useState(50); // Millions EGP

  if (!isOpen) return null;

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`}>
      <button className={styles.closeBtn} onClick={onClose} data-interactive="true" data-interactive-text="CLOSE">
        <X size={32} strokeWidth={1} />
      </button>

      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Curated Search</h2>
          <p className="editorial-text">Filter our collection of master-planned architectures.</p>
        </div>

        <div className={styles.form}>
          <div className={styles.filterGroup}>
            <label>Property Type</label>
            <div className={styles.options}>
              {["Villa", "Twin House", "Townhouse", "Loft"].map(type => (
                <button 
                  key={type} 
                  className={propertyType === type ? styles.activeOption : styles.option}
                  onClick={() => setPropertyType(type)}
                  data-interactive="true"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <label>Location Topography</label>
            <div className={styles.options}>
              {["New Zayed", "6th of October", "North Coast", "New Cairo"].map(loc => (
                <button 
                  key={loc} 
                  className={location === loc ? styles.activeOption : styles.option}
                  onClick={() => setLocation(loc)}
                  data-interactive="true"
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <label>Investment Range: Up to {price}M EGP</label>
            <input 
              type="range" 
              min="5" 
              max="200" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              className={styles.slider}
              data-interactive="true"
              data-interactive-text="DRAG"
            />
          </div>

          <button className={styles.submitBtn} data-interactive="true" data-interactive-text="SEARCH" onClick={onClose}>
            View Matches
          </button>
        </div>
      </div>
    </div>
  );
}
