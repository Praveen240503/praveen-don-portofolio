import React from 'react';
import { FaDiscord, FaEnvelope } from 'react-icons/fa'; // Icons for Discord and Email

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 mx-40 bg-inner-background text-white">
            <div className="container mx-auto max-w-7xl">
                <div className='flex flex-row gap-10'>
                    <h2 className="text-4xl font-bold text-white mb-12">
                        <span className="text-word-background">#</span>contacts
                    </h2>
                    <hr className="w-1/2 mt-5 border-b-2 border-word-background" />
                </div>
                <div className="flex flex-col md:flex-row items-start gap-16 md:gap-32">
                    {/* Left section for text */}
                    <div className="md:w-1/2">
                        <p className="text-lg text-gray-400 font-fira-code">
                            I'm interested in freelance opportunities. However, if you have
                            any other request or question, don't hesitate to contact me.
                        </p>
                    </div>

                    {/* Right section for contact cards */}
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">Message me here</h3>
                        <div className="flex flex-col gap-4">
                            {/* Discord Card */}
                            <div className="bg-inner-background border border-word-background cursor-pointer p-4 rounded-lg flex items-center gap-4 hover:bg-gray-700 transition-colors duration-300">
                                <FaDiscord size={24} className="text-word-background" />
                                <a
                                    href="https://discordapp.com/users/yourusername" // Replace with your Discord username
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg text-white font-fira-code"
                                >
                                    !Elias#3519
                                </a>
                            </div>

                            {/* Email Card */}
                            <div className="bg-inner-background border border-word-background cursor-pointer p-4 rounded-lg flex items-center gap-4 hover:bg-gray-700 transition-colors duration-300">
                                <FaEnvelope size={24} className="text-word-background" />
                                <a
                                    href="mailto:praveenroyals240503@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg text-white font-fira-code"
                                >
                                    praveenroyals240503@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;