import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const ContactForm = () => {
    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl"
        >
            <h2 className="text-3xl font-serif text-primary-terracotta mb-6">Send us a Message</h2>
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <label className="block text-secondary-charcoal font-medium mb-2">Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-terracotta focus:ring-2 focus:ring-primary-terracotta/20 transition-all duration-300"
                            required
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <label className="block text-secondary-charcoal font-medium mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-terracotta focus:ring-2 focus:ring-primary-terracotta/20 transition-all duration-300"
                            required
                        />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <label className="block text-secondary-charcoal font-medium mb-2">Subject</label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-terracotta focus:ring-2 focus:ring-primary-terracotta/20 transition-all duration-300"
                        required
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <label className="block text-secondary-charcoal font-medium mb-2">Message</label>
                    <textarea
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-terracotta focus:ring-2 focus:ring-primary-terracotta/20 transition-all duration-300 resize-none"
                        required
                    ></textarea>
                </motion.div>

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-terracotta to-secondary-golden text-white font-medium py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </div>
        </motion.form>
    );
};