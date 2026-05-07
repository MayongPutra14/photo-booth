import Logo from "../components/Logo";
import { ButtonNext } from "../components/Button";
import { ImArrowRight2 } from "react-icons/im";
import { Illustration } from "../components/Illustration";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <section className="relative flex flex-1 flex-col items-center border-amber-100 bg-zinc-200 pt-16 md:pt-20">
      <Logo />
      <ButtonNext
        label={"Mulai"}
        icon={ImArrowRight2}
        iconPosition="right"
        onClick={() => navigate("/template")}
        className="z-50 mx-auto flex min-w-40 items-center justify-center gap-5 rounded-full bg-white py-2 pr-2 pl-4 text-zinc-950 shadow-md transition-all hover:bg-zinc-100 active:scale-95 md:min-w-30 md:justify-center"
      />
      <Illustration />
    </section>
  );
};

export default HomePage;
