import React from "react";
import "./PositiveButton.css";

interface PositiveButtonProps {
  onClick: () => void;
  label: string;
}

export const PositiveButton: React.FC<PositiveButtonProps> = ({
  onClick,
  label,
}) => {
  return (
    <button className="positive_button" onClick={onClick}>
      {label}
    </button>
  );
};
