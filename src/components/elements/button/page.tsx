import React, { ReactNode } from "react";

// Definisikan tipe props yang mencakup `children`
type ButtonProps = {
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="w-24 hover:bg-blue-700 bg-red-600 font-bold px-4 rounded">
      {children}
    </button>
  );
};

export default Button;
