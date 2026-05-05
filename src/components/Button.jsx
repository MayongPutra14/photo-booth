const Button = ({
  label,
  onClick,
  type = "button",
  icon: Icon,
  iconPosition = "right",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`active:scale-95" ${iconPosition === "left" ? "flex-row-reverse pr-3" : "flex-row"} mx-auto flex min-w-40 items-center justify-center gap-5 rounded-full bg-white py-2 pr-2 pl-4 text-zinc-950 shadow-md transition-all hover:bg-zinc-100 active:scale-95 md:min-w-30 md:justify-center z-50`}
    >
      <span className="text-2xl font-medium md:pl-3.5 md:text-3xl">
        {label}
      </span>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-2xl text-white md:p-2 md:text-4xl">
        <Icon />
      </div>
    </button>
  );
};

export default Button;
