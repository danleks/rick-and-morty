import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      <Hero />
      {children}
      <Footer />
    </div>
  );
};

export default MainTemplate;
