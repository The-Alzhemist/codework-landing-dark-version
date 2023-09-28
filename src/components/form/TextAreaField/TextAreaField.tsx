
import { Controller } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { withTextAreaField } from './withTextAreaField'
import { TextAreaFieldProps } from './interface'


const TextAreaField = ({
  name,
  control,
  rules,
  disabled,
  label,
  className,
  inputClassName,
  placeholder,
  required = false,
  maxLength,
  rows
}: TextAreaFieldProps) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    defaultValue=''
    render={({ field, fieldState: { error } }) => (
      <div className={twMerge('w-full', className)}>
        <div className='relative flex-wrap w-full items-stretch'>
          {label &&  (
            <label className="flex">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          )} 
          
          <div className='relative'>
            <textarea
              {...field}
              value={field.value ?? ''}
              className={`bg-zinc-600 border-zinc-500
              appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline
              disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed 
              placeholder-gray-400  placeholder:text-md
                ${error && 'border-red-500 border'}
                ${inputClassName}
              `}
              disabled={disabled}
              placeholder={placeholder}
              maxLength={maxLength}
              rows={rows}
              onChange={event => {
                field.onChange(event.target.value)
              }}
              
            />
          </div>

          {error && (
            <div className='mt-[8px] text-xs text-red-500 top-full'>
              {error.message}
            </div>
          )}
        </div>
      </div>
    )}
  />
)

const WrappedComponent = withTextAreaField(TextAreaField)
export default WrappedComponent
