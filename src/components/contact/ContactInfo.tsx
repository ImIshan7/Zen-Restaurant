import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactDetails = [
    {
        icon: <MapPin className="w-6 h-6" />,
        title: "Visit Us",
        content: "123 Culinary Street, Foodie District, FC 12345",
        color: "bg-primary-terracotta/10 text-primary-terracotta"
    },
    {
        icon: <Phone className="w-6 h-6" />,
        title: "Call Us",
        content: "+1 (555) 123-4567",
        color: "bg-primary-olive/10 text-primary-olive"
    },
    {
        icon: <Mail className="w-6 h-6" />,
        title: "Email Us",
        content: "info@cratezen.com",
        color: "bg-secondary-golden/10 text-secondary-golden"
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Opening Hours",
        content: "Mon-Fri: 11AM - 10PM\nSat-Sun: 10AM - 11PM",
        color: "bg-accent-cherry/10 text-accent-cherry"
    }
];

export const ContactInfo = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactDetails.map((detail, index) => (
                <motion.div
                    key={detail.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white/90 backdrop-blur-lg p-6 rounded-xl shadow-lg"
                >
                    <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${detail.color}`}>
                            {detail.icon}
                        </div>
                        <div>
                            <h3 className="font-medium text-lg mb-2">{detail.title}</h3>
                            <p className="text-gray-600 whitespace-pre-line">{detail.content}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};