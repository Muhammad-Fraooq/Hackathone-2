// "use client";
import React from "react";

interface ButtonProps {
  label: string;
  // onClick: () => void;
  className?: string; // Allow passing custom styles
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <div className="flex justify-center mt-8">
      <button className="px-8 py-3 text-base bg-white text-yellow-500 border-2 border-yellow-500 font-medium rounded-md hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out shadow-md">
        {label}
      </button>
    </div>
  );
};

export default Button;
