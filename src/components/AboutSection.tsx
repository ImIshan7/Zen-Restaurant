import { motion } from 'framer-motion';
import { Award, Leaf, Users } from 'lucide-react';

export const AboutSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-full overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="Chef preparing food"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Restaurant interior"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl font-serif mb-4">Our Story</h2>
                            <div className="w-20 h-1 bg-primary-terracotta rounded-full mb-6"></div>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Founded in 1970, Crate Zen has been a pioneer in bringing authentic Asian fusion cuisine to the heart of the city. Our journey began with a simple vision: to create a dining experience that harmoniously blends traditional flavors with modern culinary innovation.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Today, under the guidance of our award-winning chefs, we continue to push boundaries while staying true to our roots, serving dishes that tell stories and create memories.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <AboutFeature
                                icon={<Award className="w-6 h-6" />}
                                title="Excellence"
                                description="50+ Years of Culinary Excellence"
                            />
                            <AboutFeature
                                icon={<Leaf className="w-6 h-6" />}
                                title="Fresh"
                                description="Local & Sustainable Ingredients"
                            />
                            <AboutFeature
                                icon={<Users className="w-6 h-6" />}
                                title="Service"
                                description="Exceptional Guest Experience"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const AboutFeature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-primary-olive/10 text-primary-olive rounded-full flex items-center justify-center mb-3">
            {icon}
        </div>
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);