import React, { TextareaHTMLAttributes } from "react";

interface TextareaBaseProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

function TextareaBase(props: TextareaBaseProps) {
  const { children, rows = 7, id, label } = props;
  const baseStyles = `block w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-950 focus:border-red-950`;
  return (
    <div className="flex gap-1 flex-col w-full">
      <label htmlFor={id} className="text-sm font-semibold text-gray-500">
        {label}
      </label>
      <textarea id={id} rows={rows} {...props} className={baseStyles}>
        {children}
      </textarea>
    </div>
  );
}

export default TextareaBase;
