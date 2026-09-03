"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Play, Search } from "lucide-react";
import bg from "../assets/hero-bg.svg";

const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const fadeIn: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: "easeOut",
        },
    },
};

export const Hero = () => {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-[#050505] px-4 font-inter text-white sm:px-6 lg:px-8">

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="pointer-events-none absolute inset-0"
            >
                <img
                    src={bg}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover rotate-180 opacity-50"
                />

                {/* Central atmospheric glow */}
                <div className="absolute left-1/2 top-[42%] h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4F92F]/[0.055] blur-[140px]" />

                {/* Dark cinematic overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_72%)]" />

                {/* Subtle top fade */}
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050505] to-transparent" />

                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#050505] to-transparent" />
            </motion.div>

            {/* =====================================================
                TOP LABEL
            ====================================================== */}

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="relative z-10 mt-28 flex items-center gap-2 rounded-full border border-[#D4F92F]/25 bg-[#D4F92F]/[0.045] px-4 py-1.5 shadow-[0_0_30px_rgba(212,249,47,0.04)] backdrop-blur-md md:mt-32"
            >
                <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-1.5 animate-ping rounded-full bg-[#D4F92F] opacity-70" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-[#D4F92F]" />
                </span>

                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4F92F] md:text-[11px]">
                    AI-Powered Video Search
                </span>
            </motion.div>

            {/* =====================================================
                HERO HEADING
            ====================================================== */}

            <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.12 }}
                className="relative z-10 mt-7 max-w-5xl text-center text-[clamp(3.4rem,8vw,7.5rem)] font-medium leading-[0.91] tracking-[-0.065em]"
            >
                Search
                <span className="text-zinc-600">.</span>

                <br />

                <span className="text-zinc-100">
                    Find the
                </span>{" "}

                <span className="relative text-[#D4F92F]">
                    moment
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#D4F92F]/30 blur-[1px]" />
                </span>
                <span className="text-zinc-600">.</span>
            </motion.h1>

            {/* =====================================================
                DESCRIPTION
            ====================================================== */}

            <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.22 }}
                className="relative z-10 mt-7 max-w-xl px-4 text-center text-sm leading-7 text-zinc-400 md:text-base"
            >
                Search through your entire video library using natural
                language. Let AI understand your content and take you
                directly to the moment you're looking for.
            </motion.p>

            {/* =====================================================
                SEARCH PREVIEW
            ====================================================== */}

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.32 }}
                className="relative z-10 mt-8 hidden w-full max-w-lg md:block"
            >
                <div className="group relative overflow-hidden rounded-xl border border-white/[0.09] bg-white/[0.035] p-1 backdrop-blur-xl transition-colors duration-500 hover:border-[#D4F92F]/20">

                    <div className="flex items-center gap-3 rounded-lg px-4 py-3">

                        <Search className="size-4 shrink-0 text-[#D4F92F]" />

                        <div className="flex-1 overflow-hidden text-left">
                            <span className="text-xs text-zinc-500">
                                Try searching
                            </span>

                            <span className="ml-2 text-xs text-zinc-300">
                                "the moment they announced the launch"
                            </span>
                        </div>

                        <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[#D4F92F] transition-transform duration-300 group-hover:translate-x-0.5">
                            <ArrowRight className="size-3.5 text-black" />
                        </div>
                    </div>

                    {/* Scanning line */}
                    <motion.div
                        animate={{
                            x: ["-100%", "500%"],
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 1,
                        }}
                        className="absolute bottom-0 left-0 h-px w-1/4 bg-gradient-to-r from-transparent via-[#D4F92F] to-transparent opacity-40"
                    />
                </div>
            </motion.div>

            {/* =====================================================
                CTA BUTTONS
            ====================================================== */}

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.42 }}
                className="relative z-10 mt-7 flex flex-col gap-3 sm:flex-row"
            >
                {/* Primary */}

                <motion.button
                    whileHover={{
                        scale: 1.035,
                    }}
                    whileTap={{
                        scale: 0.97,
                    }}
                    className="group flex items-center justify-center gap-2.5 rounded-full bg-[#D4F92F] px-7 py-3.5 text-sm font-semibold text-black shadow-[0_0_35px_rgba(212,249,47,0.12)] transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(212,249,47,0.2)]"
                >
                    Get Started

                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>

                {/* Secondary */}

                <motion.button
                    whileHover={{
                        scale: 1.035,
                    }}
                    whileTap={{
                        scale: 0.97,
                    }}
                    className="group flex items-center justify-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.035] px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                >
                    <span className="flex size-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
                        <Play className="ml-0.5 size-3 fill-white" />
                    </span>

                    Watch Video
                </motion.button>
            </motion.div>

            {/* =====================================================
                MICRO PRODUCT SIGNALS
            ====================================================== */}

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.55 }}
                className="relative z-10 mt-10 mb-5 flex items-center gap-5 text-[9px] uppercase tracking-[0.18em] text-zinc-600"
            >
                <span className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-[#D4F92F]" />
                    Semantic Search
                </span>

                <span className="h-3 w-px bg-white/10" />

                <span>
                    Instant Results
                </span>

                <span className="hidden h-3 w-px bg-white/10 sm:block" />

                <span className="hidden sm:block">
                    AI Indexed
                </span>
            </motion.div>

            {/* =====================================================
                DECORATIVE CORNER DETAILS
            ====================================================== */}

            <div className="pointer-events-none absolute bottom-10 left-6 hidden text-[9px] uppercase tracking-[0.25em] text-zinc-700 lg:block">
                VIDEO / INTELLIGENCE
            </div>

            <div className="pointer-events-none absolute bottom-10 right-6 hidden items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-zinc-700 lg:flex">
                <span className="h-px w-8 bg-zinc-800" />
                01
            </div>

            {/* Bottom ambient line */}

            <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(700px,80%)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4F92F]/20 to-transparent" />
        </section>
    );
};