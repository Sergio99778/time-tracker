import React from "react";

import "./NeutralButton.css";

interface NeutralButtonProps {
  onClick: () => void;
  label: string;
}

export const NeutralButton: React.FC<NeutralButtonProps> = ({
  onClick,
  label,
}) => {
  return (
    <button className="neutral_button" onClick={onClick}>
      {label}
    </button>
  );
};
