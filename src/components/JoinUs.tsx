"use client"

import { motion , type Variants} from 'framer-motion';
import bg from '../assets/Polygon Luminary.svg';

// Animation variants
const containerVariant : Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const backgroundVariant : Variants= {
    hidden: { 
        opacity: 0, 
        scale: 0.9,
        rotateY: -15
    },
    visible: { 
        opacity: 1, 
        scale: 1,
        rotateY: 0,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
};

const titleVariant : Variants = {
    hidden: { 
        opacity: 0, 
        y: -30,
        scale: 0.9
    },
    visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const subtitleVariant : Variants= {
    hidden: { 
        opacity: 0, 
        y: 20
    },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const formVariant : Variants = {
    hidden: { 
        opacity: 0, 
        y: 30,
        scale: 0.95
    },
    visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};

export const JoinUs = () => {
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariant}
            className="w-full h-96 flex justify-center items-center px-20 py-10 mt-20 font-inter -mb-48"
        >
            <div className='w-full h-full rounded-4xl relative'>
                <motion.img 
                    variants={backgroundVariant}
                    src={bg || "/placeholder.svg"} 
                    className='w-full h-full object-cover rounded-4xl z-0'
                />
                
                <motion.h1 
                    variants={titleVariant}
                    className='absolute text-5xl w-full font-semibold z-10 text-[#D4F92F] top-3 left-1/2 -translate-x-1/2 text-center'
                >
                    Subscribe to our newsletter
                </motion.h1>
                
                <motion.p 
                    variants={subtitleVariant}
                    className='text-white absolute top-16 font-medium left-1/2 -translate-x-1/2 text-center'
                >
                    Stay in the loop — Get exclusive updates, insights, and tips delivered straight to your inbox.
                </motion.p>
                
                <motion.form 
                    variants={formVariant}
                    className='absolute bottom-24 w-full flex gap-3 justify-center items-center left-1/2 -translate-x-1/2'
                >
                    <motion.input 
                        whileFocus={{ scale: 1.02, borderColor: "#D4F92F" }}
                        className='placeholder:text-[#D4F92F] bg-transparent border-[1px] border-[#D4F92F] outline-none w-[40%] py-3 text-white px-4 backdrop-blur-sm rounded-xl transition-all duration-300' 
                        type='email' 
                        placeholder='Email'
                    />
                    <motion.button 
                        whileHover={{ scale: 1.05, backgroundColor: "#c4e82f" }}
                        whileTap={{ scale: 0.95 }}
                        className='text-black bg-[#D4F92F] py-3 px-6 rounded-xl backdrop-blur-sm transition-all duration-300'
                    >
                        Submit
                    </motion.button>
                </motion.form>
            </div>
        </motion.div>
    );
};