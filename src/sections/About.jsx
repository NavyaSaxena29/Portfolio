import { useState } from 'react';

import Button from '../components/Button.jsx';
import { skills } from '../constants/index.js';


const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('saxena.navya29@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 grid-row-1 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-2 xl:row-span-2">
                    <div className="grid-container">
                        <img src="assets/girl.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">About me</p>
                            <p className="grid-subtext" align="justify">
                                I am currently pursuing a Master's in Computer & Information Science at the University
                                of Pennsylvania, specializing in machine learning, AI, and software systems. Before
                                this, I worked as a Software Engineer at JPMorgan Chase for 2 years, where I developed
                                AI-powered solutions for document management, including a deep learning model for
                                extracting handwritten text from loan agreements. I also built full-stack web
                                applications and optimized machine learning models. Alongside my academic journey, I
                                mentor K-12 students through the FIFE-Penn CS Academy and am actively involved in
                                developing new projects. I am eager to explore impactful opportunities in software
                                engineering, machine learning, NLP, and data-driven solutions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 xl:row-span-2 xl:col-span-1">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>


                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext" align="justify">
                                I have always been passionate about coding because it allows me to solve complex
                                problems, build innovative solutions, and create real-world impact. From developing
                                AI-driven applications to engineering scalable backend systems, I enjoy the challenge of
                                optimizing algorithms and writing efficient, clean code. </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 row-span-1 xl:col-span-3 xl:row-span-1">
                    <div className="grid-container">
                        {/*<img src="assets/skills.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>*/}
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <div className="sm:py-10 py-5 sm:px-5 px-2.5 flex flex-wrap gap-10">
                                {skills.map((item, index) => (
                                    <div key={index} className="group">
                                        <p className="font-bold text-white-800 grid-subtext category">{item.category}</p>
                                        <div className="flex items-center flex-wrap gap-5">
                                            {item.skill.map((tag, index) => (
                                                <div key={index} className="skill-logo flex items-center gap-2">
                                                    <img className="w-full h-full" src={tag.icon} alt={tag.name}/>
                                                    <p className="grid-subttext whitespace-nowrap flex-shrink-0 skill-name">{tag.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="col-span-2 xl:col-span-1 xl:row-span-2">*/}
                {/*    <div className="grid-container">*/}
                {/*        <img*/}
                {/*            src="assets/grid4.png"*/}
                {/*            alt="grid-4"*/}
                {/*            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"*/}
                {/*        />*/}

                {/*        <div className="space-y-2">*/}
                {/*            <p className="grid-subtext text-center">Contact me</p>*/}
                {/*            <div className="copy-container" onClick={handleCopy}>*/}
                {/*                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>*/}
                {/*                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">saxena.navya29@gmail.com</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default About;