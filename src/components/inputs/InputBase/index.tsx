import { InputHTMLAttributes, ReactNode } from "react";

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
}

function InputBase(props: InputBaseProps) {
  const { label, icon, id } = props;
  const baseStyles = `block w-full ${
    icon ? "pl-10" : "pl-3"
  } pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-950 focus:border-red-950`;
  return (
    <div className="relative flex flex-col gap-1">
      <div className="absolute inset-y-0 top-5 left-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <label htmlFor={id} className="text-sm font-semibold text-gray-500">
        {label}
      </label>
      <input id={id} {...props} className={baseStyles} />
    </div>
  );
}

export default InputBase;
