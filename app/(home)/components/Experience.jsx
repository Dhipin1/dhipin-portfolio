"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar } from 'react-icons/hi';
import { config } from '@/config';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const ExperienceSection = () => {
    const education = config.education || [];
    const internships = config.internships || [];

    // If no items exist, don't render the section
    if (education.length === 0 && internships.length === 0) {
        return null;
    }

    // Helper card
    const renderCard = (item, index, isInternship = false) => (
        <motion.div
            key={index}
            variants={itemAnimation}
            className="relative"
        >
            <div className="flex gap-6">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-black border border-white/30 flex items-center justify-center">
                        <HiBriefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-0.5 h-full bg-gradient-to-b from-white/20 to-transparent mt-4" />
                </div>

                <div className="flex-1 pb-8">
                    <div className="bg-black border border-white/30 rounded-2xl p-6 backdrop-blur-md">
                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {isInternship ? item.title : item.degree}
                                    </h3>
                                    <p className="text-primary/80 font-medium">
                                        {isInternship ? item.organization : item.institution}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-white/70">
                                    <HiCalendar className="w-4 h-4" />
                                    <span>{item.period}</span>
                                </div>
                            </div>

                            {item.location && (
                                <p className="text-sm text-white/60 mb-4">{item.location}</p>
                            )}

                            {item.description && (
                                <p className="text-sm text-white/70 leading-relaxed mb-4">
                                    {item.description}
                                </p>
                            )}

                            {item.responsibilities && (
                                <ul className="space-y-2">
                                    {item.responsibilities.map((res, idx) => (
                                        <li key={idx} className="text-sm text-white/70 flex gap-2">
                                            <span className="text-white/40 mt-1.5">▸</span>
                                            {res}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {item.technologies && (
                                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                                    {item.technologies.map((tech, idx) => (
                                        <span key={idx} className="text-xs bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );

    return (
        <section className="py-24" id="experience">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    {/* Header */}
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <motion.div
                            variants={itemAnimation}
                            className="inline-flex items-center space-x-2 bg-secondary/10 border border-zinc-900/70 px-4 py-2 rounded-full text-primary"
                        >
                            <HiCalendar className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium text-primary">
                                Educational Qualifications
                            </span>
                        </motion.div>

                        <motion.div variants={itemAnimation} className="space-y-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                                Educational Qualifications
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                My academic journey and internship experience
                            </p>
                        </motion.div>
                    </div>

                    {/* Education */}
                    {education.length > 0 && (
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
                            <motion.div variants={containerAnimation} className="space-y-8">
                                {education.map((edu, index) => renderCard(edu, index, false))}
                            </motion.div>
                        </div>
                    )}

                    {/* Internships */}
                    {internships.length > 0 && (
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-2xl font-semibold text-white mb-6">Internships</h3>
                            <motion.div variants={containerAnimation} className="space-y-8">
                                {internships.map((intern, index) => renderCard(intern, index, true))}
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;
