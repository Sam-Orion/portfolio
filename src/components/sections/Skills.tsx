"use client";

import { SKILLS_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import React from 'react';

export default function Skills() {
    return (
        <section className={styles.section} id="skills">
            <div className={styles.container}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Skills
                </motion.h2>

                <div className={styles.grid}>
                    {SKILLS_DATA.map((category, index) => (
                        <motion.div
                            key={category.category}
                            className={styles.categoryCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className={styles.categoryTitle}>{category.category}</h3>
                            <div className={styles.skillsList}>
                                {category.items.map((skill) => (
                                    <span key={skill} className={styles.skillPill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
