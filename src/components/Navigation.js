"use client";
import { useState, useEffect } from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";
import { Search } from "lucide-react";
import SearchOverlay from "./SearchOverlay";
import AuthOverlay from "./AuthOverlay";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [inquireOpen, setInquireOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Cairo',
          hour: '2-digit',
          minute: '2-digit',
        });
        setTime(formatter.format(new Date()));
      } catch (e) {
        setTime("12:00 PM"); // fallback
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.left}>
          <Link href="/" className={styles.brand}>WIJHA WEST</Link>
          <div className={styles.meta}>Cairo {time} / 34°C</div>
        </div>
        
        <nav className={styles.center}>
          <button onClick={() => setSearchOpen(true)} className={styles.navBtn} data-interactive="true">
            <Search size={14} className={styles.navIcon} /> SEARCH
          </button>
          <Link href="/about" data-interactive="true">ABOUT US</Link>
          <Link href="/#collections" data-interactive="true">COLLECTIONS</Link>
          <Link href="/list" data-interactive="true" className={styles.highlightLink}>LIST SPACE</Link>
          <button onClick={() => setAuthOpen(true)} className={styles.navBtn} data-interactive="true">
            CLIENT PORTAL
          </button>
        </nav>

        <div className={styles.right}>
          <button 
            className={styles.inquireBtn}
            onClick={() => setInquireOpen(!inquireOpen)}
            data-interactive="true"
            data-interactive-text={inquireOpen ? "CLOSE" : "INQUIRE"}
          >
            {inquireOpen ? "Close [X]" : "Inquire [Aperture Menu]"}
          </button>
        </div>
      </header>

      {/* Blueprint Split Menu overlay */}
      <div className={`${styles.apertureMenu} ${inquireOpen ? styles.open : ""}`}>
        <div className={styles.apertureLeft}>
          <div className={styles.architecturalDrawing}></div>
        </div>
        <div className={styles.apertureRight}>
          <div className={styles.inquireContent}>
            <h2>Private Curation Portal</h2>
            <p className="editorial-text">Connect with our architectural directors to arrange a private viewing of exclusive developments in West Cairo.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Identity" required />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="Correspondence" required />
              </div>
              <button className={styles.submitBtn} data-interactive="true" data-interactive-text="SUBMIT">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Search Overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      {/* Auth Overlay */}
      <AuthOverlay isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
