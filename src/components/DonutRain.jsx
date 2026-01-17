// DonutRain.jsx
import { useMemo } from 'react';
import donutImg from '../assets/donut-removebg-preview.png';

const DonutRain = () => {
  // Creamos 20 rosquillas
  const donuts = useMemo(() => 
    Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      animationDelay: `${Math.random() * 5}s`,
      width: `${Math.random() * 30 + 20}px`,
    })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {donuts.map((style, index) => (
        <img key={index} src={donutImg} className="donut opacity-80 pointer-events-none" style={style} alt="donut" />
      ))}
    </div>
  );
};

export default DonutRain;