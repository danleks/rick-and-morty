import { NavLink } from "react-router-dom";
import { NavigationWrapper } from "./Navigation.styles";

const menu = [
  {
    title: "characters",
    link: "/characters",
  },
  {
    title: "favourites",
    link: "/favourite-characters",
  },
];

const Navigation = () => {
  return (
    <NavigationWrapper>
      <ul>
        {menu.map((item) => {
          return (
            <li key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </NavigationWrapper>
  );
};

export default Navigation;
