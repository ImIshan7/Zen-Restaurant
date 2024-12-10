import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const FooterNewsletter = () => {
    return (
        <div className="py-12 border-b border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-serif mb-2">Stay Connected</h3>
                    <p className="text-gray-400">
                        Subscribe to our newsletter for exclusive offers and culinary insights
                    </p>
                </motion.div>
                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-terracotta"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-primary-terracotta rounded-lg hover:bg-primary-terracotta/90 transition-colors flex items-center gap-2 group"
                    >
                        Subscribe
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.form>
            </div>
        </div>
    );
};