"use client";

import { motion, type Variants } from "framer-motion";
import {
    ArrowUpRight,
    ChevronDown,
    CircleHelp,
    Search,
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
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

const stagger: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.15,
        },
    },
};

const faqData = [
    {
        question: "What is Rimberio?",
        answer:
            "Rimberio is an AI-powered video search platform that allows you to search through video content using natural language queries, transcribe speech, and index visual elements for precise, timestamped results.",
    },
    {
        question: "How accurate is the AI search?",
        answer:
            "Our AI search boasts an accuracy rate of 99%, ensuring you find exactly what you're looking for in seconds, not hours.",
    },
    {
        question: "What video formats do you support?",
        answer:
            "We support all major video formats including MP4, AVI, MOV, WMV, and more. Simply drag and drop your files, and our system will process them automatically.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Yes, we prioritize your data security with enterprise-grade encryption, secure servers, and a 99.9% uptime guarantee. Your content is always protected.",
    },
    {
        question: "Can I integrate Rimberio with my existing systems?",
        answer:
            "For enterprise clients, we offer custom integration solutions and API access to seamlessly connect Rimberio with your existing workflows and platforms.",
    },
    {
        question: "What is 'token usage' in your pricing plans?",
        answer:
            "Token usage refers to the amount of AI processing power consumed by your searches and analyses. Different plans offer varying token limits to suit your usage needs.",
    },
];

export const FAQ = () => {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050505] px-6 pb-24 pt-28 font-inter text-white md:px-10 lg:px-16">
            {/* ---------------------------------------------------------
                ATMOSPHERE
            --------------------------------------------------------- */}

            <div className="pointer-events-none absolute inset-0">
                {/* Fine editorial grid */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                        backgroundSize: "72px 72px",
                    }}
                />

                {/* Lime atmospheric glow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-[#D4F92F]/[0.045] blur-[140px]"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.8, delay: 0.3 }}
                    className="absolute -left-48 top-[45%] h-[420px] w-[420px] rounded-full bg-[#D4F92F]/[0.025] blur-[130px]"
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* ---------------------------------------------------------
                    HERO
                --------------------------------------------------------- */}

                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    className="relative border-b border-zinc-900 pb-16"
                >
                    {/* Top metadata */}
                    <motion.div
                        variants={fadeUp}
                        className="mb-12 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-600"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-[#D4F92F]">04</span>
                            <span>Knowledge Base</span>
                        </div>

                        <span>Rimberio / 2026</span>
                    </motion.div>

                    <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end">
                        <div>
                            <motion.div
                                variants={fadeUp}
                                className="mb-7 flex items-center gap-3"
                            >
                                <span className="flex h-8 w-8 items-center justify-center border border-zinc-800 bg-zinc-950">
                                    <CircleHelp
                                        size={15}
                                        strokeWidth={1.5}
                                        className="text-[#D4F92F]"
                                    />
                                </span>

                                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-500">
                                    Frequently Asked
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={fadeUp}
                                className="max-w-4xl text-[clamp(3.8rem,8vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.065em]"
                            >
                                Questions
                                <br />
                                <span className="text-zinc-700">
                                    answered.
                                </span>
                            </motion.h1>
                        </div>

                        <motion.div
                            variants={fadeUp}
                            className="border-l border-zinc-800 pl-6 lg:mb-2"
                        >
                            <p className="text-sm leading-7 text-zinc-500">
                                Everything you need to know about searching,
                                processing, security, integrations, and how
                                Rimberio works behind the scenes.
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                                <Search size={12} />
                                <span>6 common questions</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* ---------------------------------------------------------
                    FAQ WORKSPACE
                --------------------------------------------------------- */}

                <section className="grid lg:grid-cols-[220px_1fr]">
                    {/* Left index */}
                    <motion.aside
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="hidden border-r border-zinc-900 pr-8 pt-16 lg:block"
                    >
                        <div className="sticky top-32">
                            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-600">
                                On this page
                            </p>

                            <div className="space-y-5">
                                {faqData.map((faq, index) => (
                                    <a
                                        key={faq.question}
                                        href={`#faq-${index}`}
                                        className="group flex gap-3 text-xs text-zinc-600 transition-colors hover:text-white no-underline"
                                    >
                                        <span className="font-mono text-[9px] text-zinc-800 transition-colors group-hover:text-[#D4F92F]">
                                            0{index + 1}
                                        </span>

                                        <span className="leading-5">
                                            {faq.question}
                                        </span>
                                    </a>
                                ))}
                            </div>

                            <div className="mt-12 border-t border-zinc-900 pt-6">
                                <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                                    Need more?
                                </p>

                                <a
                                    href="/Contact"
                                    className="mt-3 inline-flex items-center gap-2 text-xs text-zinc-500 transition-colors hover:text-[#D4F92F] no-underline"
                                >
                                    Contact support
                                    <ArrowUpRight size={12} />
                                </a>
                            </div>
                        </div>
                    </motion.aside>

                    {/* Accordion */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={stagger}
                        className="lg:pl-12"
                    >
                        <div className="border-b border-zinc-900">
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                            >
                                {faqData.map((faq, index) => (
                                    <motion.div
                                        key={faq.question}
                                        id={`faq-${index}`}
                                        variants={fadeUp}
                                        className="scroll-mt-32"
                                    >
                                        <AccordionItem
                                            value={`item-${index}`}
                                            className="border-t border-zinc-900"
                                        >
                                            <AccordionTrigger
                                                className="
                                                    group
                                                    flex
                                                    w-full
                                                    items-center
                                                    gap-6
                                                    py-8
                                                    text-left
                                                    no-underline
                                                    hover:no-underline
                                                    [&>svg]:hidden
                                                "
                                            >
                                                {/* Number */}
                                                <span
                                                    className="
                                                        w-8
                                                        shrink-0
                                                        pt-1
                                                        font-mono
                                                        text-[10px]
                                                        text-zinc-700
                                                        transition-colors
                                                        duration-300
                                                        group-data-[state=open]:text-[#D4F92F]
                                                    "
                                                >
                                                    0{index + 1}
                                                </span>

                                                {/* Question */}
                                                <span
                                                    className="
                                                        flex-1
                                                        text-lg
                                                        font-medium
                                                        tracking-[-0.02em]
                                                        text-zinc-300
                                                        transition-colors
                                                        duration-300
                                                        group-hover:text-white
                                                        group-data-[state=open]:text-white
                                                        md:text-xl
                                                    "
                                                >
                                                    {faq.question}
                                                </span>

                                                {/* Custom icon */}
                                                <span
                                                    className="
                                                        flex
                                                        h-9
                                                        w-9
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        border
                                                        border-zinc-800
                                                        text-zinc-600
                                                        transition-all
                                                        duration-300
                                                        group-hover:border-zinc-600
                                                        group-hover:text-white
                                                        group-data-[state=open]:border-[#D4F92F]/40
                                                        group-data-[state=open]:bg-[#D4F92F]
                                                        group-data-[state=open]:text-black
                                                    "
                                                >
                                                    <ChevronDown
                                                        size={16}
                                                        strokeWidth={1.5}
                                                        className="transition-transform duration-300 group-data-[state=open]:rotate-180"
                                                    />
                                                </span>
                                            </AccordionTrigger>

                                            <AccordionContent
                                                className="
                                                    pb-8
                                                    pl-14
                                                    pr-12
                                                    text-sm
                                                    leading-7
                                                    text-zinc-500
                                                    md:text-[15px]
                                                "
                                            >
                                                <div className="max-w-2xl border-l border-[#D4F92F]/20 pl-5">
                                                    {faq.answer}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </motion.div>
                                ))}
                            </Accordion>
                        </div>

                        {/* Desktop / mobile support handoff */}
                        <motion.div
                            variants={fadeUp}
                            className="flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div>
                                <p className="text-sm font-medium text-zinc-300">
                                    Still have a question?
                                </p>

                                <p className="mt-1 text-xs text-zinc-600">
                                    Our team is happy to help with anything
                                    that isn't covered here.
                                </p>
                            </div>

                            <a
                                href="/Contact"
                                className="
                                    group
                                    inline-flex
                                    w-fit
                                    items-center
                                    gap-3
                                    border
                                    border-zinc-800
                                    px-5
                                    py-3
                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-[0.2em]
                                    text-zinc-400
                                    transition-all
                                    duration-300
                                    hover:border-[#D4F92F]/40
                                    hover:bg-[#D4F92F]
                                    hover:text-black
                                    no-underline
                                "
                            >
                                Contact Rimberio
                                <ArrowUpRight
                                    size={14}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </a>
                        </motion.div>
                    </motion.div>
                </section>

                {/* ---------------------------------------------------------
                    BOTTOM SIGNATURE
                --------------------------------------------------------- */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-3 border-t border-zinc-900 pt-5 text-[9px] uppercase tracking-[0.22em] text-zinc-700 sm:flex-row sm:items-center sm:justify-between"
                >
                    <span>Rimberio / Knowledge</span>

                    <span className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D4F92F]" />
                        Search less. Discover more.
                    </span>
                </motion.div>
            </div>
        </main>
    );
};

export default FAQ;