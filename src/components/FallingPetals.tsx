import { useEffect, useState } from "react";

const FallingPetals = () => {
  const [petals, setPetals] = useState<Array<{ id: number; left: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    const petalCount = 20;
    const generatedPetals = Array.from({ length: petalCount }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${8 + Math.random() * 4}s`,
    }));
    setPetals(generatedPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-fall"
          style={{
            left: petal.left,
            top: "-10vh",
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        >
          <div 
            className="w-3 h-3 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 blur-[1px]"
            style={{
              width: `${8 + Math.random() * 8}px`,
              height: `${8 + Math.random() * 8}px`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FallingPetals;
