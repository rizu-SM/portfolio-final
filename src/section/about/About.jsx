import "./About.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="about-background">
        <div className="bg-circle circle1"></div>
        <div className="bg-circle circle2"></div>
      </div>
      
      <motion.div 
        className="about-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
      >
        <motion.h2
          className="sectionTittle"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          About <span>Me</span>
        </motion.h2>
        
        <div className="about-container">
          <motion.div
            className="imgContainer"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.8,
              },
            }}
          >
            <img src={`${import.meta.env.BASE_URL}about.jpg`} alt="about" />
            <div className="img-border"></div>
          </motion.div>
          
          <div className="about-info">
            <motion.div 
              className="about-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            >
              <h3>A Cybersecurity Student & Full Stack Developer based in Algeria</h3>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
              >
                Hi, I'm Hamroun Sami Abdelmalek, a 19-year-old Cybersecurity student from Algeria.
                I'm currently studying at USTHB and passionate about all things tech. I explore 
                web development—front-end, back-end, and design—to build useful and creative
                solutions. I also have some experience in app development using Java. Always eager
                to learn and grow, I'm excited about the future and the impact I can make!
              </motion.p>
              
              <motion.div 
                className="about-stats"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }}
              >
                <div className="stat-item">
                  <span className="stat-number">___</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
