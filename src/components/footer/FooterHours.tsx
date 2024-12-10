import { motion } from 'framer-motion';

export const FooterHours = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h4 className="text-lg font-medium mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                    <span className="block font-medium text-white">Monday - Friday</span>
                    11:00 AM - 10:00 PM
                </li>
                <li>
                    <span className="block font-medium text-white">Saturday - Sunday</span>
                    10:00 AM - 11:00 PM
                </li>
            </ul>
        </motion.div>
    );
};