import { motion } from 'framer-motion';
import { PageHeader } from '../components/PageHeader';
import { MenuCategory } from '../components/MenuCategory';

const menuData = [
    {
        name: 'Appetizers',
        description: 'Start your culinary journey with our exquisite selection of starters',
        items: [
            {
                name: 'Crispy Spring Rolls',
                description: 'Vegetables and glass noodles with sweet chili sauce',
                price: 12,
                image: 'https://images.unsplash.com/photo-1544601270-32b73de4f2ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                vegetarian: true,
                popular: true
            },
            {
                name: 'Spicy Tuna Tartare',
                description: 'Fresh tuna, avocado, crispy shallots, spicy mayo',
                price: 16,
                image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                spicy: true
            },
            {
                name: 'Edamame Hummus',
                description: 'Served with wonton chips and fresh vegetables',
                price: 14,
                image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                vegetarian: true
            },
            {
                name: 'Duck Gyoza',
                description: 'Pan-fried dumplings with ponzu dipping sauce',
                price: 15,
                image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                popular: true
            }
        ]
    },
    {
        name: 'Main Courses',
        description: 'Experience our chef\'s signature creations',
        items: [
            {
                name: 'Wagyu Beef Bowl',
                description: 'Premium grade beef, seasonal vegetables, truffle sauce',
                price: 32,
                image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                popular: true
            },
            {
                name: 'Miso Glazed Black Cod',
                description: 'Marinated for 72 hours, served with baby bok choy',
                price: 38,
                image: 'https://images.unsplash.com/photo-1535140728325-a4d3707eee61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                popular: true
            },
            {
                name: 'Green Curry Tofu',
                description: 'Silken tofu, bamboo shoots, Thai basil, coconut curry',
                price: 24,
                image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                vegetarian: true,
                spicy: true
            },
            {
                name: 'Lobster Ramen',
                description: 'Rich seafood broth, fresh lobster, egg, nori',
                price: 36,
                image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                popular: true
            }
        ]
    },
    {
        name: 'Sushi & Sashimi',
        description: 'Fresh and expertly crafted selections',
        items: [
            {
                name: 'Omakase Platter',
                description: 'Chef\'s selection of premium sushi and sashimi',
                price: 85,
                image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                popular: true
            },
            {
                name: 'Dragon Roll',
                description: 'Eel, cucumber, avocado, tobiko',
                price: 24,
                image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                popular: true
            }
        ]
    },
    {
        name: 'Desserts',
        description: 'Complete your meal with our artisanal desserts',
        items: [
            {
                name: 'Matcha Tiramisu',
                description: 'Green tea layered dessert with mascarpone cream',
                price: 12,
                image: 'https://images.unsplash.com/photo-1556040220-4096d522378d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                vegetarian: true
            },
            {
                name: 'Mochi Ice Cream Platter',
                description: 'Assorted flavors of traditional Japanese mochi',
                price: 14,
                image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                vegetarian: true
            },
            {
                name: 'Yuzu Cheesecake',
                description: 'Light and creamy with citrus notes',
                price: 13,
                image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                vegetarian: true,
                popular: true
            }
        ]
    },
    {
        name: 'Beverages',
        description: 'Curated selection of drinks to complement your meal',
        items: [
            {
                name: 'Sake Flight',
                description: 'Selection of premium sake varieties',
                price: 28,
                image: 'https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                popular: true
            },
            {
                name: 'Matcha Latte',
                description: 'Premium green tea with steamed milk',
                price: 6,
                image: 'https://images.unsplash.com/photo-1545696968-1a5245650b36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                vegetarian: true
            }
        ]
    }
];

export const Menu = () => {
    return (
        <div className="bg-secondary-beige min-h-screen">
            <PageHeader
                title="Our Menu"
                subtitle="A fusion of traditional flavors and modern cuisine"
                image="https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-serif mb-4">Culinary Excellence</h1>
                    <div className="w-20 h-1 bg-primary-terracotta rounded-full mx-auto mb-6" />
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Each dish is crafted with passion and precision, using the finest ingredients
                        to create an unforgettable dining experience.
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {menuData.map((category, index) => (
                        <MenuCategory key={category.name} {...category} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};