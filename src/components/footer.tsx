"use client"

import { motion, type Variants } from 'framer-motion';
import logo from '../assets/Rimberio-removebg-preview.png';

// Animation variants
const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.4 // Delayed to appear after JoinUs
        }
    }
};

const slideUpVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const logoVariant: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        rotate: -10
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
};

const linkStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const linkVariant: Variants = {
    hidden: {
        opacity: 0,
        x: -20
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

const contactBoxVariant: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        y: 30
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};

export const Footer = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariant}
            className="w-full min-h-96 bg-zinc-950 pt-52 px-8 font-inter text-white flex flex-col gap-10"
        >
            <motion.div
                variants={slideUpVariant}
                className='grid grid-cols-3'
            >
                {/* Logo Section */}
                <div className='flex flex-col relative w-full h-full'>
                    <motion.img
                        variants={logoVariant}
                        src={logo || "/placeholder.svg"}
                        className='size-38 absolute -top-11 -left-6'
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className='mt-8 text-sm text-start text-zinc-400'
                    >
                        Revolutionizing how you search and interact with video content through advanced AI technology.
                    </motion.p>
                </div>

                {/* Links Section */}
                <div className='flex justify-start gap-10'>
                    {/* Quick Links */}
                    <motion.div
                        variants={linkStagger}
                        className='flex flex-col items-start pl-24'
                    >
                        <motion.h1
                            variants={linkVariant}
                            className='font-medium mb-3 text-[#D4F92F]'
                        >
                            Quick Links
                        </motion.h1>
                        <motion.ul
                            variants={linkStagger}
                            className='flex flex-col gap-2'
                        >
                            {['About Us', 'Contact Us', 'FAQ', 'Privacy Policy', 'Features'].map((link, index) => (
                                <motion.li
                                    key={index}
                                    variants={linkVariant}
                                    whileHover={{ x: 5, color: "#D4F92F" }}
                                    className='text-sm text-zinc-400 cursor-pointer transition-colors duration-300'
                                >
                                    {link}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={linkStagger}
                        className='flex flex-col items-start'
                    >
                        <motion.h1
                            variants={linkVariant}
                            className='font-medium mb-3 text-[#D4F92F]'
                        >
                            Social Links
                        </motion.h1>
                        <motion.ul
                            variants={linkStagger}
                            className='flex flex-col gap-2'
                        >
                            {['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map((social, index) => (
                                <motion.li
                                    key={index}
                                    variants={linkVariant}
                                    whileHover={{ x: 5, color: "#D4F92F" }}
                                    className='text-sm text-zinc-400 cursor-pointer transition-colors duration-300'
                                >
                                    {social}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>

                {/* Contact Box */}
                <motion.div
                    variants={contactBoxVariant}
                    whileHover={{ scale: 1.02, borderColor: "#D4F92F" }}
                    className='flex flex-col rounded-xl p-4 gap-1 items-center justify-center border-[1px] border-zinc-900 transition-all duration-300'
                >
                    <h1 className='text-xl'>Contact Us</h1>
                    <p className='text-zinc-400 text-sm mb-3'>Have questions? Reach out to our support team.</p>
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#c4e82f" }}
                        whileTap={{ scale: 0.95 }}
                        className='bg-[#D4F92F] w-1/2 py-2 text-black rounded-xl transition-all duration-300'
                    >
                        Contact Support
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Bottom Section */}
            <motion.div
                variants={slideUpVariant}
                className='w-full flex flex-col gap-5'
            >
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className='w-full h-[1px] bg-zinc-800 origin-left'
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className='text-center text-zinc-400 mb-5 text-sm'
                >
                    © Copyright 2025, All Rights Reserved by Moiz Latif
                </motion.div>
            </motion.div>
        </motion.div>
    );
};