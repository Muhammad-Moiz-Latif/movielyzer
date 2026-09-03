"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import bg from "../assets/Polygon Luminary.svg";

const containerVariant: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: "easeOut",
        },
    },
};

const formVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.97,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

export const JoinUs = () => {
    return (
        <section
            className="
                relative
                w-full
                bg-[#050505]
                font-inter
                text-white
                px-6
                lg:px-8
                pt-20
                md:pt-28
                pb-20
                overflow-hidden
            "
        >

            <div className="max-w-7xl mx-auto">

                {/* CTA container */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    variants={containerVariant}
                    className="
                        relative
                        min-h-[480px]
                        md:min-h-[500px]
                        rounded-[2rem]
                        overflow-hidden
                        border
                        border-zinc-800
                        bg-[#080808]
                        flex
                        items-center
                        justify-center
                    "
                >

                    {/* ───────────────────────────────
                        Background image
                    ─────────────────────────────── */}

                    <motion.img
                        initial={{
                            opacity: 0,
                            scale: 1.08,
                        }}
                        whileInView={{
                            opacity: 0.55,
                            scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.4,
                            ease: "easeOut",
                        }}
                        src={bg}
                        alt=""
                        className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-cover
                        "
                    />


                    {/* Dark cinematic overlay */}
                    <div
                        className="
                            absolute
                            inset-0
                            bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)]
                        "
                    />

                    {/* Lime center glow */}
                    <div
                        className="
                            absolute
                            left-1/2
                            top-1/2
                            -translate-x-1/2
                            -translate-y-1/2
                            w-[450px]
                            h-[450px]
                            rounded-full
                            bg-[#D4F92F]/[0.06]
                            blur-[120px]
                        "
                    />

                    {/* Fine grid */}
                    <div
                        className="
                            absolute
                            inset-0
                            opacity-[0.035]
                            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                            bg-[size:60px_60px]
                        "
                    />


                    {/* ───────────────────────────────
                        Content
                    ─────────────────────────────── */}

                    <div
                        className="
                            relative
                            z-10
                            w-full
                            max-w-2xl
                            px-6
                            text-center
                            flex
                            flex-col
                            items-center
                        "
                    >

                        {/* Eyebrow */}
                        <motion.div
                            variants={fadeUp}
                            className="
                                inline-flex
                                items-center
                                gap-2
                                px-4
                                py-2
                                rounded-full
                                border
                                border-zinc-700
                                bg-black/50
                                backdrop-blur-md
                                mb-7
                            "
                        >
                            <Sparkles
                                size={13}
                                className="text-[#D4F92F]"
                            />

                            <span
                                className="
                                    text-[10px]
                                    tracking-[0.25em]
                                    text-zinc-400
                                "
                            >
                                STAY IN THE LOOP
                            </span>
                        </motion.div>


                        {/* Heading */}
                        <motion.h2
                            variants={fadeUp}
                            className="
                                text-4xl
                                sm:text-5xl
                                md:text-6xl
                                lg:text-[4.2rem]
                                leading-[0.98]
                                tracking-[-0.045em]
                                font-medium
                            "
                        >
                            Intelligence
                            <br />
                            keeps{" "}
                            <span className="text-[#D4F92F]">
                                moving.
                            </span>
                        </motion.h2>


                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            className="
                                mt-6
                                text-sm
                                md:text-base
                                leading-7
                                text-zinc-400
                                max-w-lg
                            "
                        >
                            Get occasional product updates, insights,
                            and ideas about the future of intelligent
                            video search.
                        </motion.p>


                        {/* Form */}
                        <motion.form
                            variants={formVariant}
                            className="
                                mt-9
                                w-full
                                max-w-xl
                                flex
                                flex-col
                                sm:flex-row
                                gap-2
                                p-1.5
                                rounded-2xl
                                sm:rounded-full
                                bg-black/70
                                border
                                border-zinc-700
                                backdrop-blur-xl
                            "
                        >

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="
                                    flex-1
                                    min-w-0
                                    bg-transparent
                                    outline-none
                                    px-5
                                    py-3
                                    text-sm
                                    text-white
                                    placeholder:text-zinc-600
                                "
                            />

                            <motion.button
                                type="submit"
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: "#c4e82f",
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    sm:rounded-full
                                    bg-[#D4F92F]
                                    text-black
                                    px-6
                                    py-3
                                    text-sm
                                    font-medium
                                    transition-colors
                                "
                            >
                                Subscribe

                                <ArrowRight size={15} />
                            </motion.button>

                        </motion.form>


                        {/* Disclaimer */}
                        <motion.p
                            variants={fadeUp}
                            className="
                                mt-4
                                text-[10px]
                                tracking-wide
                                text-zinc-700
                            "
                        >
                            No spam. Just useful things.
                        </motion.p>

                    </div>


                    {/* Corner metadata */}
                    <div
                        className="
                            absolute
                            bottom-5
                            left-6
                            text-[9px]
                            tracking-[0.2em]
                            text-zinc-700
                        "
                    >
                        RIMBERIO / 2026
                    </div>

                    <div
                        className="
                            absolute
                            bottom-5
                            right-6
                            text-[9px]
                            tracking-[0.2em]
                            text-zinc-700
                        "
                    >
                        KEEP SEARCHING
                    </div>

                </motion.div>

            </div>

        </section>
    );
};

export default JoinUs;