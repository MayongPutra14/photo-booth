import { ButtonCamera } from "../components/Button";
import Webcam from "react-webcam";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

const CameraPage = () => {
  const location = useLocation();
  const _navigate = useNavigate();
  const selectedFrame = location.state?.frame;
  const webcamRef = useRef(null);
  const MAX_PHOTO = 3;

  const [photos, setPhotos] = useState([]);
  const [countDown, setCountDown] = useState(3);
  const [isTimerRunning, setIsTimerRunning] =
    useState(false);
  const [isCaptured, setIsCaptured] =
    useState(false);

  // START CAPTURE
  const startCapture = () => {
    if (isTimerRunning) return;
    if (photos.length >= MAX_PHOTO) return;

    setCountDown(3);
    setIsTimerRunning(true);
  };

  // TAKE PHOTO
  const takePhoto = useCallback(() => {
    if (!webcamRef.current) return;
    const imageSrc =
      webcamRef.current.getScreenshot();

    if (!imageSrc) return;

    setPhotos((prev) => {
      const updatedPhotos = [...prev, imageSrc];

      console.log(
        `Foto ke-${updatedPhotos.length} berhasil diambil`,
      );
      setIsTimerRunning(false);

      if (updatedPhotos.length >= MAX_PHOTO) {
        setIsCaptured(true);
      }
      return updatedPhotos;
    });
  }, []);

  // COUTDOWN LOGIC
  useEffect(() => {
    if (!isTimerRunning) return;

    if (countDown > 0) {
      const timer = setTimeout(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }

    takePhoto();
  }, [countDown, isTimerRunning, takePhoto]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-zinc-900 p-4">
      {/* PREVIEW PHOTO */}
      <div className="my-6 flex gap-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`capture-${index}`}
            className="w-32 rounded-lg"
          />
        ))}
      </div>
      {/* CAMERA CONTAINER */}
      <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl border-8 border-white bg-black shadow-2xl">
        {/* VIDEO CAMERA */}
        <Webcam
          ref={webcamRef}
          audio={false}
          mirrored={true}
          screenshotFormat="image/png"
          className="h-full w-full object-cover"
          videoConstraints={{
            facingMode: "user",
            width: 1280,
            height: 720,
          }}
        />
        {/* COUNTDOWN VISUAL */}
        {isTimerRunning && countDown > 0 && (
          <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center bg-black/20">
            <h1 className="animate-pulse text-[10rem] font-black text-white drop-shadow-2xl">
              {countDown}
            </h1>
          </div>
        )}
        {/* FLASH EFFECT */}
        {isCaptured && (
          <div className="animate-flash pointer-events-none absolute inset-0 z-40 bg-white" />
        )}
        {/* OVERLAY FRAME */}
        {/* {selectedFrame && (
          <img
            src={selectedFrame}
            alt="Frame"
            className="pointer-events-none absolute inset-0 z-20 h-full w-full object-contain"
          />
        )} */}
        {/* PHOTO COUNTER */}
        <div className="absolute top-4 left-4 z-50 rounded-full bg-black/60 px-4 py-2 text-sm font-bold text-white backdrop-blur">
          {photos.length} / {MAX_PHOTO}
        </div>
      </div>{" "}
      {/* END OF CAMERA CONTAINER */}
      {/* TEXT INFO */}
      <div className="mt-4 text-center text-white">
        <h2 className="text-2xl font-bold tracking-tight">
          {isTimerRunning
            ? "Siap-siap!"
            : photos.length >= MAX_PHOTO
              ? "Selesai!"
              : "Tekan Tombol Kamera"}
        </h2>
        <p className="opacity-70">
          {photos.length >= MAX_PHOTO
            ? "Semua foto berhasil diambil"
            : "Pastikan wajah kamu berada di dalam frame"}
        </p>
      </div>
      {/* CAMERA BUTTON */}
      <ButtonCamera
        onClick={startCapture}
        disabled={isTimerRunning}
      />
    </div>
  );
};

export default CameraPage;
