import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function DeliWaveLanding() {
  const scrollRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBot, setSelectedBot] = useState(null);
  const [filter, setFilter] = useState("All");
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isModelsOpen, setIsModelsOpen] = useState(false);

  const bots = [
    {
      name: "Bella",
      img: "/images/Bella_square.webp",
      hero: "/images/Bella_hero.webp",
      category: "Standard",
      desc: "Indoor delivery bot",
      details: "BellaBot is designed for smooth indoor navigation with high payload stability.",
    },
    {
      name: "BellaPro",
      img: "/images/BellaPro_square.webp",
      hero: "/images/BellaPro_hero.webp",
      category: "Pro",
      desc: "Advanced indoor delivery bot",
      details: "Latest model with many customer experiencce improvements and marketing screen",
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
      desc: "Advanced compact delivery bot",
      details: "KettyPro is great for compact spaces. It can play versatile roles from delivery to escorting to guiding in large business place"
    },
    {
      name: "Hola",
      img: "/images/Hola_square.webp",
      hero: "/images/Hola_hero.webp",
      category: "Pro",
      desc: "High capacity versatile bot",
      details: "Carries upto 60 Kgs with voice and pager integration",
    },
    {
      name: "Flash",
      img: "/images/Flash_square.webp",
      hero: "/images/Flash_hero.webp",
      category: "Pro",
      desc: "Building Delivery Expert",
      details: "Flash is built for speed and efficiency in warehouses and campuses.",
    },
    {
      name: "KettyBot",
      img: "/images/KettyBot_square.webp",
      hero: "/images/KettyBot_hero.webp",
      category: "Standard",
      desc: "Great bot for tight spaces",
      details: "KettyBot excels in fast deliveries in compact spaces and thrills customers with it cute design.",
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
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
        <nav className="container mx-auto px-6 py-1 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/DeliWaveLogo_Small_No_BG.png" 
              alt="DeliWave Robotics" 
              className="h-24 md:h-32 w-auto"
            />
          </div>
          
          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setIsDemoFormOpen(true)} className="text-slate-200 hover:text-yellow-400 transition font-medium">
              Request Demo
            </button>
            
            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <button className="text-slate-200 hover:text-yellow-400 transition font-medium flex items-center gap-1">
                Industries
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isIndustriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900/95 backdrop-blur-sm border border-white/10 rounded-xl shadow-xl z-50">
                  <div className="py-2">
                    <a href="#airports" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Airports
                    </a>
                    <a href="#assisted-living" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Assisted Living
                    </a>
                    <a href="#sports-arena" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Sports Arena
                    </a>
                    <a href="#restaurants" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Restaurants
                    </a>
                    <a href="#food-courts" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Food Courts
                    </a>
                    <a href="#casinos" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Casinos
                    </a>
                    <a href="#hotels" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Hotels
                    </a>
                    <a href="#schools" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Schools
                    </a>
                    <a href="#hospitals" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Hospitals
                    </a>
                    <a href="#offices" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Offices
                    </a>
                    <a href="#shopping-malls" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Shopping Malls
                    </a>
                    <a href="#more" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Many More..
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Models Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsModelsOpen(true)}
              onMouseLeave={() => setIsModelsOpen(false)}
            >
              <button className="text-slate-200 hover:text-yellow-400 transition font-medium flex items-center gap-1">
                Models
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isModelsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-sm border border-white/10 rounded-xl shadow-xl z-50">
                  <div className="py-2">
                    <a href="#bella" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Bella
                    </a>
                    <a href="#bella-pro" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Bella Pro
                    </a>
                    <a href="#ketty" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Ketty
                    </a>
                    <a href="#ketty-pro" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Ketty Pro
                    </a>
                    <a href="#pudu" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Pudu
                    </a>
                    <a href="#hola" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Hola
                    </a>
                    <a href="#flash" className="block px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-yellow-400 transition">
                      Flash
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#blog" className="text-slate-200 hover:text-yellow-400 transition font-medium">
              Blog
            </a>
            <a href="#about" className="text-slate-200 hover:text-yellow-400 transition font-medium">
              About Us
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#0B132B] to-[#1C2541]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl font-bold leading-tight">Smart Solutions for Tireless Deliveries</h1>
          <p className="mt-6 text-lg text-slate-300">
            DeliWave provides autonomous delivery robots designed for speed, safety, and scalability
          </p>
          <div className="mt-10 flex gap-4">
            <button 
              onClick={() => setIsDemoFormOpen(true)}
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
            >
              Request Demo
            </button>
            <button className="border border-white/30 px-8 py-4 rounded-xl hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        <div className="w-full max-w-md h-[420px] mx-auto">
          <motion.img
            src="/images/Bella_hero.webp"
            alt="Bella, Pudu, server robot, restaurant, Pringle"
            className="w-full h-full object-contain rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
      </section>

      {/* Bot Grid */}
      <section className="container mx-auto px-6 py-8">
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
          >
            ‹
          </button>
          <div ref={scrollRef} className="flex gap-10 overflow-x-auto scroll-smooth px-12 scrollbar-hide">
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
                <div className="w-full h-64 flex items-center justify-center">
                  <img
                    src={bot.img}
                    alt={bot.name}
                    className="rounded-xl max-w-full max-h-full shadow-lg object-contain"
                  />
                </div>
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
        <motion.div
          className="bg-white/5 rounded-2xl p-8 backdrop-blur"
          whileHover={{ y: -6 }}
        >
          <h3 className="text-xl font-semibold">Autonomous Navigation</h3>
          <p className="mt-3 text-slate-300">
            Built with advanced robotics and AI to handle real-world delivery challenges.
          </p>
        </motion.div>
        <motion.div
          className="bg-white/5 rounded-2xl p-8 backdrop-blur"
          whileHover={{ y: -6 }}
        >
          <h3 className="text-xl font-semibold">Secure Delivery</h3>
          <p className="mt-3 text-slate-300">
            Equipped with Dual SLAM Technology with High-sense & Obstacle-Avoidance
          </p>
        </motion.div>
        <motion.div
          className="bg-white/5 rounded-2xl p-8 backdrop-blur"
          whileHover={{ y: -6 }}
        >
          <h3 className="text-xl font-semibold">Fleet Ready</h3>
          <p className="mt-3 text-slate-300">
            Flexible communication enables fleet of robots to operate smoothly
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">Ready to Transform Delivery?</h2>
        <p className="mt-4 text-slate-300">Partner with DeliWave and move the future forward.</p>
        <button 
          onClick={() => setIsDemoFormOpen(true)}
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
		  Request Demo
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

          <div className="w-full h-96">
            <img
              src={selectedBot.hero}
              alt={selectedBot.name}
              className="w-full h-full object-contain rounded-t-3xl"
            />
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold">{selectedBot.name}</h2>
            <p className="mt-4 text-slate-300">{selectedBot.details}</p>

            {/* CTA */}
            <button 
              onClick={() => { setIsModalOpen(false); setIsDemoFormOpen(true); }}
              className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>
    )}

    {/* Demo Request Form Modal */}
    {isDemoFormOpen && (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
        <div className="bg-slate-900 rounded-3xl max-w-2xl w-full p-10 relative">
          <button
            onClick={() => setIsDemoFormOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-yellow-400 text-3xl"
          >
            ✕
          </button>

          <h2 className="text-4xl font-bold mb-8 text-center">Request a Demo</h2>
          
          <form
            action="https://formspree.io/f/xnjalaod"
            className="space-y-6"
            target="_top"
            method="POST"
          >
            <div className="space-y-2">
              <label className="block text-lg font-medium text-slate-200" htmlFor="name">Your Name</label>
              <input 
                className="w-full px-5 py-4 text-lg rounded-xl bg-slate-800 border border-slate-700 text-white focus:border-yellow-400 focus:outline-none transition" 
                id="name" 
                name="name" 
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="block text-lg font-medium text-slate-200" htmlFor="email">Email</label>
              <input 
                className="w-full px-5 py-4 text-lg rounded-xl bg-slate-800 border border-slate-700 text-white focus:border-yellow-400 focus:outline-none transition" 
                id="email" 
                name="email" 
                type="email"
                required 
              />
              <p className="text-sm text-slate-400 mt-1">
                This will help me respond to your query via an email.
              </p>
            </div>
            <div className="space-y-2">
              <label className="block text-lg font-medium text-slate-200" htmlFor="message">Message</label>
              <textarea
                className="w-full px-5 py-4 text-lg rounded-xl bg-slate-800 border border-slate-700 text-white focus:border-yellow-400 focus:outline-none transition resize-none"
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
              <p className="text-sm text-slate-400 mt-1">What would you like to discuss?</p>
            </div>
            <div className="pt-4">
              <button className="w-full bg-yellow-400 text-black px-8 py-4 text-lg font-bold rounded-xl hover:bg-yellow-300 transition" type="submit">Submit Request</button>
            </div>
          </form>
        </div>
      </div>
    )}
    </>
  );
}
