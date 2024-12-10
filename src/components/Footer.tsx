import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FooterNewsletter } from './footer/FooterNewsletter';
import { FooterSocial } from './footer/FooterSocial';
import { FooterLinks } from './footer/FooterLinks';
import { FooterContact } from './footer/FooterContact';
import { FooterHours } from './footer/FooterHours';

export const Footer = () => {
    return (
        <footer className="bg-secondary-charcoal text-white relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-5" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <FooterNewsletter />

                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link to="/" className="text-2xl font-serif">Crate Zen</Link>
                        <p className="text-gray-400 text-sm">
                            Experience the perfect harmony of traditional and modern Asian cuisine in the heart of the city.
                        </p>
                        <FooterSocial />
                    </div>

                    <FooterLinks />
                    <FooterContact />
                    <FooterHours />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="py-6 border-t border-gray-700 text-center text-sm text-gray-400"
                >
                    <p>© {new Date().getFullYear()} Crate Zen. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
};