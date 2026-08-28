import integrantes from '../data/integrantes';
import IntegranteCard from './IntegranteCard';

function Integrantes() {
  return (
    <>
      <section className="colosys">
        <div className="grupo flex justify-center gap-10 m-50" id="grupo">

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
    </>
  );
}

export default Integrantes;
