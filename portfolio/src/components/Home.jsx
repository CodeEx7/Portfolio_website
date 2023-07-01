import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FullScreenContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;


const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio!</h1>
      <h2>Brij Bhushan Maurya</h2>
      <p>
        Phone: +91 8383928931 | Email: brijbhushan9083@gmail.com<br />
        Location: Chauri Chaura, Gorakhpur, U.P.-India, 273201
      </p>
      <h3>SUMMARY</h3>
      <p>
        An aspiring software engineer with knowledge in software engineering practices such as coding, testing, and code deployments.
        Strong ability to communicate with clients and express ideas clearly and concisely. Always ready to help and not ashamed to ask.
      </p>
      <h3>EXPERIENCE</h3>
      <h4>Capgemini Technology Services Limited (July 2022 - Present)</h4>
      <ul>
        <li>Working as a software developer for HSBC Core.</li>
        <li>Developing scripts using Python for testing of Big Query data tables and managing the base code to handle various source data with various updates.</li>
        <li>Skills Used: Python, PySpark, SQL, Shell, Google Cloud, GIT, Jenkins, JIRA.</li>
      </ul>
      <h4>Tata Consultancy Services Ltd. (June 2019 - June 2022)</h4>
      <ul>
        <li>Working as a developer in a data migration project in which 700+ servers and services had been migrated and managed by me.</li>
        <li>Developed a script using Python to fetch the server's full details in a single page, reducing details fetching time by more than 25%.</li>
        <li>Mentored 3 new recruits in my project.</li>
        <li>Skills Used: Python, Grafana, Ericsson Cloud, Linux, Jenkins, JIRA, GIT.</li>
      </ul>
      <h3>SKILLS</h3>
      <h4>Technical Skills:</h4>
      <p>C++, Python, SQL, Linux.</p>
      <h4>Skills Aware of:</h4>
      <p>Data Structures and Algorithms, Google Cloud Platform.</p>
      <h4>Tools Aware of:</h4>
      <p>GIT, Apache Airflow, Jenkins, PyCharm, VS Code.</p>
      <h4>Other Skills:</h4>
      <p>Leadership, Teamwork, Problem Solving, Good Verbal and Communication Skills.</p>
      <h3>PROJECTS</h3>
      <h4>Data Studio Dashboard</h4>
      <ul>
        <li>From scratch, created several Data Studio dashboards comparing files landed in GCP bucket versus files unpacked in BigQuery using Python DAG to process the file details.</li>
        <li>Currently available for 350+ users to check the details.</li>
        <li>Skill Used: Python, GIT, Jenkins, Apache Airflow, Google Cloud Platform, Looker-Studio.</li>
      </ul>
      <h4>Backup and Restore</h4>
      <ul>
        <li>Created scripts for backup and restore of the BigQuery tables using Shell. Used Apache Airflow for automated backup.</li>
        <li>Currently taking backups for all 9 core projects in AMG, and the Restore DAG is available across all teams to use.</li>
        <li>Skill Used: Shell, Python, Apache Airflow, Google Cloud Platform.</li>
      </ul>
      <h3>ACHIEVEMENTS</h3>
      <ul>
        <li>Received three "Star of the Month" awards for closing a large number of JIRA requests.</li>
        <li>5-star rating on Hackerrank, 2.5-star rating on Leetcode, and 2-star rating on Codechef.</li>
      </ul>
      <h3>CERTIFICATIONS</h3>
      <ul>
        <li>Academy Full Course (In Progress) - From Scaler</li>
        <li>Complete C++/Python Course - From Coursera</li>
      </ul>
      <h3>EDUCATION</h3>
      <p>Bachelor of Technology - Aug 2015 - June 2019 (Overall: 77%)</p>
    </div>
  );
};

export default Home;
