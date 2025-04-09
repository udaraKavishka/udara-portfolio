    'use client';

    import { motion } from 'framer-motion';
    import Image from 'next/image';

    const Hero = () => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        }
    };

    return (
        <div className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-secondary-100 pt-20 md:pt-32">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
            {/* Left Column - Text */}
            <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-secondary-900">
                    Hi, I&apos;m <span className="text-primary-600">Udara Nalawansa</span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 text-secondary-700">
                    Data Science Aspirant & Designer
                </h2>
                <p className="text-lg text-secondary-600 mb-8 max-w-lg">
                    Showcasing my passion for technology, innovation, and problem-solving through impactful projects.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button
                    onClick={() => handleScroll('projects')}
                    className="btn btn-primary"
                    >
                    View My Work
                    </button>
                    <button
                    onClick={() => handleScroll('contact')}
                    className="btn btn-outline"
                    >
                    Contact Me
                    </button>
                </div>
                </motion.div>
            </div>

            {/* Right Column - Image */}
            <div className="md:w-1/2 flex justify-center">
                <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative flex justify-center"
                >
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary-600 rounded-lg overflow-hidden flex items-center justify-center shadow-xl">
                    <Image
                    src="/assets/profile.jpg"
                    alt="Udara Nalawansa"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                    priority
                    />
                </div>
                {/* Bottom-right rectangle */}
                <div className="absolute bottom-2 right-2 hidden sm:block sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-secondary-200 rounded-lg z-0"></div>
                {/* Top-left rectangle */}
                <div className="absolute -top-4 -left-4 hidden sm:block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-primary-200 rounded-lg z-0"></div>
                </motion.div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Hero;