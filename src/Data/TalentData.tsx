import { MapPin, Recharging, Search } from "tabler-icons-react";

export const searchFields = [
  {
    title: "Job Title",
    icon: Search,
    options: ["designer", "devloper"],
  },
  {
    title: "Location",
    icon: MapPin,
    options: ["delhi", "mumbai"],
  },
  {
    title: "Skills",
    icon: Recharging,
    options: ["html", "java"],
  },
];

export const talents = [
  {
    name: "Nikhil Mane",
    role: "Software Engineer",
    company: "Google",
    topSkills: ["React", "Spring Boot", "MongoDB"],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis reprehenderit ea consequuntur in ducimus nemo, non possimus, quos error praesentium quam illum quas nisi ad nulla? Illum quos harum ullam?",
    expectedCtc: "₹15 LPA",
    location: "Mumbai, India",
  },
  {
    name: "Sarah Johnson",
    role: "Frontend Developer",
    company: "Facebook",
    topSkills: ["Vue.js", "JavaScript", "CSS"],
    about:
      "Passionate about creating interactive user interfaces and improving user experience. Loves working with modern JavaScript frameworks.",
    expectedCtc: "₹12 LPA",
    location: "Bengaluru, India",
  },
  {
    name: "Michael Smith",
    role: "Backend Developer",
    company: "Amazon",
    topSkills: ["Node.js", "Express", "MySQL"],
    about:
      "Focused on building scalable backend systems and APIs. Enjoys optimizing databases and server-side logic.",
    expectedCtc: "₹20 LPA",
    location: "Hyderabad, India",
  },
  {
    name: "Emma Brown",
    role: "Full-Stack Developer",
    company: "Microsoft",
    topSkills: ["Angular", "Java", "PostgreSQL"],
    about:
      "A problem solver who enjoys tackling complex challenges and developing full-stack solutions.",
    expectedCtc: "₹18 LPA",
    location: "Chennai, India",
  },
  {
    name: "David Lee",
    role: "Data Engineer",
    company: "Netflix",
    topSkills: ["Python", "Hadoop", "Spark"],
    about:
      "Specialized in data pipelines and big data technologies. Always looking for innovative ways to process data.",
    expectedCtc: "₹22 LPA",
    location: "Pune, India",
  },
  {
    name: "Lisa Taylor",
    role: "Mobile Developer",
    company: "Uber",
    topSkills: ["Flutter", "Dart", "Firebase"],
    about:
      "Enthusiastic about building cross-platform mobile apps with smooth and intuitive user experiences.",
    expectedCtc: "₹16 LPA",
    location: "Delhi, India",
  },
  {
    name: "John Doe",
    role: "DevOps Engineer",
    company: "Spotify",
    topSkills: ["Docker", "Kubernetes", "AWS"],
    about:
      "Dedicated to automation and improving CI/CD processes. Loves working in cloud-native environments.",
    expectedCtc: "₹19 LPA",
    location: "Kolkata, India",
  },
  {
    name: "Anna Scott",
    role: "UI/UX Designer",
    company: "Airbnb",
    topSkills: ["Figma", "Adobe XD", "Sketch"],
    about:
      "Creative designer with a focus on user-centric design and clean aesthetics.",
    expectedCtc: "₹10 LPA",
    location: "Noida, India",
  },
  {
    name: "William Harris",
    role: "Cybersecurity Analyst",
    company: "Oracle",
    topSkills: ["Network Security", "Ethical Hacking", "SIEM"],
    about:
      "Focused on protecting systems and networks from cyber threats and implementing secure protocols.",
    expectedCtc: "₹23 LPA",
    location: "Gurgaon, India",
  },
  {
    name: "Olivia Martin",
    role: "Machine Learning Engineer",
    company: "OpenAI",
    topSkills: ["TensorFlow", "PyTorch", "NLP"],
    about:
      "Passionate about building and deploying machine learning models that solve real-world problems.",
    expectedCtc: "₹25 LPA",
    location: "Bengaluru, India",
  },
  {
    name: "Ethan Moore",
    role: "Cloud Engineer",
    company: "Salesforce",
    topSkills: ["Azure", "GCP", "Terraform"],
    about:
      "Experienced in cloud infrastructure and architecture, helping organizations move to the cloud efficiently.",
    expectedCtc: "₹21 LPA",
    location: "Pune, India",
  },
];

// export const profile = [
//   {
//     name: "Nikhil Mane",
//     role: "Software Engineer",
//     company: "Google",
//     location: "Mumbai, India",
//     about:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis reprehenderit ea consequuntur in ducimus nemo, non possimus, quos error praesentium quam illum quas nisi ad nulla? Illum quos harum ullam?",
//     skills: ["React", "Spring Boot", "MongoDB"],
//     experience: [
//       {
//         title: "Software Engineer III",
//         company: "Google",
//         location: "New York",
//         startDate: "Apr 2022",
//         endDate: "Present",
//         description:
//           "Worked on building scalable microservices architecture and improving the performance of web applications.",
//       },
//     ],
//   },
//   {
//     name: "Sarah Johnson",
//     role: "Frontend Developer",
//     company: "Facebook",
//     location: "Bengaluru, India",
//     about:
//       "Passionate about creating interactive user interfaces and improving user experience. Loves working with modern JavaScript frameworks.",
//     skills: ["Vue.js", "JavaScript", "CSS"],
//     experience: [
//       {
//         title: "Frontend Developer",
//         company: "Facebook",
//         location: "Bengaluru, India",
//         startDate: "Jan 2021",
//         endDate: "Present",
//         description:
//           "Developed interactive components for web applications using Vue.js and optimized the performance of frontend applications.",
//       },
//     ],
//   },
//   {
//     name: "Michael Smith",
//     role: "Backend Developer",
//     company: "Amazon",
//     location: "Hyderabad, India",
//     about:
//       "Focused on building scalable backend systems and APIs. Enjoys optimizing databases and server-side logic.",
//     skills: ["Node.js", "Express", "MySQL"],
//     experience: [
//       {
//         title: "Backend Developer",
//         company: "Amazon",
//         location: "Hyderabad, India",
//         startDate: "Feb 2020",
//         endDate: "Present",
//         description:
//           "Built scalable backend services for e-commerce and optimized SQL queries for faster performance.",
//       },
//     ],
//   },
//   {
//     name: "Emma Brown",
//     role: "Full-Stack Developer",
//     company: "Microsoft",
//     location: "Chennai, India",
//     about:
//       "A problem solver who enjoys tackling complex challenges and developing full-stack solutions.",
//     skills: ["Angular", "Java", "PostgreSQL"],
//     experience: [
//       {
//         title: "Full-Stack Developer",
//         company: "Microsoft",
//         location: "Chennai, India",
//         startDate: "Mar 2021",
//         endDate: "Present",
//         description:
//           "Worked on developing full-stack web applications using Angular and Java, improving system reliability and scalability.",
//       },
//     ],
//   },
//   {
//     name: "David Lee",
//     role: "Data Engineer",
//     company: "Netflix",
//     location: "Pune, India",
//     about:
//       "Specialized in data pipelines and big data technologies. Always looking for innovative ways to process data.",
//     skills: ["Python", "Hadoop", "Spark"],
//     experience: [
//       {
//         title: "Data Engineer",
//         company: "Netflix",
//         location: "Pune, India",
//         startDate: "Jul 2019",
//         endDate: "Present",
//         description:
//           "Built and maintained scalable data pipelines using Spark and optimized data storage solutions.",
//       },
//     ],
//   },
//   {
//     name: "Lisa Taylor",
//     role: "Mobile Developer",
//     company: "Uber",
//     location: "Delhi, India",
//     about:
//       "Enthusiastic about building cross-platform mobile apps with smooth and intuitive user experiences.",
//     skills: ["Flutter", "Dart", "Firebase"],
//     experience: [
//       {
//         title: "Mobile Developer",
//         company: "Uber",
//         location: "Delhi, India",
//         startDate: "Oct 2020",
//         endDate: "Present",
//         description:
//           "Developed cross-platform mobile applications using Flutter and integrated Firebase for real-time data.",
//       },
//     ],
//   },
//   {
//     name: "John Doe",
//     role: "DevOps Engineer",
//     company: "Spotify",
//     location: "Kolkata, India",
//     about:
//       "Dedicated to automation and improving CI/CD processes. Loves working in cloud-native environments.",
//     skills: ["Docker", "Kubernetes", "AWS"],
//     experience: [
//       {
//         title: "DevOps Engineer",
//         company: "Spotify",
//         location: "Kolkata, India",
//         startDate: "Jan 2018",
//         endDate: "Present",
//         description:
//           "Managed CI/CD pipelines and automated infrastructure provisioning using Kubernetes and Terraform.",
//       },
//     ],
//   },
// ];

export const profile = {
  name: "Nikhil Mane",
  role: "Software Engineer",
  company: "Google",
  location: "Mumbai, India",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis reprehenderit ea consequuntur in ducimus nemo, non possimus, quos error praesentium quam illum quas nisi ad nulla? Illum quos harum ullam?",
  skills: ["React", "Spring Boot", "MongoDB"],
  experience: [
    {
      title: "Software Engineer III",
      company: "Google",
      location: "New York",
      startDate: "Apr 2022",
      endDate: "Present",
      description:
        "Worked on building scalable microservices architecture and improving the performance of web applications.",
    },
  ],
  certifications: [
    {
      name: "google certificate",
      issuer: "google",
      issueDate: "aug 2023",
      certificateId: "CFGT321",
    },
    {
      name: "microsoft certificate",
      issuer: "microsoft",
      issueDate: "aug 2024",
      certificateId: "MICT321",
    },
  ],
};
