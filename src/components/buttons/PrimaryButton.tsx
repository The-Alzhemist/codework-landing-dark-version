import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pathName: string;
  id?: string;
}

export const PrimaryButton: React.FC<CustomButtonProps> = ({ pathName, className, children, id,  ...props }) => {
  const style = twMerge(`py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-primary hover:bg-primary-800 hover:text-primary-100 hover:border-primary-100 hover:shadow-md cursor-pointer rounded-full border-2 border-primary transition-all duration-100 east-out lg:hover:scale-125 shadow-xl shadow-primary-50/10`, className);

  if (pathName === "") {
    return (
      <button id={id} className={style} {...props}>
        <span>{children}</span>
      </button>
    );
  }

  return (
    <Link href={pathName}>
      <button id={id} className={style}>
        <span>{children}</span>
      </button>
    </Link>
  );
};
