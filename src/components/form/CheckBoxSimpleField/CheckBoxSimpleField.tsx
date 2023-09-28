import React from "react";
import { Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { CheckBoxFieldProps } from "./interface";

const CheckBoxSimpleField = ({
  control,
  name,
  rules,
  label,
  className,
  labelClassName,
  checked,
  disabled,
  inputClassName,
}: CheckBoxFieldProps) => (
  <Controller
    control={control}
    rules={rules}
    name={name}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <div className="flex flex-col">
        <div className={twMerge("flex flex-wrap  items-center", className)}>
          <input
            type="checkbox"
            checked={value || checked || false} 
            onChange={(e) => {
              onChange(e.target.checked); 
            }}
            disabled={disabled}
            className={twMerge(
              `${
                error &&
                "h-[13px] w-[13px] rounded-sm appearance-none border border-red-500"
              } mx-2 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed`,
              inputClassName
            )}
          />
          {label && <span className={labelClassName}>{label}</span>}
        </div>
        {error && (
          <div className="mt-[8px] text-xs text-red-500 top-full">
            {error.message}
          </div>
        )}
      </div>
    )}
  />
);

export default CheckBoxSimpleField;
