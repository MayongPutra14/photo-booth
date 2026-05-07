export const ButtonNext = ({
  label,
  onClick,
  type = "button",
  icon: Icon,
  iconPosition = "right",
  className = "",
  iconContainerClassName = "text-white bg-zinc-900",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${iconPosition === "left" ? "flex-row-reverse pr-3" : "flex-row"} z-50 mx-auto flex min-w-40 items-center justify-center gap-5 rounded-full py-2 shadow-md transition-all active:scale-95 md:min-w-30 md:justify-center ${className}`}
    >
      <span className="text-2xl font-medium md:pl-3.5 md:text-3xl">
        {label}
      </span>
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-2xl md:p-2 md:text-4xl ${iconContainerClassName}`}
      >
        <Icon />
      </div>
    </button>
  );
};

export const ButtonSlide = ({
  onClick,
  type = "button",
  icon: Icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center`}
    >
      <div className="rounded-full bg-white shadow-md">
        {Icon && <Icon className="text-5xl" />}
      </div>
    </button>
  );
};
