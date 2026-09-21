function IntegranteCard({ nome, rm, imagem, cargo }) {
  return (
    <div className="flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 w-full max-w-[240px]">
      <img
        className="w-full max-w-50 sm:max-w-55 aspect-square rounded-xl object-cover border border-borda shadow-lg"
        src={imagem}
        alt={nome}
      />
      <h2 className="mt-3 text-texto-principal font-le font-normal text-xl sm:text-2xl">
        {nome}
      </h2>
      <p className="text-texto-principal font-dream font-normal text-xs sm:text-sm">
        RM: {rm}
      </p>
      <p className="text-texto-principal font-calm font-normal text-sm sm:text-base mt-1">
        {cargo}
      </p>
    </div>
  );
}

export default IntegranteCard;