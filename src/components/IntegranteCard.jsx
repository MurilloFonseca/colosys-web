function IntegranteCard({ nome, rm, imagem, cargo }) {
  return (
    <div className="text-center transition-transform duration-1500 hover:scale-110">
      <img
        className="w-500 rounded-xl object-cover"
        src={imagem}
        alt={nome}
      />
      <h2 className="mt-4 text-texto-principal font-le font-normal text-3xl max-md:text-3xl">
        {nome}
      </h2>
      <p className="text-texto-principal font-dream font-normal text-[15px] leading-normal">
        RM: {rm}
      </p>
      <p className="text-texto-principal font-calm font-normal text-[20px] leading-normal">
        {cargo}
      </p>
    </div>
  );
}

export default IntegranteCard;
