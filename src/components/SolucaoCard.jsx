function SolucaoCard({ titulo, imagem, texto }) {
  return (
    <div
      className="
        bg-transparente-escuro text-texto-principal w-full max-w-87.5 min-h-125 border 
        border-borda rounded-[10px] flex flex-col items-center text-center p-5 transition duration-500 
        hover:-translate-y-2.5 hover:border-[1.5px] hover:border-azul-hover max-md:max-w-full max-md:min-h-0"
    >
      <h4 className="font-dream font-normal text-xl mt-5 mb-5">{titulo}</h4>
      <img src={imagem} alt={titulo} />
      <p className="mt-5 font-calm font-normal text-[15px] leading-normal">
        {texto}
      </p>
    </div>
  );
}

export default SolucaoCard;
