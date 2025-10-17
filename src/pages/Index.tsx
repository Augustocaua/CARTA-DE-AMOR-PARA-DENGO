import { Button } from "@/components/ui/button";
import Envelope from "@/components/Envelope";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleOpenLetter = () => {
    navigate("/carta");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-[var(--gradient-romantic)]" />
      <div className="fixed inset-0 bg-[var(--gradient-glow)]" />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-12 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl text-primary drop-shadow-lg">
              Você tem uma carta especial
            </h1>
            <p className="text-2xl sm:text-3xl text-muted-foreground font-body font-light">
              te esperando...
            </p>
          </div>
          
          <Envelope />
          
          <Button
            onClick={handleOpenLetter}
            size="lg"
            className="text-xl px-8 py-6 animate-pulse-soft romantic-shine bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 romantic-glow"
          >
            Abrir meu coração 💖
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
