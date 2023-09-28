import { Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { FileUploadFieldProps } from "./interface";

const FileUploadField = ({
  name,
  control,
  rules,
  disabled,
  label,
  className,
  inputClassName,
  required = false,
}: FileUploadFieldProps) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    defaultValue={null}
    render={({ field, fieldState: { error } }) => (
      <>
        <div className={twMerge("relative flex flex-col", className)}>
          {label && (
            <label className="flex">
              {label} {required && <span className="text-red-500">*</span>}
            </label>
          )}
          <input
            type="file"
            name={field.name}
            className={twMerge(`file:mr-4 file:py-2 file:px-4 border-dashed border-2 p-2 rounded-md file:rounded-md file:border-0 file:text-sm file:font-semibold  ${disabled ? 'file:bg-secondary-500' : 'file:bg-secondary-900'} file:text-white hover:cursor-pointer  disabled:text-gray-500 disabled:cursor-not-allowed $ ${
              error && "border-red-500 border"
            }`, inputClassName)}
            disabled={disabled}
            onChange={(e) => field.onChange(e.target.files?.[0])}
          />
          {error && (
            <div className="mt-[8px] text-xs text-red-500 top-full">
              {error.message}
            </div>
          )}
        </div>
      </>
    )}
  />
);

export default FileUploadField;
