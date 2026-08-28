import solucaoCards from "../data/solucaoCards";
import SolucaoCard from "./SolucaoCard";

function Solucao() {
  return (
    <section
      className="mt-62.5 mb-50 text-center scroll-mt-22.5 max-md:mt-25 max-md:mb-25 max-md:mx-5"
      id="solucao"
    >
      <h2 className="text-texto-principal font-le font-normal text-4xl max-md:text-3xl mb-10">
        A solução com Inteligência Artificial
      </h2>

      {/* Grid configurado para 4 colunas em telas grandes (lg) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto px-4">
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
