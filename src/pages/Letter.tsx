import FallingPetals from "@/components/FallingPetals";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Letter = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("bg-audio") as HTMLAudioElement | null;
    if (!audio) return;
    const syncState = () => setIsPlaying(!audio.paused);
    audio.addEventListener("play", syncState);
    audio.addEventListener("pause", syncState);
    audio.addEventListener("ended", syncState);
    audio.addEventListener("canplay", syncState);
    syncState();
    return () => {
      audio.removeEventListener("play", syncState);
      audio.removeEventListener("pause", syncState);
      audio.removeEventListener("ended", syncState);
      audio.removeEventListener("canplay", syncState);
    };
  }, []);

  const toggleSound = async () => {
    const audio = document.getElementById("bg-audio") as HTMLAudioElement | null;
    if (!audio) return;
    if (audio.paused) {
      try {
        const AC = (window as any).AudioContext || (window as any).webkitAudioContext;
        if (AC) {
          const ctx = new AC();
          await ctx.resume().catch(() => {});
        }
        await audio.play();
      } catch (_) {}
    } else {
      try {
        audio.pause();
      } catch (_) {}
    }
  };

  const polaroids = [
    { src: "/dengo/Imagem do WhatsApp de 2025-10-17 à(s) 01.03.45_715f524e-convertido-de-jpg.jpeg" },
    { src: "/dengo/Imagem do WhatsApp de 2025-10-17 à(s) 01.03.46_1504b9e3-convertido-de-jpg.jpeg" },
    { src: "/dengo/Imagem do WhatsApp de 2025-10-17 à(s) 01.03.46_e9b7b488-convertido-de-jpg.jpeg" },
    { src: "/dengo/Imagem do WhatsApp de 2025-10-17 à(s) 01.03.47_36ae3b08-convertido-de-jpg.jpeg" },
    { src: "/dengo/Imagem do WhatsApp de 2025-10-17 à(s) 01.05.27_8f721708-convertido-de-jpg.jpeg" },
  ];
  const overlayPolaroids = polaroids.slice(0, 4);
  const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];
  const overlayPositions = [
    { top: "3%", left: "3%" },
    { top: "85%", left: "4%" },
    { top: "0.5%", left: "82%" },
    { top: "85%", left: "80%" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-[var(--gradient-romantic)]" />
      <div className="fixed inset-0 bg-[var(--gradient-glow)]" />
      
      <FallingPetals />

      {/* Polaroids na frente, menores e posicionadas nos cantos/laterais */}
      <div className="absolute inset-0 pointer-events-none z-30 hidden sm:block">
        {overlayPolaroids.map((p, idx) => (
          <div
            key={idx}
            className={`absolute bg-white rounded-xl shadow-xl romantic-glow p-2 w-24 sm:w-28 ${rotations[idx % rotations.length]}`}
            style={{ top: overlayPositions[idx].top, left: overlayPositions[idx].left }}
          >
            <img
              src={encodeURI(p.src)}
              alt={`Dengo ${idx + 1}`}
              className="w-full h-24 sm:h-28 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
      
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
                 
             Oi amor eu desenvolvir essa carta virtual para desejar e expressar meu imenso amor e carinho que tenho por você, hoje a gente completa 1 ano e 10 meses e esse mês  no dia 21 fazemos 2 anos que  a gente foi selados  no mesmo dia 🥹.
                💞💞💞💞💞💞💞💞💞💞💞💞💞💞💞💞💞💞💞💞💞💞

                </p>
                
                <p>
                  que dia lindo e glorioso, onde não pude só sentir meu amor por você mais sim que Deus está com a gente e como sua virtude e glória é sobre nossas vidas 🥹, mas que uma ligação  carnal mas sim uma ligação espiritual, onde eu possa dizer com fé e certeza que Deus está no nosso relacionamento 🙌❤‍🔥❤‍🔥❤‍🔥❤🥹. 
                  Feliz dia 17 amor te amo muito( é tô sendo fofo aiai👀). 
                </p>
                
           
                
                {/* Imagem divisória (linha 80) */}
                <div className="flex justify-center my-6">
                  <div className="bg-white rounded-xl shadow-xl romantic-glow p-2 w-24 sm:w-28 -rotate-1">
                    <img
                      src={encodeURI(polaroids[4].src)}
                      alt=""
                      className="w-full h-24 sm:h-28 object-cover rounded-md"
                    />
                  </div>
                </div>
                <p className="text-center text-xl mt-8 mb-4 font-romantic text-primary">
                 É isso amor, minha narizinho, eu quero viver sempre ao seu lado, a chama do meu coração que sempre está acesa ao suas chamas do seu coração ❤‍🔥.
                   Você é minha rosa de saron😍, meu mana do céu 🥰 minha virtuosa. 
                   minha morena linda, meu dengo ♡♡♡♡♡♡♡.

                </p>
                <p>
                  meu dengo, Eu amo cada segundo que passamos juntos💘, esses 1 ano e 10 meses foram espetaculares para minha vida💕, eu amo amar cada sorriso seu,
                   olhar nos seus olhos e ver uma das vistas mais belas que um homem poderia ver, ouvir sua voz linda que excede felicidade e um tom suave, não ache sua voz feia porque é uma das virtudes mais lindas que eu já ouvir  e cada vez mais faz eu ficar apaixonado 😍, Eu te amo  minha futura esposa 💍💞
                </p>
                <p className="text-center">
                Feliz dia 17🫶💕
Feliz nosso dia 💕💕💕💕"
                </p>
                
                <p className="text-center font-romantic text-2xl text-primary mt-4">
                  Seu Mômô apaixonado 💕
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

      {/* Botão de ativar/desativar som (fixo, mobile-friendly) */}
      <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center sm:bottom-6">
        <Button
          onClick={toggleSound}
          size="lg"
          className="px-6 py-4 rounded-full shadow-lg bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          {isPlaying ? "Desativar som 🔇" : "Ativar som 🔊"}
        </Button>
      </div>
    </div>
  );
};

export default Letter;
