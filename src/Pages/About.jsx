import React from "react";
import { motion } from "framer-motion";
import { image } from "framer-motion/client";
import { Link } from "react-router-dom";

const About = () => {
    const team = [
        {
            name: "Nzeribe Mmesoma Stella",
            role: "Lead",
            image: "/images/Nzeribe-Stella.jpg"
        },
        {
            name: "Afemije Joy Etanakeme",
            role: "Frontend Developer",
            image: "/images/Afemije-Joy.jpg"
        },
        {
            name: "Olalekan Otele",
            role: "Frontend Developer",
            image: "/images/Olalekan-Otele.jpg"
        },
        {
            name: "Oluwatoyin Ojumoro",
            role: "Web App Developer",
            image: "/images/Oluwatoyin-Ojumoro.jpg"
        },
        {
            name: "Success Akporuovo",
            role: "Frontend Developer",
            image: "/images/Success-Akporuovo.jpg"
        },
        {
            name: "Aderemi Azeez",
            role: "Frontend Developer",
            image: "/images/Aderemi-Azeez.jpg"
        },

    ]
    return (
        <section className="bg-gradient-to-b from-orange-50 via-white to-white text-gray-800">
            {/* Hero Section */}
            <div className="max-w-6xl mx-auto px-6 py-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-aladin text-black-500 mb-4"
                >
                    About <span className="text-gray-700">Artisan<span className="text-orange-700">Hub</span></span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="max-w-2xl mx-auto text-lg font-bold text-gray-600">
                    Connecting skilled artisans with customers - making local craftsmanship accessible, trusted, and convenient for everyone.
                </motion.p>
            </div>
            {/* Mission & Vision */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-orange-600">
                    <h2 className="text-2xl font-aladin text-orange-500 mb-3 font-bold">
                        Our Mission
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        To empower artisans by giving them digital visibility, access to clients, and professional credibility through verified profiles, reviews, and skill showcases.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-orange-500">
                    <h2 className="text-2xl font-aladin text-orange-500 mb-3 font-bold">
                        Our Vision
                    </h2>
                    <p className="text-gray-600 leading relaxed">
                        To build Africa's largest artisan network where customers can easily connect
                        with trusted local experts - anytime, anywhere.
                    </p>
                </motion.div>
            </div>

            {/* Story Section */}
            <div className="bg-orange-50 py-20">
                <div className="max-w-5xl mx-auto px-6 text-center md:text-left">
                    <h2 className="text-3xl font-aladin text-orange-700 mb-6 font-bold">Our Story</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        ArtisanHub began with a simple idea - to help talented artisans in local communities
                        reach more clients through technology, Many artisans struggle with visibility, trust, and
                        access to fair opportunities. We decided to change that by building a platform that bridges
                        artisans and customers using verified profiles, reviews,
                        and modern tools like Whatsapp chat, voice support, amd location-based discovery.
                    </p>
                </div>
            </div>

            {/* Core Values */}
            <div className="max-w-6xl mx-auto py-20 px-6">
                <h2 className="text-3xl font-aladin text-center text-orange-700 mb-12 font-bold">
                    Our Core Values
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Trust",
                            desc: "We ensure every artisan is verified through national identification for reliability and peace of mind.",
                            color: "text-orange-500",
                        },
                        {
                            title: "Innovation",
                            desc: "We embrace technology to simplify how artisans and clients connect and collaborate.",
                            color: "text-orange-500"
                        },
                        {
                            title: "Community",
                            desc: "We believe in teamwork, mutual respect, and supporting local talent to grow stronger together.",
                            color: "text-orange-500",
                        },
                    ].map((value, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-8 shadow-lg rounded-2xl border 
                        border-gray-100 hover:shadow-xl transition duration-300"
                        >
                            <h3 className={`text-xl font-aladin mb-3 ${value.color} font-bold`}>
                                {value.title}
                            </h3>
                            <p className="text-gray-600">{value.desc}</p>
                        </motion.div>
                    ))
                    }
                </div>
            </div>

            {/* Meet Our Team */}
            <div className="bg-gray-50 py-20">
                <h2 className="text-3xl font-aladin text-center text-orange-700 mb-12 font-bold">
                    Meet Our Team
                </h2>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-2xl shadow-lg 
                        overflow-hidden hover:shadow-2xl transition duration-300">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-64"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-aladin text-gray-800 font-bold">
                                    {member.name}
                                </h3>
                                <p className="text-gray-600 font-medium">
                                    {member.role}
                                </p>
                            </div>
                        </motion.div>

                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r 
             from-orange-700 to-orange-500 py-14 text-white">
                <h2 className="text-3xl font-aladin mb-3">Join the ArtisanHub</h2>
                <p className="mb-6 text-lg opacity-90">
                    Whether you're an artisan or a customer - ArtisanHub is built for you.
                </p>
                <Link to="/join">
                    <button className="bg-white text-orange-600 font-semibold
                 px-6 py-3 rounded-full shadow-md 
                 hover:bg-gray-100 transition duraton-300">
                        Get Started
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default About;