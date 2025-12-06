import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail } from "react-icons/hi";

export const config = {
    developer: {
        name: "Dhipin Subhash",
    },

    social: {
        github: "Dhipin1",
        discord: "#"
    },

    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],

    recentTracks: false,

    // =======================
    //       PROJECTS
    // =======================
    projects: [
        {
            id: 1,
            title: "Fraud Detection in E-Commerce using ML",
            description:
                "A machine learning system that detects fraudulent activities in online transactions using feature engineering, anomaly detection, and supervised learning algorithms.",
            image: "/projects/project-1.webp",
            technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
            github: "#",
            demo: "#"
        },
        {
            id: 2,
            title: "Employee Salary Prediction using ML algorithms",
            description:
                "A regression-based ML model that predicts employee salaries using experience, department, and education. Includes full ML pipeline with evaluation.",
            image: "/projects/project-2.webp",
            technologies: ["Python", "Scikit-Learn", "Linear Regression", "Seaborn"],
            github: "#",
            demo: "#"
        },
        {
            id: 3,
            title: "GPS Outlier Detection Using AI",
            description:
                "An anomaly detection model that identifies inaccurate GPS coordinates using clustering and statistical outlier detection techniques.",
            image: "/projects/project-3.webp",
            technologies: ["Python", "K-Means", "Isolation Forest", "Pandas"],
            github: "#",
            demo: "#"
        },
        {
            id: 4,
            title: "Autism Detection using BM4D Denoising & EfficientNetV2",
            description:
                "A deep learning-based diagnostic system for Autism Spectrum Disorder. Uses BM4D denoising to enhance MRI scans and EfficientNetV2 classifier for accurate ASD prediction.",
            image: "/projects/project-4.webp",
            technologies: ["Python", "BM4D", "EfficientNetV2", "TensorFlow", "OpenCV", "NumPy"],
            github: "#",
            demo: "#"
        }
    ],

    // =======================
    //       SKILLS
    // =======================
    skills: [
        {
            title: "Machine Learning",
            icon: <HiCode />,
            description: "ML algorithms & model development",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Supervised ML", level: "Advanced", hot: true },
                { name: "Deep Learning", level: "Intermediate" },
                { name: "Pandas / NumPy", level: "Advanced" },
                { name: "Scikit-Learn", level: "Advanced" },
                { name: "CNN Models", level: "Intermediate" }
            ]
        },
        {
            title: "Programming & Backend",
            icon: <HiDatabase />,
            description: "Programming, APIs & database",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Python", level: "Advanced", hot: true },
                { name: "Flask", level: "Intermediate" },
                { name: "Node.js", level: "Beginner" },
                { name: "MongoDB", level: "Intermediate" }
            ]
        },
        {
            title: "Tools & Technologies",
            icon: <HiCube />,
            description: "Software & productivity tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "VS Code", level: "Advanced", hot: true },
                { name: "Git & GitHub", level: "Intermediate" },
                { name: "Jupyter Notebook", level: "Advanced" }
            ]
        }
    ],

    // =======================
    //       EDUCATION
    // =======================
    education: [
        {
            degree: "MSc Artificial Intelligence",
            institution: "Cochin University of Science and Technology (CUSAT)",
            period: "2024 - Present",
            location: "Ernakulam, Kerala",
            description:
                "Currently pursuing MSc AI with focus on machine learning, deep learning, computer vision, and data science.",
            technologies: ["Python", "TensorFlow", "Scikit-Learn", "NumPy", "Pandas"]
        },
        {
            degree: "BSc Cyber Forensics",
            institution: "Mahatma Gandhi University (MGU)",
            period: "2020 - 2023",
            location: "Kerala, India",
            description:
                "Completed BSc Cyber Forensics with strong foundation in digital forensics, cybersecurity, and investigative techniques.",
            technologies: ["Python", "Forensic Tools"]
        }
    ],

    // =======================
//       INTERNSHIPS
// =======================
internships: [
    {
        title: "AIML Intern",
        organization: "Edunet Foundation (AICTE Internship)",
        period: "2024",
        location: "Remote",
        description:
            "Completed an AICTE-supported internship focused on Artificial Intelligence and Machine Learning. Gained hands-on experience in data preprocessing, model development, evaluation, and deployment workflows.",
        responsibilities: [
            "Developed an ML model for Employee Salary Prediction using regression techniques.",
            "Performed data cleaning, preprocessing, feature engineering, and visualization.",
            "Evaluated model performance using R² score, MAE, MSE and improved accuracy through tuning.",
            "Prepared structured project documentation and executed the workflow in Jupyter Notebook."
        ],
        technologies: [
            "Python",
            "Scikit-Learn",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Jupyter Notebook"
        ]
    }
],


    // =======================
//       CONTACT INFO
// =======================
contactInfo: [
    {
        icon: <FaGithub className="w-5 h-5" />,
        label: "GitHub",
        value: "@Dhipin1",
        link: `https://github.com/Dhipin1`
    },
    {
        icon: <HiMail className="w-5 h-5" />,
        label: "Email",
        value: "dhipinsubhash2000@gmail.com",
        link: "mailto:dhipinsubhash2000@gmail.com"
    },
    {
        icon: <FaMapPin className="w-5 h-5" />,
        label: "Location",
        value: "Pathanamthitta, Kerala, India",
        link: null
    }
]

};
