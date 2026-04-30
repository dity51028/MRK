// src/components/Trainers.jsx
import trainer1 from "../assets/Rectangle 9.png";
import trainer2 from "../assets/Rectangle 8.png";
import trainer3 from "../assets/Rectangle 10.png";

const trainers = [
  { name: "John Doe", exp: "5+ Years Experience", img: trainer1 },
  { name: "Sarah Williams", exp: "7+ Years Experience", img: trainer2 },
  { name: "Mike Johnson", exp: "10+ Years Experience", img: trainer3 },
];

export default function Trainers() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Meet Our <span className="text-orange-500">Trainers</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => (
            <div
              key={idx}
              className="group relative h-115 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay that slides up */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white">
                  {trainer.name}
                </h3>
                <p className="text-orange-400 mt-1">{trainer.exp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
