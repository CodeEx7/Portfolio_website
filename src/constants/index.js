import {
  mobile,
  backend,
  creator,
  web,
  git,
  capgemini,
  tcs,
  sql,
  cpp,
  python,
  bash,
  airflow,
  gcp,
  jenkins,
  jira,
  linux,
  looker,
  spark,
  browser_img,
  no_image,
  resume_page
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Data Engineer",
    icon: mobile,
  },
  {
    title: "Teacher",
    icon: creator,
  },
  {
    title: "Aspire to be Backend Developer",
    icon: backend,
  },  
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Sql",
    icon: sql,
  },
  {
    name: "Bash",
    icon: bash,
  },
  {
    name: "Spark",
    icon: spark,
  },
  {
    name: "Airflow",
    icon: airflow,
  },
  {
    name: "GCP",
    icon: gcp,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Looker",
    icon: looker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Jira",
    icon: jira,
  }
];

const experiences = [
  {
    title: "System Engineer",
    company_name: "Tata Consultancy Services Ltd.",
    icon: tcs,
    iconBg: "#383E56",
    date: "June 2019 - June 2022",
    points: [
      "Worked as a developer in a data migration project in which 700+ servers and services had been migrated and managed by me.",
      "Developed a script using Python to fetch the server's full details in a single page from which reduces details fetching time by more than 25%.",
      "Worked on Private cloud where i managed different services and IAM for same services.",
      "Mentored 3 new recruits in my project.",
      "Skills Used: Python, GIT, Jenkins, Ericsson Cloud, Linux, JIRA, Grafana.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Capgemini Technology Services Ltd.",
    icon: capgemini,
    iconBg: "#E6DEDD",
    date: "June 2022 - Current",
    points: [
      "Working as a software developer for HSBC Core in Data Engineering project.",
      "Developing scripts using python for testing of Big Query data tables and managing the base code to handle various source data with various updates.",
      "Created 5+ Automation project which are currently in production.",
      "Skills Used: Python, PySpark, SQL, Shell, Google Cloud, GIT, Jenkins, JIRA.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Hasan proved me wrong.Hasan, made a great website for us. Thanks, Hasan.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Hasan does. Hasan is a fantastic web Developer.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Hasan optimized our website, our traffic increased by 50%. He is a great developer. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Data studio dashboard",
    description:
      "Created a Looker dashboards from scratch for coming file to bucket vs unpacking files in bigquery. Currently available for 350+ users to check the detail.",
    tags: [
      {
        name: "Python #Looker_studio #BigQuery #Airflow #VScode.",
        color: "blue-text-gradient",
      }
    ],
    image: no_image,
    source_code_link: "NA",
  },
  {
    name: "Backup and Restore",
    description:
      "Created scripts for backup and restore of the big query tables using shell, using airflow automated the backup.	Currently taking backup for all 9 core projects in AMG and Restore DAG is available across all teams to use.",
    tags: [
      {
        name: "Shell #Python #Airflow #BigQuery",
        color: "green-text-gradient",
      }
    ],
    image: no_image,
    source_code_link: "NA",
  },
  {
    name: "Airflow DAG to create Bucket/Dataset",
    description:
      "Created a python project to create dataset/bucket in GCP with CMEK key to reduce the Total Privileged Access Management.",
    tags: [
      {
        name: "Python #Airflow #GCP",
        color: "blue-text-gradient",
      }
    ],
    image: no_image,
    source_code_link: "NA",
  },
  {
    name: "Airflow DAG to run bigquery",
    description:
      "Created a python project to run the bigquery using DAG instead of console to reduce the Total Privileged Access Management.",
    tags: [
      {
        name: "Python #Airflow #GCP",
        color: "green-text-gradient",
      }
    ],
    image: no_image,
    source_code_link: "NA",
  },
  {
    name: "Copy data from prod to dev bigquery",
    description:
      "Created a python project to get the data from bigquery to gcp bucket in csv in prod. then using jenkins pipeline moved data from prod to dev environment.",
    tags: [
      {
        name: "Python #Airflow #Jenkins #GCP",
        color: "blue-text-gradient",
      }
    ],
    image: no_image,
    source_code_link: "NA",
  },
  {
    name: "API to Bigquery",
    description:
      "This was a POC of production level code to dump the json data coming from api to bigquery using python script",
    tags: [
      {
        name: "Python #GCP #Postman #VScode",
        color: "pink-text-gradient",
      },
    ],
    image: no_image,
    source_code_link: "NA",
  },
  {
    name: "Wolfy_the_Browser",
    description:
      "Created Browser using Python and PyQt5 module..",
    tags: [
      {
        name: "Python, PyQt5",
        color: "blue-text-gradient",
      }
    ],
    image: browser_img,
    source_code_link: "https://github.com/CodeEx7/Strange_project/blob/main/Wolfy.py",
  },
  {
    name: "Static Portfolio page",
    description:
      "Created Static portfolio project using HTML, CSS and JavaScript.",
    tags: [
      {
        name: "Javascript #HTML #CSS",
        color: "pink-text-gradient",
      },
    ],
    image: resume_page,
    source_code_link: "https://github.com/CodeEx7/Resume-Bhushan",
  },
];

export { services, technologies, experiences, testimonials, projects };
