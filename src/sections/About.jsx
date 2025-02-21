import { useState } from 'react';

import Button from '../components/Button.jsx';

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
                        <img src="assets/girl.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">About me</p>
                            <p className="grid-subtext" align="justify">
                                I am currently pursuing a Master's in Computer & Information Science at the University of Pennsylvania, specializing in machine learning, AI, and software systems. Before this, I worked as a Software Engineer at JPMorgan Chase for 2 years, where I developed AI-powered solutions for document management, including a deep learning model for extracting handwritten text from loan agreements. I also built full-stack web applications and optimized machine learning models. Alongside my academic journey, I mentor K-12 students through the FIFE-Penn CS Academy and am actively involved in developing new projects. I am eager to explore impactful opportunities in software engineering, machine learning, NLP, and data-driven solutions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 xl:row-span-3 xl:col-span-1">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>


                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext" align="justify">
                                I have always been passionate about coding and problem-solving, which drives me to
                                continuously explore new technologies and develop innovative solutions. From building
                                AI-powered applications to optimizing large-scale data systems, I enjoy tackling complex
                                challenges that push the boundaries of software development. I find excitement in
                                writing efficient algorithms, designing scalable architectures, and leveraging machine
                                learning to extract meaningful insights from data. Beyond technical skills, I am deeply
                                invested in mentoring and sharing my knowledge, helping others grow in the field. My
                                enthusiasm for coding extends beyond work—I actively contribute to projects, engage in
                                research, and stay updated with emerging trends in AI and software engineering.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 row-span-1 xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/skills.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext" align="justify">
                                I have a broad technical skill set spanning multiple domains. In programming, I am
                                proficient in C++, C, Python, Java, and R. My experience with databases includes SQL,
                                PostgreSQL, MongoDB, and OracleDB. In web development, I have worked with HTML, CSS,
                                JavaScript, React, Node.js, Angular, TypeScript, Spring Boot, and REST APIs to build
                                scalable and dynamic applications. For AI and machine learning, I have hands-on
                                experience with techniques like linear regression, clustering, and classification, using
                                tools such as TensorFlow, OpenCV, PyTorch, Pandas, NumPy, and Scikit-learn.
                                Additionally, in Natural Language Processing, I have worked with GenAI, OpenAI API, LLM,
                                RAG, LangChain, Hugging Face, Transformers, and LLAMA. I also utilize tools like Git,
                                GitHub, Jira, Splunk, Jenkins, Terraform, CI/CD pipelines, and Jupyter to manage code,
                                automate workflows, and optimize development processes.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="col-span-2 xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">saxena.navya29@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;