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
                I have a solid understanding of React.js, JavaScript, HTML, and CSS. I used
                these tools to create this personal portfolio website, and I am
                planning to create more unique websites in the future! Additionally, I would like to 
                develop mobile applications in the future with React Native, and my experience as a part-time software developer
                in SmileChild is leading me to that goal. I am passionate about continuously 
                improving my skills and staying up-to-date with the latest front-end technologies and best practices through 
                complex projects, internships, and other opportunities. My goal is to become proficient in creating influential
                applications for users! 
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
                these languages yet, I am currently in the phase of 
                learning Spring Boot to create a robust back-end application using 
                RESTful APIs and database operations with Java. Additionally, I developed a 
                video game with C++ in my Fundamentals of Engineering Honors Class with my peer 
                at Ohio State. I have also used Python in a few projects, such as the 
                JP Morgan Software Engineering job simulation 
                on Forage. I would love to expand my back-end knowledge 
                through internships and contribute to dynamic teams! 
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
                I have experience in AI development through the use of TensorFlow, Python, Google Collab, and 
                the powerful OpenAI API. Since I am a novice in this field, I am currently expanding my AI knowledge by taking an online deep learning 
                course where I am learning about powerful tools, such as TensorFlow and Keras. However, I have developed some cool projects, 
                such as the PictoAI model with Python, TensorFlow, and Google Colab and PopuLert's AI Chat Advisor with React.js and OpenAI API. 
                I even attended the Microsoft Build event to learn about the latest Microsoft technologies that enable 
                developers to leverage the power of AI to develop applications faster! 
                In general, my goal is to acquire new skills through AI-related internships, conference events, and courses to become a member of the AI revolution!  
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
