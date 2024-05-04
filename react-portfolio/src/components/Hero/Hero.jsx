import React from 'react'; 

import styles from "./Hero.module.css"; 
import { getImageUrl } from "../../utils"; 

export const Hero = () => {
  return (
    <section className = {styles.container}> 
        <div className={styles.content}>
            <h1 className={styles.title}> Hi, I am Aayush Paul</h1>
            <p className={styles.description}> I am a Computer Science and Engineering student at The Ohio State University in the Integrated Business and Engineering(IBE) Honors Program. 
            I love expanding my technical skills through the classes I take at Ohio State, online courses, side projects, and internships.
            Reach out if you would like to learn more about me! 
            </p> 
            <a href="mailto:paul.1174@osu.edu" className={styles.contactBtn}> Contact Me </a>
        </div>
        <img
            src={getImageUrl("hero/Aayush_SeniorPic.png")}
            alt="Hero image of me"
            className={styles.heroImg}
       />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
}; 

