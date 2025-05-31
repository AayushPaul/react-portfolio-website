import React from 'react'; 

import styles from "./Hero.module.css"; 
import { getImageUrl } from "../../utils"; 

export const Hero = () => {
  return (
    <section className = {styles.container}> 
        <div className={styles.content}>
            <h1 className={styles.title}> Hi, my name is Aayush Paul! I aspire to become an AI/ML Engineer or Software Engineer.</h1>
            <p className={styles.description}> 
              I am a Computer Science and Engineering student from Mason, Ohio in the Integrated Business and Engineering(IBE) 
              Honors Program at The Ohio State University.
              I love to expand my technical skills by learning about cutting-edge technologies and leveraging them 
              to develop beneficial and profitable software products, expanding my AI and software engineering skills. 
              Reach out if you would like to learn more about me! 
            </p> 
            <a href="mailto:paul.1174@osu.edu" className={styles.contactBtn}> Contact Me </a>
        </div>
        <img
            src={getImageUrl("hero/hero_portfolio.png")}
            alt="Professional profile picture"
            className={styles.heroImg}
       />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
}; 

