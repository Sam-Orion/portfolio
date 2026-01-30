"use client";

import { BLOG_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import styles from "./BlogPreview.module.css";
import React from 'react';

export default function BlogPreview() {
    const displayedPosts = BLOG_DATA.slice(0, 3);

    return (
        <section className={styles.section} id="blog">
            <motion.h2
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Recent Insights
            </motion.h2>

            <div className={styles.grid}>
                {displayedPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <span className={styles.date}>{post.date}</span>
                        <h3 className={styles.blogTitle}>{post.title}</h3>
                        <p className={styles.excerpt}>{post.excerpt}</p>

                        <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                            Read Article <FaArrowRight />
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className={styles.viewAllContainer}>
                <Link href="/blog" className={styles.viewAll}>
                    Read All Articles
                </Link>
            </div>
        </section>
    );
}
