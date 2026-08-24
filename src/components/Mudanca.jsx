import mudancaItems from "../data/mudancaItems";

function Mudanca() {
  return (
    <section
      className="
        h-100 bg-azul-vivo text-center text-texto-principal scroll-mt-22.5
        max-md:h-full max-md:px-7.5 max-md:py-10
      "
      id="mudanca"
    >
      <h2 className="p-15 text-texto-principal font-le font-normal text-4xl max-md:p-5 max-md:text-3xl">
        Principais Mudanças
      </h2>
      <div className="flex justify-center gap-10 mt-10 flex-wrap max-md:flex-col max-md:items-center">
        {mudancaItems.map((item) => (
          <div
            className="w-62.5 text-left border-l-2 border-borda pl-5 max-md:w-full max-md:max-w-75"
            key={item.id}
          >
            <h5 className="font-le font-normal text-xl">{item.titulo}</h5>
            <p className="mt-2.5 font-calm font-normal text-[15px]">
              {item.texto}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mudanca;
