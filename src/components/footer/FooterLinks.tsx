import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface FooterLinkProps {
    to: string;
    children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => (
    <li>
        <Link
            to={to}
            className="text-gray-400 hover:text-white transition-colors"
        >
            {children}
        </Link>
    </li>
);

export const FooterLinks = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
                <FooterLink to="/menu">Menu</FooterLink>
                <FooterLink to="/reservations">Reservations</FooterLink>
                <FooterLink to="/gallery">Gallery</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink to="/events">Events</FooterLink>
            </ul>
        </motion.div>
    );
};