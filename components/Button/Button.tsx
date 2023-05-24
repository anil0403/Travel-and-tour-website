import React from "react";

interface ButtonProps {
  label: string;
}
const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className="py-1 px-2 rounded-lg bg-sky-500">{}</button>;
};

export default Button;
