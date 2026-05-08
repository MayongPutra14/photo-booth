import { useState } from "react";
import { ButtonNext } from "../components/Button";
import {
  ImArrowLeft2,
  ImArrowRight2,
} from "react-icons/im";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import PaymentPopup from "../components/PaymentPopup";

const allframes = import.meta.glob(
  "../assets/frames/**/*.{png,jpg,jpeg,svg}",
  {
    eager: true,
    import: "default",
  },
);

const TemplateFrame = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedLayout = location.state?.layout;

  const [chosenFrame, setChosenFrame] =
    useState(null);
  const [showPayment, setShowPayment] =
    useState(false);

  const handleSelectedFrame = (src) => {
    setChosenFrame(src);
    setShowPayment(true);
  };

  const handleClosePopup = () => {
    setShowPayment(false);
    setChosenFrame(null);
  };

  const filteredFrames = selectedLayout
    ? Object.entries(allframes)
        .filter(([path]) =>
          path
            .toLowerCase()
            .includes(
              `${selectedLayout.slug.toLowerCase()}`,
            ),
        )
        .map(([_, imageSrc]) => imageSrc)
    : [];

  if (!selectedLayout) {
    return (
      <div className="flex flex-col items-center p-10">
        <h1 className="mb-4 text-xl">
          Ups! Kamu belum memilih layout.
        </h1>
        <ButtonNext
          label="Kembali"
          icon={ImArrowLeft2}
          iconPosition="left"
          onClick={() => navigate("/template")}
          className="pr-4 pl-2"
        />
      </div>
    );
  }

  return (
    <section className="relative flex flex-1 flex-col items-center bg-zinc-900 pt-4 md:pt-8">
      <h1 className="mb-10 text-5xl font-medium text-white">
        Pilih Frame
      </h1>

      {/* DISPLAY FRAME */}
      <div className="flex w-[95%] flex-wrap justify-center gap-8">
        {filteredFrames.map((src, index) => (
          <div
            key={`${src}-${index}`}
            onClick={() =>
              handleSelectedFrame(src)
            }
            className={`group cursor-pointer transition-al`}
          >
            <img
              src={src}
              alt={`Frame ${index}`}
              className="mx-auto object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {showPayment && (
        <PaymentPopup
          onClose={handleClosePopup}
          selectedFrame={chosenFrame}
        />
      )}

      <div className="fixed right-0 bottom-8 left-0 flex items-center justify-between gap-32">
        {/* BUTTON BACK */}
        <ButtonNext
          label="Kembali"
          icon={ImArrowLeft2}
          iconPosition="left"
          onClick={() => navigate("/template")}
          className="bg-white pr-4 pl-2 text-zinc-900"
          iconContainerClassName="bg-zinc-900 text-white"
        />
        {/* BUTTON NEXT */}
        <ButtonNext
          label="Lanjut"
          icon={ImArrowRight2}
          iconPosition="right"
          className="bg-white pr-2 pl-4 text-zinc-900"
          iconContainerClassName="bg-zinc-900 text-white"
        />
      </div>
    </section>
  );
};

export default TemplateFrame;
