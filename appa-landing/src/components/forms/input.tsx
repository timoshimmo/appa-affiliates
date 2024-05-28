import cn from 'classnames';
import React, { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label?: string;
  name: string;
  error?: string;
  type?: string;
  shadow?: boolean;
  compulsory?: boolean;
  variant?: 'normal' | 'solid' | 'outline' | 'line' | 'box' | 'search';
  dimension?: 'small' | 'medium' | 'big';
}

const variantClasses = {
  normal:
    'bg-gray-100 border border-border-base rounded focus:shadow focus:bg-light focus:border-accent',
  solid:
    'bg-gray-100 border border-border-100 rounded focus:bg-light focus:border-accent',
  outline: 'border rounded focus:border-accent',
  line: 'ltr:pl-0 rtl:pr-0 border-b border-border-base rounded-none focus:border-accent',
  box: 'bg-[#FFFFFF] border border-[#EF7822] focus:bg-light focus:border-accent',
  search: 'bg-gray-100 border border-border-100 rounded-l-sm rounded-r-0 focus:bg-light focus:border-accent'
};

const sizeClasses = {
  small: 'text-sm h-9',
  medium: 'h-12',
  big: 'h-14',
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      label,
      name,
      placeholder,
      error,
      children,
      variant = 'normal',
      dimension = 'medium',
      shadow = false,
      compulsory = false,
      disabled = false,
      type = 'text',
      inputClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={name}
            className="block mb-3 text-sm font-semibold leading-none text-left"
          >
            {label}{compulsory && <span className="text-sm text-[#EA0E0E]">*</span>}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          ref={ref}
          className={cn(
            'flex py-3 px-4 w-full appearance-none border-[#CED4DA] bg-[#FFFFFF] items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-none focus:ring-0',
            shadow && 'focus:shadow', 
            variantClasses[variant],
            sizeClasses[dimension],
            disabled && 'cursor-not-allowed bg-gray-100',
            inputClassName
          )}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          aria-invalid={error ? 'true' : 'false'}
          {...rest}
        />
        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';
export default Input;
