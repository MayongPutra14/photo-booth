import {
  IconPencil,
  IconSparksV1,
  CurlyArrow,
} from "../assets/decorations/Decorations";

export const Pencil = () => {
  return (
    <IconPencil className="absolute -top-36 -left-10 w-40" />
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
  return(
    <CurlyArrow className="absolute z-10 -bottom-38 -right-10 w-20"/>
  )
}