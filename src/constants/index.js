export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Education',
        href: '#education',
    },
    {
        id: 4,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 5,
        name: 'Work',
        href: '#work',
    },
    {
        id: 6,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Smart Home Security Solution using Facial and Speaker Recognition',
        desc: 'I co-developed a Smart Home Security Solution that leverages facial and speaker recognition for authentication, using one-shot learning, Siamese neural networks, and Gaussian mixture models. This AI-driven system enhances home security by enabling seamless user authentication through facial and voice biometrics. The model was trained to recognize individuals with 83% accuracy, ensuring reliable and secure access. As part of this project, we conducted extensive research on biometric authentication techniques and optimized the model for real-time performance.',
        subdesc:
            'Our findings were published in the International Journal of Cognitive Computing in Engineering, where the research has received 55 citations to date, demonstrating its impact in the field of AI and security systems. This project reinforced my expertise in deep learning, computer vision, and signal processing, while also providing hands-on experience in integrating AI models into practical applications for security and automation.',
        href: 'https://www.sciencedirect.com/science/article/pii/S266630742100019X',
        link: 'Published Paper',
        texture: '',
        logo: 'assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: 'assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: 'assets/python.jpg',
            },
            {
                id: 2,
                name: 'Scikit',
                path: 'assets/scikit.png',
            },
            {
                id: 3,
                name: 'Neural Network',
                path: 'assets/neural_network.png',
            },
            {
                id: 4,
                name: 'Face recognition',
                path: 'assets/face_recognition.jpg',
            },
        ],
    },
    {
        title: 'PennCloud Distributed Cloud Services Platform ',
        desc: 'PennCloud is a distributed web platform built from scratch in C++ that emulates core functionalities of modern cloud systems—user account management, email services, and cloud storage—all backed by a scalable key-value store. The system supports real-world protocols like HTTP/1.1, chunked transfer encoding, and gRPC-based RPCs, and enables users to log in, send and receive emails, upload/download files, and organize them in a virtual file system through a browser-based UI. A custom load balancer, multithreaded frontend servers, and sharded backend services mirror the architecture of large-scale production deployments.',
        subdesc:
            'The platform features seamless client interaction with backend storage via session-managed persistent HTTP connections, automatic chunking for large files, and robust metadata handling for file and folder operations like move, rename, and delete. A custom SMTP-style Email Service enables full inbox and outbox workflows, while the admin console supports live monitoring and control of distributed worker nodes. Built over several weeks, this project highlights system design, low-level networking, concurrency, and resilient service orchestration.',
        href: 'https://drive.google.com/file/d/1xHgT2KMdEFQZTKlTQV4AWp-Xsseg0U-T/view?usp=sharing',
        link: 'Project Screenshots',
        texture: '',
        logo: 'assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: 'assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'C++',
                path: 'assets/c.png',
            },
            {
                id: 2,
                name: 'HTML',
                path: 'assets/html.png',
            },
            {
                id: 3,
                name: 'Distributed Systems',
                path: 'assets/distributed systems.jpg',
            },
            {
                id: 4,
                name: 'gRPC',
                path: 'assets/grpc.webp',
            }
        ],
    },
    {
        title: 'FactLens: AI-Powered Fake News Detection & Fact-Checking ',
        desc: 'The project was implemented by fine-tuning DistilRoBERTa using PyTorch and Transformers for fake news classification. A custom dataset was preprocessed, tokenized, and split into training and validation sets. The model was trained using gradient accumulation and FP16 acceleration, achieving a training loss of 0.000100 and validation loss of 0.003292. Additionally, a FAISS-based retrieval system (FAISS-RAG) was built, leveraging sentence-transformer embeddings to store and retrieve similar news articles efficiently. The system was further enhanced with an OpenAI-powered explanation generator to provide context behind misinformation.',
        subdesc:
            'The final system integrates NLP, FAISS vector search, OpenAI API, LangChain, and Scikit-Learn, enabling real-time fact-checking. Given a news query, the pipeline retrieves relevant articles, classifies the content as real or fake with high accuracy, and generates explanations for misinformation. The model achieved an F1-score of 0.8140, demonstrating strong performance in detecting and explaining fake news, making it a robust tool for combating misinformation.',
        href: 'https://colab.research.google.com/drive/1ciXd6qoiknzuJC-kYZdXMISCvX6ws407?usp=sharing',
        link: 'Colab Notebook',
        texture: '',
        logo: 'assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: 'assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: 'assets/python.jpg',
            },
            {
                id: 2,
                name: 'Scikit',
                path: 'assets/scikit.png',
            },
            {
                id: 3,
                name: 'Genrative AI',
                path: 'assets/genai.png',
            },
            {
                id: 4,
                name: 'RAG',
                path: 'assets/rag.png',
            },
        ],
    },
    {
        title: 'Classifying the American sign language using machine learning',
        desc: 'I led a team to develop a machine learning model for classifying American Sign Language (ASL) using convolutional neural networks (CNNs) and HSV color space filtering to separate hand gestures from the background. The model achieved 97% accuracy on the training dataset and was optimized for real-time classification, allowing users to spell out words and sentences through a camera feed. This project involved extensive preprocessing techniques, feature extraction, and model fine-tuning to ensure high accuracy across various lighting conditions and hand positions.',
        subdesc:
            'By leveraging computer vision and deep learning, we built a robust system that enhances accessibility for individuals with hearing impairments. The success of this project reinforced my skills in image processing, deep learning, and real-time AI applications, while also demonstrating the potential of AI in bridging communication gaps through innovative solutions.',
        href: 'https://drive.google.com/file/d/1YakENDTctn7MRxFUJcaH46NmFOHRgki2/view?usp=sharing',
        link: 'Documentation',
        texture: '',
        logo: 'assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: 'assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: 'assets/python.jpg',
            },
            {
                id: 2,
                name: 'Scikit',
                path: 'assets/scikit.png',
            },
            {
                id: 3,
                name: 'Neural Network',
                path: 'assets/neural_network.png',
            }
        ],
    },
    {
        title: 'Empowering Education: Building a Scalable Learning Management System for NGO INREM',
        desc: 'As part of JPMorgan Chase\'s Force for Good initiative, I collaborated on an 8-month-long volunteer project to develop a Learning Management System (LMS) for NGO INREM. This platform was designed to streamline educational content delivery, track learner progress, and enhance engagement for INREM’s community programs. I contributed to architecting and developing the full-stack application, utilizing React for the frontend, Firebase for the backend as well as database management, and google services for providing courses to students. The LMS featured user authentication, course management, progress tracking, and reporting functionalities, ensuring a seamless learning experience.',
        subdesc:
            'Working closely with NGO stakeholders and a cross-functional team, I adapted to evolving requirements and implemented scalable solutions. This project not only empowered INREM to expand its educational outreach but also strengthened my expertise in web development, system design, and collaborative problem-solving in a real-world impact-driven environment.',
        href: 'https://drive.google.com/file/d/12QPH7g7Gd_3LIEylpe-UtiexWiwSd1Ue/view?usp=sharing',
        link: 'Demo',
        texture: '',
        logo: 'assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: 'assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: 'assets/react.svg',
            },
            {
                id: 2,
                name: 'Firebase',
                path: 'assets/firebase.png',
            },
            {
                id: 3,
                name: 'Google Forms',
                path: 'assets/google.jpg',
            },
            {
                id: 4,
                name: 'Gmail',
                path: 'assets/gmail.webp',
            },
        ],
    },
    // {
    //     title: 'Horizon - Online Banking Platform',
    //     desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    //     subdesc:
    //         'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    //     href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    //     link: '',
    //     texture: '',
    //     logo: '/assets/project-logo4.png',
    //     logoStyle: {
    //         backgroundColor: '#0E1F38',
    //         border: '0.2px solid #0E2D58',
    //         boxShadow: '0px 0px 60px 0px #2F67B64D',
    //     },
    //     spotlight: '/assets/spotlight4.png',
    //     tags: [
    //         {
    //             id: 1,
    //             name: 'React.js',
    //             path: '/assets/react.svg',
    //         },
    //         {
    //             id: 2,
    //             name: 'TailwindCSS',
    //             path: 'assets/tailwindcss.png',
    //         },
    //         {
    //             id: 3,
    //             name: 'TypeScript',
    //             path: '/assets/typescript.png',
    //         },
    //         {
    //             id: 4,
    //             name: 'Framer Motion',
    //             path: '/assets/framer.png',
    //         },
    //     ],
    // },
    // {
    //     title: 'Imaginify - AI Photo Manipulation App',
    //     desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //     subdesc:
    //         'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //     href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //     link: '',
    //     texture: '',
    //     logo: '/assets/project-logo5.png',
    //     logoStyle: {
    //         backgroundColor: '#1C1A43',
    //         border: '0.2px solid #252262',
    //         boxShadow: '0px 0px 60px 0px #635BFF4D',
    //     },
    //     spotlight: '/assets/spotlight5.png',
    //     tags: [
    //         {
    //             id: 1,
    //             name: 'React.js',
    //             path: '/assets/react.svg',
    //         },
    //         {
    //             id: 2,
    //             name: 'TailwindCSS',
    //             path: 'assets/tailwindcss.png',
    //         },
    //         {
    //             id: 3,
    //             name: 'TypeScript',
    //             path: '/assets/typescript.png',
    //         },
    //         {
    //             id: 4,
    //             name: 'Framer Motion',
    //             path: '/assets/framer.png',
    //         },
    //     ],
    // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'JPMorgan Chase',
        pos: 'Software Engineer 1',
        duration: 'January 2022 - July 2024',
        title: "At JPMorgan Chase, I worked as a Software Engineer for over two years, developing AI-powered solutions and full-stack applications to enhance document management and financial processes. I built a deep learning model using Keras and OpenCV to extract handwritten text from loan agreements, achieving 84% accuracy. I also designed web services for processing 280K LIBOR documents and created a global search application using OCR and Amazon OpenSearch. Additionally, I developed a cloud storage solution using Angular, Spring Boot, and AWS, streamlining services for multiple applications. My role involved collaborating with cross-functional teams, solving complex challenges, and delivering high-impact solutions in an agile environment.",
        icon: 'assets/jpmc.jpeg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Optum Global Solutions, UnitedHealth Group',
        pos: 'Intern',
        duration: 'June 2021 - August 2021',
        title: "At Optum Global Solutions, UnitedHealth Group, I worked as an intern, focusing on automation and software integration to improve testing efficiency. I developed automation scripts using Cypress and Cucumber to test the UI of web applications, reducing validation time by 50%. I also delivered an in-depth presentation on automation functionalities to team leaders, which led to the adoption of my solution across multiple applications. My experience at Optum strengthened my expertise in software testing, automation, and collaboration within a fast-paced development environment.",
        icon: 'assets/optum.jpg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'TransOrg Analytics',
        pos: 'Intern',
        duration: 'May 2020 - July 2020',
        title: "At TransOrg Analytics, I worked as an intern, leveraging data science techniques to enhance machine learning models. I researched publicly available data using APIs and analyzed it with NumPy, Pandas, and Matplotlib to identify key parameters affecting sales trends during COVID-19. By incorporating these insights, I contributed to improving the accuracy of existing predictive models. Additionally, I performed requirement analysis and debugging on multiple models to optimize their performance. This experience deepened my understanding of data-driven decision-making and reinforced my skills in data analysis, machine learning, and problem-solving.",
        icon: 'assets/transorg.jpg',
        animation: 'salute',
    },
];

export const education = [
    {
        id: 1,
        name: 'University of Pennsylvania',
        degree: 'Master of Science in Computer and Information Science',
        gpa: '3.57/4.0',
        duration: 'August 2024 - May 2026',
        courses: "Analysis of Algorithms, Machine Learning, Artificial Intelligence, Software Systems, Big Data Analytics",
        icon: 'assets/upenn.png',
    },
    {
        id: 2,
        name: 'Vellore Institute of Technology',
        degree: 'Bachelor of Technology in Computer Science and Engineering',
        gpa: '9.56/10.0',
        duration: 'July 2018 - May 2022',
        courses: "Natural Language Processing, Image Processing, Operating System, Data Structures and Algorithms",
        icon: 'assets/vit.png'
    }
];

export const skills = [
    {
        id: 1,
        category: 'Programming Languages',
        skill:[
            {
                id: 1,
                name: 'Python',
                icon: 'assets/python.jpg'
            },
            {
                id: 2,
                name: 'Java',
                icon: 'assets/java.png'
            },
            {
                id: 3,
                name: 'C++',
                icon: 'assets/c.png'
            },
            {
                id: 4,
                name: 'R',
                icon: 'assets/r.svg'
            },
        ]
    },
    {
        id: 2,
        category: 'Database',
        skill:[
            {
                id: 1,
                name: 'SQL',
                icon: 'assets/sql.png'
            },
            {
                id: 2,
                name: 'PostgreSQL',
                icon: 'assets/postgres.png'
            },
            {
                id: 3,
                name: 'MongoDB',
                icon: 'assets/mongodb.svg'
            },
        ]
    },
    {
        id: 3,
        category: 'Web Development',
        skill:[
            {
                id: 1,
                name: 'HTML',
                icon: 'assets/html.png'
            },
            {
                id: 2,
                name: 'CSS',
                icon: 'assets/css.png'
            },
            {
                id: 3,
                name: 'JavaScript',
                icon: 'assets/javascript.png'
            },
            {
                id: 4,
                name: 'React',
                icon: 'assets/react.svg'
            },
            {
                id: 5,
                name: 'Node.js',
                icon: 'assets/nodejs.png'
            },
            {
                id: 6,
                name: 'Angular',
                icon: 'assets/angular.png'
            },
            {
                id: 7,
                name: 'TypeScript',
                icon: 'assets/typescript.png'
            },
            {
                id: 8,
                name: 'Spring Boot',
                icon: 'assets/spring.png'
            },
            {
                id: 9,
                name: 'REST API',
                icon: 'assets/api.svg'
            },
        ]
    },
    {
        id: 4,
        category: 'Artificial Intelligence and Machine Learning',
        skill:[
            {
                id: 1,
                name: 'ML Algorithms',
                icon: 'assets/ml.png'
            },
            {
                id: 2,
                name: 'TensorFlow',
                icon: 'assets/tensorflow.png'
            },
            {
                id: 3,
                name: 'OpenCV',
                icon: 'assets/opencv.png'
            },
            {
                id: 4,
                name: 'PyTorch',
                icon: 'assets/pytorch.png'
            },
            {
                id: 5,
                name: 'Pandas',
                icon: 'assets/pandas.svg'
            },
            {
                id: 6,
                name: 'NumPy',
                icon: 'assets/numpy.png'
            },
            {
                id: 7,
                name: 'Scikit-Learn',
                icon: 'assets/scikit.png'
            },
        ]
    },
    {
        id: 5,
        category: 'Natural Language Processing',
        skill:[
            {
                id: 1,
                name: 'Generative AI',
                icon: 'assets/genai.png'
            },
            {
                id: 2,
                name: 'OpenAI API',
                icon: 'assets/openai.png'
            },
            {
                id: 3,
                name: 'Large Language Models',
                icon: 'assets/llm.jpeg'
            },
            {
                id: 4,
                name: 'Retrieval-Augmented Generation',
                icon: 'assets/rag.png'
            },
            {
                id: 5,
                name: 'LangChain',
                icon: 'assets/langchain.png'
            },
            {
                id: 6,
                name: 'Hugging Face',
                icon: 'assets/hugging face.svg'
            },
            {
                id: 7,
                name: 'Transformers',
                icon: 'assets/neural_network.png'
            },
            {
                id: 8,
                name: 'OLLAMA',
                icon: 'assets/Ollama.png'
            },
        ]
    },
    {
        id: 6,
        category: 'Amazon Web Services',
        skill:[
            {
                id: 1,
                name: 'RDS',
                icon: 'assets/aws rds.png'
            },
            {
                id: 2,
                name: 'Elastic Search',
                icon: 'assets/elasticsearch.png'
            },
            {
                id: 3,
                name: 'S3',
                icon: 'assets/s3.png'
            },
            {
                id: 4,
                name: 'VPC',
                icon: 'assets/vpc.png'
            },
            {
                id: 5,
                name: 'EC2',
                icon: 'assets/ec2.png'
            },
            {
                id: 6,
                name: 'Deployment',
                icon: 'assets/deploy.png'
            },
        ]
    },
    {
        id: 7,
        category: 'Tools',
        skill:[
            {
                id: 1,
                name: 'Git',
                icon: 'assets/git.png'
            },
            {
                id: 2,
                    name: 'GitHub',
                icon: 'assets/github.svg'
            },
            {
                id: 3,
                name: 'Jira',
                icon: 'assets/jira.png'
            },
            {
                id: 4,
                name: 'Splunk',
                icon: 'assets/splunk.png'
            },
            {
                id: 5,
                name: 'Jenkins',
                icon: 'assets/jenkins.png'
            },
            {
                id: 6,
                name: 'Terraform',
                icon: 'assets/terraform.svg'
            },
            {
                id: 7,
                name: 'Jupyter',
                icon: 'assets/jupyter.svg'
            },
            {
                id: 7,
                name: 'Tableau',
                icon: 'assets/tableau.svg'
            },
            {
                id: 7,
                name: 'CI/CD Pipelines',
                icon: 'assets/cicd.png'
            },
        ]
    },
];