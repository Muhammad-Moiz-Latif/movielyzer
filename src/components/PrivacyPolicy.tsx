"use client";

import { motion, type Variants } from "framer-motion";
import {
    ArrowUpRight,
    ChevronRight,
    FileText,
    LockKeyhole,
    ShieldCheck,
} from "lucide-react";


const stagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const item: Variants = {
    hidden: {
        opacity: 0,
        y: 16,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const sections = [
    {
        id: "introduction",
        number: "01",
        title: "Introduction",
    },
    {
        id: "information",
        number: "02",
        title: "Information We Collect",
    },
    {
        id: "usage",
        number: "03",
        title: "How We Use Your Information",
    },
    {
        id: "security",
        number: "04",
        title: "Data Security",
    },
    {
        id: "rights",
        number: "05",
        title: "Your Rights",
    },
    {
        id: "changes",
        number: "06",
        title: "Changes to This Policy",
    },
];

const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};

export const PrivacyPolicy = () => {
    return (
        <main className="min-h-screen overflow-hidden bg-[#050505] font-inter text-white">

            {/* =========================================================
                HEADER
            ========================================================= */}

            <section className="relative border-b border-zinc-900">

                {/* Subtle ambient light */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        right-[15%]
                        top-0
                        h-[400px]
                        w-[400px]
                        rounded-full
                        bg-[#D4F92F]/[0.025]
                        blur-[130px]
                    "
                />

                <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pb-20">

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >

                        {/* Eyebrow */}
                        <motion.div
                            variants={item}
                            className="mb-7 flex items-center gap-3"
                        >
                            <LockKeyhole className="h-3.5 w-3.5 text-[#D4F92F]" />

                            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                                Legal / Privacy
                            </span>

                            <span className="font-mono text-[10px] text-zinc-700">
                                01
                            </span>
                        </motion.div>


                        <motion.div
                            variants={item}
                            className="grid gap-10 lg:grid-cols-[1fr_0.4fr] lg:items-end"
                        >

                            <div>
                                <h1
                                    className="
                                        text-[clamp(3.5rem,8vw,7rem)]
                                        font-medium
                                        leading-[0.9]
                                        tracking-[-0.065em]
                                    "
                                >
                                    Privacy
                                    <br />
                                    <span className="text-[#D4F92F]">
                                        matters.
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
                                    We believe trust starts with being clear
                                    about what information we collect, why we
                                    collect it, and how we protect it.
                                </p>
                            </div>


                            {/* Document metadata */}
                            <div className="border-l border-zinc-800 pl-6 lg:mb-2">

                                <div className="mb-6 flex items-center gap-3">
                                    <FileText className="h-4 w-4 text-[#D4F92F]" />

                                    <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                                        Document
                                    </span>
                                </div>

                                <div className="space-y-3 font-mono text-[10px] uppercase tracking-[0.15em]">
                                    <div className="flex justify-between gap-8">
                                        <span className="text-zinc-700">
                                            Version
                                        </span>

                                        <span className="text-zinc-500">
                                            1.0
                                        </span>
                                    </div>

                                    <div className="flex justify-between gap-8">
                                        <span className="text-zinc-700">
                                            Updated
                                        </span>

                                        <span className="text-zinc-500">
                                            July 29, 2025
                                        </span>
                                    </div>

                                    <div className="flex justify-between gap-8">
                                        <span className="text-zinc-700">
                                            Status
                                        </span>

                                        <span className="flex items-center gap-2 text-[#D4F92F]">
                                            <span className="h-1.5 w-1.5 rounded-full bg-[#D4F92F]" />
                                            Active
                                        </span>
                                    </div>
                                </div>

                            </div>

                        </motion.div>

                    </motion.div>

                </div>
            </section>


            {/* =========================================================
                POLICY BODY
            ========================================================= */}

            <section className="relative">

                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">

                    <div className="grid gap-16 lg:grid-cols-[220px_1fr] lg:gap-20">

                        {/* =================================================
                            DESKTOP CONTENT INDEX
                        ================================================= */}

                        <aside className="hidden lg:block">

                            <div className="sticky top-28">

                                <div className="mb-5 text-[9px] uppercase tracking-[0.25em] text-zinc-700">
                                    On this page
                                </div>

                                <nav className="border-l border-zinc-900">

                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() =>
                                                scrollToSection(section.id)
                                            }
                                            className="
                                                group
                                                relative
                                                flex
                                                w-full
                                                items-center
                                                gap-3
                                                border-l
                                                border-transparent
                                                py-2.5
                                                pl-4
                                                text-left
                                                transition-all
                                                duration-300
                                                hover:border-[#D4F92F]
                                            "
                                        >
                                            <span className="font-mono text-[9px] text-zinc-700 transition-colors group-hover:text-[#D4F92F]">
                                                {section.number}
                                            </span>

                                            <span className="text-[11px] text-zinc-600 transition-colors group-hover:text-zinc-300">
                                                {section.title}
                                            </span>
                                        </button>
                                    ))}

                                </nav>

                                <div className="mt-10 border-t border-zinc-900 pt-5">
                                    <p className="text-[10px] leading-5 text-zinc-700">
                                        Questions about your privacy?
                                    </p>

                                    <a
                                        href="mailto:support@rimberio.com"
                                        className="
                                            mt-2
                                            inline-flex
                                            items-center
                                            gap-1.5
                                            text-[10px]
                                            uppercase
                                            tracking-[0.15em]
                                            text-zinc-500
                                            transition-colors
                                            hover:text-[#D4F92F]
                                        "
                                    >
                                        Contact support
                                        <ArrowUpRight className="h-3 w-3" />
                                    </a>
                                </div>

                            </div>

                        </aside>


                        {/* =================================================
                            MOBILE INDEX
                        ================================================= */}

                        <div className="lg:hidden">

                            <div className="mb-5 text-[9px] uppercase tracking-[0.25em] text-zinc-700">
                                Contents
                            </div>

                            <div className="grid border-y border-zinc-900 sm:grid-cols-2">

                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() =>
                                            scrollToSection(section.id)
                                        }
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                            border-b
                                            border-zinc-900
                                            px-4
                                            py-4
                                            text-left
                                            last:border-b-0
                                            sm:nth-[odd]:border-r
                                        "
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="font-mono text-[9px] text-[#D4F92F]">
                                                {section.number}
                                            </span>

                                            <span className="text-xs text-zinc-500">
                                                {section.title}
                                            </span>
                                        </span>

                                        <ChevronRight className="h-3.5 w-3.5 text-zinc-700" />
                                    </button>
                                ))}

                            </div>

                        </div>


                        {/* =================================================
                            DOCUMENT
                        ================================================= */}

                        <motion.article
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.08,
                            }}
                            variants={stagger}
                            className="
                                max-w-3xl
                                text-[15px]
                                leading-8
                                text-zinc-500
                            "
                        >

                            {/* Intro */}
                            <motion.div
                                variants={item}
                                className="
                                    mb-16
                                    border-l-2
                                    border-[#D4F92F]
                                    bg-[#080808]
                                    px-6
                                    py-5
                                    sm:px-8
                                "
                            >
                                <div className="mb-2 flex items-center gap-2">
                                    <ShieldCheck className="h-4 w-4 text-[#D4F92F]" />

                                    <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                                        Privacy commitment
                                    </span>
                                </div>

                                <p className="text-sm leading-6 text-zinc-400">
                                    Your privacy is critically important to
                                    us. This policy explains how Rimberio
                                    collects, uses, and protects information
                                    when you use our Services.
                                </p>
                            </motion.div>


                            {/* 01 */}
                            <motion.section
                                variants={item}
                                id="introduction"
                                className="scroll-mt-28 mb-16"
                            >
                                <SectionHeading
                                    number="01"
                                    title="Introduction"
                                />

                                <p>
                                    This Privacy Policy describes how Rimberio
                                    ("we," "us," or "our") collects, uses, and
                                    discloses information about you when you
                                    use our website and services (collectively,
                                    the "Services").
                                </p>

                                <p className="mt-5">
                                    By using our Services, you agree to the
                                    collection, use, and disclosure of your
                                    information as described in this Privacy
                                    Policy.
                                </p>
                            </motion.section>


                            {/* 02 */}
                            <motion.section
                                variants={item}
                                id="information"
                                className="scroll-mt-28 mb-16"
                            >
                                <SectionHeading
                                    number="02"
                                    title="Information We Collect"
                                />

                                <p>
                                    We collect information you provide
                                    directly to us, such as when you create
                                    an account, use our Services, or
                                    communicate with us. This may include:
                                </p>

                                <PolicyList
                                    items={[
                                        "Personal identification information (Name, email address, phone number, etc.)",
                                        "Payment information (processed by third-party payment processors)",
                                        "Video content you upload and associated metadata",
                                        "Communications with us (customer support inquiries, feedback)",
                                    ]}
                                />

                                <p className="mt-7">
                                    We also automatically collect certain
                                    information when you access or use our
                                    Services, including:
                                </p>

                                <PolicyList
                                    items={[
                                        "Log data (IP address, browser type, access times, pages viewed)",
                                        "Device information (hardware model, operating system, unique device identifiers)",
                                        "Usage data (features used, time spent, search queries)",
                                    ]}
                                />
                            </motion.section>


                            {/* 03 */}
                            <motion.section
                                variants={item}
                                id="usage"
                                className="scroll-mt-28 mb-16"
                            >
                                <SectionHeading
                                    number="03"
                                    title="How We Use Your Information"
                                />

                                <p>
                                    We use the information we collect for
                                    various purposes, including to:
                                </p>

                                <PolicyList
                                    items={[
                                        "Provide, maintain, and improve our Services",
                                        "Process transactions and send related information",
                                        "Communicate with you about products, services, and offers",
                                        "Monitor and analyze trends, usage, and activities in connection with our Services",
                                        "Detect, investigate, and prevent fraudulent transactions and other illegal activities",
                                    ]}
                                />
                            </motion.section>


                            {/* 04 */}
                            <motion.section
                                variants={item}
                                id="security"
                                className="scroll-mt-28 mb-16"
                            >
                                <SectionHeading
                                    number="04"
                                    title="Data Security"
                                />

                                <p>
                                    We implement reasonable security measures
                                    to protect your information from
                                    unauthorized access, alteration,
                                    disclosure, or destruction.
                                </p>

                                <p className="mt-5">
                                    However, no method of transmission over
                                    the Internet or electronic storage is 100%
                                    secure.
                                </p>
                            </motion.section>


                            {/* 05 */}
                            <motion.section
                                variants={item}
                                id="rights"
                                className="scroll-mt-28 mb-16"
                            >
                                <SectionHeading
                                    number="05"
                                    title="Your Rights"
                                />

                                <p>
                                    You have certain rights regarding your
                                    personal information, including the right
                                    to access, correct, or delete your data.
                                    Please contact us to exercise these rights.
                                </p>
                            </motion.section>


                            {/* 06 */}
                            <motion.section
                                variants={item}
                                id="changes"
                                className="scroll-mt-28"
                            >
                                <SectionHeading
                                    number="06"
                                    title="Changes to This Policy"
                                />

                                <p>
                                    We may update this Privacy Policy from
                                    time to time. We will notify you of any
                                    changes by posting the new Privacy Policy
                                    on this page.
                                </p>
                            </motion.section>


                            {/* Document ending */}
                            <motion.div
                                variants={item}
                                className="
                                    mt-20
                                    border-t
                                    border-zinc-900
                                    pt-6
                                "
                            >
                                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

                                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                                        RIMBERIO / PRIVACY POLICY
                                    </span>

                                    <span className="text-[10px] text-zinc-700">
                                        Last updated: July 29, 2025
                                    </span>

                                </div>
                            </motion.div>

                        </motion.article>

                    </div>

                </div>

            </section>


            {/* =========================================================
                QUIET HANDOFF TO GLOBAL JOIN US SECTION
            ========================================================= */}

            <section className="border-t border-zinc-900">

                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-7 sm:px-8 lg:px-12">

                    <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D4F92F]" />

                        <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-700">
                            Your privacy matters
                        </span>
                    </div>

                    <span className="hidden text-[9px] uppercase tracking-[0.2em] text-zinc-800 sm:block">
                        RIMBERIO / TRUST
                    </span>

                </div>

            </section>

        </main>
    );
};


/* =============================================================
   REUSABLE DOCUMENT COMPONENTS
============================================================= */

const SectionHeading = ({
    number,
    title,
}: {
    number: string;
    title: string;
}) => {
    return (
        <div className="mb-6 flex items-start gap-5">

            <span className="pt-1 font-mono text-[10px] text-[#D4F92F]">
                {number}
            </span>

            <div>
                <h2 className="text-2xl font-medium tracking-[-0.025em] text-white sm:text-3xl">
                    {title}
                </h2>

                <div className="mt-3 h-px w-8 bg-zinc-800" />
            </div>

        </div>
    );
};


const PolicyList = ({
    items,
}: {
    items: string[];
}) => {
    return (
        <ul className="mt-5 space-y-3">

            {items.map((text, index) => (
                <li
                    key={index}
                    className="flex gap-3"
                >
                    <span className="mt-[13px] h-1 w-1 shrink-0 rounded-full bg-[#D4F92F]/70" />

                    <span>{text}</span>
                </li>
            ))}

        </ul>
    );
};


export default PrivacyPolicy;