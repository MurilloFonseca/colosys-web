import Video from '../assets/video/ideia.mp4'

function Ideia() {
  return (
    <section
      className="
        text-texto-principal flex justify-center items-center gap-5 flex-wrap mx-10 my-75
        scroll-mt-22.5 max-md:flex-col max-md:mx-5 max-md:my-25 max-md:text-center
      "
      id="ideia"
    >
      <div className="max-w-150">
        <h4 className="font-le text-4xl mb-5 max-md:text-3xl">
          Como podemos transformar a experiência da câmera?
        </h4>
        <p className="font-calm">
          Transformamos a experiência de fotografar com uma solução inteligente
          baseada em IA. Nosso software integrado à câmera utiliza o Gemini para
          atuar como um assistente em tempo real, corrigindo automaticamente
          problemas como imagens borradas, baixa iluminação e dificuldades em
          capturar movimentos. Com recursos de estabilização inteligente, ajuste
          automático de luz e foco, e captura no momento ideal, eliminamos a
          necessidade de intervenções manuais. O resultado é uma câmera mais
          eficiente, que otimiza cada clique e garante imagens de alta qualidade
          em qualquer situação.
        </p>
      </div>

      <div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-125 rounded-[30px] max-md:w-full max-md:max-w-100"
        >
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Ideia;
