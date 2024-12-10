import { Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface EventCardProps {
    title: string;
    date: string;
    time: string;
    description: string;
    image: string;
}

export const EventCard = ({ title, date, time, description, image }: EventCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-md group"
        >
            <div className="aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{title}</h3>
                <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{time}</span>
                    </div>
                </div>
                <p className="text-gray-600">{description}</p>
            </div>
        </motion.div>
    );
};