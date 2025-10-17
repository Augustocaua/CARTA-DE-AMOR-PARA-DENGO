// Removido ícone de coração; inseriremos uma foto estilo polaroid

const Envelope = () => {
  return (
    <div className="relative w-64 h-48">
      {/* Envelope body */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-50 rounded-lg shadow-lg overflow-hidden romantic-glow">
        {/* Envelope flap */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-primary/10 to-secondary/10 clip-envelope-flap border-b-2 border-primary/20"></div>
        
        {/* Polaroid photo replacing the heart seal */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-white rounded-xl shadow-xl romantic-glow p-2 w-28 sm:w-32 -rotate-3">
            <img
              src="/dia%2017%201.jpeg"
              alt="Dia 17"
              className="w-full h-28 sm:h-32 object-cover rounded-md"
            />
            <div className="mt-1 text-center text-xs text-foreground font-romantic">Dia 17</div>
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
