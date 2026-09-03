"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
    ArrowLeft,
    ArrowUpRight,
    Check,
    Eye,
    EyeOff,
    LockKeyhole,
    Mail,
    UserRound,
} from "lucide-react";
import bg from "../assets/Hexagon.svg";
import google from "../assets/google.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const pageVariant: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const contentContainer: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.25,
        },
    },
};

const itemVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 18,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const formVariant: Variants = {
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
            delay: 0.15,
        },
    },
};

const logoVariant: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.85,
        y: -10,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function SignIn() {
    const [isHidden1, setIsHidden1] = useState(true);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const navigate = useNavigate();

    const handleNavLinkClick = (path: string) => {
        navigate(path);
    };

    return (
        <motion.main
            initial="hidden"
            animate="visible"
            variants={pageVariant}
            className="relative min-h-screen overflow-hidden bg-[#050505] font-inter text-white"
        >
            {/* =========================================================
                BACKGROUND
            ========================================================= */}

            <div className="pointer-events-none absolute inset-0">
                <img
                    src={bg}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-[0.15]"
                />

                <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#D4F92F]/[0.025] blur-[140px]" />

                <div className="absolute -right-40 bottom-0 h-[550px] w-[550px] rounded-full bg-[#D4F92F]/[0.035] blur-[150px]" />

                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                        backgroundSize: "72px 72px",
                    }}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_88%)]" />
            </div>

            {/* =========================================================
                TOP BAR
            ========================================================= */}

            <motion.header
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-6 md:px-10 lg:px-14"
            >
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="group flex items-center gap-3"
                >
                    <img
                        src={logo}
                        alt="Rimberio"
                        className="size-28 object-contain"
                    />
                </button>

                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="group flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600 transition-colors hover:text-white"
                >
                    <ArrowLeft
                        size={13}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                    Back home
                </button>
            </motion.header>

            {/* =========================================================
                MAIN
            ========================================================= */}

            <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-28">
                <div className="grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1fr_460px]">
                    {/* =================================================
                        LEFT EDITORIAL SIDE
                    ================================================= */}

                    <motion.div
                        variants={contentContainer}
                        initial="hidden"
                        animate="visible"
                        className="hidden lg:block"
                    >
                        <motion.div
                            variants={itemVariant}
                            className="mb-8 flex items-center gap-3"
                        >
                            <span className="h-px w-8 bg-[#D4F92F]" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-600">
                                Start searching differently
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariant}
                            className="max-w-xl text-[clamp(3.5rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.065em]"
                        >
                            Make your
                            <br />
                            <span className="text-zinc-700">
                                videos searchable.
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariant}
                            className="mt-8 max-w-md text-sm leading-7 text-zinc-500"
                        >
                            Create your Rimberio workspace and let AI turn
                            hours of footage into something you can actually
                            find.
                        </motion.p>

                        {/* Small feature list */}
                        <motion.div
                            variants={itemVariant}
                            className="mt-12 space-y-4"
                        >
                            {[
                                "Search with natural language",
                                "Jump directly to the right moment",
                                "Let AI handle the heavy lifting",
                            ].map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-3"
                                >
                                    <span className="flex h-5 w-5 items-center justify-center border border-zinc-800">
                                        <Check
                                            size={11}
                                            strokeWidth={2}
                                            className="text-[#D4F92F]"
                                        />
                                    </span>

                                    <span className="text-xs text-zinc-600">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* =================================================
                        SIGNUP PANEL
                    ================================================= */}

                    <AnimatePresence mode="wait">
                        <motion.section
                            key="signupForm"
                            variants={formVariant}
                            initial="hidden"
                            animate="visible"
                            exit={{
                                opacity: 0,
                                y: -20,
                                transition: {
                                    duration: 0.35,
                                },
                            }}
                            className="relative"
                        >
                            {/* Top marker */}
                            <div className="absolute -top-3 left-0 right-0 flex justify-between px-1">
                                <span className="h-1 w-10 bg-[#D4F92F]" />

                                <span className="font-mono text-[9px] text-zinc-700">
                                    01 / CREATE
                                </span>
                            </div>

                            <div className="border border-zinc-900 bg-[#080808]/90 px-7 py-9 shadow-2xl backdrop-blur-xl sm:px-10 sm:py-11">
                                {/* Logo */}
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={logoVariant}
                                    className="mb-8 flex items-center justify-center"
                                >
                                    <button
                                        type="button"
                                        onClick={() => navigate("/")}
                                        className="group relative"
                                    >
                                        <div className="absolute inset-0 rounded-full bg-[#D4F92F]/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                                        <img
                                            src={logo}
                                            alt="Rimberio"
                                            className="relative h-16 w-16 object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </button>
                                </motion.div>

                                {/* Header */}
                                <motion.div
                                    variants={contentContainer}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.div
                                        variants={itemVariant}
                                        className="mb-2 text-center text-[10px] font-medium uppercase tracking-[0.25em] text-[#D4F92F]"
                                    >
                                        Create your workspace
                                    </motion.div>

                                    <motion.h2
                                        variants={itemVariant}
                                        className="text-center text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl"
                                    >
                                        Start with Rimberio.
                                    </motion.h2>

                                    <motion.p
                                        variants={itemVariant}
                                        className="mx-auto mt-3 max-w-xs text-center text-sm leading-6 text-zinc-600"
                                    >
                                        A few details and you're ready to
                                        search.
                                    </motion.p>

                                    {/* Form fields */}
                                    <div className="mt-9 flex flex-col gap-5">
                                        {/* Username */}
                                        <motion.div
                                            variants={itemVariant}
                                            className="group"
                                        >
                                            <label className="mb-3 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                                                <UserRound size={12} />
                                                Username
                                            </label>

                                            <div className="relative border-b border-zinc-800 transition-colors duration-300 focus-within:border-[#D4F92F]">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    placeholder="Choose a username"
                                                    className="h-11 w-full bg-transparent pr-3 text-sm text-white outline-none placeholder:text-zinc-700"
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Email */}
                                        <motion.div
                                            variants={itemVariant}
                                            className="group"
                                        >
                                            <label className="mb-3 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                                                <Mail size={12} />
                                                Email address
                                            </label>

                                            <div className="relative border-b border-zinc-800 transition-colors duration-300 focus-within:border-[#D4F92F]">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="you@example.com"
                                                    className="h-11 w-full bg-transparent pr-3 text-sm text-white outline-none placeholder:text-zinc-700"
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Password */}
                                        <motion.div
                                            variants={itemVariant}
                                            className="group"
                                        >
                                            <label className="mb-3 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                                                <LockKeyhole size={12} />
                                                Password
                                            </label>

                                            <div className="relative border-b border-zinc-800 transition-colors duration-300 focus-within:border-[#D4F92F]">
                                                <input
                                                    type={
                                                        isHidden1
                                                            ? "password"
                                                            : "text"
                                                    }
                                                    name="password"
                                                    placeholder="Create a password"
                                                    className="h-11 w-full bg-transparent pr-12 text-sm text-white outline-none placeholder:text-zinc-700"
                                                />

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setIsHidden1(
                                                            !isHidden1
                                                        )
                                                    }
                                                    className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center justify-center p-2 text-zinc-700 transition-colors hover:text-[#D4F92F]"
                                                    aria-label={
                                                        isHidden1
                                                            ? "Show password"
                                                            : "Hide password"
                                                    }
                                                >
                                                    {isHidden1 ? (
                                                        <EyeOff size={17} />
                                                    ) : (
                                                        <Eye size={17} />
                                                    )}
                                                </button>
                                            </div>
                                        </motion.div>

                                        {/* Terms */}
                                        <motion.label
                                            variants={itemVariant}
                                            className="group mt-1 flex cursor-pointer items-start gap-3"
                                        >
                                            <button
                                                type="button"
                                                role="checkbox"
                                                aria-checked={acceptedTerms}
                                                onClick={() =>
                                                    setAcceptedTerms(
                                                        !acceptedTerms
                                                    )
                                                }
                                                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border transition-all duration-200 ${acceptedTerms
                                                    ? "border-[#D4F92F] bg-[#D4F92F]"
                                                    : "border-zinc-700 bg-transparent group-hover:border-zinc-500"
                                                    }`}
                                            >
                                                {acceptedTerms && (
                                                    <Check
                                                        size={11}
                                                        strokeWidth={2.5}
                                                        className="text-black"
                                                    />
                                                )}
                                            </button>

                                            <span className="text-[10px] leading-5 text-zinc-600">
                                                I agree to the{" "}
                                                <button
                                                    type="button"
                                                    className="text-zinc-400 underline decoration-zinc-700 underline-offset-2 transition-colors hover:text-[#D4F92F]"
                                                >
                                                    Terms & Conditions
                                                </button>
                                            </span>
                                        </motion.label>

                                        {/* Create account */}
                                        <motion.button
                                            variants={itemVariant}
                                            type="submit"
                                            whileHover={{
                                                y: -2,
                                            }}
                                            whileTap={{
                                                scale: 0.985,
                                            }}
                                            className="group relative flex h-12 w-full items-center justify-between overflow-hidden bg-[#D4F92F] px-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-[#c9ed2b]"
                                        >
                                            <span>Create account</span>

                                            <ArrowUpRight
                                                size={17}
                                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                            />
                                        </motion.button>
                                    </div>

                                    {/* Divider */}
                                    <motion.div
                                        variants={itemVariant}
                                        className="my-7 flex items-center gap-4"
                                    >
                                        <div className="h-px flex-1 bg-zinc-900" />

                                        <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-700">
                                            or
                                        </span>

                                        <div className="h-px flex-1 bg-zinc-900" />
                                    </motion.div>

                                    {/* Google */}
                                    <motion.button
                                        variants={itemVariant}
                                        type="button"
                                        whileHover={{
                                            y: -2,
                                            borderColor:
                                                "rgba(212,249,47,0.4)",
                                        }}
                                        whileTap={{
                                            scale: 0.985,
                                        }}
                                        className="flex h-12 w-full items-center justify-center gap-3 border border-zinc-800 bg-transparent text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
                                    >
                                        <img
                                            src={google}
                                            alt=""
                                            className="h-4 w-4"
                                        />

                                        <span>
                                            Continue with Google
                                        </span>
                                    </motion.button>

                                    {/* Login */}
                                    <motion.p
                                        variants={itemVariant}
                                        className="mt-7 text-center text-xs text-zinc-700"
                                    >
                                        Already have an account?{" "}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleNavLinkClick("/LogIn")
                                            }
                                            className="ml-1 text-[#D4F92F] transition-colors hover:text-white"
                                        >
                                            Log in
                                        </button>
                                    </motion.p>
                                </motion.div>
                            </div>

                            {/* Panel metadata */}
                            <div className="mt-4 flex items-center justify-between text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                                <span>Secure registration</span>
                                <span>Rimberio / 2026</span>
                            </div>
                        </motion.section>
                    </AnimatePresence>
                </div>
            </div>

            {/* =========================================================
                BOTTOM BAR
            ========================================================= */}

            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between border-t border-zinc-800/70  px-6 py-4 md:px-10 lg:px-14"
            >
                <span className="text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                    Your footage. Your intelligence.
                </span>

                <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                    <span className="h-1 w-1 rounded-full bg-[#D4F92F]" />
                    System online
                </span>
            </motion.footer>
        </motion.main>
    );
}