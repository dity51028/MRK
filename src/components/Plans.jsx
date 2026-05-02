// src/components/Plans.jsx
import heroBg from "../assets/hero.png";
import {
  FaWeightScale,
  FaSpa,
  FaBicycle,
  FaDumbbell,
  FaPersonRunning,
} from "react-icons/fa6";

const plans = [
  {
    icon: FaWeightScale,
    title: "Weight Loss",
    desc: "Weight loss can have causes that aren't due to underlying disease.",
  },
  {
    icon: FaSpa,
    title: "Classic Yoga",
    desc: "Yoga improves posture, flexibility, and mental clarity.",
  },
  {
    icon: FaBicycle,
    title: "Cycling",
    desc: "Cycling is a great cardio workout for fitness and endurance.",
  },
  {
    icon: FaDumbbell,
    title: "Body Building",
    desc: "Build strength and muscle through progressive training.",
  },
  {
    icon: FaDumbbell,
    title: "Musculation",
    desc: "Strength training for muscle growth and endurance.",
  },
  {
    icon: FaPersonRunning,
    title: "Fitness Running",
    desc: "Improve stamina and cardiovascular health through running.",
  },
];

export default function Plans() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Flipped background with opacity */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={heroBg} // reuse hero bg, or import another
          alt=""
          className="w-full h-full object-cover transform scale-y-[-1]"
        />
      </div>
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Fitness Plans & <span className="text-orange-500">Nutritions</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            const borderClasses =
              idx % 3 === 1 ? "sm:border-x border-orange-500/50" : "";
            const bottomBorder = idx < 3 ? "border-b border-orange-500/50" : "";

            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center p-8 hover:bg-white/5 transition-all ${borderClasses} ${bottomBorder}`}
              >
                <Icon className="text-4xl text-orange-300 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{plan.title}</h3>
                <p className="text-gray-400 text-sm max-w-55">{plan.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
