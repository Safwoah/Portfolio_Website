import { Job, Education, Project, Research, SkillCategory, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "SAFWA MOHAMMED ABDUL JABBAR",
  title: "Data Science and Machine Learning Engineer",
  location: "Hyderabad, Telangana, India",
  email: "safwajabbar@gmail.com",
  summary: "Data Science and Machine Learning Engineer with 3+ years of professional experience in developing AI systems for healthcare applications. Strong foundation in Computer Science and Data Science with expertise in EEG analysis, computer vision, and ML model development. Seeking to apply advanced skills in data analysis, ML systems development, and security considerations to advance research in privacy and security for healthcare applications."
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/safwajabbar", icon: "linkedin" },
  { platform: "GitHub", url: "https://www.github.com/safwoah", icon: "github" },
  { platform: "Email", url: "mailto:safwajabbar@gmail.com", icon: "mail" }
];

export const EXPERIENCE: Job[] = [
  {
    company: "U: The Mind Company (USA)",
    role: "Team Lead - Computer Vision Department | ML & Software Engineer",
    location: "Remote",
    period: "August 2023 - Present",
    description: [
      "Developed an end-to-end EEG analysis pipeline that improved signal processing efficiency by 30% and enabled more accurate artifact removal.",
      "Engineered prompt-based workflows with LLMs to interpret EEG data and generate comprehensive medical reports.",
      "Enhanced MediaPipe and YOLO models for hand landmark detection, increasing accuracy by 25% for Parkinson's disease detection applications.",
      "Designed a tremor data analysis pipeline implementing advanced preprocessing techniques (Gaussian filtering, CAR) that detected subtle movement patterns with 90% sensitivity.",
      "Extracted and analyzed 15+ key features from EEG and tremor data to enable quantifiable clinical assessments.",
      "Collaborated with a team of doctors and engineers to validate ML models, ensuring 95% clinical relevance of outputs.",
      "Currently developing a Seizure Detection framework with Neural Laplace Control architecture to improve early detection rates."
    ]
  },
  {
    company: "DREaD Co-innovation Network",
    role: "AI/ML and Data Science Researcher",
    location: "Remote",
    period: "August 2023 - Present",
    description: [
      "Researched and implemented machine learning systems for medical imaging analysis, in symptom pattern recognition.",
      "Optimized deep learning models for healthcare applications, reducing false positives by 22%."
    ]
  },
  {
    company: "SouvenirCart",
    role: "Application Designer",
    location: "Hybrid",
    period: "January 2024 – March 2024",
    description: [
      "Designed web application prototype that increased user engagement metrics by 40%.",
      "Created comprehensive UML diagrams for software implementation, reducing development time.",
      "Gathered and analyzed product requirements, resulting in 15 key feature implementations."
    ]
  },
  {
    company: "Virtusa",
    role: "Java and ReactJS Developer (Intern)",
    location: "Remote",
    period: "January 2023 – June 2023",
    description: [
      "Developed responsive web components using ReactJS.",
      "Implemented REST API endpoints in Java, processing daily user requests.",
      "Integrated frontend and backend systems, ensuring seamless data flow."
    ]
  },
  {
    company: "SmartBridge",
    role: "Salesforce Developer",
    location: "Hyderabad",
    period: "March 2022 - June 2022",
    description: [
      "Automated business processes using Salesforce Flow and Apex triggers.",
      "Analyzed and implemented business requirements for Salesforce applications.",
      "Completed Trailhead certifications in Process Automation and Apex Specialist paths."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Indian Institute of Technology Ropar",
    location: "Ropar, India",
    degree: "Minor in Artificial Intelligence",
    period: "August 2024 - June 2025",
    details: "Relevant Coursework: Deep Learning, Computer Vision, Natural Language Processing"
  },
  {
    institution: "Osmania University",
    location: "Hyderabad, India",
    degree: "Bachelor of Engineering in Computer Science",
    period: "August 2019 - July 2023",
    gpa: "3.2/4.0"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", color: "text-blue-400 border-blue-400" },
      { name: "Java", color: "text-red-400 border-red-400" },
      { name: "C/C++", color: "text-blue-300 border-blue-300" },
      { name: "R", color: "text-blue-500 border-blue-500" },
      { name: "SQL", color: "text-orange-400 border-orange-400" },
      { name: "MATLAB", color: "text-orange-600 border-orange-600" },
      { name: "JavaScript", color: "text-yellow-400 border-yellow-400" }
    ]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "PyTorch", color: "text-orange-500 border-orange-500" },
      { name: "TensorFlow", color: "text-orange-400 border-orange-400" },
      { name: "Keras", color: "text-red-500 border-red-500" },
      { name: "Scikit-learn", color: "text-blue-400 border-blue-400" },
      { name: "OpenCV", color: "text-green-400 border-green-400" },
      { name: "MediaPipe", color: "text-teal-400 border-teal-400" },
      { name: "YOLO", color: "text-yellow-500 border-yellow-500" },
      { name: "Transformers", color: "text-indigo-400 border-indigo-400" },
      { name: "NLP", color: "text-purple-400 border-purple-400" },
      { name: "Computer Vision", color: "text-pink-400 border-pink-400" }
    ]
  },
  {
    category: "Data Science",
    skills: [
      { name: "Pandas", color: "text-blue-900 border-blue-900 bg-white/10" },
      { name: "NumPy", color: "text-blue-300 border-blue-300" },
      { name: "Matplotlib", color: "text-blue-400 border-blue-400" },
      { name: "Seaborn", color: "text-blue-200 border-blue-200" },
      { name: "SciPy", color: "text-blue-600 border-blue-600" },
      { name: "MNE", color: "text-red-400 border-red-400" },
      { name: "EDA", color: "text-gray-300 border-gray-300" }
    ]
  },
  {
    category: "Tools & Cloud",
    skills: [
      { name: "Google Cloud", color: "text-blue-400 border-blue-400" },
      { name: "Git/GitHub", color: "text-white border-white" },
      { name: "VS Code", color: "text-blue-500 border-blue-500" },
      { name: "Jupyter", color: "text-orange-500 border-orange-500" },
      { name: "Hadoop", color: "text-yellow-600 border-yellow-600" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "EEG Report Generation with LLMs",
    description: [
      "Engineered prompt-based workflows with GPT models to interpret EEG data and generate diagnostic reports.",
      "Implemented data preprocessing pipeline handling multiple input formats (.csv/.txt).",
      "Achieved 85% concordance with expert neurologist assessments."
    ],
    techStack: ["Python", "LLMs", "NLP", "Data Engineering"],
    githubUrl: "https://github.com/safwoah/eeg-report-generation"
  },
  {
    title: "Hand Tremor Analysis System",
    description: [
      "Created analysis pipeline to detect Parkinson's Disease with 82% accuracy.",
      "Implemented real-time processing of video inputs using custom computer vision algorithms.",
      "Developed user interface for clinical assessment visualization."
    ],
    techStack: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    githubUrl: "https://github.com/safwoah/hand-tremor-analysis"
  },
  {
    title: "Bitcoin Price Prediction using LSTM",
    description: [
      "Built prediction model using LSTM algorithm with Python and Keras achieving 78% directional accuracy.",
      "Processed 5 years of historical price data with feature engineering techniques.",
      "Deployed interactive web interface using JavaScript and HTML/CSS."
    ],
    techStack: ["Python", "Keras", "LSTM", "JavaScript"],
    githubUrl: "https://github.com/safwoah/bitcoin-prediction-lstm"
  },
  {
    title: "Handwritten Text Recognition",
    description: [
      "Implemented CNN-RNN hybrid architecture with TensorFlow trained on the IAM off-line HTR dataset.",
      "Achieved 91% character recognition accuracy and 85% word recognition accuracy.",
      "Optimized model for mobile deployment with TensorFlow Lite."
    ],
    techStack: ["TensorFlow", "CNN", "RNN", "Mobile ML"],
    githubUrl: "https://github.com/safwoah/handwritten-text-recognition"
  }
];

export const RESEARCH: Research[] = [
  {
    title: "Advanced Computer Vision and Signal Processing for Quantitative Tremor and Gait Analysis in Parkinson's Disease: A Case Study",
    publication: "Research Paper (Under Review) at Journal of Scientific Innovation in Medicine",
    description: [
      "Designed privacy-preserving methods for handling sensitive medical video data with HIPAA compliance.",
      "Developed computer vision algorithms that identified 8 key movement biomarkers with 92% accuracy.",
      "Cleaned, processed and analysed medical data to generate insights and visuals for treatment efficacy."
    ]
  },
  {
    title: "EEG Epileptic Seizure Probabilistic Diagnosis",
    status: "Ongoing",
    description: [
      "Developing seizure detection framework using Neural Laplace model architecture.",
      "Implemented homomorphic encryption techniques for privacy-preserving processing."
    ]
  }
];