import React, { ReactEventHandler } from "react";

type PropsButton = {
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  colored?: boolean;
  title: string;
  size?: "small" | "normal" | "large";
  onClick?: ReactEventHandler;
  className?: string;
};

const Button: React.FC<PropsButton> = ({
  type = "button",
  disabled = false,
  colored = true,
  title,
  size = "normal",
  className = "",
  onClick,
}) => {
  const sizeClasses = {
    small: "text-xs py-2 px-4",
    normal: "text-sm py-3 px-6",
    large: "text-lg py-4 px-8",
  };

  return (
    <button
      className={`${
        colored
          ? "font-semibold text-white bg-[linear-gradient(180deg,_#5690FF_0%,_#3271E6_100%)]"
          : "text-textMain border border-[#C1C9E0] hover:bg-[#F5F7FB]"
      } rounded-lg ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
