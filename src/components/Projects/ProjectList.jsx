import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./ProjectList.css";
import { skill_Icon } from "../About/Skills/skill-icon";
const Projectlist = ({ title, description, image, url }) => {
  return (
    <>
      <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
        <div>
          <img className="project-image" src={image} alt={title} />
        </div>
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div>
          <Link to={url} className="github-link">
            <motion.button
              className="github-button"
              whileHover={{ scale: 1.1 }}
            >
              <img src={skill_Icon[0].Github} alt="github" /> Github
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Projectlist;
