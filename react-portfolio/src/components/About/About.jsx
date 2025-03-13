import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about_pic_2.png")}
          alt="Me at high school prom"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img 
              src={getImageUrl("about/cursorIcon.png")} 
              alt="Cursor icon"
              className={styles.aiImage} 
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I have a solid understanding of React.js, Bootstrap, Material UI, TypeScript, JavaScript, HTML, and CSS. I used
                these tools to develop cool projects, such as this portfolio website and a full-stack dean's list application.  
                Additionally, as a former SWE intern at Marvel AI, I improved my Material UI and React skills by 
                working on Kai, an AI teaching assistant, and CosmoChat UI, the frontend of ReX, an AI career companion for learners. 
                In general, I am passionate about continuously 
                improving my skills and staying up-to-date with the latest front-end technologies and best practices through 
                complex projects, internships, and other opportunities. My goal is to become proficient in creating influential
                web and mobile applications for users! 
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img 
              src={getImageUrl("about/serverIcon.png")} 
              alt="Server icon"
              className={styles.aiImage}
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I have experience with Java, Python, C/C++, Spring, Node.js, Postman API, and Google Firebase. 
                With my backend knowledge, I have developed unique projects, such as a full-stack dean's list application. In that 
                project, Java, Spring Boot, and Postman API were used for the backend. I also used Python and C++ in a few projects, 
                as noted in the projects section. Additionally, I am proficient in C through my Systems 1 class at Ohio State. 
                Finally, as a former SWE intern at Marvel AI, I strenghtened my Firebase, Postman API, and MySQL skills
                through one of its mission projects, QuantumBot core. I would love to expand my back-end knowledge 
                through future internships and contribute to dynamic teams! 
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
                I have experience in AI development, primarily with generative AI and machine learning, 
                through the use of TensorFlow, Python, Google Colab, Ollama, and 
                the powerful OpenAI API. I have developed some cool projects, 
                such as a plant disease classification system and a full-stack mental health application with an 
                embedded AI chatbot powered by llama2. If you are interested 
                in learning more about those projects, you can look at the projects section!    
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/product_management.png")}
              alt="PM icon"
              className={styles.aiImage}
            />
            <div className={styles.aboutItemText}>
              <h3>Product Management</h3>
              <p>
                Since I am in the Integrated Business and Engineering(IBE) Honors Program, I have learned about the importance 
                of delivering influential products to end users based on financial market research, user interviews, product life cycle, and the engineering design process. 
                This is demonstrated through my participation in the IBE pitch competition in Spring 2024 where my team and I presented
                the idea of PopuLert. This application allows individuals to evaluate occupancy levels in establishments to eliminate wasted time 
                and optimize their schedules. Although we did not win an award, many individuals in my IBE class, including my instructors, loved 
                our idea! Additionally, this project improved my entrepreneurship, collaboration, and Figma skills, which are important skills for becoming 
                a successful product manager. 

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
