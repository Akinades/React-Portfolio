import { Outlet } from "react-router";
import Navbar from "../components/NavBar/navbar";
import Footer from "../components/Footer/footer";
const Rootpage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Rootpage;
