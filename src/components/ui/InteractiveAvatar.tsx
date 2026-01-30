"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function InteractiveAvatar() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isBlinking, setIsBlinking] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const x = e.clientX - centerX;
            const y = e.clientY - centerY;

            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Blink logic
    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 200); // Close for 200ms
        }, 4000); // Blink every 4s

        return () => clearInterval(blinkInterval);
    }, []);

    // Face Turning (Parallax/3D Rotate)
    // Inverse rotation usually looks like "looking at" the cursor for centralized objects, 
    // or direct rotation creates a tilting effect. 
    // Let's use direct rotation: Mouse Right -> Rotate Right (Y axis positive? No, Y axis rotation follows standard RH rule)
    // Actually, to "look" at the mouse:
    // Mouse Top -> Rotate X (Tilt Up - Negative X)
    // Mouse Bottom -> Rotate X (Tilt Down - Positive X)
    // Mouse Left -> Rotate Y (Tilt Left - Negative Y)
    // Mouse Right -> Rotate Y (Tilt Right - Positive Y)

    const rotateX = useTransform(mouseY, [-300, 300], [15, -15]); // Tilt X
    const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]); // Tilt Y

    // Pupil Movement
    const pupilX = useTransform(mouseX, [-400, 400], [-5, 5]);
    const pupilY = useTransform(mouseY, [-400, 400], [-5, 5]);

    return (
        <div
            ref={containerRef}
            style={{
                width: 400,
                height: 400,
                perspective: '1000px', // Enable 3D perspective
                cursor: 'default'
            }}
        >
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformStyle: 'preserve-3d', // Crucial for 3D effect
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                {/* Base Avatar Image */}
                <Image
                    src="/avatar-3d.png"
                    alt="Avatar"
                    fill
                    style={{ objectFit: 'contain', pointerEvents: 'none' }}
                    priority
                />

                {/* Eyes Overlay Container */}
                {/* Position needs to be tuned to the image's face */}
                <div style={{
                    position: 'absolute',
                    top: '46%', // Approximate eye level from image
                    left: '50%',
                    transform: 'translate(-50%, -50%) translateZ(20px)', // Z pushes it forward slightly
                    width: '160px', // Approximate width covering both eyes
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0 10px',
                    pointerEvents: 'none'
                }}>
                    {/* Left Eye */}
                    <div style={{ position: 'relative', width: '50px', height: '30px' }}>
                        {/* Pupil */}
                        <motion.div
                            style={{
                                width: '12px',
                                height: '12px',
                                background: 'black', // Image pupils are dark
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-6px',
                                marginLeft: '-6px',
                                x: pupilX,
                                y: pupilY,
                            }}
                        />
                        {/* Eyelid (Blink) */}
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: isBlinking ? '100%' : '0%' }}
                            transition={{ duration: 0.1 }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                background: '#f3cfb3', // Skin tone approximation from image
                                zIndex: 10,
                                borderRadius: '4px'
                            }}
                        />
                    </div>

                    {/* Right Eye */}
                    <div style={{ position: 'relative', width: '50px', height: '30px' }}>
                        {/* Pupil */}
                        <motion.div
                            style={{
                                width: '12px',
                                height: '12px',
                                background: 'black',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-6px',
                                marginLeft: '-6px',
                                x: pupilX,
                                y: pupilY,
                            }}
                        />
                        {/* Eyelid (Blink) */}
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: isBlinking ? '100%' : '0%' }}
                            transition={{ duration: 0.1 }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                background: '#f3cfb3', // Skin tone approximation
                                zIndex: 10,
                                borderRadius: '4px'
                            }}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
