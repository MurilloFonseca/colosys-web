import integrantes from "../data/integrantes";
import IntegranteCard from "./IntegranteCard";

function Integrantes() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12" id="integrantes">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {integrantes.map((integrante) => (
          <IntegranteCard
            key={integrante.id}
            imagem={integrante.imagem}
            nome={integrante.nome}
            rm={integrante.rm}
            cargo={integrante.cargo}
          />
        ))}
      </div>
    </section>
  );
}

export default Integrantes;
