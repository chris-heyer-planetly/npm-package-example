import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = true,
  label,
  ...props
}: ButtonProps) => (
  <button
    type="button"
    style={{
      fontFamily: "Arial, sans-serif",
      fontWeight: 700,
      border: 0,
      borderRadius: "3em",
      cursor: 'pointer',
      display: 'inline-block',
      fontSize: '14px',
      padding: '11px 20px',
      color: primary ? 'white' : '#333',
      backgroundColor: primary ? '#1ea7fd' : 'transparent',
    }}
    {...props}
  >
    {label}
  </button>
);
