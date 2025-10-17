import FallingPetals from "@/components/FallingPetals";
import { useEffect } from "react";

const Letter = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-[var(--gradient-romantic)]" />
      <div className="fixed inset-0 bg-[var(--gradient-glow)]" />
      
      <FallingPetals />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-2xl animate-fade-in">
          {/* Paper effect */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-12 romantic-glow">
            {/* Header decoration */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </div>
            
            {/* Letter content */}
            <div className="space-y-6 text-foreground/90">
              <h1 className="text-4xl sm:text-5xl text-center mb-8 text-primary">
                Minha Carta Para Você
              </h1>
              
              <div className="space-y-4 text-base sm:text-lg leading-relaxed font-body font-light">
                <p className="first-letter:text-5xl first-letter:font-romantic first-letter:text-primary first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                  Há momentos na vida em que as palavras parecem pequenas demais para expressar o que sentimos.
                  Este é um desses momentos.
                </p>
                
                <p>
                  Cada dia ao seu lado é um presente que guardo com carinho no coração.
                  Seus sorrisos iluminam meus dias, sua voz acalma minhas tempestades,
                  e sua presença faz tudo fazer sentido.
                </p>
                
                <p>
                  Quero que saiba que você é especial de um jeito único, de um jeito que palavras
                  nunca conseguirão descrever completamente. Mas vou tentar, todos os dias,
                  mostrar o quanto você significa para mim.
                </p>
                
                <p className="text-center italic text-xl mt-8 mb-4 font-romantic text-primary">
                  Você é meu verso favorito em cada poema.
                </p>
                
                <p className="text-center">
                  Com todo o amor do mundo,
                </p>
                
                <p className="text-center font-romantic text-2xl text-primary mt-4">
                  Seu coração apaixonado 💕
                </p>
              </div>
            </div>
            
            {/* Footer decoration */}
            <div className="flex justify-center mt-12">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
