"use client";

import { motion, type Variants } from "framer-motion";
import CountUp from "./ui/CountUp";

const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.15,
        },
    },
};

const statVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const Stats = () => {
    return (
        <section
            className="
                relative
                w-full
                bg-[#050505]
                text-white
                font-inter
                overflow-hidden
                py-16
                md:py-24
            "
        >
            {/* Ambient glow */}
            <div
                className="
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-[600px]
                    h-[250px]
                    rounded-full
                    bg-[#D4F92F]/[0.025]
                    blur-[120px]
                    pointer-events-none
                "
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

                {/* Top label */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="
                        flex
                        items-center
                        justify-center
                        gap-4
                        mb-12
                    "
                >
                    <div className="h-px w-8 bg-zinc-800" />

                    <span
                        className="
                            text-[10px]
                            tracking-[0.28em]
                            text-zinc-600
                        "
                    >
                        THE NUMBERS SPEAK
                    </span>

                    <div className="h-px w-8 bg-zinc-800" />
                </motion.div>


                {/* Stats */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.4
                    }}
                    variants={containerVariant}
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-3
                        border-y
                        border-zinc-900
                    "
                >

                    {/* Accuracy */}
                    <motion.div
                        variants={statVariant}
                        className="
                            relative
                            flex
                            flex-col
                            items-center
                            justify-center
                            py-12
                            md:py-16
                            px-6
                            group
                        "
                    >
                        <span
                            className="
                                absolute
                                top-4
                                left-6
                                text-[9px]
                                tracking-[0.2em]
                                text-zinc-800
                            "
                        >
                            01
                        </span>

                        <div className="flex items-baseline">
                            <span
                                className="
                                    text-6xl
                                    md:text-7xl
                                    lg:text-8xl
                                    font-medium
                                    tracking-[-0.05em]
                                    text-[#D4F92F]
                                "
                            >
                                <CountUp
                                    from={0}
                                    to={99}
                                    separator=","
                                    direction="up"
                                    duration={1.2}
                                    className="count-up-text"
                                />
                            </span>

                            <span
                                className="
                                    text-3xl
                                    md:text-4xl
                                    text-[#D4F92F]
                                    ml-1
                                "
                            >
                                %
                            </span>
                        </div>

                        <p
                            className="
                                mt-3
                                text-sm
                                tracking-[0.12em]
                                uppercase
                                text-zinc-400
                            "
                        >
                            Search Accuracy
                        </p>

                        <p
                            className="
                                mt-2
                                text-xs
                                text-zinc-700
                            "
                        >
                            Precision when it matters
                        </p>
                    </motion.div>


                    {/* Divider */}
                    <div
                        className="
                            hidden
                            md:block
                            absolute
                        "
                    />


                    {/* Faster */}
                    <motion.div
                        variants={statVariant}
                        className="
                            relative
                            flex
                            flex-col
                            items-center
                            justify-center
                            py-12
                            md:py-16
                            px-6
                            border-t
                            md:border-t-0
                            md:border-l
                            border-zinc-900
                        "
                    >
                        <span
                            className="
                                absolute
                                top-4
                                left-6
                                text-[9px]
                                tracking-[0.2em]
                                text-zinc-800
                            "
                        >
                            02
                        </span>

                        <div className="flex items-baseline">
                            <span
                                className="
                                    text-6xl
                                    md:text-7xl
                                    lg:text-8xl
                                    font-medium
                                    tracking-[-0.05em]
                                    text-[#D4F92F]
                                "
                            >
                                <CountUp
                                    from={0}
                                    to={2}
                                    separator=","
                                    direction="up"
                                    duration={1.5}
                                    className="count-up-text"
                                />
                            </span>

                            <span
                                className="
                                    text-3xl
                                    md:text-4xl
                                    text-[#D4F92F]
                                    ml-2
                                "
                            >
                                ×
                            </span>
                        </div>

                        <p
                            className="
                                mt-3
                                text-sm
                                tracking-[0.12em]
                                uppercase
                                text-zinc-400
                            "
                        >
                            Faster Discovery
                        </p>

                        <p
                            className="
                                mt-2
                                text-xs
                                text-zinc-700
                            "
                        >
                            Less searching. More doing.
                        </p>
                    </motion.div>


                    {/* Companies */}
                    <motion.div
                        variants={statVariant}
                        className="
                            relative
                            flex
                            flex-col
                            items-center
                            justify-center
                            py-12
                            md:py-16
                            px-6
                            border-t
                            md:border-t-0
                            md:border-l
                            border-zinc-900
                        "
                    >
                        <span
                            className="
                                absolute
                                top-4
                                left-6
                                text-[9px]
                                tracking-[0.2em]
                                text-zinc-800
                            "
                        >
                            03
                        </span>

                        <div className="flex items-baseline">
                            <span
                                className="
                                    text-6xl
                                    md:text-7xl
                                    lg:text-8xl
                                    font-medium
                                    tracking-[-0.05em]
                                    text-[#D4F92F]
                                "
                            >
                                <CountUp
                                    from={0}
                                    to={100}
                                    separator=","
                                    direction="up"
                                    duration={1.2}
                                    className="count-up-text"
                                />
                            </span>

                            <span
                                className="
                                    text-3xl
                                    md:text-4xl
                                    text-[#D4F92F]
                                    ml-1
                                "
                            >
                                +
                            </span>
                        </div>

                        <p
                            className="
                                mt-3
                                text-sm
                                tracking-[0.12em]
                                uppercase
                                text-zinc-400
                            "
                        >
                            Companies
                        </p>

                        <p
                            className="
                                mt-2
                                text-xs
                                text-zinc-700
                            "
                        >
                            Building with better search
                        </p>
                    </motion.div>

                </motion.div>


                {/* Bottom statement */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="
                        flex
                        justify-center
                        mt-8
                    "
                >
                    <span
                        className="
                            text-[10px]
                            tracking-[0.2em]
                            text-zinc-800
                            uppercase
                        "
                    >
                        Built for people who have better things to do
                    </span>
                </motion.div>

            </div>
        </section>
    );
};

export default Stats;