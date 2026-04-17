import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Download,
  Gamepad2,
  ShieldCheck,
  Zap,
  Keyboard,
  RefreshCw,
  Smartphone,
  Monitor,
  AlertTriangle,
  Check,
  X,
  MessageSquare,
  ChevronRight,
  Menu
} from 'lucide-react';
import logo from './assets/logo.png';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-neon-blue selection:text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-black/95 py-2 border-cyan-500/20' : 'bg-transparent py-4 border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src={logo} alt="Nextloop Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-orbitron text-2xl font-bold gradient-text">NEXTLOOP</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition font-medium">Home</a>
              <a href="#features" className="text-gray-300 hover:text-cyan-400 transition font-medium">Features</a>
              <a href="#download" className="text-gray-300 hover:text-cyan-400 transition font-medium">Download</a>
              <a href="#purchase" className="text-gray-300 hover:text-cyan-400 transition font-medium">Purchase</a>
              <a href="#support" className="text-gray-300 hover:text-cyan-400 transition font-medium">Support</a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://discord.gg/uCsXwWhXWz"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:block bg-linear-to-r from-neon-blue to-neon-purple px-6 py-2 rounded-full font-semibold text-white hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                Get Started
              </a>
              <button
                className="md:hidden text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center text-xl">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-gray-300">Home</a>
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-gray-300">Features</a>
              <a href="#download" onClick={() => setIsMenuOpen(false)} className="text-gray-300">Download</a>
              <a href="#purchase" onClick={() => setIsMenuOpen(false)} className="text-gray-300">Purchase</a>
              <a href="#support" onClick={() => setIsMenuOpen(false)} className="text-gray-300">Support</a>
              <a
                href="https://discord.gg/uCsXwWhXWz"
                target="_blank"
                rel="noreferrer"
                className="bg-linear-to-r from-neon-blue to-neon-purple px-6 py-3 rounded-full font-bold text-white"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1a1a2e_0%,#0a0a0f_70%)]" />
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg_width=%2260%22_height=%2260%22_viewBox=%220_0_60_60%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg_fill=%22none%22_fill-rule=%22evenodd%22%3E%3Cg_fill=%22%2300f0ff%22_fill-opacity=%220.05%22%3E%3Cpath_d=%22M36_34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6_34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6_4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
                <span className="text-cyan-400 font-medium">🎮 #1 BGMI Emulator Tool</span>
              </div>
              <h1 className="font-orbitron text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="gradient-text">NEXTLOOP</span>
              </h1>
              <p className="text-xl text-gray-400 mb-4">
                The Ultimate Solution to Run <span className="text-cyan-400 font-semibold">BGMI</span> on <span className="text-purple-400 font-semibold">Emulators</span>
              </p>
              <p className="text-gray-500 mb-8 text-lg">
                Experience smooth gameplay, zero detection, and premium features. Dominate the battleground with our cutting-edge emulator optimization tool.
              </p>
              <p className="text-cyan-400 font-semibold mb-8">
                Supported Emulators  <span className="text-purple-400 font-semibold">: Gameloop / MuMu / LdPlayer / MSI / BlueStacks</span>
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://discord.gg/uCsXwWhXWz"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-linear-to-r from-neon-blue to-neon-purple px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,240,255,0.4)]"
                >
                  <Download className="w-5 h-5" /> Get Started
                </a>
                <a href="#features" className="px-8 py-4 rounded-full border border-cyan-500/50 hover:bg-cyan-500/10 transition font-bold text-lg">
                  Learn More
                </a>
              </div>
              <div className="flex items-center gap-8 mt-10">
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-bold text-cyan-400">120+</div>
                  <div className="text-gray-500 text-sm">FPS Support</div>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-bold text-purple-400">99%</div>
                  <div className="text-gray-500 text-sm">Uptime</div>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-bold text-pink-400">24/7</div>
                  <div className="text-gray-500 text-sm">Support</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-linear-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center glow-box"
              >
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-linear-to-br from-cyan-500/30 to-purple-600/30 flex items-center justify-center">
                  <Gamepad2 className="w-32 h-32 md:w-40 md:h-40 text-cyan-400 drop-shadow-[0_0_20px_rgba(0,240,255,0.5)]" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative bg-black/30">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">NEXTLOOP</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Packed with features designed for ultimate BGMI gaming experience on Emulators
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Anti-Detection", desc: "Advanced bypass technology ensures safe gameplay without bans", color: "cyan" },
              { icon: Zap, title: "FPS Boost", desc: "Optimized performance for smooth 120+ FPS gameplay", color: "purple" },
              { icon: Keyboard, title: "Best Keymapping", desc: "Superior keymaps than official emulator with all latest event button support", color: "cyan" },
              { icon: RefreshCw, title: "Auto Updates", desc: "Always stay updated with latest BGMI patches", color: "purple" }
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`rounded-2xl p-6 bg-black/50 hover:bg-black/70 transition-all ${f.color === 'cyan' ? 'glow-box' : 'glow-box-purple'}`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${f.color === 'cyan' ? 'bg-cyan-500/20' : 'bg-purple-500/20'}`}>
                  <f.icon className={`w-8 h-8 ${f.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`} />
                </div>
                <h3 className="font-orbitron text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Download Center</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get all the files you need to start your BGMI journey on Emulators
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Featured APK Download */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-3xl p-8 md:p-10 bg-linear-to-r from-cyan-900/40 via-blue-900/20 to-purple-900/40 border-2 border-cyan-500/40 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 shadow-[0_0_40px_rgba(0,240,255,0.15)] glow-box"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600" />
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-linear-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.4)] p-4 flex-shrink-0 z-10 relative">
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse" />
                <img src="https://cdn.discordapp.com/icons/410479299347480576/2986fe9c8554e9fde3a2cc58785f3e8d.webp?size=1024" alt="BGMI APK" className="w-full h-full object-contain relative z-10" />
              </div>
              
              <div className="flex-1 text-center md:text-left z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold mb-3 border border-cyan-500/30">
                  ESSENTIAL
                </div>
                <h3 className="font-orbitron text-3xl md:text-4xl font-bold mb-2 text-white">BGMI Optimized APK</h3>
                <p className="text-gray-300 text-lg mb-2">Custom modified APK engineered for maximum stability and performance on Emulators.</p>
                <div className="text-sm font-medium text-purple-400 mb-6">Version 4.3 • Requires Emulator Bypass</div>
              </div>

              <div className="w-full md:w-auto flex-shrink-0 z-10">
                <a
                  href="https://drive.usercontent.google.com/download?id=1BZIw84ncaYmHTcrMbcHc3wkCR8nOPAu-&export=download"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full md:w-auto bg-linear-to-r from-neon-blue to-neon-purple px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,240,255,0.4)] text-lg"
                >
                  <Download className="w-6 h-6" /> Download APK
                </a>
              </div>
            </motion.div>

            {/* Emulators Grid */}
            <div>
              <h4 className="text-xl font-orbitron font-semibold text-center text-gray-400 mb-8 flex items-center justify-center gap-4">
                <span className="w-12 h-px bg-gray-700"></span>
                Supported Emulators
                <span className="w-12 h-px bg-gray-700"></span>
              </h4>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  {
                    title: "Gameloop",
                    version: "Latest",
                    icon: "https://cdn.discordapp.com/icons/1397411885615288340/02ea5c019a938236b8a5446767550af6.webp?size=1024",
                    link: "https://down.gameloop.com/channel/3/26460/GLP_installer_900223150_market.exe",
                    color: "from-blue-500 to-indigo-600",
                    shadow: "rgba(59,130,246,0.3)"
                  },
                  {
                    title: "MSI Player",
                    version: "Latest",
                    icon: "https://storage-asset.msi.com/event/2024/Corp/MSI-App-Player/images/MSI_App_Player-icon.png",
                    link: "https://www.msi.com/Landing/appplayer",
                    color: "from-gray-800 to-black",
                    shadow: "rgba(0, 0, 0, 0.5)"
                  },
                  {
                    title: "BlueStacks",
                    version: "Latest",
                    icon: "https://cdn.discordapp.com/icons/507396585878192128/a_10beadd5d6973ef0d04fa275c6e153df.gif",
                    link: "https://www.bluestacks.com/download.html",
                    color: "from-blue-400 to-blue-600",
                    shadow: "rgba(37,99,235,0.3)"
                  },
                  {
                    title: "LD Player",
                    version: "Latest",
                    icon: "https://cdn.discordapp.com/icons/715095525979848783/d57ff30c5d63293bd4214388e416197f.webp?size=2048",
                    link: "https://res.ldrescdn.com/download/LDPlayer9.exe?n=LDPlayer9_ens_1001_ld.exe",
                    color: "from-yellow-400 to-yellow-600",
                    shadow: "rgba(234,179,8,0.3)"
                  },
                  {
                    title: "MuMu Player",
                    version: "Latest",
                    icon: "https://cdn.discordapp.com/icons/548396374299770881/d969d8df44aa925997dd63a4ba571596.webp",
                    link: "https://a11.gdl.netease.com/MuMu_5.0.11_gw-overseas12_all_1770284662.exe",
                    color: "from-blue-500 to-blue-700",
                    shadow: "rgba(37,99,235,0.3)"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="rounded-2xl p-6 bg-linear-to-br from-[#12121a] to-[#1a1a2e] border border-gray-800 hover:border-cyan-500/40 flex flex-col items-center transition-colors group"
                  >
                    <div
                      className={`w-16 h-16 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center mb-4 shadow-[0_0_15px_${item.shadow}] p-2 group-hover:scale-110 transition-transform`}
                    >
                      <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    <h3 className="font-orbitron text-lg font-bold text-center mb-1 text-gray-200 group-hover:text-white">{item.title}</h3>
                    <div className="text-center text-xs text-gray-500 mb-4">{item.version}</div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full mt-auto bg-gray-800 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all border border-transparent hover:border-cyan-500/30"
                    >
                      <Download className="w-4 h-4" /> Get
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Information & Guidelines Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-20">
            {/* Installation Note */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="rounded-2xl p-8 bg-linear-to-br from-cyan-900/20 to-black/80 border border-cyan-500/30 relative overflow-hidden group shadow-[0_0_30px_rgba(0,240,255,0.05)]"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  <Monitor className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-orbitron text-2xl font-bold text-cyan-400">Getting Started</h4>
                  <p className="text-sm text-cyan-500/80 mt-1">Follow these steps carefully</p>
                </div>
              </div>
              <ul className="space-y-4 relative z-10">
                {[
                  "Choose your preferred emulator from the dropdown menu (Game Tab).",
                  "Click the Start Emulator button (Emu Tab) and wait for the environment to load.",
                  "Once the emulator is active, click Start Game.",
                  "Monitor the interface for a \"Bypass Success\" notification after the game client opens.",
                  "Enjoy the game safely!"
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start bg-black/40 p-4 rounded-xl border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all duration-300">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold font-orbitron shadow-[inset_0_0_10px_rgba(0,240,255,0.2)]">
                      {i + 1}
                    </span>
                    <span className="text-gray-300 text-sm leading-relaxed pt-1">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Safety & Best Practices */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="rounded-2xl p-8 bg-linear-to-br from-yellow-900/20 to-black/80 border border-yellow-500/30 relative overflow-hidden group shadow-[0_0_30px_rgba(234,179,8,0.05)]"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all duration-700" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0 text-yellow-400 border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-orbitron text-2xl font-bold text-yellow-400">Safety Guidelines</h4>
                  <p className="text-sm text-yellow-500/80 mt-1">Protect your account</p>
                </div>
              </div>
              <ul className="space-y-4 relative z-10">
                {[
                  "Always perform your initial setup using a secondary or \"guest\" ID.",
                  "Test the software for at least 24 hours to ensure stability within your specific hardware environment.",
                  "Wait until you have confirmed the system is safe and stable after the 24-hour window before using your primary."
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start bg-black/40 p-4 rounded-xl border border-white/5 hover:border-yellow-500/40 hover:bg-yellow-950/20 transition-all duration-300">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold shadow-[inset_0_0_10px_rgba(234,179,8,0.2)]">
                      <AlertTriangle className="w-4 h-4" />
                    </span>
                    <span className="text-gray-300 text-sm leading-relaxed pt-1">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section id="purchase" className="py-24 relative bg-black/30">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-pink-500 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Choose Your Plan</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Unlock premium features and dominate every match
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl p-8 bg-linear-to-br from-[#15152a] to-[#1e1e3a] border border-gray-700 hover:border-cyan-500/50 transition-all"
            >
              <h3 className="font-orbitron text-2xl font-bold mb-2">Basic</h3>
              <p className="text-gray-400 mb-6">Perfect for beginners</p>
              <ul className="space-y-4 mb-8">
                {[
                  { text: "Emulator Bypass", included: true },
                  { text: "Standard FPS", included: true },
                  { text: "Smooth Graphics", included: true },
                  { text: "Discord VIP Support", included: false },
                  { text: "Skin Support", included: false },
                  { text: "Custom Keymap", included: false },
                  { text: "Custom Emulator Branding", included: false }
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 ${item.included ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.included ? <Check className="w-5 h-5 text-cyan-400" /> : <X className="w-5 h-5" />}
                    {item.text}
                  </li>
                ))}
              </ul>
              <a
                href="https://discord.gg/uCsXwWhXWz"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-xl border border-cyan-500/50 hover:bg-cyan-500/10 transition font-bold block text-center"
              >
                Get Basic
              </a>
            </motion.div>

            {/* Advance Plan */}
            <motion.div
              whileHover={{ y: -10 }}
              className="rounded-3xl p-8 bg-linear-to-br from-[#15152a] to-[#1e1e3a] border-2 border-purple-500 relative transform md:scale-105 shadow-[0_0_40px_rgba(176,38,255,0.2)]"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-neon-pink to-neon-purple px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                RECOMMENDED
              </div>
              <h3 className="font-orbitron text-2xl font-bold mb-2">Advance</h3>
              <p className="text-gray-400 mb-6">For serious gamers</p>
              <ul className="space-y-4 mb-8">
                {[
                  { text: "Emulator Bypass", included: true },
                  { text: "Ultra FPS", included: true },
                  { text: "UHD Graphics", included: true },
                  { text: "Discord VIP Support", included: true },
                  { text: "Skin Support", included: true },
                  { text: "Custom Keymap Support", included: true },
                  { text: "Custom Emulator Branding", included: true }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-purple-400" />
                    {item.text}
                  </li>
                ))}
              </ul>
              <a
                href="https://discord.gg/uCsXwWhXWz"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-linear-to-r from-neon-blue to-neon-purple py-4 rounded-xl font-bold block text-center shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                Get Advance
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Need Help?</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Join our Discord community for instant support and updates
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glow-box-purple rounded-3xl p-8 md:p-12 bg-black/50 text-center"
          >
            <div className="w-24 h-24 rounded-full bg-[#5865F2] flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(88,101,242,0.5)]">
              <MessageSquare className="w-12 h-12 text-white" />
            </div>
            <h3 className="font-orbitron text-3xl font-bold mb-4">Join Our Discord</h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Get instant support, tutorials, announcements, and connect with 10,000+ fellow gamers in our community
            </p>
            <a
              href="https://discord.gg/uCsXwWhXWz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] px-10 py-4 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-xl"
            >
              <MessageSquare className="w-6 h-6" />
              Join Discord Server
            </a>
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-green-400">Online</div>
                <div className="text-gray-500">24/7 Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-purple-400">VIP</div>
                <div className="text-gray-500">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-cyan-400">Fast</div>
                <div className="text-gray-500">Response</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10">
                <img src={logo} alt="Nextloop Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-orbitron text-xl font-bold gradient-text">NEXTLOOP</span>
            </div>
            <div className="text-gray-500 text-center text-sm">
              © 2026 Nextloop. All rights reserved. Not affiliated with KRAFTON or BGMI.
            </div>
            <div className="flex gap-4">
              <a href="https://discord.gg/uCsXwWhXWz" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-cyan-500/20 flex items-center justify-center transition group">
                <MessageSquare className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
