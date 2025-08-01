import React, { ReactNode, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
function Dialog({
  children,
  id,
  isOpen,
  cleanup,
  closeByAny,
  className,
}: {
  children: ReactNode;
  id: string;
  isOpen: boolean;
  cleanup: (shouldDelete?: "always" | "ifNew" | "never") => void;
  closeByAny: boolean;
  className?: string | undefined;
}) {
  function handleClose(e: MouseEvent) {
    if (e.target !== ref.current) return;
    cleanup("ifNew");
  }
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!closeByAny) return;
    document.body.addEventListener("click", handleClose);
    return () => {
      document.body.removeEventListener("click", handleClose);
    };
  });
  useEffect(
    () => (isOpen ? ref.current?.showModal() : ref.current?.close()),
    [isOpen, ref]
  );

  return (
    <dialog
      id={id}
      ref={ref}
      autoFocus
      onCancel={() => cleanup("ifNew")}
      className={twMerge("m-auto shadow-xl", className)}
    >
      {isOpen && children}
    </dialog>
  );
}

export default Dialog;
