import { useState, useEffect } from 'react';

export default function TypingEffect({ 
  texts = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "AI/ML Enthusiast"],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        } else {
          // Finished typing, start pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="typing-text-container">
      <span className="gradient-text font-light">
        {currentText}
      </span>
      <span 
        className={`inline-block w-0.5 h-6 sm:h-8 md:h-10 bg-gradient-to-b from-purple-400 to-pink-400 ml-1 align-middle ${
          showCursor ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-100`}
        style={{ verticalAlign: 'middle' }}
      />
    </div>
  );
}