import { BLOG_DATA } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./page.module.css";
import React from 'react';

// Correct type definition for Next.js App Router Page Props
type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
    return BLOG_DATA.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = BLOG_DATA.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className={styles.main}>
            <article className={styles.article}>
                <Link href="/blog" className={styles.backLink}>
                    <FaArrowLeft /> Back to Blog
                </Link>

                <header className={styles.header}>
                    <span className={styles.date}>{post.date}</span>
                    <h1 className={styles.title}>{post.title}</h1>
                </header>

                <div className={styles.content}>
                    <p>{post.excerpt}</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h2>Key Takeaways</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        (This is a placeholder content block for the demo. In a real app, this would be markdown or CMS content.)
                    </p>
                </div>
            </article>
        </main>
    );
}
