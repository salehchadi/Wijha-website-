"use client";
import { useEffect, useState } from "react";
import styles from "./KineticCursor.module.css";

export default function KineticCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target.closest("a, button, [data-interactive='true']");
      if (target) {
        setIsHovering(true);
        if (target.dataset.interactiveText) {
          setHoverText(target.dataset.interactiveText);
        } else {
          setHoverText("VIEW");
        }
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <div 
      className={`${styles.cursor} ${isHovering ? styles.hover : ""}`} 
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)` }}
    >
      <div className={styles.dot}></div>
      {isHovering && hoverText && <span className={styles.text}>{hoverText}</span>}
    </div>
  );
}
