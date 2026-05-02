import imgTop from "../assets/join-us/Rectangle 12.png";
import imgBottom from "../assets/join-us/Rectangle 13.png";

const benefits = [
  "Gym in 1500 sq ft",
  "Modern Equipment",
  "Floor Trainer Available",
  "Parking Space Available",
  "Full AC Unisex Gym",
];

export default function WhyJoinUs() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Why Join With <span className="text-orange-500">Us?</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left: Benefits card */}
          <div className="flex-1 w-full max-w-lg">
            <div className="bg-linear-to-br from-gray-800 to-black p-8 sm:p-10 rounded-2xl border border-gray-700 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-500/10">
              <ul className="space-y-5">
                {benefits.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 text-lg font-medium"
                  >
                    <span className="shrink-0 w-3 h-3 bg-orange-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-full transition-colors"
              >
                See More Benefits
              </a>
            </div>
          </div>

          {/* Right: Stacked images */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96">
              <img
                src={imgTop}
                alt=""
                className="absolute top-0 right-0 w-48 h-56 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 z-10"
              />
              <img
                src={imgBottom}
                alt=""
                className="absolute bottom-0 left-0 w-48 h-56 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
