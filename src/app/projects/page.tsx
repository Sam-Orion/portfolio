import { PROJECTS_DATA } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from "react-icons/fa";
import styles from "./page.module.css";
import React from 'react';

export default function ProjectsPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>All Projects</h1>
                    <Link href="/" className={styles.backLink}>
                        <FaArrowLeft style={{ display: "inline", marginRight: "0.5rem" }} />
                        Back to Home
                    </Link>
                </header>

                <div className={styles.grid}>
                    {PROJECTS_DATA.map((project) => (
                        <div key={project.id} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>

                                <div className={styles.techStack}>
                                    {project.tech.map(t => (
                                        <span key={t} className={styles.techTag}>{t}</span>
                                    ))}
                                </div>

                                <div className={styles.links}>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        <FaGithub /> Code
                                    </a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        <FaExternalLinkAlt /> Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
