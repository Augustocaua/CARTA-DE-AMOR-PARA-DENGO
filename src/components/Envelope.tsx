import { Heart } from "lucide-react";

const Envelope = () => {
  return (
    <div className="relative w-64 h-48 animate-float">
      {/* Envelope body */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-50 rounded-lg shadow-lg overflow-hidden romantic-glow">
        {/* Envelope flap */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-primary/10 to-secondary/10 clip-envelope-flap border-b-2 border-primary/20"></div>
        
        {/* Heart seal */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-accent blur-lg opacity-50 rounded-full"></div>
            <Heart 
              className="relative w-12 h-12 fill-accent text-accent drop-shadow-lg" 
              strokeWidth={0}
            />
          </div>
        </div>
        
        {/* Decorative lines */}
        <div className="absolute bottom-8 left-8 right-8 space-y-2">
          <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"></div>
          <div className="h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent rounded-full w-3/4 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Envelope;
