const cardContents = [
    { id: 1, type:"education", data:{ title: "MTech", subTitle: "AI&ML, Indian Institute of Technology, Hyderabad", frontContent:"CGPA: 8.40", backContent:"Sem-1: 8.00, Sem-2: 8.80", duration:"2023-2025"} },
    { id: 2, type:"education", data:{ title: "BTech", subTitle: "CSE, Shri Ramdeobaba College of Engineering and Management, Nagpur", frontContent:"CGPA: 8.48", backContent:"Sem-1: 9.11, Sem-2: 9.00, Sem-3: 6.90, Sem-4: 8.32, Sem-5: 8.64, Sem-6: 8.26, Sem-7: 8.45, Sem-8: 10.00", duration:"2019-2023"} },
    { id: 3, type:"education", data:{ title: "HSC (12th)", subTitle: "Science, Dharampeth Science College, Nagpur", frontContent:"Percentage: 89.85%", backContent:"English: 89/100, Mathematics: 96/100, Physics: 84/100, Chemistry: 82/100, Computer Science: 183/200, Environment Studies: 50/50", duration:"2019"} },
    { id: 4, type:"education", data:{ title: "SSC (10th)", subTitle: "Science, Tip Top Convent, Nagpur", frontContent:"Percentage: 92.80%", backContent:"English: 75/100, Marathi: 81/100, Hindi/Sanskrit: 93/100, Mathematics: 99/100, Science: 95/100, Social Science: 96/100", duration:"2017"} },

    { id: 5, type:"projects", data:{ title: "Financial Fraud Detection", subTitle: "Classification by VAE & CSLR", frontContent:"Enhanced security using AE(Synthetic Data) & uncovered underlying patterns utilizing Node2Vec, GCN & SP.", backContent:"Tools & technologies used: Python, Google Colab, ML Development Life Cycle", duration:"2024"} },
    { id: 6, type:"projects", data:{ title: "Gender Recognition by Voice", subTitle: "Utilizing ML Techniques", frontContent:"Scrutinized Voice Data (acoustic properties of voice) using diverse ML Algorithms to propose the best. ", backContent:"Tools & technologies used: Python, Google Colab, Streamlit, Django", duration:"2022"} },
    { id: 7, type:"projects", data:{ title: "Carbon Footprint Prediction", subTitle: "Utilizing ML Techniques", frontContent:"Analysed and performed EDA on “ Our World in Data “ dataset and applied models.", backContent:"Tools & technologies used: MERN, Python, Django", duration:"2022"} },
    { id: 8, type:"projects", data:{ title: "AI Snake Game", subTitle: "GUI using Tkinter", frontContent:"This is an advanced AI snake game using path solvers Hamiltonian Path Solver & Greedy Path Solver.", backContent:"Tools & technologies used: Python & Tkinter (for GUI)", duration:"2021"} },

    { id: 9, type:"internships", data:{ title: "DeltaX ", subTitle: "Intern (Remote)", frontContent:"Using REST APIs, VUE.JS, SQL & C#, tried to craft an SPA-user-centric experience.", backContent:"Spearheaded the development of a dynamic web application (Building Web App using SPAs and Web APIs) focusing on movie display & its ratings.", duration:"2023"} },
    { id: 10, type:"internships", data:{ title: "Reliance Industries Ltd.", subTitle: "Intern (Remote)", frontContent:"Implemented 2-level user access to safeguard sensitive data by proficiently resolving technical challenges in SDLC.", backContent:"Independently Designed, Analyzed, and Developed a full-stack web application prototype using MERN Technology, used to Manage Daily Product Packaging Data for interdepartmental cooperation.", duration:"2022"} },
    { id: 11, type:"internships", data:{ title: "Pantech Solutions", subTitle: "AI&ML Intern", frontContent:"Actively comprehended the intricacies of several projects that hold significant potential for real-world implementation.", backContent:"Leaf Disease Detection, Handwritten Digit Recognition, etc...", duration:"2022"} },
    { id: 12, type:"internships", data:{ title: "Suven C & T Pvt. Ltd.", subTitle: "Web Development Intern", frontContent:"Designed the prototype of 3 websites in basic HTML, CSS & JavaScript", backContent:"365 Entertainment - similar to Hotstar.com, Blogging - similar to Medium.com & Quizapp - an online quiz website", duration:"2022"} },

    { id: 13, type:"tools", data:{ title: "Python", subTitle: "", frontContent:"Python is a versatile and powerful programming language known for its simplicity and readability.", backContent:"Commonly used Libraries: Data Science Libs., Deep Learning Libs.", duration:""} },
    { id: 14, type:"tools", data:{ title: "MERN", subTitle: "", frontContent:"A robust full-stack JavaScript framework.", backContent:"MERN stack: MongoDB, Express.js, React.js, Node.js", duration:""} },
    { id: 15, type:"tools", data:{ title: "JavaScript", subTitle: "", frontContent:"versatile and dynamic programming language essential for web development.", backContent:"", duration:""} },
    { id: 16, type:"tools", data:{ title: "SQL", subTitle: "", frontContent:"A standard language for managing and querying databases.", backContent:"", duration:""} },

    { id: 17, type:"others", data:{ title: "Core Team Member (Tech.)", subTitle: "Office of Carrier Services, IIT Hyderabad", frontContent:"", backContent:"", duration:"2024"} },
    { id: 18, type:"others", data:{ title: "GATE 2023", subTitle: "Top 0.5% in GATE CS-2023", frontContent:"AIR 370", backContent:"", duration:"2023"} },
    { id: 19, type:"others", data:{ title: "Teaching Assistant", subTitle: "Artificial Intelligence Dept., IIT Hyderabad", frontContent:"", backContent:"", duration:"2023"} },
    { id: 20, type:"others", data:{ title: "Conference Paper", subTitle: "", frontContent:"Gender Recognition by Voice using Machine Learning Techniques (at IJNGC) ", backContent:"", duration:"2023"} },

  ];

  export default cardContents;
  