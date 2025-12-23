import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function DeliWaveLanding() {
  const scrollRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBot, setSelectedBot] = useState(null);
  const [filter, setFilter] = useState("All");

  const bots = [
    {
      name: "Bella",
      img: "/images/Bella_square.webp",
      hero: "/images/Bella_hero.webp",
      category: "Standard",
      desc: "Reliable indoor delivery for restaurants and retail.",
      details: "BellaBot is designed for smooth indoor navigation with high payload stability.",
    },
    {
      name: "BellaPro",
      img: "/images/BellaPro_square.webp",
      hero: "/images/BellaPro_hero.webp",
      category: "Pro",
      desc: "Advanced delivery with enhanced sensors.",
      details: "BellaPro includes advanced obstacle detection and fleet management.",
    },
    {
      name: "KettyBot",
      img: "/images/KettyBot_square.webp",
      hero: "/images/KettyBot_hero.webp",
      category: "Standard",
      desc: "Compact yet powerful assistant bot.",
      details: "KettyBot excels in hospitality and healthcare environments.",
    },
    {
      name: "Pudu2",
      img: "/images/Pudu2_square.webp",
      hero: "/images/Pudu2_hero.webp",
      category: "Standard",
      desc: "Universal delivery bot.",
      details: "Pudu2 is a versatile bot for various delivery tasks.",
    },
    {
      name: "KettyPro",
      img: "/images/KettyPro_square.webp",
      hero: "/images/KettyPro_hero.webp",
      category: "Pro",
      desc: "Premium compact assistant bot.",
      details: "KettyPro excels in hospitality and healthcare environments.",
    },
    {
      name: "Hola",
      img: "/images/Hola_square.webp",
      hero: "/images/Hola_hero.webp",
      category: "Pro",
      desc: "Friendly service bot for customer interaction.",
      details: "Hola improves engagement while performing deliveries.",
    },
    {
      name: "Flash",
      img: "/images/Flash_square.webp",
      hero: "/images/Flash_hero.webp",
      category: "Pro",
      desc: "High-speed autonomous logistics bot.",
      details: "Flash is built for speed and efficiency in warehouses and campuses.",
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl font-bold leading-tight">Smart Delivery Bots for the Last Mile</h1>
          <p className="mt-6 text-lg text-slate-300">
            DeliWave builds autonomous delivery robots designed for speed, safety, and scalability.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition">
              Request Demo
            </button>
            <button className="border border-white/30 px-8 py-4 rounded-xl hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.img
          src="/images/Bella_hero.webp"
          alt="Bella, Pudu, server robot, restaurant, Pringle"
          className="rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Bot Grid */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Delivery Bots
        </h2>

        <div className="flex justify-center gap-4 mb-12">
          {["All", "Standard", "Pro"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-medium transition
                ${
                  filter === cat
                    ? "bg-yellow-400 text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
          >
            ‹
          </button>
          <div ref={scrollRef} className="flex gap-10 overflow-x-auto scroll-smooth px-12">
            {bots
              .filter((b) => filter === "All" || b.category === filter)
              .map((bot) => (
              <motion.div
                key={bot.name}
                onClick={() => setSelectedBot(bot)}
                className="cursor-pointer bg-white/5 rounded-2xl p-4 text-center backdrop-blur
                           hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(234,179,8,0.25)]
                           transition-all duration-300 flex-shrink-0"
                style={{ minWidth: '250px' }}
              >
                <img
                  src={bot.img}
                  alt={bot.name}
                  className="rounded-xl mx-auto w-full max-w-[260px] shadow-lg object-cover h-64"
                />
                <h3 className="mt-4 text-xl font-semibold">{bot.name}</h3>
                <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                  {bot.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
          >
            ›
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        {["Autonomous Navigation", "Secure Delivery", "Fleet Ready"].map((f) => (
          <motion.div
            key={f}
            className="bg-white/5 rounded-2xl p-8 backdrop-blur"
            whileHover={{ y: -6 }}
          >
            <h3 className="text-xl font-semibold">{f}</h3>
            <p className="mt-3 text-slate-300">
              Built with advanced robotics and AI to handle real-world delivery challenges.
            </p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">Ready to Transform Delivery?</h2>
        <p className="mt-4 text-slate-300">Partner with DeliWave and move the future forward.</p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
			Request a Demo
		</button>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        © {new Date().getFullYear()} DeliWave. All rights reserved.
      </footer>
    </div>

    {selectedBot && (
      <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center p-6">
        <div className="bg-slate-900 rounded-3xl max-w-4xl w-full overflow-hidden relative">
          <button
            onClick={() => setSelectedBot(null)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ✕
          </button>

          <img
            src={selectedBot.hero}
            alt={selectedBot.name}
            className="w-full h-72 object-cover"
          />

          <div className="p-8">
            <h2 className="text-3xl font-bold">{selectedBot.name}</h2>
            <p className="mt-4 text-slate-300">{selectedBot.details}</p>

            {/* CTA */}
            <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
