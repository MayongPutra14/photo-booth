import {
  IconPencil,
  IconSparksV1,
  CurlyArrow,
  IconSparksV2,
} from "../assets/decorations/Decorations";

export const Pencil = ({ className }) => {
  return (
    <IconPencil
      className={`absolute ${className}`}
    />
  );
};

export const HomeSparks = ({ className }) => {
  return (
    <IconSparksV1
      className={`pointer-events-none absolute ${className}`}
    />
  );
};

export const IconCurlyArrow = () => {
  return (
    <CurlyArrow className="absolute -right-10 -bottom-38 z-10 w-20" />
  );
};

export const LayoutSpark = () => {
  return <IconSparksV2 className="w-12" />;
};
