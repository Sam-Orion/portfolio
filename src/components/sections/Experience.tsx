"use client";

import { EXPERIENCE_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import React from 'react';

export default function Experience() {
    return (
        <section className={styles.section} id="experience">
            <motion.h2
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Experience
            </motion.h2>

            <div className={styles.timeline}>
                {EXPERIENCE_DATA.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={styles.item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className={styles.dot} />
                        <div className={styles.card}>
                            <div className={styles.header}>
                                <div>
                                    <h3 className={styles.role}>{item.role}</h3>
                                    <span className={styles.company}>{item.company}</span>
                                </div>
                                <div className={styles.dateLocation}>
                                    <span>{item.date}</span>
                                    <span>•</span>
                                    <span>{item.location}</span>
                                </div>
                            </div>
                            <ul className={styles.description}>
                                {item.description.map((desc, i) => (
                                    <li key={i} className={styles.bullet}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
