"use client";
import styles from "./SearchOverlay.module.css";
import { X } from "lucide-react";

export default function AuthOverlay({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`}>
      <button className={styles.closeBtn} onClick={onClose} data-interactive="true" data-interactive-text="CLOSE">
        <X size={32} strokeWidth={1} />
      </button>

      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Client Portal</h2>
          <p className="editorial-text">Access your curated collections and architectural briefs.</p>
        </div>

        <div className={styles.form}>
          <div className={styles.filterGroup}>
            <label>Correspondence</label>
            <input type="email" placeholder="Email Address" className={styles.inputField} />
          </div>
          <div className={styles.filterGroup}>
            <label>Security Key</label>
            <input type="password" placeholder="Password" className={styles.inputField} />
          </div>

          <button className={styles.submitBtn} data-interactive="true" data-interactive-text="LOGIN" onClick={onClose}>
            Authenticate
          </button>
        </div>
      </div>
    </div>
  );
}
