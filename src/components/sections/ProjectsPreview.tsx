"use client";

import { PROJECTS_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styles from "./ProjectsPreview.module.css";
import React from 'react';

export default function ProjectsPreview() {
    // Show only top 3 projects
    const displayedProjects = PROJECTS_DATA.slice(0, 3);

    return (
        <section className={styles.section} id="projects">
            <motion.h2
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Featured Projects
            </motion.h2>

            <div className={styles.grid}>
                {displayedProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
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
                    </motion.div>
                ))}
            </div>

            <div className={styles.viewAllContainer}>
                <Link href="/projects" className={styles.viewAll}>
                    View All Projects
                </Link>
            </div>
        </section>
    );
}
