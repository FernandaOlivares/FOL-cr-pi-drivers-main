import styles from './typewriterEffect.module.css';
import { useEffect, useState } from 'react';

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 200); // Velocidad de escritura (150 milisegundos)

    return () => clearInterval(interval);
  }, [text, currentIndex]);

  return <div className={styles.typewriterText}>{displayText}</div>;
};

export default TypewriterEffect;
