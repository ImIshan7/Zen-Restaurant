import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center">
            {/* Background Image with Enhanced Gradient */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent z-10" />
                <motion.div
                    initial={{ scale: 1.1, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-full"
                >
                    <img
                        src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Restaurant ambiance"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            {/* Hero Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        {/* Animated Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20"
                        >
                            <Star className="w-4 h-4 text-secondary-golden animate-pulse" />
                            <span className="text-sm font-medium">Michelin-Starred Restaurant</span>
                        </motion.div>

                        {/* Main Text with Enhanced Highlighting */}
                        <div className="space-y-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-5xl md:text-7xl font-serif leading-tight"
                            >
                                <span className="text-white">Experience</span>{' '}
                                <span className="text-white">Fine</span>
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-terracotta to-secondary-golden"
                                >
                                    Asian Cuisine
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-xl text-white/80 max-w-lg font-light"
                            >
                                Embark on a culinary journey where traditional flavors meet modern innovation,
                                creating an unforgettable dining experience.
                            </motion.p>
                        </div>

                        {/* CTA Buttons with Enhanced Design */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                to="/reservations"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-terracotta to-secondary-golden hover:from-primary-terracotta/90 hover:to-secondary-golden/90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group shadow-lg hover:shadow-xl"
                            >
                                Book a Table
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/menu"
                                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30"
                            >
                                View Menu
                            </Link>
                        </motion.div>
                    </div>

                    {/* Info Cards with Enhanced Glass Effect */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="hidden lg:grid grid-cols-1 gap-6"
                    >
                        <InfoCard
                            icon={<Clock className="w-6 h-6" />}
                            title="Opening Hours"
                            description="Mon-Fri: 11AM - 10PM | Sat-Sun: 10AM - 11PM"
                        />
                        <InfoCard
                            icon={<MapPin className="w-6 h-6" />}
                            title="Location"
                            description="123 Culinary Street, Foodie District"
                        />
                        <InfoCard
                            icon={<Star className="w-6 h-6" />}
                            title="Recognition"
                            description="Michelin Star Restaurant Since 2020"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2 backdrop-blur-sm"
                >
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 bg-gradient-to-b from-white to-white/50 rounded-full"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

const InfoCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-white border border-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
        <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-white/20 to-white/5 rounded-xl">
                {icon}
            </div>
            <div>
                <h3 className="font-medium text-lg mb-2">{title}</h3>
                <p className="text-white/70 text-sm">{description}</p>
            </div>
        </div>
    </motion.div>
);