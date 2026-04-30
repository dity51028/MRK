// src/components/Subscription.jsx

const plans = [
  {
    title: "Monthly",
    duration: "1 Month",
    price: 600,
    note: "*Admission Charge will be applicable",
    featured: false,
  },
  {
    title: "Yearly",
    duration: "12 months",
    price: 250,
    note: "**Conditions apply",
    featured: true,
  },
  {
    title: "Quarterly",
    duration: "3 Months",
    price: 600,
    note: "*Free Admission",
    featured: false,
  },
];

export default function Subscription() {
  return (
    <section className="py-24 bg-linear-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Subscribe to <span className="text-orange-500">Plans</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative w-80 p-8 rounded-2xl border ${
                plan.featured
                  ? "border-orange-500 bg-linear-to-b from-gray-900 to-black shadow-2xl shadow-orange-500/20"
                  : "border-gray-800 bg-linear-to-b from-gray-900 to-black hover:border-orange-500/50"
              } transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-500/20`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-black px-5 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Recommended
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <p className="text-gray-400">Plan Duration: {plan.duration}</p>
              <div className="mt-4 mb-2">
                <span className="text-5xl font-extrabold text-orange-500">
                  ₹{plan.price}
                </span>
                <span className="text-gray-400">/Month</span>
              </div>
              <small className="block text-gray-500 mt-2">{plan.note}</small>
              <a
                href="#"
                className={`mt-6 block text-center border ${
                  plan.featured
                    ? "bg-orange-500 text-black font-semibold border-orange-500 hover:bg-orange-600"
                    : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black"
                } font-semibold px-6 py-3 rounded-full transition-all transform hover:scale-105`}
              >
                Select Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
