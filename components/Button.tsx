import { ReactNode } from "react";

export default function Button(props: {children: ReactNode, disabled?: boolean, icon?: ReactNode}) {
  return (
    <button
      disabled={props.disabled}
      className={`${props.disabled ? "bg-gray-300 cursor-not-allowed" : "bg-teal-400 hover:bg-teal-500 active:bg-teal-600"} p-2 px-8 text-zinc-100 rounded transition duration-100`}
    >
      {props.icon}
      {props.children}
    </button>
  );
}