"use client";

import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

const mobileMenuVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.97,
        y: -10,
        transition: {
            duration: 0.25,
        },
    },

    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.07,
            delayChildren: 0.1,
        },
    },
};

const mobileMenuItemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 15,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    /*
    |--------------------------------------------------------------------------
    | Scroll behavior
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", controlNavbar, { passive: true });

        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    /*
    |--------------------------------------------------------------------------
    | Close mobile menu when route changes
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    /*
    |--------------------------------------------------------------------------
    | Navigation
    |--------------------------------------------------------------------------
    */

    const handleNavLinkClick = (path: string) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    const isActiveLink = (path: string) => {
        if (path === "/") {
            return location.pathname === "/";
        }

        return location.pathname.startsWith(path);
    };

    const navItems = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "About",
            path: "/About",
        },
        {
            label: "Contact",
            path: "/Contact",
        },
        {
            label: "Privacy",
            path: "/Policy",
        },
        {
            label: "FAQ",
            path: "/FAQ",
        },
    ];

    return (
        <>
            {/* =========================================================
                DESKTOP / MOBILE HEADER
            ========================================================== */}

            <motion.header
                animate={{
                    y: showNavbar ? 0 : -120,
                    opacity: showNavbar ? 1 : 0,
                }}
                transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="fixed left-0 right-0 top-0 z-[100] px-4 pt-4 sm:px-6 lg:px-8"
            >
                <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between">

                    {/* =================================================
                        LOGO
                    ================================================== */}

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => navigate("/")}
                        className="relative z-10 flex h-14 w-36 items-center overflow-hidden"
                        aria-label="Go to homepage"
                    >
                        <img
                            src={logo}
                            alt="Rimberio"
                            className="h-auto w-40 object-contain"
                        />
                    </motion.button>

                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================== */}

                    <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">

                        <div className="flex items-center rounded-full border border-white/[0.08] bg-black/30 px-2 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">

                            {navItems.map((item) => {
                                const active = isActiveLink(item.path);

                                return (
                                    <motion.button
                                        key={item.path}
                                        onClick={() =>
                                            handleNavLinkClick(item.path)
                                        }
                                        whileHover={{ y: -1 }}
                                        whileTap={{ scale: 0.96 }}
                                        className="relative rounded-full px-4 py-2 text-[12px] font-medium tracking-wide transition-colors duration-300"
                                    >
                                        {/* Active pill */}

                                        {active && (
                                            <motion.span
                                                layoutId="activeNav"
                                                className="absolute inset-0 rounded-full bg-white/[0.07]"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 30,
                                                }}
                                            />
                                        )}

                                        <span
                                            className={`relative z-10 ${active
                                                    ? "text-[#D4F92F]"
                                                    : "text-zinc-400 hover:text-white"
                                                }`}
                                        >
                                            {item.label}
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>

                    {/* =================================================
                        DESKTOP CTA
                    ================================================== */}

                    <motion.button
                        whileHover={{
                            scale: 1.03,
                            backgroundColor: "#D4F92F",
                            color: "#000",
                        }}
                        whileTap={{
                            scale: 0.96,
                        }}
                        onClick={() => navigate("/SignIn")}
                        className="group hidden items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-5 py-2.5 text-xs font-medium text-white backdrop-blur-xl transition-colors md:flex"
                    >
                        Sign In

                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </motion.button>

                    {/* =================================================
                        MOBILE MENU BUTTON
                    ================================================== */}

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                            setIsMobileMenuOpen(!isMobileMenuOpen)
                        }
                        className="relative z-[110] flex size-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl md:hidden"
                        aria-label={
                            isMobileMenuOpen
                                ? "Close menu"
                                : "Open menu"
                        }
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isMobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{
                                        opacity: 0,
                                        rotate: -90,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        rotate: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        rotate: 90,
                                    }}
                                >
                                    <X className="size-5" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{
                                        opacity: 0,
                                        rotate: 90,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        rotate: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        rotate: -90,
                                    }}
                                >
                                    <Menu className="size-5" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </nav>
            </motion.header>

            {/* =========================================================
                MOBILE MENU
            ========================================================== */}

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={mobileMenuVariants}
                        className="fixed inset-3 z-[90] flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#080808]/95 p-6 pt-24 shadow-[0_30px_100px_rgba(0,0,0,0.7)] backdrop-blur-2xl md:hidden"
                    >
                        {/* Background glow */}

                        <div className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-[#D4F92F]/[0.06] blur-[100px]" />

                        <div className="relative flex flex-1 flex-col">

                            {/* Small label */}

                            <motion.div
                                variants={mobileMenuItemVariants}
                                className="mb-10 flex items-center gap-2"
                            >
                                <span className="size-1.5 rounded-full bg-[#D4F92F]" />

                                <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                                    Navigation
                                </span>
                            </motion.div>

                            {/* Links */}

                            <div className="flex flex-col gap-2">

                                {navItems.map((item, index) => {
                                    const active = isActiveLink(item.path);

                                    return (
                                        <motion.button
                                            key={item.path}
                                            variants={mobileMenuItemVariants}
                                            onClick={() =>
                                                handleNavLinkClick(
                                                    item.path
                                                )
                                            }
                                            className="group flex items-center justify-between border-b border-white/[0.06] py-4 text-left"
                                        >
                                            <span
                                                className={`text-3xl font-medium tracking-tight ${active
                                                        ? "text-[#D4F92F]"
                                                        : "text-zinc-300"
                                                    }`}
                                            >
                                                {item.label}
                                            </span>

                                            <span className="text-xs text-zinc-700">
                                                0{index + 1}
                                            </span>
                                        </motion.button>
                                    );
                                })}
                            </div>

                            {/* Bottom CTA */}

                            <motion.div
                                variants={mobileMenuItemVariants}
                                className="mt-auto pt-8"
                            >
                                <button
                                    onClick={() =>
                                        handleNavLinkClick("/SignIn")
                                    }
                                    className="group flex w-full items-center justify-between rounded-full bg-[#D4F92F] px-6 py-4 text-sm font-semibold text-black"
                                >
                                    <span>Sign In</span>

                                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
