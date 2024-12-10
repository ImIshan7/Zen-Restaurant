import { motion } from 'framer-motion';
import { PageHeader } from '../components/PageHeader';
import { Calendar, Clock, Users, UtensilsCrossed } from 'lucide-react';

export const Reservations = () => {
    return (
        <div className="bg-secondary-beige min-h-screen">
            <PageHeader
                title="Make a Reservation"
                subtitle="Join us for an unforgettable dining experience"
                image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-serif text-primary-terracotta mb-4">Dining Hours</h2>
                            <div className="w-20 h-1 bg-primary-terracotta rounded-full mb-6" />
                            <div className="space-y-4">
                                <TimeSlot day="Monday - Friday" hours="11:00 AM - 10:00 PM" />
                                <TimeSlot day="Saturday - Sunday" hours="10:00 AM - 11:00 PM" />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-serif text-primary-terracotta mb-4">Special Events</h2>
                            <div className="w-20 h-1 bg-primary-terracotta rounded-full mb-6" />
                            <div className="space-y-4">
                                <EventCard
                                    title="Private Dining"
                                    description="Host your special occasions in our elegant private dining rooms"
                                    icon={<UtensilsCrossed className="w-6 h-6" />}
                                />
                                <EventCard
                                    title="Chef's Table"
                                    description="An intimate dining experience with our executive chef"
                                    icon={<Users className="w-6 h-6" />}
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-2xl shadow-xl"
                    >
                        <h2 className="text-3xl font-serif text-primary-terracotta mb-8">Reserve Your Table</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    label="Name"
                                    type="text"
                                    required
                                />
                                <FormField
                                    label="Email"
                                    type="email"
                                    required
                                />
                                <FormField
                                    label="Date"
                                    type="date"
                                    required
                                    icon={<Calendar className="w-5 h-5" />}
                                />
                                <FormField
                                    label="Time"
                                    type="select"
                                    options={[
                                        { value: "17:00", label: "5:00 PM" },
                                        { value: "18:00", label: "6:00 PM" },
                                        { value: "19:00", label: "7:00 PM" },
                                        { value: "20:00", label: "8:00 PM" },
                                        { value: "21:00", label: "9:00 PM" }
                                    ]}
                                    required
                                    icon={<Clock className="w-5 h-5" />}
                                />
                            </div>

                            <FormField
                                label="Number of Guests"
                                type="select"
                                options={[1, 2, 3, 4, 5, 6, 7, 8].map(num => ({
                                    value: num.toString(),
                                    label: `${num} ${num === 1 ? 'guest' : 'guests'}`
                                }))}
                                required
                                icon={<Users className="w-5 h-5" />}
                            />

                            <FormField
                                label="Special Requests"
                                type="textarea"
                                placeholder="Any dietary restrictions or special occasions?"
                            />

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-secondary-golden to-primary-terracotta text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Reserve Table
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const TimeSlot = ({ day, hours }: { day: string; hours: string }) => (
    <motion.div
        whileHover={{ x: 10 }}
        className="flex justify-between items-center p-4 bg-white rounded-xl shadow-md"
    >
        <span className="font-medium">{day}</span>
        <span className="text-primary-terracotta">{hours}</span>
    </motion.div>
);

const EventCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
    >
        <div className="flex items-start gap-4">
            <div className="p-3 bg-primary-olive/10 text-primary-olive rounded-xl">
                {icon}
            </div>
            <div>
                <h3 className="font-medium text-lg mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    </motion.div>
);

interface FormFieldProps {
    label: string;
    type: string;
    required?: boolean;
    placeholder?: string;
    options?: Array<{ value: string; label: string }>;
    icon?: React.ReactNode;
}

const FormField = ({ label, type, required, placeholder, options, icon }: FormFieldProps) => (
    <div>
        <label className="block text-gray-700 font-medium mb-2">{label}</label>
        <div className="relative">
            {icon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {icon}
                </div>
            )}

            {type === 'textarea' ? (
                <textarea
                    className={`w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-primary-terracotta focus:ring-1 focus:ring-primary-terracotta h-32 resize-none ${
                        icon ? 'pl-10' : ''
                    }`}
                    required={required}
                    placeholder={placeholder}
                />
            ) : type === 'select' ? (
                <select
                    className={`w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-primary-terracotta focus:ring-1 focus:ring-primary-terracotta appearance-none bg-white ${
                        icon ? 'pl-10' : ''
                    }`}
                    required={required}
                >
                    <option value="">Select {label.toLowerCase()}</option>
                    {options?.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    className={`w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-primary-terracotta focus:ring-1 focus:ring-primary-terracotta ${
                        icon ? 'pl-10' : ''
                    }`}
                    required={required}
                    placeholder={placeholder}
                />
            )}
        </div>
    </div>
);