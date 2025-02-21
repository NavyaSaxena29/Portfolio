import { Suspense, useState } from 'react';
import { education } from '../constants/index.js';

const Education = () => {
    // const [animationName, setAnimationName] = useState('idle');

    return (
        <section className="c-space my-20" id="education">
            <div className="w-full text-white-600">
                <p className="head-text">My Education</p>

                <div className="work-container">

                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {education.map((item, index) => (
                                <div
                                    key={index}
                                    className="work-content_container group">
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img className="w-full h-full" src={item.icon} alt="" />
                                        </div>

                                        <div className="work-content_bar" />
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{item.name}</p>
                                        <p className="text-sm mb-5">
                                            {item.degree} -- <span>{item.gpa}</span>
                                        </p>
                                        <p className="text-sm mb-5">
                                            {item.duration}
                                        </p>
                                        <p className="group-hover:text-white transition-all ease-in-out duration-500"
                                           align="justify">{item.courses}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;