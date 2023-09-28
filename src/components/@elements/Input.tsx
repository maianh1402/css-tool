import React from "react";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  error?: string;
  children?: React.ReactNode;
}

const InputRange = React.forwardRef<HTMLInputElement, IProps>(
  (
    { className, children, labelText, type = "range", error, ...props },
    ref
  ) => {
    return (
      <div className={className}>
        {labelText && <label className="font-normal">{labelText}</label>}
        <div className="relative">
          <div className="flex">{children}</div>
          <input
            id="txt"
            autoComplete="off"
            className={`cursor-pointer h-[5px] w-[100%]`}
            {...props}
            ref={ref}
            type={type}
          ></input>
        </div>
        {error && (
          <p className="text-red-600 text-right animate-shake">{error}</p>
        )}
      </div>
    );
  }
);

InputRange.displayName = "TextBox";
export default InputRange;
