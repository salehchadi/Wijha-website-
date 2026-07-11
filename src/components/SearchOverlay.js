"use client";
import { useState, useMemo } from "react";
import styles from "./SearchOverlay.module.css";
import { X } from "lucide-react";
import { allProperties } from "../data/properties";
import PropertyCard from "./PropertyCard";

export default function SearchOverlay({ isOpen, onClose }) {
  const [propertyType, setPropertyType] = useState("All");
  const [location, setLocation] = useState("All");
  const [price, setPrice] = useState(100); // Millions EGP

  const filteredProperties = useMemo(() => {
    return allProperties.filter(p => {
      const typeMatch = propertyType === "All" || p.type === propertyType || (propertyType === "Twin House" && p.type === "Twinhouse");
      const locMatch = location === "All" || p.location === location;
      const priceMatch = (p.price / 1000000) <= price;
      return typeMatch && locMatch && priceMatch;
    });
  }, [propertyType, location, price]);

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

        <div className={styles.splitLayout}>
          <div className={styles.form}>
            <div className={styles.filterGroup}>
              <label>Property Type</label>
              <div className={styles.options}>
                {["All", "Villa", "Twin House", "Townhouse", "Apartment"].map(type => (
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
                {["All", "New Zayed", "6th of October", "Sheikh Zayed"].map(loc => (
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
          </div>
          
          <div className={styles.resultsArea}>
            <div className={styles.resultsHeader}>
              <h3>{filteredProperties.length} Properties Match Your Criteria</h3>
            </div>
            <div className={styles.resultsGrid}>
              {filteredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
