import React from 'react';
import { SkillsData } from '../Data/skillsData'

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 mx-40 bg-inner-background text-white">
            <div className="container mx-auto max-w-7xl">
                <div className='flex flex-row gap-10'>
                    <h2 className="text-4xl font-bold text-white mb-12 ">
                        <span className="text-word-background">#</span>skills
                    </h2>
                    <hr className="w-1/2 mt-5 border-b-2 border-word-background" />
                </div>
                {/* Responsive grid for skill categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SkillsData.map((categoryData, index) => (
                        <div key={index} className="bg-transparent rounded-lg p-6 shadow-[0_0_15px_2px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-bold text-white h-20 mb-4 border-b-2 border-word-background pb-2">{categoryData.category}</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {categoryData.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="flex flex-col items-center gap-2">
                                        <skill.icon size={48} className="text-gray-400 hover:text-word-background transition-colors" />
                                        <span className="text-sm text-gray-400">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;