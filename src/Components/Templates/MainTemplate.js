import Header from "../Header/Header";
import Hero from "../Hero/Hero";

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      <Hero />
      {children}
    </div>
  );
};

export default MainTemplate;
