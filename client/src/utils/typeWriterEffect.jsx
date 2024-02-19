import styles from './typewriterEffect.module.css';
import { useEffect, useState } from 'react';

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState(['']); // Iniciar con una línea vacía
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        if (text[currentIndex] === ':') {
          setDisplayText(prevLines => [...prevLines, '']); // Agregar una nueva línea
        } else {
          setDisplayText(prevLines => {
            const lastLineIndex = prevLines.length - 1;
            const updatedLines = [...prevLines];
            updatedLines[lastLineIndex] += text[currentIndex];
            return updatedLines;
          });
        }
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 70); // Velocidad de escritura (70 milisegundos)

    return () => clearInterval(interval);
  }, [text, currentIndex]);

  useEffect(() => {
    // Agregar la primera línea inicialmente
    if (text.length > 0 && displayText.length === 0) {
      setDisplayText(['']);
    }
  }, [text]);

  return (
    <div className={styles.typewriterText}>
      {displayText.map((line, index) => (
        <div key={index}>
          {line}
          {currentIndex === text.length && index === displayText.length - 1 && (
            <span className={styles.cursor}></span> // Aplicar clase del cursor
          )}
        </div>
      ))}
    </div>
  );
};

export default TypewriterEffect;
