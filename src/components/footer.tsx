"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    ArrowUp,
} from "lucide-react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const productLinks = [
        {
            label: "Features",
            action: () => {
                document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" });
            },
        },
        {
            label: "How It Works",
            action: () => {
                document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" });
            },
        },
        {
            label: "Pricing",
            action: () => {
                document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" });
            },
        },
    ];

    const companyLinks = [
        {
            label: "About Us",
            action: () => navigate("/About"),
        },
        {
            label: "Contact",
            action: () => navigate("/Contact"),
        },
        {
            label: "FAQ",
            action: () => navigate("/FAQ"),
        },
        {
            label: "Privacy",
            action: () => navigate("/Privacy"),
        },
    ];

    return (
        <footer
            className="
                relative
                w-full
                bg-[#030303]
                text-white
                font-inter
                overflow-hidden
                pt-20
                md:pt-28
                pb-8
                border-t
                border-zinc-900
            "
        >

            {/* Ambient glow */}
            <div
                className="
                    absolute
                    -top-40
                    left-1/2
                    -translate-x-1/2
                    w-[500px]
                    h-[300px]
                    rounded-full
                    bg-[#D4F92F]/[0.025]
                    blur-[120px]
                    pointer-events-none
                "
            />


            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

                {/* ───────────────────────────────
                    Main footer
                ─────────────────────────────── */}

                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-[1.5fr_1fr_1fr]
                        gap-14
                        md:gap-20
                        pb-20
                    "
                >

                    {/* Brand */}
                    <div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={scrollToTop}
                            className="
                                flex
                                items-center
                                mb-6
                            "
                        >
                            <img
                                src={logo}
                                alt="Rimberio"
                                className="
                                    w-36
                                    md:w-44
                                    h-auto
                                    object-contain
                                "
                            />
                        </motion.button>


                        <h2
                            className="
                                text-3xl
                                md:text-4xl
                                font-medium
                                leading-tight
                                tracking-[-0.03em]
                                max-w-md
                            "
                        >
                            Video search,
                            <br />
                            <span className="text-[#D4F92F]">
                                without the searching.
                            </span>
                        </h2>


                        <p
                            className="
                                mt-5
                                text-sm
                                leading-6
                                text-zinc-500
                                max-w-sm
                            "
                        >
                            AI-powered intelligence for the videos
                            you already have. Find the moment without
                            watching the whole thing.
                        </p>

                    </div>


                    {/* Product */}
                    <div>

                        <p
                            className="
                                text-[10px]
                                tracking-[0.25em]
                                text-zinc-700
                                mb-6
                            "
                        >
                            PRODUCT
                        </p>


                        <ul className="space-y-4">

                            {productLinks.map((link) => (

                                <li key={link.label}>

                                    <button
                                        onClick={link.action}
                                        className="
                                            group
                                            flex
                                            items-center
                                            gap-2
                                            text-sm
                                            text-zinc-500
                                            hover:text-white
                                            transition-colors
                                        "
                                    >
                                        {link.label}

                                        <ArrowUpRight
                                            size={12}
                                            className="
                                                opacity-0
                                                -translate-x-1
                                                translate-y-1
                                                group-hover:opacity-100
                                                group-hover:translate-x-0
                                                group-hover:translate-y-0
                                                transition-all
                                                text-[#D4F92F]
                                            "
                                        />
                                    </button>

                                </li>

                            ))}

                        </ul>

                    </div>


                    {/* Company */}
                    <div>

                        <p
                            className="
                                text-[10px]
                                tracking-[0.25em]
                                text-zinc-700
                                mb-6
                            "
                        >
                            COMPANY
                        </p>


                        <ul className="space-y-4">

                            {companyLinks.map((link) => (

                                <li key={link.label}>

                                    <button
                                        onClick={link.action}
                                        className="
                                            group
                                            flex
                                            items-center
                                            gap-2
                                            text-sm
                                            text-zinc-500
                                            hover:text-white
                                            transition-colors
                                        "
                                    >
                                        {link.label}

                                        <ArrowUpRight
                                            size={12}
                                            className="
                                                opacity-0
                                                -translate-x-1
                                                translate-y-1
                                                group-hover:opacity-100
                                                group-hover:translate-x-0
                                                group-hover:translate-y-0
                                                transition-all
                                                text-[#D4F92F]
                                            "
                                        />
                                    </button>

                                </li>

                            ))}

                        </ul>

                    </div>

                </div>


                {/* ───────────────────────────────
                    Bottom bar
                ─────────────────────────────── */}

                <div
                    className="
                        border-t
                        border-zinc-900
                        pt-6
                        flex
                        flex-col
                        md:flex-row
                        md:items-center
                        md:justify-between
                        gap-5
                    "
                >

                    <div
                        className="
                            flex
                            flex-col
                            sm:flex-row
                            sm:items-center
                            gap-2
                            sm:gap-4
                            text-[10px]
                            tracking-[0.12em]
                            text-zinc-700
                        "
                    >
                        <span>
                            © 2026 RIMBERIO
                        </span>

                        <span className="hidden sm:block">
                            /
                        </span>

                        <span>
                            INTELLIGENT VIDEO SEARCH
                        </span>
                    </div>


                    {/* Back to top */}
                    <motion.button
                        whileHover={{
                            y: -2,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        onClick={scrollToTop}
                        className="
                            group
                            flex
                            items-center
                            gap-3
                            text-[10px]
                            tracking-[0.18em]
                            text-zinc-600
                            hover:text-[#D4F92F]
                            transition-colors
                        "
                    >
                        BACK TO TOP

                        <span
                            className="
                                flex
                                items-center
                                justify-center
                                w-8
                                h-8
                                rounded-full
                                border
                                border-zinc-800
                                group-hover:border-[#D4F92F]/50
                                transition-colors
                            "
                        >
                            <ArrowUp size={13} />
                        </span>

                    </motion.button>

                </div>

            </div>

        </footer>
    );
};

export default Footer;