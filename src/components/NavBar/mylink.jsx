import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
const MyLink = ({ to, children }) => {
  return (
    <motion.div className="desktopMenuListItem" whileHover={{ scale: 1.1 }}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "active" : undefined)}
        end
      >
        {children}
      </NavLink>
    </motion.div>
  );
};

export default MyLink;
