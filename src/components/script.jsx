import { useState, useEffect } from 'react';

function Star() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const nextStars = Array.from({ length: 120 }, () => {
      const size = Math.random() * 2.5 + 0.5;
      const minOpacity = Math.random() * 0.3 + 0.1;
      return {
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${Math.random() * 4 + 2}s`,
        delay: `${Math.random() * 4}s`,
        minOpacity,
      };
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStars(nextStars);
  }, []);

  return (
    <div className="stars">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            width: star.width,
            height: star.height,
            left: star.left,
            top: star.top,
            animationName: 'twinkle',
            animationDuration: star.duration,
            animationDelay: star.delay,
            animationIterationCount: 'infinite',
            opacity: star.minOpacity,
            '--min': star.minOpacity,
          }}
        />
      ))}
    </div>
  );
}

export default Star;