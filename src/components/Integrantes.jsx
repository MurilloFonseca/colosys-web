import beatriz from "../assets/img/beatriz.png";
import lorenzo from "../assets/img/lorenzo.png";
import maria from "../assets/img/maria.png";
import murillo from "../assets/img/murillo.png";
import raissa from "../assets/img/raissa.png";

function Integrantes() {
    return (
        <>
            <section className="colosys">
                <div class="grupo flex justify-center gap-10 m-50" id="grupo">

                    <div class="text-center rounded-full object-cover transition-transform duration-1500 hover:scale-110">
                        <img className="w-500 rounded-xl object-cover" 
                        src={beatriz} alt="Beatriz" />
                        <h2 className="mt-4 text-texto-principal font-le font-normal text-3xl max-md:text-3xl">Beatriz</h2>
                        <p className="text-texto-principal font-calm font-normal text-[20px] leading-normal">RM: 573698</p>
                    </div>

                    <div class="text-center transition-transform duration-1500 hover:scale-110">
                        <img className="w-500 rounded-xl object-cover"
                         src={lorenzo} alt="Lorenzo" />
                        <h2 className="mt-4 text-texto-principal font-le font-normal text-3xl max-md:text-3xl">Lorenzo</h2>
                        <p className="text-texto-principal font-calm font-normal text-[20px] leading-normal">RM: 570036</p>
                    </div>

                    <div class="text-center transition-transform duration-1500 hover:scale-110">
                        <img className="w-500 rounded-xl object-cover"
                        src={maria} alt="Maria" />
                        <h2 className="mt-4 text-texto-principal font-le font-normal text-3xl max-md:text-3xl">Maria</h2>
                        <p className="text-texto-principal font-calm font-normal text-[20px] leading-normal">RM: 573246</p>
                    </div>

                    <div class="text-center transition-transform duration-1500 hover:scale-110">
                        <img className="w-500 rounded-xl object-cover" 
                        src={murillo} alt="Murillo" />
                        <h2 className="mt-4 text-texto-principal font-le font-normal text-3xl max-md:text-3xl">Murillo</h2>
                        <p className="text-texto-principal font-calm font-normal text-[20px] leading-normal">RM: 573674</p>
                    </div>

                    <div class="text-center transition-transform duration-1500 hover:scale-110">
                        <img className="w-500 rounded-xl object-cover"
                         src={raissa} alt="Raíssa" />
                        <h2 className="mt-4 text-texto-principal font-le font-normal text-3xl max-md:text-3xl">Raíssa</h2>
                        <p className="text-texto-principal font-calm font-normal text-[20px] leading-normal">RM: 572166</p>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Integrantes;