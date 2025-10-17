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
    window.addEventListener("click", tryPlay, { once: true });
    window.addEventListener("touchstart", tryPlay, { once: true });
  });
}
