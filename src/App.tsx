import {
  TrendingUp,
  Brain,
  GraduationCap,
  Palette,
  ArrowUpRight,
  Mail,
  Twitter,
  Linkedin,
  Layers,
  Target,
  BookOpen,
  Zap,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* ARV Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#d4af37] flex items-center justify-center">
              <span className="text-[#0f0f0f] font-bold text-sm tracking-tight">ARV</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-12 text-sm tracking-wide">
            <a href="#about" className="text-gray-400 hover:text-[#d4af37] transition-colors">About</a>
            <a href="#expertise" className="text-gray-400 hover:text-[#d4af37] transition-colors">Expertise</a>
            <a href="#projects" className="text-gray-400 hover:text-[#d4af37] transition-colors">Projects</a>
            <a href="#connect" className="text-gray-400 hover:text-[#d4af37] transition-colors">Connect</a>
          </div>

          <div className="text-xs text-gray-600 tracking-wider">EST. 2021</div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#080810] to-[#0a0a14]" />

        {/* Abstract Market Imagery */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            {/* Grid */}
            {[...Array(24)].map((_, i) => (
              <line key={`v-${i}`} x1={i * 60} y1="0" x2={i * 60} y2="900" stroke="#d4af37" strokeWidth="0.3" />
            ))}
            {[...Array(15)].map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 60} x2="1440" y2={i * 60} stroke="#d4af37" strokeWidth="0.3" />
            ))}
            {/* Trend Lines */}
            <path d="M 0 700 Q 300 650, 500 550 T 900 400 T 1300 200 T 1440 100" fill="none" stroke="#d4af37" strokeWidth="1.5" />
            <path d="M 0 750 Q 400 700, 700 600 T 1100 350 T 1440 250" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.5" />
            {/* Data Points */}
            <circle cx="500" cy="550" r="3" fill="#d4af37" />
            <circle cx="900" cy="400" r="3" fill="#d4af37" />
            <circle cx="1300" cy="200" r="3" fill="#d4af37" />
            {/* Horizontal accent lines */}
            <line x1="200" y1="400" x2="600" y2="400" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="700" y1="300" x2="1200" y2="300" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#d4af37]/30 bg-[#d4af37]/5 px-4 py-2 mb-10">
            <span className="text-[#d4af37] text-xs tracking-[0.2em] uppercase">Portfolio</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            Aditya Raj <span className="text-[#d4af37]">Verma</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide mb-4">
            Founder <span className="text-[#d4af37]/50">•</span> Trader <span className="text-[#d4af37]/50">•</span> Builder
          </p>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-500 font-light mb-20">
            Building in public. Failed forward. Still shipping.
          </p>

          {/* CTA */}
          <a
            href="#projects"
            className="inline-flex items-center gap-3 border border-[#d4af37]/40 text-[#d4af37] px-8 py-4 hover:bg-[#d4af37]/10 transition-colors"
          >
            View Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#d4af37]/50 to-transparent" />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">About</span>
            <div className="w-16 h-px bg-[#d4af37]/30 mx-auto mt-6" />
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8">
              I'm a founder obsessed with markets, AI, and building things that matter.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
              Failed multiple times. Learned everything. Building anyway.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              I trade markets, build AI systems, and help educators scale.
            </p>
            <p className="text-lg text-[#d4af37] font-light italic mb-8">
              "The best traders are builders. The best builders are learners."
            </p>
            <p className="text-sm text-gray-600 tracking-wide">
              Obsessing over markets and building since 2021.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Quotes Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <p className="text-gray-400 italic mb-4 leading-relaxed text-sm">
                "The key to great product is obsession."
              </p>
              <p className="text-[#d4af37] text-xs tracking-wider">— ELON MUSK</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 italic mb-4 leading-relaxed text-sm">
                "Price is what you pay. Value is what you get."
              </p>
              <p className="text-[#d4af37] text-xs tracking-wider">— WARREN BUFFETT</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 italic mb-4 leading-relaxed text-sm">
                "In markets, patience beats perfection. In building, speed beats polish."
              </p>
              <p className="text-[#d4af37] text-xs tracking-wider">— TRADING WISDOM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section id="expertise" className="py-32 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">Expertise</span>
            <h2 className="text-3xl md:text-4xl font-light mt-6 mb-4">Core Competencies</h2>
            <div className="w-16 h-px bg-[#d4af37]/30 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* AI Systems */}
            <div className="group bg-[#0a0a0a] border border-white/5 p-8 hover:border-[#d4af37]/30 transition-colors">
              <div className="w-10 h-10 border border-[#d4af37]/30 flex items-center justify-center mb-6 group-hover:border-[#d4af37] transition-colors">
                <Brain className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h3 className="text-white font-medium mb-2">AI Systems & Automation</h3>
              <p className="text-gray-500 text-sm">Building intelligent workflows and automated decision systems</p>
            </div>

            {/* Market Structure */}
            <div className="group bg-[#0a0a0a] border border-white/5 p-8 hover:border-[#d4af37]/30 transition-colors">
              <div className="w-10 h-10 border border-[#d4af37]/30 flex items-center justify-center mb-6 group-hover:border-[#d4af37] transition-colors">
                <TrendingUp className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h3 className="text-white font-medium mb-2">Market Structure & Trading</h3>
              <p className="text-gray-500 text-sm">Technical & institutional approach to market analysis</p>
            </div>

            {/* Content Building */}
            <div className="group bg-[#0a0a0a] border border-white/5 p-8 hover:border-[#d4af37]/30 transition-colors">
              <div className="w-10 h-10 border border-[#d4af37]/30 flex items-center justify-center mb-6 group-hover:border-[#d4af37] transition-colors">
                <Zap className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h3 className="text-white font-medium mb-2">Content & Digital Building</h3>
              <p className="text-gray-500 text-sm">Creating systems for scalable content production</p>
            </div>

            {/* Education */}
            <div className="group bg-[#0a0a0a] border border-white/5 p-8 hover:border-[#d4af37]/30 transition-colors">
              <div className="w-10 h-10 border border-[#d4af37]/30 flex items-center justify-center mb-6 group-hover:border-[#d4af37] transition-colors">
                <GraduationCap className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h3 className="text-white font-medium mb-2">Education & Mentorship</h3>
              <p className="text-gray-500 text-sm">Teaching trading, AI, and building to students</p>
            </div>

            {/* Streetwear Brand */}
            <div className="group bg-[#0a0a0a] border border-white/5 p-8 hover:border-[#d4af37]/30 transition-colors md:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 border border-[#d4af37]/30 flex items-center justify-center mb-6 group-hover:border-[#d4af37] transition-colors">
                <Palette className="w-5 h-5 text-[#d4af37]" />
              </div>
              <h3 className="text-white font-medium mb-2">Streetwear Brand Strategy</h3>
              <p className="text-gray-500 text-sm">Building ADYA - minimal luxury for conscious creators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">Projects</span>
            <h2 className="text-3xl md:text-4xl font-light mt-6 mb-4">What I'm Building</h2>
            <div className="w-16 h-px bg-[#d4af37]/30 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* LUMEXIS Studio */}
            <div className="group bg-[#0f0f0f] border border-white/5 p-10 hover:border-[#d4af37]/30 transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-[#d4af37] flex items-center justify-center">
                  <Layers className="w-7 h-7 text-[#0f0f0f]" />
                </div>
                <span className="text-xs text-[#d4af37] tracking-wider uppercase border border-[#d4af37]/30 px-3 py-1">Active</span>
              </div>
              <h3 className="text-2xl text-white font-light mb-2">LUMEXIS Studio</h3>
              <p className="text-gray-500 text-sm mb-4">Thought leadership & AI-powered content systems</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building frameworks for creators to scale their voice without losing authenticity.
              </p>
            </div>

            {/* ADYA */}
            <div className="group bg-[#0f0f0f] border border-white/5 p-10 hover:border-[#d4af37]/30 transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 border border-[#d4af37] flex items-center justify-center">
                  <span className="text-[#d4af37] font-bold text-lg">A</span>
                </div>
                <span className="text-xs text-gray-400 tracking-wider uppercase border border-white/10 px-3 py-1">Building</span>
              </div>
              <h3 className="text-2xl text-white font-light mb-2">ADYA</h3>
              <p className="text-gray-500 text-sm mb-4">Minimal Luxury Streetwear Brand</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Quiet premium positioning for Tier 1 youth audience. Luxury through restraint.
              </p>
            </div>

            {/* AI Trading Framework */}
            <div className="group bg-[#0f0f0f] border border-white/5 p-10 hover:border-[#d4af37]/30 transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 border border-[#d4af37] flex items-center justify-center">
                  <Target className="w-7 h-7 text-[#d4af37]" />
                </div>
                <span className="text-xs text-green-400 tracking-wider uppercase border border-green-400/30 px-3 py-1">Live</span>
              </div>
              <h3 className="text-2xl text-white font-light mb-2">AI Trading Framework</h3>
              <p className="text-gray-500 text-sm mb-4">Institutional-grade market analysis tools</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Structure-based trading decisions. Systematic execution built on market principles.
              </p>
            </div>

            {/* Educational Platform */}
            <div className="group bg-[#0f0f0f] border border-white/5 p-10 hover:border-[#d4af37]/30 transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 border border-[#d4af37] flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-[#d4af37]" />
                </div>
                <span className="text-xs text-blue-400 tracking-wider uppercase border border-blue-400/30 px-3 py-1">Scaling</span>
              </div>
              <h3 className="text-2xl text-white font-light mb-2">Educational Platform</h3>
              <p className="text-gray-500 text-sm mb-4">Teaching trading, AI, and building</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Reaching 1000+ students with practical knowledge on markets and building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="connect" className="py-32 px-6 bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">Connect</span>
          <h2 className="text-3xl md:text-4xl font-light mt-6 mb-6">Let's Build Together</h2>
          <p className="text-gray-400 text-lg mb-4">
            Building in public. Ship first, perfect later.
          </p>
          <p className="text-gray-500 mb-12">
            Let's connect if you believe in failing forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@adityarajverma.com"
              className="inline-flex items-center justify-center gap-3 bg-[#d4af37] text-[#0f0f0f] px-8 py-4 font-medium hover:bg-[#e5c158] transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 border border-[#d4af37]/40 text-[#d4af37] px-8 py-4 hover:bg-[#d4af37]/10 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#d4af37] flex items-center justify-center">
                <span className="text-[#0f0f0f] font-bold text-xs">ARV</span>
              </div>
              <span className="text-gray-400 text-sm">Aditya Raj Verma</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="mailto:hello@adityarajverma.com"
                className="text-gray-500 hover:text-[#d4af37] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/adityarajverma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#d4af37] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/adityarajverma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#d4af37] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm">
              Obsessing over markets and building since 2021
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
