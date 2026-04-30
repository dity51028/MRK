// src/components/WhyJoinUs.jsx
import { FaCheckCircle } from "react-icons/fa";

const benefits = [
  "Gym in 1500 sq ft",
  "Modern Equipment",
  "Floor Trainer Available",
  "Parking Space Available",
  "Full AC Gym",
];

export default function WhyJoinUs() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Why join with <span className="text-orange-500">US ?</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="border-2 border-sky-500 rounded-2xl p-8 sm:p-12 bg-black/30 backdrop-blur-sm">
            <ul className="space-y-6">
              {benefits.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 text-xl font-medium text-gray-100"
                >
                  <FaCheckCircle className="text-sky-400 shrink-0" size={24} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
