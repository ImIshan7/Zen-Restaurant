import { motion } from 'framer-motion';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';

export const Contact = () => {
    return (
        <div className="min-h-screen relative">
            {/* Background Image with Parallax Effect */}
            <div className="fixed inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Restaurant interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 backdrop-blur-[2px]" />
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Header Section */}
                <div className="pt-32 pb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
                    >
                        <h1 className="text-5xl font-serif text-white mb-6">Contact Us</h1>
                        <div className="w-20 h-1 bg-primary-terracotta rounded-full mx-auto mb-6" />
                        <p className="text-xl text-white/90">
                            We'd love to hear from you. Get in touch with us for reservations,
                            feedback, or any questions you might have.
                        </p>
                    </motion.div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="text-white">
                                <h2 className="text-3xl font-serif mb-4">Get in Touch</h2>
                                <p className="text-white/80 mb-8">
                                    Whether you're looking to make a reservation, provide feedback, or
                                    simply want to say hello, we're here to help.
                                </p>
                            </div>
                            <ContactInfo />
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <ContactForm />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};