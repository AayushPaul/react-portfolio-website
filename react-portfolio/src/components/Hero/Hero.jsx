import React from 'react'; 

import styles from "./Hero.module.css"; 
import { getImageUrl } from "../../utils"; 

export const Hero = () => {
  return (
    <section className = {styles.container}> 
        <div className={styles.content}>
            <h1 className={styles.title}> Hi, I am Aayush Paul</h1>
            <p className={styles.description}> I am a Computer Science and Engineering student from Mason, Ohio in the Integrated Business and Engineering(IBE) Honors Program at The Ohio State University. I love expanding my technical skills through the classes I take at Ohio State, online courses, side projects, and internships. Most importantly, my interest lies in developing profitable software products that benefit society in different ways through my entrepreneurship and teamwork skills, as demonstrated through my participation in the IBE pitch competition in Spring 2024 where my team and I presented the idea of PopuLert. This application allows individuals to evaluate occupancy levels in establishments to eliminate wasted time and optimize their schedules. Although we did not win an award, many individuals in my IBE class, including my instructors, loved our idea. Reach out if you would like to learn more about me! 
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

