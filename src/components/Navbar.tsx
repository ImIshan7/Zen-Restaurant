import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed w-full z-50 transition-all duration-300 ${
                    isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link
                            to="/"
                            className={`text-2xl font-serif font-bold transition-colors ${
                                isScrolled ? 'text-primary-terracotta' : 'text-white'
                            }`}
                        >
                            Crate Zen
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <div className="flex space-x-8">
                                <NavLink to="/" isScrolled={isScrolled}>Home</NavLink>
                                <NavLink to="/menu" isScrolled={isScrolled}>Menu</NavLink>
                                <NavLink to="/reservations" isScrolled={isScrolled}>Reservations</NavLink>
                                <NavLink to="/gallery" isScrolled={isScrolled}>Gallery</NavLink>
                                <NavLink to="/contact" isScrolled={isScrolled}>Contact</NavLink>
                            </div>

                            <a
                                href="tel:+15551234567"
                                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                                    isScrolled
                                        ? 'bg-primary-terracotta text-white hover:bg-primary-terracotta/90'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                            >
                                <Phone className="w-4 h-4" />
                                <span className="text-sm font-medium">Book Now</span>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <X className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
                            ) : (
                                <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t"
                        >
                            <div className="px-4 pt-2 pb-3 space-y-1">
                                <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                                <MobileNavLink to="/menu" onClick={() => setIsOpen(false)}>Menu</MobileNavLink>
                                <MobileNavLink to="/reservations" onClick={() => setIsOpen(false)}>Reservations</MobileNavLink>
                                <MobileNavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</MobileNavLink>
                                <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Overlay for mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/20 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

const NavLink = ({ to, children, isScrolled }: { to: string; children: React.ReactNode; isScrolled: boolean }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                isScrolled
                    ? isActive
                        ? 'text-primary-terracotta'
                        : 'text-gray-700 hover:text-primary-terracotta'
                    : isActive
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
            }`}
        >
            {children}
            {isActive && (
                <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        isScrolled ? 'bg-primary-terracotta' : 'bg-white'
                    }`}
                />
            )}
        </Link>
    );
};

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                isActive
                    ? 'text-primary-terracotta bg-primary-terracotta/10'
                    : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={onClick}
        >
            {children}
        </Link>
    );
};