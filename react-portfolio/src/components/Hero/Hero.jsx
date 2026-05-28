import React from 'react'; 

import styles from "./Hero.module.css"; 
import { getImageUrl } from "../../utils"; 

export const Hero = () => {
  return (
    <section className = {styles.container}> 
        <div className={styles.content}>
            <h1 className={styles.title}> Hi, my name is Aayush Paul! I aspire to build high-impact technical solutions and drive digital product strategy.</h1>
            <p className={styles.description}> 
              I am a Computer Science and Engineering student from Mason, Ohio in the Integrated Business and Engineering(IBE) 
              Honors Program at The Ohio State University.
              Leveraging my technical and IBE Honors Program background, I love developing and enhancing beneficial and profitable software products, 
              expanding my AI and software engineering skills, and I am driven to eventually lead cross-functional teams. 
              Reach out if you would like to learn more about me! 
            </p> 
            <a href="mailto:aayushpaul01@gmail.com" className={styles.contactBtn}> Contact Me </a>
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

