import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/PageHeader';

const images = [
    {
        url: 'https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Signature Sushi Platter',
        category: 'Food'
    },
    {
        url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Main Dining Area',
        category: 'Interior'
    },
    {
        url: 'https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Chef\'s Special',
        category: 'Food'
    },
    {
        url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Private Dining Room',
        category: 'Interior'
    },
    {
        url: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Dessert Selection',
        category: 'Food'
    },
    {
        url: 'https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Bar Area',
        category: 'Interior'
    },
    {
        url: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Cocktail Crafting',
        category: 'Drinks'
    },
    {
        url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Wine Selection',
        category: 'Drinks'
    },
    {
        url: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Terrace Dining',
        category: 'Interior'
    },
    {
        url: 'https://images.unsplash.com/photo-1564489563601-c53cfc451e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Special Events',
        category: 'Events'
    },
    {
        url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Chef at Work',
        category: 'Kitchen'
    },
    {
        url: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Culinary Art',
        category: 'Food'
    }
];

// @ts-ignore
const categories = ['All', ...new Set(images.map(img => img.category))];

interface GalleryImageProps {
    url: string;
    title: string;
    category: string;
    index: number;
}

const GalleryImage = ({ url, title, category, index }: GalleryImageProps) => (
    <motion.div
        key={url}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: index * 0.1 }}
        layout
        className="group relative aspect-square overflow-hidden rounded-lg shadow-lg"
    >
        <img
            src={url}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-medium">{title}</h3>
                <p className="text-white/80 text-sm">{category}</p>
            </div>
        </div>
    </motion.div>
);

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
    >
        {categories.map((category) => (
            <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category
                        ? 'bg-primary-terracotta text-white'
                        : 'bg-white text-gray-600 hover:bg-primary-terracotta/10'
                }`}
            >
                {category}
            </button>
        ))}
    </motion.div>
);

export const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredImages = images.filter(img =>
        activeCategory === 'All' ? true : img.category === activeCategory
    );

    return (
        <div className="bg-secondary-beige min-h-screen">
            <PageHeader
                title="Our Gallery"
                subtitle="A visual journey through our culinary artistry"
                image="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <CategoryFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredImages.map((image, index) => (
                        <GalleryImage
                            key={image.url}
                            {...image}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};