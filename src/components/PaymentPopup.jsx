import { ButtonNext } from "./Button";
import QRIS from "../assets/images/photo-booth-qris.jpeg";
import { FaCircleExclamation as Exclamations } from "react-icons/fa6";
import { ImArrowLeft2 } from "react-icons/im";
import { useEffect, useState } from "react";

const PaymentPopup = ({
  onClose,
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 10);
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setAnimate(false);

    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <section
      className={`fixed inset-0 z-50 flex flex-1 flex-col items-center justify-center bg-zinc-900/75 pt-4 backdrop-blur-sm transition-opacity duration-500 ${animate ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} md:pt-8`}
    >
      <div
        className={`flex transform flex-col items-center gap-8 transition-all duration-500 ${animate ? "translate-y-0 scale-100" : "translate-y-20 scale-95"}`}
      >
        <div className="flex max-w-80 items-start justify-start gap-2 rounded-2xl bg-green-400 px-4 py-2.5">
          <Exclamations className="text-5xl text-white" />
          <p className="text-white">
            Untuk melanjutkan silahkan melakukan
            pembayaran dengan scan QRIS dibawah
            ini.
          </p>
        </div>
        <img
          src={QRIS}
          alt="Scan Haraza Qris"
          className="max-h-100 max-w-75 rounded-2xl"
        />
        <ButtonNext
          label="Batalkan"
          icon={ImArrowLeft2}
          iconPosition="left"
          onClick={handleClose}
          className="bg-white pr-4 pl-2 text-zinc-900"
          iconContainerClassName="bg-zinc-900 text-white"
        />
      </div>
    </section>
  );
};

export default PaymentPopup;
