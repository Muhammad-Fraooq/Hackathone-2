// "use client";
import React from "react";

interface ButtonProps {
  label: string;
  // onClick: () => void;
  className?: string; // Allow passing custom styles
}

const Button: React.FC<ButtonProps> = ({ label, className }) => {
  return (
    <button
      // onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium transition ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
