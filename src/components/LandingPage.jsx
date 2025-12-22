import { motion } from 'framer-motion';
import { Brain, Database, Mic, Globe, ArrowRight, Sparkles } from 'lucide-react';

const LandingPage = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-zinc-950 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
                <motion.div
                    className="max-w-5xl mx-auto text-center space-y-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight gradient-text">
                        The Resume is Dead.<br />Long Live the Digital Twin.
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        Turn your 10+ years of experience into an interactive AI agent (aka Ai CV) that answers for you, 24/7.
                    </p>

                    {/* Video Container */}
                    <motion.div
                        className="relative mt-12 rounded-2xl overflow-hidden glow-purple max-w-4xl mx-auto"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <video
                            className="w-full aspect-video object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/demo-video.mov" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>

                    <motion.button
                        className="mt-12 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg rounded-full transition-all duration-300 inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Secure Your Build Slot
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            </section>

            {/* Manifesto Section */}
            <section className="relative py-24 px-6">
                <motion.div
                    className="max-w-4xl mx-auto glass-card rounded-3xl p-12 md:p-16"
                    {...fadeInUp}
                >
                    <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed italic">
                        "Your role as a manager/leader is defined by judgment, trade-offs, and systems thinking. A static PDF cannot capture this. It lists tasks, not decisions. In a market flooded with algorithmic noise, traditional resumes are losing their signal. You need a format that proves you understand the future."
                    </p>
                </motion.div>
            </section>

            {/* Solution Grid */}
            <section className="relative py-24 px-6">
                <motion.div
                    className="max-w-6xl mx-auto"
                    {...fadeInUp}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                        What You Get
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Card 1 - The Brain */}
                        <motion.div
                            className="glass-card rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300"
                            whileHover={{ y: -5 }}
                            {...fadeInUp}
                        >
                            <Brain className="w-12 h-12 text-indigo-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-3 text-white">The Barbell Brain</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Trained to answer high-level strategy AND operational execution. Your Digital Twin understands both the 30,000-foot view and the ground-level details.
                            </p>
                        </motion.div>

                        {/* Card 2 - The Data */}
                        <motion.div
                            className="glass-card rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300"
                            whileHover={{ y: -5 }}
                            {...fadeInUp}
                            transition={{ delay: 0.1 }}
                        >
                            <Database className="w-12 h-12 text-violet-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-3 text-white">War Stories Module</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                We upload your specific wins, turnarounds, and metrics. Real results, real impact, real proof of your executive capabilities.
                            </p>
                        </motion.div>

                        {/* Card 3 - The Voice */}
                        <motion.div
                            className="glass-card rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300"
                            whileHover={{ y: -5 }}
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            <Mic className="w-12 h-12 text-indigo-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-3 text-white">Voice Calibration</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Tuned to sound like an Operator, not a generic chatbot. Your Digital Twin speaks with authority, precision, and executive presence.
                            </p>
                        </motion.div>

                        {/* Card 4 - Live Hosting */}
                        <motion.div
                            className="glass-card rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300"
                            whileHover={{ y: -5 }}
                            {...fadeInUp}
                            transition={{ delay: 0.3 }}
                        >
                            <Globe className="w-12 h-12 text-violet-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-3 text-white">Instant Deployment</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                You get a personal link (yourname.replit.app or your own domain) to send to recruiters. Live, interactive, and available 24/7 to showcase your expertise.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Authority Section */}
            <section className="relative py-24 px-6">
                <motion.div
                    className="max-w-5xl mx-auto glass-card rounded-3xl p-12 md:p-16"
                    {...fadeInUp}
                >
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 p-1">
                                <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center">
                                    <span className="text-4xl md:text-5xl font-bold text-white">VS</span>
                                </div>
                            </div>
                        </div>

                        {/* Text */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Built by an Operator, Not a Developer
                            </h2>
                            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                                I'm <span className="text-indigo-400 font-semibold">Vinos Samuel</span>. I've spent 15 years designing workforce strategies for Netflix, Cielo, and Randstad. I want to get you hired in todays tough market by positioning your ahead of the crowd. I know what Recruiters and Hiring Leaders look for - because I've been one.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Pricing Section */}
            <section className="relative py-24 px-6 pb-32">
                <motion.div
                    className="max-w-2xl mx-auto"
                    {...fadeInUp}
                >
                    <div className="glass-card rounded-3xl p-12 md:p-16 relative overflow-hidden">
                        {/* Scarcity Badge */}
                        <div className="absolute top-6 right-6">
                            <span className="inline-block px-4 py-2 bg-indigo-600/20 border border-indigo-500 rounded-full text-indigo-400 text-sm font-semibold">
                                Beta Cohort - Limited to 5 Executives
                            </span>
                        </div>

                        <div className="text-center space-y-8 mt-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-white">
                                Secure Your Slot
                            </h2>

                            {/* Pricing */}
                            <div className="space-y-2">
                                <p className="text-2xl text-zinc-500 line-through">$997</p>
                                <p className="text-6xl md:text-7xl font-bold text-white">$499</p>
                                <p className="text-zinc-400">One-time investment</p>
                            </div>

                            {/* Includes */}
                            <div className="space-y-3 text-left max-w-md mx-auto">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-zinc-300">60-min Strategy Extraction Call</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-zinc-300">Custom AI Digital Twin Build</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-zinc-300">Live Hosting & Deployment</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-zinc-300">Executive Launch Kit</p>
                                </div>
                            </div>

                            {/* CTA Button with Pulse */}
                            <motion.button
                                className="mt-8 px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xl rounded-full transition-all duration-300 inline-flex items-center gap-3 pulse-animation"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Secure My Slot
                                <ArrowRight className="w-6 h-6" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default LandingPage;
