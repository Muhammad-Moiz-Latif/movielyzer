"use client";

import { motion, type Variants } from "framer-motion";

import Search from "../assets/ai.png";
import Clock from "../assets/clock.png";
import Upload from "../assets/cloud-computing.png";
import Shield from "../assets/safe.png";
import arrow from "../assets/arrows.png";

import MagicBento from "./ui/MagicBento";

const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const staggerContainer: Variants = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

const cardVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 35,
        scale: 0.97,
    },

    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const features = [
    {
        icon: Search,
        number: "01",
        title: "Intelligent Search",
        description:
            "Understand the meaning behind your videos, not just their filenames. Search naturally and let AI surface the most relevant moments.",
    },
    {
        icon: Clock,
        number: "02",
        title: "Find It Faster",
        description:
            "Stop scrubbing through hours of footage. Jump directly to the conversation, scene, or moment you're looking for.",
    },
    {
        icon: Upload,
        number: "03",
        title: "Effortless Upload",
        description:
            "Drop in your videos and let the system handle the heavy lifting. Your content becomes searchable automatically.",
    },
    {
        icon: Shield,
        number: "04",
        title: "Secure by Design",
        description:
            "Your video library stays protected with secure infrastructure designed to keep your content private and available.",
    },
];

const Features = () => {
    return (
        <section
            id="features"
            className="relative w-full overflow-hidden bg-[#050505] px-5 py-28 font-inter text-white sm:px-8 lg:px-12 lg:py-36"
        >
            {/* =====================================================
                BACKGROUND ATMOSPHERE
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0">

                {/* Top transition from hero */}

                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050505] to-transparent" />

                {/* Ambient lime glow */}

                <div className="absolute left-1/2 top-32 h-[350px] w-[650px] -translate-x-1/2 rounded-full bg-[#D4F92F]/[0.025] blur-[120px]" />

                {/* Fine grid */}

                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: `
                            linear-gradient(
                                rgba(255,255,255,0.5) 1px,
                                transparent 1px
                            ),
                            linear-gradient(
                                90deg,
                                rgba(255,255,255,0.5) 1px,
                                transparent 1px
                            )
                        `,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* =================================================
                    SECTION HEADER
                ================================================== */}

                <div className="flex flex-col items-center">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                        variants={fadeInUp}
                        className="flex items-center gap-4"
                    >
                        <img
                            src={arrow}
                            alt=""
                            className="h-5 w-16 object-contain opacity-50"
                        />

                        <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#D4F92F]">
                            Features
                        </span>

                        <img
                            src={arrow}
                            alt=""
                            className="h-5 w-16 rotate-180 object-contain opacity-50"
                        />
                    </motion.div>

                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                        variants={fadeInUp}
                        className="mt-7 max-w-3xl text-center text-4xl font-medium leading-[1] tracking-[-0.045em] sm:text-5xl lg:text-6xl"
                    >
                        Built to find
                        <br />

                        <span className="text-zinc-600">
                            what matters.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                        variants={fadeInUp}
                        className="mt-5 max-w-xl text-center text-sm leading-7 text-zinc-500 sm:text-base"
                    >
                        Everything you need to turn hours of video into
                        searchable, useful knowledge.
                    </motion.p>
                </div>

                {/* =================================================
                    FEATURE GRID
                ================================================== */}

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    variants={staggerContainer}
                    className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4"
                >
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.number}
                                variants={cardVariant}
                                className="group min-h-[285px]"
                            >
                                <MagicBento
                                    className="h-full cursor-pointer"
                                    spotlightColor="rgba(212, 249, 47, 0.18)"
                                >
                                    <div className="flex h-full flex-col p-2">

                                        {/* Top row */}

                                        <div className="flex items-start justify-between">

                                            <div className="flex size-10 items-center justify-center rounded-xl border border-[#D4F92F]/10 bg-[#D4F92F]/[0.045] transition-all duration-500 group-hover:border-[#D4F92F]/20 group-hover:bg-[#D4F92F]/[0.08]">
                                                <img
                                                    src={Icon}
                                                    alt=""
                                                    className="size-5 object-contain"
                                                />
                                            </div>

                                            <span className="text-[10px] font-medium tracking-[0.15em] text-zinc-700 transition-colors duration-300 group-hover:text-[#D4F92F]/40">
                                                {feature.number}
                                            </span>
                                        </div>

                                        {/* Content */}

                                        <div className="mt-auto pt-16">

                                            <h3 className="text-lg font-medium tracking-tight text-white">
                                                {feature.title}
                                            </h3>

                                            <p className="mt-3 text-sm leading-6 text-zinc-500">
                                                {feature.description}
                                            </p>
                                        </div>

                                    </div>
                                </MagicBento>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* =================================================
                    BOTTOM STATEMENT
                ================================================== */}

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    variants={fadeInUp}
                    className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-white/[0.06] pt-7 sm:flex-row"
                >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                        Search less. Discover more.
                    </p>

                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                        <span className="size-1.5 rounded-full bg-[#D4F92F]" />
                        AI-powered intelligence
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
