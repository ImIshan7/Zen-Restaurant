import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    image: string;
}

export const PageHeader = ({ title, subtitle, image }: PageHeaderProps) => {
    return (
        <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-secondary-charcoal/50" />
            </div>
            <div className="relative text-center text-accent-white z-10 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-serif mb-4"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
};