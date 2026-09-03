"use client";

import { motion, type Variants } from "framer-motion";
import {
    ArrowRight,
    Check,
    Clock3,
    Globe2,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Twitter,
    Youtube,
} from "lucide-react";
import map from "../assets/World Map.svg";



const stagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const socialLinks = [
    {
        icon: Instagram,
        label: "Instagram",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
    },
    {
        icon: Twitter,
        label: "Twitter",
    },
    {
        icon: Youtube,
        label: "YouTube",
    },
];

export const ContactUs = () => {
    return (
        <main className="min-h-screen overflow-hidden bg-[#050505] font-inter text-white">

            {/* =========================================================
                HERO / INTRO
            ========================================================= */}

            <section className="relative overflow-hidden border-b border-zinc-900">

                {/* World map */}
                <motion.img
                    initial={{
                        opacity: 0,
                        scale: 1.08,
                    }}
                    animate={{
                        opacity: 0.075,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.8,
                        ease: "easeOut",
                    }}
                    src={map}
                    alt=""
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-20
                        h-auto
                        w-[1200px]
                        max-w-none
                        -translate-x-1/2
                        mix-blend-screen
                    "
                />

                {/* Ambient lime light */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-0
                        h-[500px]
                        w-[500px]
                        -translate-x-1/2
                        rounded-full
                        bg-[#D4F92F]/[0.035]
                        blur-[150px]
                    "
                />

                {/* Vignette */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_center,transparent_10%,#050505_75%)]
                    "
                />

                <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="max-w-4xl"
                    >

                        {/* Eyebrow */}
                        <motion.div
                            variants={item}
                            className="mb-7 flex items-center gap-3"
                        >
                            <span className="h-px w-10 bg-[#D4F92F]" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-500">
                                Contact Rimberio
                            </span>

                            <span className="font-mono text-[10px] text-zinc-700">
                                / 01
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={item}
                            className="
                                max-w-4xl
                                text-[clamp(3.5rem,8vw,7.5rem)]
                                font-medium
                                leading-[0.9]
                                tracking-[-0.065em]
                            "
                        >
                            Let's talk about
                            <br />
                            <span className="text-[#D4F92F]">
                                what's possible.
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={item}
                            className="
                                mt-8
                                max-w-xl
                                text-base
                                leading-7
                                text-zinc-500
                                sm:text-lg
                            "
                        >
                            Have a question, a project, or a library of
                            video you're ready to make searchable?
                            Tell us what you're working on.
                        </motion.p>

                    </motion.div>

                    {/* Coordinate-style metadata */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="
                            mt-16
                            flex
                            flex-wrap
                            items-center
                            gap-x-8
                            gap-y-3
                            border-t
                            border-zinc-900
                            pt-5
                        "
                    >
                        <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-zinc-700">
                            <Globe2 className="h-3 w-3 text-[#D4F92F]" />
                            Global / Remote
                        </span>

                        <span className="h-3 w-px bg-zinc-800" />

                        <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-zinc-700">
                            <Clock3 className="h-3 w-3" />
                            Response within 24h
                        </span>

                        <span className="h-3 w-px bg-zinc-800" />

                        <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-700">
                            RIMBERIO / 2026
                        </span>
                    </motion.div>

                </div>
            </section>


            {/* =========================================================
                CONTACT WORKSPACE
            ========================================================= */}

            <section className="relative py-20 sm:py-28">

                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                    <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

                        {/* =================================================
                            FORM
                        ================================================= */}

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            variants={stagger}
                        >

                            <motion.div
                                variants={item}
                                className="mb-10"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <MessageSquare className="h-4 w-4 text-[#D4F92F]" />

                                    <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                                        Start a conversation
                                    </span>
                                </div>

                                <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                                    Tell us what you need.
                                </h2>
                            </motion.div>


                            <motion.form
                                variants={item}
                                className="space-y-8"
                            >

                                {/* Name + email */}
                                <div className="grid gap-8 sm:grid-cols-2">

                                    <div className="group">
                                        <label
                                            htmlFor="name"
                                            className="
                                                mb-3
                                                block
                                                text-[10px]
                                                uppercase
                                                tracking-[0.22em]
                                                text-zinc-600
                                                transition-colors
                                                group-focus-within:text-[#D4F92F]
                                            "
                                        >
                                            Your name
                                        </label>

                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="John Doe"
                                            className="
                                                h-12
                                                w-full
                                                border-b
                                                border-zinc-800
                                                bg-transparent
                                                text-sm
                                                text-white
                                                outline-none
                                                placeholder:text-zinc-700
                                                transition-colors
                                                focus:border-[#D4F92F]
                                            "
                                        />
                                    </div>


                                    <div className="group">
                                        <label
                                            htmlFor="email"
                                            className="
                                                mb-3
                                                block
                                                text-[10px]
                                                uppercase
                                                tracking-[0.22em]
                                                text-zinc-600
                                                transition-colors
                                                group-focus-within:text-[#D4F92F]
                                            "
                                        >
                                            Email address
                                        </label>

                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="you@company.com"
                                            className="
                                                h-12
                                                w-full
                                                border-b
                                                border-zinc-800
                                                bg-transparent
                                                text-sm
                                                text-white
                                                outline-none
                                                placeholder:text-zinc-700
                                                transition-colors
                                                focus:border-[#D4F92F]
                                            "
                                        />
                                    </div>

                                </div>


                                {/* Subject */}
                                <div className="group">

                                    <label
                                        htmlFor="subject"
                                        className="
                                            mb-3
                                            block
                                            text-[10px]
                                            uppercase
                                            tracking-[0.22em]
                                            text-zinc-600
                                            transition-colors
                                            group-focus-within:text-[#D4F92F]
                                        "
                                    >
                                        What can we help with?
                                    </label>

                                    <select
                                        id="subject"
                                        defaultValue=""
                                        className="
                                            h-12
                                            w-full
                                            appearance-none
                                            border-b
                                            border-zinc-800
                                            bg-transparent
                                            text-sm
                                            text-zinc-400
                                            outline-none
                                            transition-colors
                                            focus:border-[#D4F92F]
                                        "
                                    >
                                        <option
                                            value=""
                                            disabled
                                            className="bg-[#080808]"
                                        >
                                            Select an option
                                        </option>

                                        <option
                                            value="general"
                                            className="bg-[#080808]"
                                        >
                                            General inquiry
                                        </option>

                                        <option
                                            value="enterprise"
                                            className="bg-[#080808]"
                                        >
                                            Enterprise
                                        </option>

                                        <option
                                            value="support"
                                            className="bg-[#080808]"
                                        >
                                            Technical support
                                        </option>

                                        <option
                                            value="partnership"
                                            className="bg-[#080808]"
                                        >
                                            Partnership
                                        </option>
                                    </select>

                                </div>


                                {/* Message */}
                                <div className="group">

                                    <label
                                        htmlFor="message"
                                        className="
                                            mb-3
                                            block
                                            text-[10px]
                                            uppercase
                                            tracking-[0.22em]
                                            text-zinc-600
                                            transition-colors
                                            group-focus-within:text-[#D4F92F]
                                        "
                                    >
                                        Your message
                                    </label>

                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="Tell us a little about what you're building..."
                                        className="
                                            w-full
                                            resize-none
                                            border-b
                                            border-zinc-800
                                            bg-transparent
                                            py-3
                                            text-sm
                                            leading-7
                                            text-white
                                            outline-none
                                            placeholder:text-zinc-700
                                            transition-colors
                                            focus:border-[#D4F92F]
                                        "
                                    />

                                </div>


                                {/* Submit */}
                                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">

                                    <p className="max-w-xs text-[11px] leading-5 text-zinc-700">
                                        By sending this message, you agree to
                                        be contacted by the Rimberio team.
                                    </p>

                                    <motion.button
                                        type="submit"
                                        whileHover={{
                                            scale: 1.02,
                                            backgroundColor: "#c4e82f",
                                        }}
                                        whileTap={{
                                            scale: 0.98,
                                        }}
                                        className="
                                            group
                                            flex
                                            shrink-0
                                            items-center
                                            justify-center
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
                                        Send message

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

                                </div>

                            </motion.form>

                        </motion.div>


                        {/* =================================================
                            CONTACT DETAILS
                        ================================================= */}

                        <motion.aside
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            variants={stagger}
                            className="lg:border-l lg:border-zinc-900 lg:pl-16"
                        >

                            <motion.div
                                variants={item}
                                className="mb-12"
                            >
                                <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                                    02 / Direct lines
                                </span>

                                <h2 className="mt-4 text-2xl font-medium tracking-tight">
                                    Reach us directly.
                                </h2>
                            </motion.div>


                            {/* Email */}
                            <motion.a
                                variants={item}
                                href="mailto:support@rimberio.com"
                                className="
                                    group
                                    flex
                                    gap-5
                                    border-t
                                    border-zinc-900
                                    py-7
                                "
                            >
                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        border
                                        border-zinc-800
                                        transition-colors
                                        duration-300
                                        group-hover:border-[#D4F92F]/50
                                    "
                                >
                                    <Mail className="h-4 w-4 text-[#D4F92F]" />
                                </div>

                                <div>
                                    <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                                        Email
                                    </p>

                                    <p className="text-sm text-zinc-300 transition-colors group-hover:text-[#D4F92F]">
                                        support@rimberio.com
                                    </p>

                                    <p className="mt-2 text-xs text-zinc-700">
                                        General questions & support
                                    </p>
                                </div>
                            </motion.a>


                            {/* Phone */}
                            <motion.a
                                variants={item}
                                href="tel:+11234567890"
                                className="
                                    group
                                    flex
                                    gap-5
                                    border-t
                                    border-zinc-900
                                    py-7
                                "
                            >
                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        border
                                        border-zinc-800
                                        transition-colors
                                        duration-300
                                        group-hover:border-[#D4F92F]/50
                                    "
                                >
                                    <Phone className="h-4 w-4 text-[#D4F92F]" />
                                </div>

                                <div>
                                    <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                                        Phone
                                    </p>

                                    <p className="text-sm text-zinc-300 transition-colors group-hover:text-[#D4F92F]">
                                        +1 (123) 456-7890
                                    </p>

                                    <p className="mt-2 text-xs text-zinc-700">
                                        Mon–Fri / 08:00–21:00
                                    </p>
                                </div>
                            </motion.a>


                            {/* Location */}
                            <motion.div
                                variants={item}
                                className="flex gap-5 border-t border-zinc-900 py-7"
                            >
                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        border
                                        border-zinc-800
                                    "
                                >
                                    <MapPin className="h-4 w-4 text-[#D4F92F]" />
                                </div>

                                <div>
                                    <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                                        Headquarters
                                    </p>

                                    <p className="text-sm text-zinc-300">
                                        123 AI Tech Lane
                                    </p>

                                    <p className="mt-1 text-xs text-zinc-700">
                                        Innovation City, CA 90210
                                    </p>
                                </div>
                            </motion.div>


                            {/* Response promise */}
                            <motion.div
                                variants={item}
                                className="
                                    mt-4
                                    border
                                    border-zinc-900
                                    bg-[#080808]
                                    p-5
                                "
                            >
                                <div className="mb-3 flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4F92F]/50" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D4F92F]" />
                                    </span>

                                    <span className="text-[9px] uppercase tracking-[0.22em] text-zinc-500">
                                        Usually online
                                    </span>
                                </div>

                                <p className="text-sm leading-6 text-zinc-400">
                                    Our team typically responds within one
                                    business day.
                                </p>
                            </motion.div>


                            {/* Social */}
                            <motion.div
                                variants={item}
                                className="mt-10 border-t border-zinc-900 pt-7"
                            >
                                <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                                    Follow Rimberio
                                </p>

                                <div className="flex gap-3">
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon;

                                        return (
                                            <motion.a
                                                key={social.label}
                                                href="#"
                                                aria-label={social.label}
                                                whileHover={{
                                                    y: -2,
                                                }}
                                                whileTap={{
                                                    scale: 0.95,
                                                }}
                                                className="
                                                    flex
                                                    h-10
                                                    w-10
                                                    items-center
                                                    justify-center
                                                    border
                                                    border-zinc-800
                                                    text-zinc-600
                                                    transition-colors
                                                    duration-300
                                                    hover:border-[#D4F92F]/40
                                                    hover:text-[#D4F92F]
                                                "
                                            >
                                                <Icon className="h-4 w-4" />
                                            </motion.a>
                                        );
                                    })}
                                </div>
                            </motion.div>

                        </motion.aside>

                    </div>
                </div>
            </section>


            {/* =========================================================
                SMALL TRUST STRIP
                This intentionally ends the Contact page quietly so the
                global JoinUs section from MainLayout can follow naturally.
            ========================================================= */}

            <section className="border-t border-zinc-900">

                <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-3">

                    <div className="flex items-center gap-3 border-b border-zinc-900 px-5 py-5 sm:border-b-0 sm:border-r sm:px-8 lg:px-12">
                        <Check className="h-3.5 w-3.5 text-[#D4F92F]" />

                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                            Human support
                        </span>
                    </div>

                    <div className="flex items-center gap-3 border-b border-zinc-900 px-5 py-5 sm:border-b-0 sm:border-r sm:px-8 lg:px-12">
                        <Check className="h-3.5 w-3.5 text-[#D4F92F]" />

                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                            Fast response
                        </span>
                    </div>

                    <div className="flex items-center gap-3 px-5 py-5 sm:px-8 lg:px-12">
                        <Check className="h-3.5 w-3.5 text-[#D4F92F]" />

                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                            No unnecessary forms
                        </span>
                    </div>

                </div>

            </section>

        </main>
    );
};

export default ContactUs;