/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Alshaheri's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Mohammed Alshaheri Portfolio",
    type: "website",
    url: "https://malshaheri.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Mohammed Alshaheri",
  logo_name: "Alshaheri",
  nickname: "Alprins",
  subTitle:
    "I am eager to collaborate with clients and fellow developers to bring ideas to life and create meaningful digital experiences. By constantly pushing my boundaries and seeking new challenges, I am confident that my portfolio will grow over time, showcasing the progress I make on this exciting journey. Thank you for visiting my website and considering me for your web development needs. I look forward to the opportunity to work with you and create something extraordinary..",
  resumeLink:
    "https://drive.google.com/file/d/1b57diJYTr0sZ4hkqosEim1W2b7VzsWWK/view?usp=sharing",
  portfolio_repository: "https://github.com/malshaheri/malshaheri",
  githubProfile: "https://github.com/malshaheri",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/malshaheri",
  // linkedin: "https://www.linkedin.com/in/alshaheri/",
  // gmail: "malshaheri@gmail.com",
  // gitlab: "",
  // facebook: "https://www.facebook.com/alprinsm",
  // twitter: "https://twitter.com/m_alshaheri",
  // instagram: ""

  {
    name: "Github",
    link: "https://github.com/malshaheri",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alshaheri/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  /*{
    name: "YouTube",
    link: "",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },*/
  {
    name: "Gmail",
    link: "mailto:malshaheri@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/m_alshaheri",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/alprinsm",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  /* {
    name: "Instagram",
    link: "",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },*/
];

const skills = {
  data: [
    /* {
    title: "Data Science & AI",
    fileName: "DataScienceImg",
    skills: [
      "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
      "⚡ Experience of working with Computer Vision and NLP projects",
      "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    ],
    softwareSkills: [
      {
        skillName: "Tensorflow",
        fontAwesomeClassname: "logos-tensorflow",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Keras",
        fontAwesomeClassname: "simple-icons:keras",
        style: {
          backgroundColor: "white",
          color: "#D00000",
        },
      },
      {
        skillName: "PyTorch",
        fontAwesomeClassname: "logos-pytorch",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Python",
        fontAwesomeClassname: "ion-logo-python",
        style: {
          backgroundColor: "transparent",
          color: "#3776AB",
        },
      },
      {
        skillName: "Deeplearning",
        imageSrc: "deeplearning_ai_logo.png",
      },
    ],
    },*/
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node and Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        /*{
    skillName: "Gatsby",
    fontAwesomeClassname: "simple-icons:gatsby",
    style: {
      color: "#663399",
    },
  },
  {
    skillName: "Flutter",
    fontAwesomeClassname: "simple-icons:flutter",
    style: {
      color: "#02569B",
    },
  },*/
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Digital Career Institute",
      subtitle: "Fullstack Web Development",
      logo_path: "dci_logo1.jpeg",
      alt_name: "DCI",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ Accomplishing a one year full time training including technologies from MERN stack",
        "⚡ Taking German lessons as part of the course with a certificate in Level B1.",
      ],
      website_link: "https://digitalcareerinstitute.org/",
    },
    {
      title: "SANA'A UNIVERSITY - YEMEN",
      subtitle: "Faculty Of Arts - English Department",
      logo_path: "sanaa uni.jpeg",
      alt_name: "Sanaa Uni",

      duration: "2000 - 2004",
      descriptions: [
        "⚡ GPA: 3.65",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://su.edu.ye/en/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "Fullstack Web Developer with 5 years of experience in HR Management who recently graduated a 1-year intensive training in Fullstack Web Development (MERNstack).",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "HR Coordinator",
          company: "AbuIssaHolding - Doha",
          company_url: "https://www.abuissa.com/",
          logo_path: "abuissa-holding-greyscale-logo.png",
          duration: " 2013 -  2018",
          location: "Jeddah, KSA",
          description:
            " Administers health andwelfare plans, including enrollments,changes and terminations. Processes required documentsthrough payroll and insurance providersto ensure accurate record-keeping and proper deductions. Files documentsinto appropriate employee files. Assists or preparescorrespondence asrequested. Prepares new employee files.",
          color: "#0879bf",
        },
        {
          title: "Distribution Manager",
          company: "My Mall Magazine",
          company_url: "",
          logo_path: "MY MALL LOGO.png",
          duration: "Sep 2010 - Oct 2013",
          location: "Jeddah, KSA",
          description:
            "Determine when product is distributed, where it is sent and what volume is to be distributed.",
          color: "#9b1578",
        },
        {
          title: "Operation Manager",
          company: "Alshaer Group",
          company_url: "",
          logo_path: "edea906dd4e51884eff26080e310aab5.jpg",
          duration: " 2005 - May 2010",
          location: "Jeddah, KSA",
          description:
            "Ensuring all operations are carried on in an appropriate, cost-effective way Improving operational management systems, processes and best practices Helping the organization’s processes remain legally compliant.",
          color: "#fc1f20",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Accountant",
          company: "Jemenitischen Gemeinde in RLP & SL e.V.",
          company_url: "https://www.jg-rlp-sl.de/startseite",
          logo_path: "jemen_gemeinde.png",
          duration: "Jan 2020 - Dec 2021",
          location: "Ludwigshafen, Germany",
          description:
            "Manage all accounting transactions, Prepare budget forecasts, Publish financial statements in time, Handle monthly quarterly and annual closings, Reconcile accounts payable and receivable, Ensure timely bank payments.",
          color: "#4285F4",
        },
        {
          title: "Supervisory Committee",
          company: "Jemenitischen Gemeinde in RLP & SL e.V.",
          company_url: "https://www.jg-rlp-sl.de/startseite",
          logo_path: "jemen_gemeinde.png",
          duration: "Jan 2022 - Present",
          location: "Ludwigshafen, Germany",
          description:
            "The role of the Supervisory Committee is to oversee the work of the Board of Directors in financial and administrative matters, including proposals for changes made by competent bodies such as courts and tax authorities. i.e. Only the Supervisory Committee is entitled to grant discharge to the Board of Directors. e. Members of the Supervisory Committee are not members of the Management Board..",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Throughout my studies, I have gained a solid foundation in web development principles, including HTML, CSS, JavaScript, and various frameworks. With this knowledge, I have already begun creating websites that showcase my abilities and demonstrate my creativity. I believe that every project is an opportunity for growth, and I approach each one with enthusiasm and a willingness to learn. Whether it's a simple static website or a dynamic web application, I strive to deliver quality solutions that meet the needs and expectations of my clients and users..",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Soon....",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2023-05-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url: "https://github.com/malshaheri",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2023-05-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url: "https://github.com/malshaheri",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2023-05-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url: "https://github.com/malshaheri",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2023-05-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url: "https://github.com/malshaheri",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "alshaheri_photo.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  /*blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },*/
  addressSection: {
    title: "Address",
    subtitle: " Ludwigshafen am Rhein, Rhineland-Palatinate, - 67061",
    locality: "Ludwigshafen",
    country: "Gr",
    region: " Rhineland-Palatinate",
    postalCode: "67061",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.de/maps/place/Ludwigshafen/@49.4875091,8.2231134,11z/data=!3m1!4b1!4m6!3m5!1s0x4797cc6973da8163:0x398edc7a57771cc2!8m2!3d49.4774018!4d8.4447451!16zL20vMDEyajMy?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
