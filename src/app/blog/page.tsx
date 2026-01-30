import { BLOG_DATA } from "@/lib/data";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./page.module.css";
import React from 'react';

export default function BlogPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>All Articles</h1>
                    <Link href="/" className={styles.backLink}>
                        <FaArrowLeft style={{ display: "inline", marginRight: "0.5rem" }} />
                        Back to Home
                    </Link>
                </header>

                <div className={styles.list}>
                    {BLOG_DATA.map((post) => (
                        <article key={post.id} className={styles.card}>
                            <span className={styles.date}>{post.date}</span>
                            <Link href={`/blog/${post.slug}`} className={styles.blogLink}>
                                <h2 className={styles.blogTitle}>{post.title}</h2>
                            </Link>
                            <p className={styles.excerpt}>{post.excerpt}</p>

                            <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                Read Article <FaArrowRight />
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
