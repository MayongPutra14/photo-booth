import { useState } from "react";
import LayoutCarausel from "../components/LayoutCarousel";
import { BallonAirIllustration } from "../components/Illustration";
import { ButtonNext } from "../components/Button";
import { useNavigate } from "react-router-dom";
import {
  LayoutSpark,
  Pencil,
} from "../components/Icon";
import {
  ImArrowRight2,
  ImArrowLeft2,
} from "react-icons/im";

const TemplateLayoutPage = () => {
  const navigate = useNavigate();
  const [selectedLayout, setSelectedLayout] =
    useState(null);

  const handleNextPage = () => {
    if (selectedLayout) {
      navigate("/frame", {
        state: { layout: selectedLayout },
      });
    } else {
      alert(
        "Silahkan pilih layout terlebih dahulu!",
      );
    }
  };

  return (
    <section className="items-center relative flex flex-1 flex-col bg-zinc-200 pt-4 md:pt-8">
      {/* HEADER SECTION */}
      <div className="relative w-[80%] text-center">
        <Pencil className="abosolute -top-2 -left-10 w-24 md:-left-20 md:w-30" />
        <h1 className="text-5xl font-medium md:text-6xl">
          Pilih Layout
        </h1>
        <div className="mt-8 flex h-28 items-center justify-around">
          <LayoutSpark />
          <BallonAirIllustration />
        </div>
      </div>

      {/* CAROUSEL SECTION */}
      <div className="mb-12 w-full max-w-2xl">
        <LayoutCarausel
          onSelectedLayout={(layout) =>
            setSelectedLayout(layout)
          }
        />
      </div>

      {/* BUTTON BACK*/}
      <div className="flex items-center justify-between gap-32">
        <ButtonNext
          label={"Kembali"}
          icon={ImArrowLeft2}
          onClick={() => navigate("/")}
          iconPosition="left"
          className="bg-zinc-900 pr-4 pl-2 text-white"
          iconContainerClassName="bg-white text-zinc-900"
        />

      {/* BUTTON NEXT */}
        <ButtonNext
          label={"Lanjut"}
          onClick={handleNextPage}
          icon={ImArrowRight2}
          iconPosition="right"
          className="bg-zinc-900 pr-2 pl-4 text-white"
          iconContainerClassName="bg-white text-zinc-900"
        />
      </div>
    </section>
  );
};

export default TemplateLayoutPage;
