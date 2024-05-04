import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/promPic.png")}
          alt="Me at high school prom"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I have programming experience in React.js, HTML, and CSS. I used
                these tools to create this personal portfolio website, and I am
                planning to create more unique websites in the future! I am willing to learn new skills through internships! 
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I have programming experience in Java, Python, C, and C++.
                Although I have not created many powerful applications with
                these languages yet, I am planning to apply my knowledge through
                future side projects and internships!
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/aiIcon.png")}
              alt="AI icon"
              className={styles.aiImage}
            />
            <div className={styles.aboutItemText}>
              <h3>AI Development</h3>
              <p>
                I have experience in AI development through TensorFlow, Python,
                and Google Collab. Although I am not a master at AI yet, I am
                currently taking a few online courses on Codecademy to improve my
                AI skills through the lessons and projects in the courses. Additionally, I am planning to acquire new skills 
                through AI-related internships and other opportunities. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
