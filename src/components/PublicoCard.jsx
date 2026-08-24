function PublicoCard({ valor, imagem, alt, texto }) {
  return (
    <div
      className="
        bg-transparente-escuro text-texto-principal p-7.5 min-h-75 w-full max-w-75
        border border-borda rounded-[10px] flex flex-col m-2.5 max-md:max-w-full
      "
    >
      <h4 className="font-dream font-normal text-3xl">{valor}</h4>
      <div className="flex justify-center items-center m-7.5">
        <img
          src={imagem}
          alt={alt}
          className="max-w-50 max-h-37.5 object-contain"
        />
      </div>
      <p className="font-calm font-normal text-[15px]">{texto}</p>
    </div>
  );
}

export default PublicoCard;
