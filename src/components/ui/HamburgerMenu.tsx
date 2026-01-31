"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./HamburgerMenu.module.css";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
];

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <button
                className={styles.menuButton}
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FiX className={styles.icon} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FiMenu className={styles.icon} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Invisible overlay to handle click-outside */}
                        <div className={styles.overlay} onClick={closeMenu} />

                        <motion.nav
                            className={styles.nav}
                            initial={{ scale: 0.95, opacity: 0, y: -10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ul className={styles.navList}>
                                {navItems.map((item, index) => (
                                    <motion.li
                                        key={item.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 + index * 0.05 }}
                                    >
                                        <a
                                            href={item.href}
                                            className={styles.navLink}
                                            onClick={closeMenu}
                                        >
                                            {item.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
