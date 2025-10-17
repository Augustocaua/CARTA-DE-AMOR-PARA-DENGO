import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Tentar iniciar o áudio de fundo; se bloqueado, iniciar na primeira interação
const audio = document.getElementById("bg-audio") as HTMLAudioElement | null;
if (audio) {
  audio.play().catch(() => {
    const tryPlay = () => {
      audio.play().catch(() => {});
    };
    const opts: AddEventListenerOptions = { once: true, capture: true };
    // Listeners mais robustos para diferentes navegadores/dispositivos
    document.addEventListener("click", tryPlay, opts);
    document.addEventListener("touchstart", tryPlay, opts);
    document.addEventListener("pointerdown", tryPlay, opts);
    document.addEventListener("keydown", tryPlay, opts);
    // Quando a página ficar visível novamente, tentar reproduzir
    document.addEventListener(
      "visibilitychange",
      () => {
        if (document.visibilityState === "visible") tryPlay();
      },
      { once: true },
    );
    // Assim que o áudio puder tocar, tentar reproduzir
    audio.addEventListener("canplay", tryPlay, { once: true } as unknown as AddEventListenerOptions);
  });
}
