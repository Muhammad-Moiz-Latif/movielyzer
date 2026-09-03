"use client"

import { motion, type Variants } from "framer-motion";
import { Play, ArrowDown, Upload, Brain, Search } from "lucide-react";

const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: "easeOut"
        }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.1
        }
    }
};

const stepVariant: Variants = {
    hidden: {
        opacity: 0,
        x: -30
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.65,
            ease: "easeOut"
        }
    }
};

const videoVariant: Variants = {
    hidden: {
        opacity: 0,
        x: 40,
        scale: 0.96
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const steps = [
    {
        number: "01",
        title: "Upload your video",
        description:
            "Drop in your footage and let Rimberio take care of the rest. Upload recordings, interviews, lectures, meetings, or any video you want to search.",
        icon: Upload,
        label: "INGEST"
    },
    {
        number: "02",
        title: "Let AI understand it",
        description:
            "Rimberio analyzes speech, context, and visual information to transform your video into an intelligent, searchable index.",
        icon: Brain,
        label: "UNDERSTAND"
    },
    {
        number: "03",
        title: "Search. Find. Done.",
        description:
            "Ask for what you remember in natural language and jump straight to the moment that matters—with precise, timestamped results.",
        icon: Search,
        label: "DISCOVER"
    }
];

const HowItWorks = () => {
    return (
        <section
            className="
                relative w-full
                bg-[#050505]
                text-white
                font-inter
                overflow-hidden
                py-28 md:py-36
            "
        >
            {/* ─────────────────────────────────────────────
                Ambient background
            ───────────────────────────────────────────── */}

            <div className="absolute inset-0 pointer-events-none">

                {/* Top transition */}
                <div
                    className="
                        absolute top-0 left-0 right-0
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-zinc-800
                        to-transparent
                    "
                />

                {/* Lime atmosphere */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="
                        absolute
                        -left-40 top-1/3
                        w-[500px] h-[500px]
                        rounded-full
                        bg-[#D4F92F]/[0.035]
                        blur-[140px]
                    "
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="
                        absolute
                        -right-40 bottom-0
                        w-[450px] h-[450px]
                        rounded-full
                        bg-[#D4F92F]/[0.025]
                        blur-[130px]
                    "
                />

                {/* Fine grid */}
                <div
                    className="
                        absolute inset-0
                        opacity-[0.025]
                        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                        bg-[size:72px_72px]
                    "
                />
            </div>


            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

                {/* ─────────────────────────────────────────────
                    Section heading
                ───────────────────────────────────────────── */}

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    className="mb-20 md:mb-24"
                >

                    <motion.div
                        variants={fadeInUp}
                        className="flex items-center gap-4 mb-7"
                    >
                        <div className="h-px w-10 bg-[#D4F92F]" />

                        <span className="text-xs tracking-[0.28em] text-zinc-500">
                            HOW IT WORKS
                        </span>

                        <span className="text-xs text-[#D4F92F]">
                            03 STEPS
                        </span>
                    </motion.div>


                    <div className="grid lg:grid-cols-2 gap-8 items-end">

                        <motion.h2
                            variants={fadeInUp}
                            className="
                                text-4xl
                                sm:text-5xl
                                md:text-6xl
                                lg:text-[4.4rem]
                                leading-[0.98]
                                tracking-[-0.04em]
                                font-medium
                            "
                        >
                            From footage
                            <br />
                            to{" "}
                            <span className="text-[#D4F92F]">
                                found.
                            </span>
                        </motion.h2>


                        <motion.p
                            variants={fadeInUp}
                            className="
                                max-w-lg
                                lg:ml-auto
                                text-sm
                                md:text-base
                                leading-7
                                text-zinc-500
                            "
                        >
                            Upload your video once. Rimberio handles the
                            heavy lifting behind the scenes, turning hours
                            of footage into something you can actually
                            search and understand.
                        </motion.p>

                    </div>
                </motion.div>


                {/* ─────────────────────────────────────────────
                    Main layout
                ───────────────────────────────────────────── */}

                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-center">

                    {/* ─────────────────────────────────────────
                        Steps
                    ───────────────────────────────────────── */}

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                        className="relative"
                    >

                        {/* Connecting line */}
                        <div
                            className="
                                absolute
                                left-[23px]
                                top-8
                                bottom-8
                                w-px
                                bg-gradient-to-b
                                from-[#D4F92F]/60
                                via-zinc-800
                                to-transparent
                            "
                        />


                        <div className="space-y-4">

                            {steps.map((step) => {
                                const Icon = step.icon;

                                return (
                                    <motion.div
                                        key={step.number}
                                        variants={stepVariant}
                                        className="group relative"
                                    >

                                        <div
                                            className="
                                                relative
                                                flex
                                                gap-6
                                                p-5
                                                md:p-6
                                                rounded-2xl
                                                border
                                                border-transparent
                                                transition-all
                                                duration-300
                                                hover:border-zinc-800
                                                hover:bg-zinc-950/70
                                            "
                                        >

                                            {/* Number / node */}
                                            <div className="relative z-10 shrink-0">

                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        justify-center
                                                        w-12 h-12
                                                        rounded-full
                                                        bg-[#050505]
                                                        border
                                                        border-zinc-800
                                                        group-hover:border-[#D4F92F]/50
                                                        transition-colors
                                                        duration-300
                                                    "
                                                >
                                                    <Icon
                                                        size={18}
                                                        strokeWidth={1.5}
                                                        className="
                                                            text-zinc-500
                                                            group-hover:text-[#D4F92F]
                                                            transition-colors
                                                        "
                                                    />
                                                </div>

                                            </div>


                                            {/* Content */}
                                            <div className="flex-1 min-w-0">

                                                <div className="flex items-center gap-3 mb-2">

                                                    <span
                                                        className="
                                                            text-[11px]
                                                            tracking-[0.18em]
                                                            text-[#D4F92F]
                                                        "
                                                    >
                                                        {step.number}
                                                    </span>

                                                    <span
                                                        className="
                                                            text-[10px]
                                                            tracking-[0.2em]
                                                            text-zinc-700
                                                        "
                                                    >
                                                        {step.label}
                                                    </span>

                                                </div>


                                                <h3
                                                    className="
                                                        text-lg
                                                        md:text-xl
                                                        font-medium
                                                        text-white
                                                        mb-2
                                                    "
                                                >
                                                    {step.title}
                                                </h3>


                                                <p
                                                    className="
                                                        text-sm
                                                        leading-6
                                                        text-zinc-500
                                                        max-w-md
                                                    "
                                                >
                                                    {step.description}
                                                </p>

                                            </div>

                                        </div>

                                    </motion.div>
                                );
                            })}

                        </div>

                    </motion.div>


                    {/* ─────────────────────────────────────────
                        Video showcase
                    ───────────────────────────────────────── */}

                    <motion.div
                        variants={videoVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        className="relative"
                    >

                        {/* Decorative label */}
                        <div
                            className="
                                absolute
                                -top-4
                                left-6
                                z-20
                                flex
                                items-center
                                gap-2
                                px-3
                                py-1.5
                                rounded-full
                                border
                                border-zinc-800
                                bg-[#080808]
                            "
                        >
                            <span className="relative flex h-2 w-2">
                                <span
                                    className="
                                        animate-ping
                                        absolute
                                        inline-flex
                                        h-full
                                        w-full
                                        rounded-full
                                        bg-[#D4F92F]
                                        opacity-50
                                    "
                                />
                                <span
                                    className="
                                        relative
                                        inline-flex
                                        rounded-full
                                        h-2
                                        w-2
                                        bg-[#D4F92F]
                                    "
                                />
                            </span>

                            <span className="text-[10px] tracking-[0.2em] text-zinc-400">
                                PRODUCT DEMO
                            </span>
                        </div>


                        {/* Video frame */}
                        <div
                            className="
                                relative
                                rounded-3xl
                                border
                                border-zinc-800
                                bg-[#080808]
                                p-2
                                shadow-[0_30px_100px_rgba(0,0,0,0.55)]
                            "
                        >

                            <div
                                className="
                                    relative
                                    aspect-video
                                    overflow-hidden
                                    rounded-2xl
                                    bg-black
                                    border
                                    border-zinc-900
                                "
                            >

                                <iframe
                                    src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                                    frameBorder="0"
                                    allowFullScreen
                                    className="
                                    absolute
                                    inset-0
                                    w-full
                                    h-full
                                    "
                                />

                            </div>


                            {/* Video footer */}
                            <div
                                className="
                                    flex
                                    flex-col
                                    sm:flex-row
                                    sm:items-center
                                    sm:justify-between
                                    gap-4
                                    px-4
                                    py-4
                                "
                            >

                                <div>
                                    <p className="text-sm text-white">
                                        See Rimberio in action
                                    </p>

                                    <p className="text-xs text-zinc-600 mt-1">
                                        From upload to intelligent search
                                    </p>
                                </div>


                                <motion.button
                                    whileHover={{
                                        scale: 1.03,
                                        backgroundColor: "#c4e82f"
                                    }}
                                    whileTap={{ scale: 0.97 }}
                                    className="
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        px-5
                                        py-2.5
                                        rounded-full
                                        bg-[#D4F92F]
                                        text-black
                                        text-sm
                                        font-medium
                                        transition-colors
                                    "
                                >
                                    <Play
                                        size={14}
                                        fill="currentColor"
                                    />

                                    Watch Demo
                                </motion.button>

                            </div>

                        </div>


                        {/* Under-video metadata */}
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                mt-5
                                px-2
                            "
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] tracking-[0.18em] text-zinc-700">
                                    RIMBERIO
                                </span>

                                <span className="text-zinc-800">
                                    /
                                </span>

                                <span className="text-[10px] tracking-[0.18em] text-zinc-600">
                                    AI VIDEO SEARCH
                                </span>
                            </div>

                            <span className="text-xs text-zinc-700">
                                02:30
                            </span>
                        </div>

                    </motion.div>

                </div>


                {/* ─────────────────────────────────────────────
                    Bottom statement
                ───────────────────────────────────────────── */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="
                        mt-24
                        pt-8
                        border-t
                        border-zinc-900
                        flex
                        flex-col
                        md:flex-row
                        md:items-center
                        md:justify-between
                        gap-4
                    "
                >

                    <div className="flex items-center gap-3">

                        <span className="text-[#D4F92F] text-lg">
                            ✦
                        </span>

                        <span className="text-sm text-zinc-500">
                            No more scrubbing through hours of footage.
                        </span>

                    </div>

                    <div className="flex items-center gap-2 text-xs tracking-[0.18em] text-zinc-700">
                        <span>UPLOAD</span>
                        <ArrowDown size={12} />
                        <span>UNDERSTAND</span>
                        <ArrowDown size={12} />
                        <span>FIND</span>
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default HowItWorks;