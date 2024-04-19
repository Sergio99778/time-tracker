import React from 'react';

interface TimerButtonProps {
    onClick: () => void;
    label: string;
}

export const TimerButton: React.FC<TimerButtonProps> = ({ onClick, label }) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
};
