import styles from "./PropertyCard.module.css";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function PropertyCard({ property }) {
  return (
    <Link 
      href={`/property/${property.id}`}
      className={styles.card}
      data-interactive="true"
      data-interactive-text={property.coordinates}
    >
      <div className={styles.imageFrame}>
        <div className={styles.parallaxWrapper}>
          <img 
            src={property.image} 
            alt={property.title}
            className={styles.image}
            referrerPolicy="no-referrer"
          />
        </div>
        <button 
          className={styles.favBtn} 
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); alert("Saved to collections"); }}
          data-interactive="true"
          data-interactive-text="SAVE"
        >
          <Heart size={20} strokeWidth={1} />
        </button>
      </div>
      <div className={styles.metadata}>
        <div className={styles.topRow}>
          <span className={styles.id}>{property.idNumber} // {property.collection}</span>
          <span className={styles.coords}>[ {property.coordinates} ]</span>
        </div>
        <h3 className={styles.title}>{property.title} // {property.location}</h3>
        
        <div className={styles.specsGrid}>
          <div className={styles.spec}>
            <span className={styles.label}>Area:</span> {property.area}
          </div>
          <div className={styles.spec}>
            <span className={styles.label}>Materiality:</span> {property.materiality}
          </div>
          <div className={styles.spec}>
            <span className={styles.label}>Status:</span> {property.status}
          </div>
          <div className={styles.spec}>
            <span className={styles.label}>Delivery:</span> {property.delivery}
          </div>
        </div>
      </div>
    </Link>
  );
}
