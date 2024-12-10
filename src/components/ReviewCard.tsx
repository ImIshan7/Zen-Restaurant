import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReviewCardProps {
    name: string;
    rating: number;
    comment: string;
    date: string;
    image?: string;
    role?: string;
}

export const ReviewCard = ({ name, rating, comment, date, image, role = "Verified Customer" }: ReviewCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
            {image && (
                <div className="relative aspect-[3/2] overflow-hidden">
                    <motion.img
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        src={image}
                        alt={`Review by ${name}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 group-hover:from-black/80 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex text-secondary-golden mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-5 h-5 ${i < rating ? 'fill-current' : 'stroke-current'}`}
                                />
                            ))}
                        </div>
                        <p className="text-white text-sm">{date}</p>
                    </div>
                </div>
            )}
            <div className="p-6 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-terracotta/10" />
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 mb-6 italic relative z-10"
                >
                    "{comment}"
                </motion.p>
                <div className="flex items-center gap-4">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-terracotta to-secondary-golden flex items-center justify-center text-white font-semibold shadow-lg"
                    >
                        {name.charAt(0)}
                    </motion.div>
                    <div>
                        <p className="font-medium text-gray-900">{name}</p>
                        <p className="text-sm text-primary-terracotta">{role}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};