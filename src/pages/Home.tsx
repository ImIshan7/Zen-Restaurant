import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReviewCard } from '../components/ReviewCard';
import { EventCard } from '../components/EventCard';
import { FeaturedDish } from '../components/FeaturedDish';

const featuredDishes = [
    {
        name: "Wagyu Beef Teriyaki",
        description: "Premium grade Wagyu beef glazed with our house-made teriyaki sauce, served with seasonal vegetables",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: "$45",
        link: "/menu",
        prepTime: "25-30 mins",
        category: "Signature Dish"
    },
    {
        name: "Dragon Roll Deluxe",
        description: "Fresh eel and cucumber topped with avocado, tobiko, and our special unagi sauce",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: "$28",
        link: "/menu",
        prepTime: "20 mins",
        category: "Sushi"
    },
    {
        name: "Matcha Tiramisu",
        description: "Layers of matcha-soaked ladyfingers and mascarpone cream, dusted with premium green tea powder",
        image: "https://images.unsplash.com/photo-1556040220-4096d522378d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: "$14",
        link: "/menu",
        prepTime: "10 mins",
        category: "Dessert"
    }
];

export const Home = () => {
    return (
        <div>
            <Hero />
            <ExperienceSection />
            <AboutSection />

            {/* Featured Dishes Section */}
            <section className="py-24 bg-secondary-beige relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-serif mb-4">Featured Dishes</h2>
                        <div className="w-20 h-1 bg-primary-terracotta rounded-full mx-auto mb-6" />
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Experience our chef's specially curated selection of signature dishes
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredDishes.map((dish) => (
                            <FeaturedDish key={dish.name} {...dish} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-serif mb-4">Upcoming Events</h2>
                        <div className="w-20 h-1 bg-primary-terracotta rounded-full mx-auto mb-6" />
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Join us for special culinary events and themed nights
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <EventCard
                            title="Sushi Making Workshop"
                            date="March 15, 2024"
                            time="6:00 PM"
                            description="Learn the art of sushi making from our master chef"
                            image="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        />
                        <EventCard
                            title="Wine Tasting Evening"
                            date="March 22, 2024"
                            time="7:00 PM"
                            description="Experience premium wines paired with Asian cuisine"
                            image="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        />
                        <EventCard
                            title="Live Jazz Night"
                            date="March 29, 2024"
                            time="8:00 PM"
                            description="Enjoy smooth jazz while dining in style"
                            image="https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        />
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="py-24 bg-secondary-beige">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-serif mb-4">What Our Guests Say</h2>
                        <div className="w-20 h-1 bg-primary-terracotta rounded-full mx-auto mb-6" />
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Read reviews from our valued customers
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ReviewCard
                            name="Sarah Johnson"
                            rating={5}
                            comment="The best Asian fusion restaurant I've ever been to. The atmosphere is perfect and the food is incredible!"
                            date="2 days ago"
                            image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        />
                        <ReviewCard
                            name="Michael Chen"
                            rating={5}
                            comment="Authentic flavors with a modern twist. The service is impeccable and the presentation is beautiful."
                            date="1 week ago"
                            image="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        />
                        <ReviewCard
                            name="Emily Williams"
                            rating={4}
                            comment="Great ambiance and delicious food. The wine pairing suggestions were excellent!"
                            date="2 weeks ago"
                            image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};