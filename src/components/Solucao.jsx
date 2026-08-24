import solucaoCards from "../data/solucaoCards";
import SolucaoCard from "./SolucaoCard";

function Solucao() {
  return (
    <section
      className="mt-62.5 mb-50 text-center scroll-mt-22.5 max-md:mt-25 max-md:mb-25 max-md:mx-5"
      id="solucao"
    >
      <h2 className="text-texto-principal font-le font-normal text-4xl max-md:text-3xl">
        A solução com Inteligência Artificial
      </h2>

      <div className="flex justify-center items-center gap-5 flex-wrap">
        {solucaoCards.map((card) => (
          <SolucaoCard
            key={card.id}
            titulo={card.titulo}
            imagem={card.imagem}
            texto={card.texto}
          />
        ))}
      </div>
    </section>
  );
}

export default Solucao;
