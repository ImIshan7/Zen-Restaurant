import { motion } from 'framer-motion';

export const FooterContact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <address className="text-gray-400 text-sm not-italic space-y-2">
                <p>123 Culinary Street</p>
                <p>Foodie District, FC 12345</p>
                <p>
                    <a href="tel:+15551234567" className="hover:text-white transition-colors">
                        +1 (555) 123-4567
                    </a>
                </p>
                <p>
                    <a href="mailto:info@cratezen.com" className="hover:text-white transition-colors">
                        info@cratezen.com
                    </a>
                </p>
            </address>
        </motion.div>
    );
};