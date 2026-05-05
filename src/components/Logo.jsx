import logo from "../assets/images/business-logo.jpg";
import {
  Pencil,
  HomeSparks,
  IconCurlyArrow,
} from "./Icon";
const Logo = () => {
  return (
    <div className="relative mb-10 w-[80%] max-w-100">
      <HomeSparks className="-top-16 -right-10 z-10 w-16" />
      <img
        src={logo}
        alt="Logo HARAZA photo booth"
        className="relative z-50 rounded-xl shadow-md"
      />
      <Pencil />
      <HomeSparks className="-bottom-20 -left-8 z-10 w-16" />
      <IconCurlyArrow />
    </div>
  );
};

export default Logo;
