import Logo from "../components/Logo";
import Button from "../components/Button";
import { ImArrowRight2 } from "react-icons/im";
import { Illustration } from "../components/Illustration";

const HomePage = () => {
  return (
    <section className="relative flex flex-1 flex-col items-center border-amber-100 bg-zinc-200 pt-16 md:pt-20">
      <Logo />
      <Button
        label={"Mulai"}
        icon={ImArrowRight2}
        iconPosition="right"
      />
      <Illustration />
    </section>
  );
};

export default HomePage;
