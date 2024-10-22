import logo from "@/assets/images/logo.svg";
import { Link } from "@tanstack/react-router";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="E-tutor" className="" />
    </Link>
  );
};

export default Logo;
