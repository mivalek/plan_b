import React from "react";

function DeleteButton({
  deleteFunction,
  className,
}: {
  deleteFunction: () => void;
  className?: string | undefined;
}) {
  return (
    <button
      type="reset"
      onClick={deleteFunction}
      className={
        "flex gap-0.5 items-center content-center bg-red-800 text-white rounded-md px-2 py-1 stroke-2 stroke-white cursor-pointer " +
        className
      }
    >
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M10 11v6" />
        <path d="M14 11v6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
        <path d="M3 6h18" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg> */}
      <div>Delete</div>
    </button>
  );
}

export default DeleteButton;
