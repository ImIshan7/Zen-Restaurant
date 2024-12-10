import { motion } from 'framer-motion';
import { ArrowRight, Timer, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedDishProps {
    name: string;
    description: string;
    image: string;
    price: string;
    link: string;
    prepTime?: string;
    category?: string;
}

export const FeaturedDish = ({
                                 name,
                                 description,
                                 image,
                                 price,
                                 link,
                                 prepTime = "25-30 mins",
                                 category = "Main Course"
                             }: FeaturedDishProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-xl"
        >
            <div className="absolute top-4 right-4 z-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-secondary-golden text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg"
                >
                    {price}
                </motion.div>
            </div>

            <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 transition-transform duration-300 group-hover:translate-y-0">
                <div className="space-y-4">
                    <div className="flex items-center gap-4 text-white/80">
                        <div className="flex items-center gap-1">
                            <Timer className="w-4 h-4" />
                            <span className="text-sm">{prepTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Utensils className="w-4 h-4" />
                            <span className="text-sm">{category}</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-serif text-white mb-2">{name}</h3>
                        <p className="text-sm text-gray-200 mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                            {description}
                        </p>
                    </div>

                    <Link
                        to={link}
                        className="inline-flex items-center gap-2 text-secondary-golden hover:text-white transition-colors"
                    >
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};