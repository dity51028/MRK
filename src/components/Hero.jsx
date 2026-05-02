import heroBg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover object-right scale-110 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight">
            Transform
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-400">
              Your Body
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-md">
            We are dedicated to helping you transform your body and mind through
            the power of fitness.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-linear-to-r from-orange-500 to-orange-600 text-black font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-xl shadow-orange-500/20"
            >
              Get Started
            </a>
            <a
              href="#"
              className="flex items-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-bold px-8 py-4 rounded-full transition-all"
            >
              <span className="text-xl">▶</span> Watch Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
