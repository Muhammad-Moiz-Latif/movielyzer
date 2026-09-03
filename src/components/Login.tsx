"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
    ArrowLeft,
    ArrowUpRight,
    Eye,
    EyeOff,
    LockKeyhole,
    Mail,
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

export default function LogIn() {
    const [isHidden2, setIsHidden2] = useState(true);
    const navigate = useNavigate();

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
                {/* Hexagon texture */}
                <img
                    src={bg}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-[0.15]"
                />

                {/* Left atmospheric light */}
                <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#D4F92F]/[0.025] blur-[140px]" />

                {/* Right atmospheric light */}
                <div className="absolute -right-40 bottom-0 h-[550px] w-[550px] rounded-full bg-[#D4F92F]/[0.035] blur-[150px]" />

                {/* Fine grid */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                        backgroundSize: "72px 72px",
                    }}
                />

                {/* Vignette */}
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
                MAIN AUTH AREA
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
                                AI-powered video search
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariant}
                            className="max-w-xl text-[clamp(3.5rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.065em]"
                        >
                            Find the
                            <br />
                            <span className="text-zinc-700">
                                moment.
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariant}
                            className="mt-8 max-w-md text-sm leading-7 text-zinc-500"
                        >
                            Search through your video library using natural
                            language. No scrubbing. No guessing. Just the
                            moment you need.
                        </motion.p>

                        <motion.div
                            variants={itemVariant}
                            className="mt-12 flex items-center gap-8"
                        >
                            <div>
                                <p className="text-lg font-medium text-zinc-300">
                                    99%
                                </p>
                                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                                    Search accuracy
                                </p>
                            </div>

                            <div className="h-8 w-px bg-zinc-900" />

                            <div>
                                <p className="text-lg font-medium text-zinc-300">
                                    2×
                                </p>
                                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                                    Faster discovery
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* =================================================
                        LOGIN PANEL
                    ================================================= */}

                    <AnimatePresence mode="wait">
                        <motion.section
                            key="authForm"
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
                            {/* Panel top marker */}
                            <div className="absolute -top-3 left-0 right-0 flex justify-between px-1">
                                <span className="h-1 w-10 bg-[#D4F92F]" />

                                <span className="font-mono text-[9px] text-zinc-700">
                                    01 / AUTH
                                </span>
                            </div>

                            <div className="border border-zinc-900 bg-[#080808]/90 px-7 py-10 shadow-2xl backdrop-blur-xl sm:px-10 sm:py-12">
                                {/* Logo */}
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={logoVariant}
                                    className="mb-10 flex items-center justify-center"
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
                                            className="relative h-20 w-20 object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </button>
                                </motion.div>

                                {/* Heading */}
                                <motion.div
                                    variants={contentContainer}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.div
                                        variants={itemVariant}
                                        className="mb-2 text-center text-[10px] font-medium uppercase tracking-[0.25em] text-[#D4F92F]"
                                    >
                                        Welcome back
                                    </motion.div>

                                    <motion.h2
                                        variants={itemVariant}
                                        className="text-center text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl"
                                    >
                                        Sign in to Rimberio.
                                    </motion.h2>

                                    <motion.p
                                        variants={itemVariant}
                                        className="mx-auto mt-3 max-w-xs text-center text-sm leading-6 text-zinc-600"
                                    >
                                        Pick up where you left off.
                                    </motion.p>

                                    {/* Form */}
                                    <div className="mt-10 flex flex-col gap-6">
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
                                                    placeholder="you@example.com"
                                                    className="h-12 w-full bg-transparent pr-3 text-sm text-white outline-none placeholder:text-zinc-700"
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
                                                    placeholder="Enter your password"
                                                    type={
                                                        isHidden2
                                                            ? "password"
                                                            : "text"
                                                    }
                                                    className="h-12 w-full bg-transparent pr-12 text-sm text-white outline-none placeholder:text-zinc-700"
                                                />

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setIsHidden2(
                                                            !isHidden2
                                                        )
                                                    }
                                                    className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center justify-center p-2 text-zinc-700 transition-colors hover:text-[#D4F92F]"
                                                    aria-label={
                                                        isHidden2
                                                            ? "Show password"
                                                            : "Hide password"
                                                    }
                                                >
                                                    {isHidden2 ? (
                                                        <EyeOff size={17} />
                                                    ) : (
                                                        <Eye size={17} />
                                                    )}
                                                </button>
                                            </div>

                                            <div className="mt-3 flex justify-end">
                                                <button
                                                    type="button"
                                                    className="text-[10px] text-zinc-600 transition-colors hover:text-[#D4F92F]"
                                                >
                                                    Forgot password?
                                                </button>
                                            </div>
                                        </motion.div>

                                        {/* Sign in */}
                                        <motion.button
                                            variants={itemVariant}
                                            type="submit"
                                            whileHover={{
                                                y: -2,
                                            }}
                                            whileTap={{
                                                scale: 0.985,
                                            }}
                                            className="group relative mt-1 flex h-12 w-full items-center justify-between overflow-hidden bg-[#D4F92F] px-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-[#c9ed2b]"
                                        >
                                            <span>Sign in</span>

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

                                    {/* Sign up */}
                                    <motion.p
                                        variants={itemVariant}
                                        className="mt-7 text-center text-xs text-zinc-700"
                                    >
                                        Don't have an account?{" "}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                navigate("/SignIn")
                                            }
                                            className="ml-1 text-[#D4F92F] transition-colors hover:text-white"
                                        >
                                            Create one
                                        </button>
                                    </motion.p>
                                </motion.div>
                            </div>

                            {/* Panel metadata */}
                            <div className="mt-4 flex items-center justify-between text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                                <span>Secure authentication</span>
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
                className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between border-t border-zinc-800/70 px-6 py-4 md:px-10 lg:px-14"
            >
                <span className="text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                    Intelligence for every frame
                </span>

                <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                    <span className="h-1 w-1 rounded-full bg-[#D4F92F]" />
                    System online
                </span>
            </motion.footer>
        </motion.main>
    );
}