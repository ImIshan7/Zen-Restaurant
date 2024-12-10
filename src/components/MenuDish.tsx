import { motion } from 'framer-motion';
import { Flame, Leaf, Star, Info } from 'lucide-react';
import { useState } from 'react';

interface MenuDishProps {
    name: string;
    description: string;
    price: number;
    image: string;
    spicy?: boolean;
    vegetarian?: boolean;
    popular?: boolean;
    index: number;
}

export const MenuDish = ({
                             name,
                             description,
                             price,
                             image,
                             spicy,
                             vegetarian,
                             popular,
                             index
                         }: MenuDishProps) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
            <div className="relative aspect-[16/9] overflow-hidden">
                <motion.img
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: showInfo ? 1 : 0, y: showInfo ? 0 : 20 }}
                    className="absolute bottom-0 left-0 right-0 p-4 text-white"
                >
                    <div className="flex gap-2 justify-end">
                        {spicy && (
                            <motion.span
                                whileHover={{ scale: 1.1 }}
                                className="bg-accent-cherry/90 p-2 rounded-full"
                                title="Spicy"
                            >
                                <Flame className="w-4 h-4" />
                            </motion.span>
                        )}
                        {vegetarian && (
                            <motion.span
                                whileHover={{ scale: 1.1 }}
                                className="bg-primary-olive/90 p-2 rounded-full"
                                title="Vegetarian"
                            >
                                <Leaf className="w-4 h-4" />
                            </motion.span>
                        )}
                        {popular && (
                            <motion.span
                                whileHover={{ scale: 1.1 }}
                                className="bg-secondary-golden/90 p-2 rounded-full"
                                title="Popular"
                            >
                                <Star className="w-4 h-4" />
                            </motion.span>
                        )}
                    </div>
                </motion.div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-medium mb-2">{name}</h3>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowInfo(!showInfo)}
                            className="flex items-center gap-2 text-sm text-primary-terracotta hover:text-primary-terracotta/80 transition-colors"
                        >
                            <Info className="w-4 h-4" />
                            <span>{showInfo ? 'Hide details' : 'Show details'}</span>
                        </motion.button>
                    </div>
                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="text-xl font-serif text-primary-terracotta bg-primary-terracotta/10 px-3 py-1 rounded-full"
                    >
                        ${price}
                    </motion.span>
                </div>

                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: showInfo ? 'auto' : 0,
                        opacity: showInfo ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <p className="text-gray-600 mt-4">{description}</p>
                    {(spicy || vegetarian || popular) && (
                        <div className="mt-4 flex gap-4 text-sm">
                            {spicy && <span className="text-accent-cherry">Spicy dish</span>}
                            {vegetarian && <span className="text-primary-olive">Vegetarian</span>}
                            {popular && <span className="text-secondary-golden">Chef's recommendation</span>}
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};