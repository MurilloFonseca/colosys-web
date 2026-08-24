import Banner from '../assets/video/banner.mp4'

function Hero() {
  return (
    <section
      className="
        relative w-full h-[70vh] overflow-hidden mb-50 scroll-mt-22.5 before:content-[''] 
        before:absolute before:inset-0 before:bg-[rgba(3,0,21,0.558)] before:z-1
      "
      id="inicio"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={Banner} type="video/mp4" />
      </video>

      <div
        className="
          font-le font-normal text-[30px] relative z-2 text-white h-full 
          flex justify-center items-center text-center max-md:text-xl max-md:p-5
        "
      >
        <h1 className="max-md:w-full">
          Registro dos melhores momentos com inteligência.
        </h1>
      </div>
    </section>
  );
}

export default Hero;
