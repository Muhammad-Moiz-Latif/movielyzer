"use client";

import { motion, type Variants } from "framer-motion";
import {
    Check,
    ArrowRight,
    Sparkles,
} from "lucide-react";

const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
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

const staggerContainer: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.15,
        },
    },
};

const cardVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const featureVariant: Variants = {
    hidden: {
        opacity: 0,
        x: -10,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.35,
            ease: "easeOut",
        },
    },
};

const plans = [
    {
        number: "01",
        name: "Basic",
        eyebrow: "FOR EXPLORING",
        description:
            "A simple way to experience intelligent video search.",
        price: "$0",
        features: [
            "60 minutes of video upload",
            "1,000 AI tokens",
            "Basic video search",
            "7-day access",
            "Email support",
        ],
        button: "Try for free",
        featured: false,
    },
    {
        number: "02",
        name: "Plus",
        eyebrow: "FOR SERIOUS SEARCH",
        description:
            "More power for teams working with video every day.",
        price: "$490",
        features: [
            "600 minutes of video upload",
            "Extended AI token usage",
            "Advanced video search",
            "AI-powered insights",
            "Priority support",
            "Long-term access",
        ],
        button: "Get started",
        featured: true,
    },
    {
        number: "03",
        name: "Enterprise",
        eyebrow: "FOR LARGE TEAMS",
        description:
            "Unlimited intelligence built around your organization.",
        price: "$1,290",
        features: [
            "Unlimited video uploads",
            "Unlimited AI tokens",
            "Advanced AI insights",
            "24/7 dedicated support",
            "Custom AI models",
            "White-label solution",
            "Advanced security",
        ],
        button: "Talk to us",
        featured: false,
    },
];

const Pricing = () => {
    return (
        <section
            className="
                relative
                w-full
                bg-[#050505]
                text-white
                font-inter
                overflow-hidden
                pt-28
                md:pt-36
                pb-32
            "
        >

            {/* ─────────────────────────────────────
                Background
            ───────────────────────────────────── */}

            <div className="absolute inset-0 pointer-events-none">

                <div
                    className="
                        absolute
                        top-0
                        left-1/2
                        -translate-x-1/2
                        w-[700px]
                        h-[350px]
                        rounded-full
                        bg-[#D4F92F]/[0.025]
                        blur-[140px]
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.02]
                        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                        bg-[size:80px_80px]
                    "
                />

            </div>


            <div
                className="
                    relative
                    z-10
                    max-w-7xl
                    mx-auto
                    px-6
                    lg:px-8
                "
            >

                {/* ─────────────────────────────────────
                    Header
                ───────────────────────────────────── */}

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    variants={staggerContainer}
                    className="mb-16 md:mb-20"
                >

                    <motion.div
                        variants={fadeInUp}
                        className="
                            flex
                            items-center
                            gap-4
                            mb-7
                        "
                    >
                        <div className="h-px w-10 bg-[#D4F92F]" />

                        <span
                            className="
                                text-xs
                                tracking-[0.28em]
                                text-zinc-500
                            "
                        >
                            PRICING
                        </span>
                    </motion.div>


                    <div
                        className="
                            grid
                            lg:grid-cols-2
                            gap-8
                            items-end
                        "
                    >

                        <motion.h2
                            variants={fadeInUp}
                            className="
                                text-4xl
                                sm:text-5xl
                                md:text-6xl
                                lg:text-[4.3rem]
                                leading-[0.98]
                                tracking-[-0.045em]
                                font-medium
                            "
                        >
                            Choose the level
                            <br />
                            of{" "}
                            <span className="text-[#D4F92F]">
                                intelligence.
                            </span>
                        </motion.h2>


                        <motion.p
                            variants={fadeInUp}
                            className="
                                lg:ml-auto
                                max-w-lg
                                text-sm
                                md:text-base
                                leading-7
                                text-zinc-500
                            "
                        >
                            Start small, scale when you need to.
                            Every plan gives you the tools to turn
                            video into something searchable.
                        </motion.p>

                    </div>

                </motion.div>


                {/* ─────────────────────────────────────
                    Pricing cards
                ───────────────────────────────────── */}

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    variants={staggerContainer}
                    className="
                        grid
                        lg:grid-cols-3
                        gap-4
                        items-stretch
                    "
                >

                    {plans.map((plan) => (

                        <motion.div
                            key={plan.name}
                            variants={cardVariant}
                            whileHover={{
                                y: plan.featured ? -8 : -5,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                            className={`
                                relative
                                flex
                                flex-col
                                rounded-3xl
                                overflow-hidden
                                ${plan.featured
                                    ? "bg-[#D4F92F] text-black"
                                    : "bg-[#090909] text-white border border-zinc-800"
                                }
                            `}
                        >

                            {/* Featured top bar */}
                            {plan.featured && (
                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        px-6
                                        py-3
                                        bg-black
                                        text-white
                                    "
                                >
                                    <div className="flex items-center gap-2">

                                        <Sparkles
                                            size={14}
                                            className="text-[#D4F92F]"
                                        />

                                        <span
                                            className="
                                                text-[10px]
                                                tracking-[0.2em]
                                                text-zinc-400
                                            "
                                        >
                                            MOST POPULAR
                                        </span>

                                    </div>

                                    <span className="text-[10px] text-[#D4F92F]">
                                        02
                                    </span>
                                </div>
                            )}


                            <div className="flex flex-col flex-1 p-7 md:p-8">

                                {/* Number */}
                                {!plan.featured && (
                                    <span
                                        className="
                                            text-[10px]
                                            tracking-[0.2em]
                                            text-zinc-700
                                            mb-7
                                        "
                                    >
                                        {plan.number}
                                    </span>
                                )}


                                {/* Name */}
                                <div className="mb-8">

                                    <span
                                        className={`
                                            text-[10px]
                                            tracking-[0.22em]
                                            ${plan.featured
                                                ? "text-black/50"
                                                : "text-zinc-600"
                                            }
                                        `}
                                    >
                                        {plan.eyebrow}
                                    </span>

                                    <h3
                                        className="
                                            text-2xl
                                            md:text-3xl
                                            font-medium
                                            mt-2
                                        "
                                    >
                                        {plan.name}
                                    </h3>

                                    <p
                                        className={`
                                            text-sm
                                            leading-6
                                            mt-3
                                            max-w-xs
                                            ${plan.featured
                                                ? "text-black/60"
                                                : "text-zinc-500"
                                            }
                                        `}
                                    >
                                        {plan.description}
                                    </p>

                                </div>


                                {/* Price */}
                                <div
                                    className={`
                                        pb-7
                                        mb-7
                                        border-b
                                        ${plan.featured
                                            ? "border-black/15"
                                            : "border-zinc-800"
                                        }
                                    `}
                                >

                                    <div className="flex items-baseline">

                                        <span
                                            className="
                                                text-4xl
                                                md:text-5xl
                                                font-medium
                                                tracking-[-0.04em]
                                            "
                                        >
                                            {plan.price}
                                        </span>

                                        <span
                                            className={`
                                                text-sm
                                                ml-2
                                                ${plan.featured
                                                    ? "text-black/50"
                                                    : "text-zinc-600"
                                                }
                                            `}
                                        >
                                            / month
                                        </span>

                                    </div>

                                </div>


                                {/* Button */}
                                <motion.button
                                    whileHover={{
                                        scale: 1.02,
                                    }}
                                    whileTap={{
                                        scale: 0.98,
                                    }}
                                    className={`
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        w-full
                                        rounded-full
                                        py-3
                                        text-sm
                                        font-medium
                                        mb-8
                                        transition-all
                                        ${plan.featured
                                            ? "bg-black text-white"
                                            : "border border-zinc-700 text-white hover:border-[#D4F92F]"
                                        }
                                    `}
                                >
                                    {plan.button}

                                    <ArrowRight size={15} />

                                </motion.button>


                                {/* Features */}
                                <motion.div
                                    variants={staggerContainer}
                                    className="mt-auto"
                                >

                                    <p
                                        className={`
                                            text-[10px]
                                            tracking-[0.2em]
                                            mb-4
                                            ${plan.featured
                                                ? "text-black/40"
                                                : "text-zinc-700"
                                            }
                                        `}
                                    >
                                        INCLUDES
                                    </p>


                                    <ul className="space-y-3">

                                        {plan.features.map(
                                            (feature, index) => (

                                                <motion.li
                                                    key={index}
                                                    variants={featureVariant}
                                                    className="
                                                        flex
                                                        items-start
                                                        gap-3
                                                        text-sm
                                                    "
                                                >

                                                    <span
                                                        className={`
                                                            flex
                                                            items-center
                                                            justify-center
                                                            shrink-0
                                                            w-4
                                                            h-4
                                                            rounded-full
                                                            mt-0.5
                                                            ${plan.featured
                                                                ? "bg-black text-[#D4F92F]"
                                                                : "bg-zinc-900 text-[#D4F92F]"
                                                            }
                                                        `}
                                                    >
                                                        <Check
                                                            size={10}
                                                            strokeWidth={3}
                                                        />
                                                    </span>

                                                    <span
                                                        className={
                                                            plan.featured
                                                                ? "text-black/75"
                                                                : "text-zinc-400"
                                                        }
                                                    >
                                                        {feature}
                                                    </span>

                                                </motion.li>

                                            )
                                        )}

                                    </ul>

                                </motion.div>

                            </div>

                        </motion.div>

                    ))}

                </motion.div>


                {/* ─────────────────────────────────────
                    Bottom reassurance
                ───────────────────────────────────── */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4,
                    }}
                    className="
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        justify-between
                        gap-4
                        mt-8
                        pt-6
                        border-t
                        border-zinc-900
                    "
                >

                    <p className="text-xs text-zinc-600">
                        All plans include secure video processing.
                    </p>

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-xs
                            text-zinc-700
                        "
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4F92F]" />
                        No hidden fees
                    </div>

                </motion.div>

            </div>

        </section>
    );
};

export default Pricing;