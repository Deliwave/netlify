import { motion } from "framer-motion";

export default function DeliWaveLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl font-bold leading-tight">Smart Delivery Bots for the Last Mile</h1>
          <p className="mt-6 text-lg text-slate-300">
            DeliWave builds autonomous delivery robots designed for speed, safety, and scalability.
          </p>
          <div className="mt-8 flex gap-4">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300">Request a Demo</Button>
            <Button variant="outline" className="border-white text-white">Learn More</Button>
          </div>
        </motion.div>

        <motion.img
          src="/images/bot_hero.webp"
          alt="DeliWave delivery robot"
          className="rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
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
  );
}
