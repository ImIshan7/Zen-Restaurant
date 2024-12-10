import { motion } from 'framer-motion';
import { Award, Leaf, Users, Star, Clock, MapPin } from 'lucide-react';

const features = [
    {
        icon: <Star className="w-6 h-6" />,
        title: "Michelin Starred",
        description: "Experience our award-winning cuisine crafted by renowned chefs",
        color: "bg-primary-terracotta/10 text-primary-terracotta",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Fresh Ingredients",
        description: "Daily sourced local ingredients for the finest quality dishes",
        color: "bg-primary-olive/10 text-primary-olive",
        image: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <MapPin className="w-6 h-6" />,
        title: "Prime Location",
        description: "Located in the heart of the city with stunning views",
        color: "bg-secondary-golden/10 text-secondary-golden",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <Award className="w-6 h-6" />,
        title: "Excellence",
        description: "50+ Years of Culinary Excellence",
        color: "bg-accent-cherry/10 text-accent-cherry",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <Leaf className="w-6 h-6" />,
        title: "Sustainable",
        description: "Committed to eco-friendly practices and local sourcing",
        color: "bg-primary-olive/10 text-primary-olive",
        image: "https://images.unsplash.com/photo-1523367310297-83d531cee9fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Service",
        description: "Exceptional guest experience with personalized attention",
        color: "bg-secondary-golden/10 text-secondary-golden",
        image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

export const ExperienceSection = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-secondary-beige/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-5" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-serif mb-4 bg-gradient-to-r from-primary-terracotta to-secondary-golden bg-clip-text text-transparent">
                            Experience Excellence
                        </h2>
                    </motion.div>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-terracotta to-secondary-golden rounded-full mx-auto mb-6" />
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Discover why Crate Zen is the perfect destination for your culinary journey
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                />
                            </div>
                            <div className="relative p-8 backdrop-blur-sm">
                                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-terracotta transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};