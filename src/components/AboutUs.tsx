"use client";

import { motion, type Variants } from "framer-motion";
import {
    ArrowDownRight,
    ArrowRight,
    Brain,
    Eye,
    Lightbulb,
    Search,
    ShieldCheck,
    Sparkles,
    Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import hexagons from "../assets/Hexagon.svg";

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 32,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};



const stagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const reveal: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const values = [
    {
        number: "01",
        icon: Lightbulb,
        title: "Curiosity",
        description:
            "We question the obvious and keep looking for better ways to understand information.",
    },
    {
        number: "02",
        icon: Users,
        title: "Human first",
        description:
            "Technology should remove friction, not create another layer of complexity.",
    },
    {
        number: "03",
        icon: ShieldCheck,
        title: "Trust",
        description:
            "Your content is yours. We build with privacy, reliability, and transparency at the core.",
    },
    {
        number: "04",
        icon: Sparkles,
        title: "Precision",
        description:
            "Useful intelligence isn't about doing more. It's about finding exactly what matters.",
    },
];

export const About = () => {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen bg-[#050505] text-white font-inter overflow-hidden">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative min-h-[88vh] flex items-center overflow-hidden border-b border-zinc-900">

                {/* Ambient glow */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-[35%]
                        -translate-x-1/2
                        -translate-y-1/2
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-[#D4F92F]/[0.045]
                        blur-[140px]
                    "
                />

                {/* Hexagonal technical texture */}
                <motion.img
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 0.25, scale: 1 }}
                    transition={{
                        duration: 1.8,
                        ease: "easeOut",
                    }}
                    src={hexagons}
                    alt=""
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        object-center
                        mix-blend-screen
                    "
                />

                {/* Fine grid */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        opacity-[0.035]
                    "
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: "80px 80px",
                    }}
                />

                {/* Vignette */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_center,transparent_15%,#050505_78%)]
                    "
                />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 py-32">

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="max-w-5xl"
                    >

                        {/* Eyebrow */}
                        <motion.div
                            variants={reveal}
                            className="mb-8 flex items-center gap-3"
                        >
                            <span className="h-px w-10 bg-[#D4F92F]" />

                            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                                About Rimberio
                            </span>

                            <span className="text-[11px] text-zinc-700">
                                / 01
                            </span>
                        </motion.div>

                        {/* Main heading */}
                        <motion.h1
                            variants={reveal}
                            className="
                                max-w-5xl
                                text-[clamp(3.5rem,8vw,8rem)]
                                font-medium
                                leading-[0.9]
                                tracking-[-0.065em]
                            "
                        >
                            We’re building
                            <br />

                            <span className="text-[#D4F92F]">
                                the search layer
                            </span>

                            <br />

                            for video.
                        </motion.h1>

                        {/* Supporting copy */}
                        <motion.div
                            variants={reveal}
                            className="
                                mt-10
                                flex
                                max-w-2xl
                                flex-col
                                gap-6
                                sm:flex-row
                                sm:items-start
                            "
                        >
                            <p className="text-base leading-7 text-zinc-400 sm:text-lg">
                                Video contains an incredible amount of knowledge.
                                Finding that knowledge shouldn't require watching
                                everything from beginning to end.
                            </p>

                            <div className="hidden h-16 w-px bg-zinc-800 sm:block" />

                            <p className="text-sm leading-6 text-zinc-600 sm:max-w-xs">
                                Rimberio uses AI to turn video into something
                                you can actually search, understand, and use.
                            </p>
                        </motion.div>

                    </motion.div>

                    {/* Bottom metadata */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                        className="
                            absolute
                            bottom-10
                            left-5
                            right-5
                            flex
                            items-center
                            justify-between
                            border-t
                            border-zinc-900
                            pt-5
                            sm:left-8
                            sm:right-8
                            lg:left-12
                            lg:right-12
                        "
                    >
                        <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-700">
                            Intelligent video search
                        </span>

                        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                            Scroll to explore
                            <ArrowDownRight className="h-3.5 w-3.5 text-[#D4F92F]" />
                        </div>
                    </motion.div>

                </div>
            </section>


            {/* =========================================================
                WHY RIMBERIO
            ========================================================= */}

            <section className="relative border-b border-zinc-900 py-28 sm:py-36">

                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                    <div className="grid gap-16 lg:grid-cols-[0.35fr_1fr]">

                        {/* Label */}
                        <div>
                            <div className="sticky top-32 flex items-center gap-3">
                                <span className="font-mono text-[10px] text-[#D4F92F]">
                                    02
                                </span>

                                <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-600">
                                    Why we exist
                                </span>
                            </div>
                        </div>

                        {/* Statement */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.25 }}
                            variants={stagger}
                        >

                            <motion.p
                                variants={fadeUp}
                                className="
                                    text-[clamp(2.3rem,5vw,5rem)]
                                    font-medium
                                    leading-[1.02]
                                    tracking-[-0.05em]
                                    text-zinc-200
                                "
                            >
                                Most video is full of
                                <span className="text-zinc-600">
                                    {" "}information.
                                </span>

                                <br />

                                But information is useless
                                <span className="text-[#D4F92F]">
                                    {" "}if you can't find it.
                                </span>
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                className="mt-14 grid gap-8 border-t border-zinc-900 pt-8 sm:grid-cols-2"
                            >
                                <div>
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center border border-zinc-800">
                                        <Eye className="h-4 w-4 text-[#D4F92F]" />
                                    </div>

                                    <h3 className="mb-2 text-lg font-medium">
                                        See beyond the timeline
                                    </h3>

                                    <p className="max-w-md text-sm leading-6 text-zinc-500">
                                        Traditional video interfaces make you
                                        search through time. We believe you
                                        should be able to search through meaning.
                                    </p>
                                </div>

                                <div>
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center border border-zinc-800">
                                        <Brain className="h-4 w-4 text-[#D4F92F]" />
                                    </div>

                                    <h3 className="mb-2 text-lg font-medium">
                                        Let AI do the heavy lifting
                                    </h3>

                                    <p className="max-w-md text-sm leading-6 text-zinc-500">
                                        Rimberio understands what's happening
                                        inside your footage so you can ask for
                                        what you need in plain language.
                                    </p>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>
            </section>


            {/* =========================================================
                MISSION / VISION
            ========================================================= */}

            <section className="relative py-28 sm:py-36">

                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                    {/* Section header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        className="mb-16 flex items-end justify-between border-b border-zinc-900 pb-6"
                    >
                        <div>
                            <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-600">
                                03 / Our direction
                            </span>

                            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                                What we're building toward.
                            </h2>
                        </div>

                        <Search className="hidden h-5 w-5 text-[#D4F92F] sm:block" />
                    </motion.div>


                    <div className="grid gap-px overflow-hidden border border-zinc-900 bg-zinc-900 lg:grid-cols-2">

                        {/* Mission */}
                        <motion.article
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            className="group bg-[#050505] p-8 sm:p-12 lg:p-16"
                        >
                            <div className="mb-20 flex items-start justify-between">
                                <span className="font-mono text-xs text-[#D4F92F]">
                                    MISSION
                                </span>

                                <ArrowDownRight
                                    className="
                                        h-5
                                        w-5
                                        text-zinc-700
                                        transition-transform
                                        duration-500
                                        group-hover:translate-x-1
                                        group-hover:translate-y-1
                                        group-hover:text-[#D4F92F]
                                    "
                                />
                            </div>

                            <h3 className="mb-6 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                                Make every
                                <br />
                                second of video
                                <br />
                                <span className="text-[#D4F92F]">
                                    searchable.
                                </span>
                            </h3>

                            <p className="max-w-lg text-sm leading-7 text-zinc-500">
                                We want to remove the friction between people
                                and the knowledge buried inside their video.
                                Rimberio transforms unstructured footage into
                                information that can be discovered in seconds.
                            </p>
                        </motion.article>


                        {/* Vision */}
                        <motion.article
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            className="group bg-[#080808] p-8 sm:p-12 lg:p-16"
                        >
                            <div className="mb-20 flex items-start justify-between">
                                <span className="font-mono text-xs text-[#D4F92F]">
                                    VISION
                                </span>

                                <ArrowDownRight
                                    className="
                                        h-5
                                        w-5
                                        text-zinc-700
                                        transition-transform
                                        duration-500
                                        group-hover:translate-x-1
                                        group-hover:translate-y-1
                                        group-hover:text-[#D4F92F]
                                    "
                                />
                            </div>

                            <h3 className="mb-6 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                                A world where
                                <br />
                                video is as easy
                                <br />
                                to search as
                                <br />
                                <span className="text-[#D4F92F]">
                                    text.
                                </span>
                            </h3>

                            <p className="max-w-lg text-sm leading-7 text-zinc-500">
                                We believe the future of video isn't simply
                                watching more. It's understanding more. Our
                                goal is to make intelligent video search feel
                                natural, instant, and inevitable.
                            </p>
                        </motion.article>

                    </div>
                </div>
            </section>


            {/* =========================================================
                VALUES
            ========================================================= */}

            <section className="border-y border-zinc-900 bg-[#070707] py-28 sm:py-36">

                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        className="mb-20 max-w-2xl"
                    >
                        <div className="mb-6 flex items-center gap-3">
                            <span className="font-mono text-[10px] text-[#D4F92F]">
                                04
                            </span>

                            <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-600">
                                How we think
                            </span>
                        </div>

                        <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                            Principles over
                            <br />
                            <span className="text-zinc-600">
                                buzzwords.
                            </span>
                        </h2>
                    </motion.div>


                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={stagger}
                        className="border-t border-zinc-800"
                    >
                        {values.map((value) => {
                            const Icon = value.icon;

                            return (
                                <motion.div
                                    key={value.number}
                                    variants={reveal}
                                    className="
                                        group
                                        grid
                                        gap-6
                                        border-b
                                        border-zinc-800
                                        py-8
                                        transition-colors
                                        duration-300
                                        hover:bg-[#0a0a0a]
                                        sm:grid-cols-[80px_60px_0.8fr_1fr]
                                        sm:items-center
                                    "
                                >
                                    <span className="font-mono text-xs text-zinc-700">
                                        {value.number}
                                    </span>

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            border
                                            border-zinc-800
                                            transition-colors
                                            duration-300
                                            group-hover:border-[#D4F92F]/40
                                        "
                                    >
                                        <Icon className="h-4 w-4 text-[#D4F92F]" />
                                    </div>

                                    <h3 className="text-xl font-medium sm:text-2xl">
                                        {value.title}
                                    </h3>

                                    <p className="max-w-md text-sm leading-6 text-zinc-500">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                </div>
            </section>


            {/* =========================================================
                CLOSING STATEMENT
            ========================================================= */}

            <section className="relative overflow-hidden py-32 sm:py-44">

                {/* Central glow */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        h-[420px]
                        w-[420px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-[#D4F92F]/[0.035]
                        blur-[130px]
                    "
                />

                <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={stagger}
                    >

                        <motion.div
                            variants={reveal}
                            className="mb-8 flex justify-center"
                        >
                            <div className="flex items-center gap-2 border border-zinc-800 px-4 py-2">
                                <Sparkles className="h-3.5 w-3.5 text-[#D4F92F]" />

                                <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                                    The future of video search
                                </span>
                            </div>
                        </motion.div>

                        <motion.h2
                            variants={reveal}
                            className="
                                text-[clamp(3rem,7vw,7rem)]
                                font-medium
                                leading-[0.92]
                                tracking-[-0.06em]
                            "
                        >
                            Don't watch
                            <br />
                            everything.
                            <br />
                            <span className="text-[#D4F92F]">
                                Find it.
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={reveal}
                            className="
                                mx-auto
                                mt-8
                                max-w-xl
                                text-sm
                                leading-7
                                text-zinc-500
                                sm:text-base
                            "
                        >
                            See what Rimberio can do with your video library.
                            Search naturally. Find instantly. Keep moving.
                        </motion.p>

                        <motion.div
                            variants={reveal}
                            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
                        >
                            <motion.button
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: "#c4e82f",
                                }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => navigate("/login")}
                                className="
                                    group
                                    flex
                                    items-center
                                    gap-3
                                    rounded-full
                                    bg-[#D4F92F]
                                    px-7
                                    py-3.5
                                    text-sm
                                    font-semibold
                                    text-black
                                "
                            >
                                Get Started

                                <ArrowRight
                                    className="
                                        h-4
                                        w-4
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                />
                            </motion.button>

                            <motion.button
                                whileHover={{
                                    backgroundColor: "#111111",
                                }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => navigate("/")}
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-zinc-800
                                    px-7
                                    py-3.5
                                    text-sm
                                    font-medium
                                    text-zinc-300
                                    transition-colors
                                "
                            >
                                Explore Rimberio
                            </motion.button>
                        </motion.div>

                    </motion.div>

                </div>
            </section>


            {/* =========================================================
                PAGE FOOTER LINE
            ========================================================= */}

            <div className="border-t border-zinc-900">

                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">

                    <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-700">
                        RIMBERIO / ABOUT
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-700">
                        Built for the moments that matter
                    </span>

                </div>

            </div>

        </main>
    );
};

export default About;