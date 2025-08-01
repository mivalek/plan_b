import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
function Button({
  type,
  onClick,
  className,
  children,
}: {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string | undefined;
  children: ReactNode;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(
        "flex gap-0.5 items-center content-center bg-sky-600 text-white rounded-4xl px-4 py-1 stroke-2 stroke-white cursor-pointer",
        className
      )}
    >
      <div className="text-nowrap">{children}</div>
    </button>
  );
}

export default Button;
