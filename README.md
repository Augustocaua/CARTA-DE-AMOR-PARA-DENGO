# Minha Carta Para Você 💌

Projeto web feito com Vite + React + TypeScript, Tailwind CSS e componentes shadcn-ui. Ele exibe uma carta com decoração, polaroids e música de fundo.

## Requisitos

- Node.js 18+ e npm

## Como rodar

```sh
npm i
npm run dev
```

- O servidor inicia em `http://localhost:8080/`.

## Build e preview

```sh
npm run build
npm run preview
```

## Estrutura

- `public/` — arquivos estáticos (imagens e áudio). O favicon está em `public/favicon.png`, e a música em `public/eu-amo-voce.mp3`.
- `src/pages/` — páginas principais (`Index.tsx`, `Letter.tsx`).
- `src/components/` — componentes visuais como Envelope, corações/pétalas, etc.

## Personalização

- Plano de fundo e imagens: adicione/edite arquivos em `public/` e referencie-os nas páginas.
- Áudio: substitua `public/eu-amo-voce.mp3` e, se quiser, ajuste autoplay/fallback em `src/main.tsx`.
- Favicon: atualize `public/favicon.png` e as tags no `index.html`.

## Licença

Uso pessoal/educacional. Ajuste conforme sua necessidade.
