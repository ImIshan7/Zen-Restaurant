import { motion } from 'framer-motion';
import { MenuDish } from './MenuDish';

interface MenuItem {
    name: string;
    description: string;
    price: number;
    image: string;
    spicy?: boolean;
    vegetarian?: boolean;
    popular?: boolean;
}

interface MenuCategoryProps {
    name: string;
    description: string;
    items: MenuItem[];
    index: number;
}

export const MenuCategory = ({ name, description, items, index }: MenuCategoryProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
        >
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-serif text-primary-terracotta mb-4">{name}</h2>
                <div className="w-20 h-1 bg-primary-terracotta rounded-full mx-auto mb-4" />
                <p className="text-gray-600">{description}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {items.map((item, itemIndex) => (
                    <MenuDish key={item.name} {...item} index={itemIndex} />
                ))}
            </div>
        </motion.div>
    );
};