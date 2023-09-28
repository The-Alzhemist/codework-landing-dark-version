import { Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { withInputField } from "./withInputField";
import { InputFieldProps } from "./interface";

const InputField = ({
  name,
  control,
  rules,
  disabled,
  type,
  label,
  className,
  inputClassName,
  placeholder,
  required = false,
  maxLength,
  suffixIcon = false,
}: InputFieldProps) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    defaultValue=""
    render={({ field, fieldState: { error } }) => (
      <div className={twMerge("w-full", className)}>
        <div className="relative flex-wrap w-full items-stretch">
          {label && (
            <label className="flex">
              {label} {required && <span className="text-red-500">*</span>}
            </label>
          )}
          <div className="relative">
            <input
              {...field}
              value={field.value ?? ""}
              className={`bg-zinc-600 border-zinc-500 text-white
              appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline
              disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed 
              placeholder-gray-400  placeholder:text-md
                ${error && "border-red-500 border"}
                ${suffixIcon && "pr-[36px]"}
                ${inputClassName}
              `}
              disabled={disabled}
              type={type}
              placeholder={placeholder}
              maxLength={maxLength}
              onChange={(event) => {
                if (type === "number" && event.target.value) {
                  field.onChange(parseInt(event.target.value, 10));
                  return;
                }
                field.onChange(event.target.value);
              }}
            />

            {suffixIcon && (
              <div className="disabled:text-gray-500 absolute top-2 right-3 h-[38px]">
                {suffixIcon}
              </div>
            )}
          </div>
          {error && (
            <div className="mt-[8px] text-xs text-red-500 top-full">
              {error.message}
            </div>
          )}
        </div>
      </div>
    )}
  />
);

const WrappedComponent = withInputField(InputField);
export default WrappedComponent;
