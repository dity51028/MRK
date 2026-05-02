import Header from "./components/Header";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import Subscription from "./components/Subscription";
import Trainers from "./components/Trainers";
import WhyJoinUs from "./components/WhyJoinUs";

export default function App() {
  return (
    <div className="bg-black text-white selection:bg-orange-500/30">
      <Header />
      <main>
        <Hero />
        <Plans />
        <Subscription />
        <Trainers />
        <WhyJoinUs />
      </main>
      {/* Optional: add a footer */}
    </div>
  );
}
