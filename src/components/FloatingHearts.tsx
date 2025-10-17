import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    const heartCount = 15;
    const generatedHearts = Array.from({ length: heartCount }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${3 + Math.random() * 2}s`,
    }));
    setHearts(generatedHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute animate-heart-float fill-primary text-primary opacity-70"
          style={{
            left: heart.left,
            bottom: "-10vh",
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            width: `${20 + Math.random() * 20}px`,
            height: `${20 + Math.random() * 20}px`,
          }}
          strokeWidth={0}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
