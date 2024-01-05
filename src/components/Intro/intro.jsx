import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { skill_Icon } from "../About/Skills/skill-icon";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Intro = () => {
  const imgVariants = {
    moving: {
      x: [-15, 15, -15, 15, -15],
      y: [0, 10, 0, -10, 0],
      transition: {
        repeat: Infinity,
        duration: 10,
        ease: "linear",
      },
    },
  };
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Carbon</span> <br />
          Web Developer
        </span>
        <p className="introPara">
          a passionate ReactJS Developer with a keen eye for design and a
          commitment <br />
          to creating efficient and visually appealing web applications.
          <br />
          My goal is to bring ideas to life through clean and maintainable code.
        </p>
        <Link to="https://github.com/Akinades" className="github-link">
          <motion.button className="btn" whileHover={{ scale: 1.1 }}>
            <img src={skill_Icon[0].Github} alt="github" /> Github
          </motion.button>
        </Link>
      </div>
      <motion.img
        src={bg}
        alt="Profile"
        className="bg"
        variants={imgVariants}
        animate="moving"
      />
    </section>
  );
};

export default Intro;
