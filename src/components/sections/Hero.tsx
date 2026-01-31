"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className={styles.section} id="about">
            <div className={styles.backgroundBlur} />
            <div className={styles.backgroundBlur2} />

            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.1 }}
                >
                    <motion.p className={styles.greeting} variants={fadeInUp}>
                        Hi there, I&apos;m
                    </motion.p>
                    <motion.h1 className={styles.title} variants={fadeInUp}>
                        Shubham Misra
                    </motion.h1>
                    <motion.h2 className={styles.subtitle} variants={fadeInUp}>
                        AI Engineer
                    </motion.h2>
                    <motion.p className={styles.description} variants={fadeInUp}>
                        Former AI Research Intern at Maker&apos;s Lab. I combine a foundation in Electrical Engineering with independently mastered CS fundamentals to create scalable, data-driven solutions.
                    </motion.p>

                    <motion.div className={styles.socials} variants={fadeInUp}>
                        <a href="https://github.com/Sam-Orion" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/shubhammisra09/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://x.com/SyntaxSamuraiX" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="mailto:shubhammisra936@gmail.com" className={styles.socialLink} aria-label="Email">
                            <MdEmail />
                        </a>
                        <a href="https://leetcode.com/u/samOrion/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LeetCode">
                            <SiLeetcode />
                        </a>
                        <a href="https://drive.google.com/file/d/17dqXd_P3N1D1wO9vszIg2XceWgeXcOhB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Resume">
                            <FaFileAlt />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className={styles.avatarContainer}>
                        <Image
                            src="/new-avatar.png"
                            alt="Shubham Misra"
                            width={400}
                            height={400}
                            priority
                            style={{
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </motion.div>


            </div>
        </section>
    );
}
