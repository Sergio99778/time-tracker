import React from "react";
import "./WarningButton.css";

interface WarningButtonProps {
  onClick: () => void;
  label: string;
}

export const WarningButton: React.FC<WarningButtonProps> = ({
  onClick,
  label,
}) => {
  return (
    <button className="warning-button" onClick={onClick}>
      {label}
    </button>
  );
};
