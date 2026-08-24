import publicoCards from "../data/publicoCards";
import PublicoCard from "./PublicoCard";

function Publico() {
  return (
    <section
      className="text-center px-12.5 py-2.5 mb-25 scroll-mt-22.5 max-md:p-5"
      id="publico"
    >
      <h2 className="text-texto-principal font-le font-normal text-4xl max-md:text-3xl">
        Após nos conectarmos com o público...
      </h2>
      <div>
        <p className="text-texto-principal font-calm text-xl max-md:text-base">
          A JOVI entra no mercado brasileiro com foco em oferecer uma
          experiência relevante e adaptada ao consumidor local. Dentro desse
          contexto, surge o desafio de desenvolver uma solução de software capaz
          de aprimorar a experiência da câmera, tornando seu uso mais intuitivo
          e eficiente.
        </p>
      </div>

      <div className="flex gap-5 mt-2.5 ml-2.5 justify-center flex-wrap">
        {publicoCards.map((card) => (
          <PublicoCard
            key={card.id}
            valor={card.valor}
            imagem={card.imagem}
            alt={card.alt}
            texto={card.texto}
          />
        ))}
      </div>
    </section>
  );
}

export default Publico;
