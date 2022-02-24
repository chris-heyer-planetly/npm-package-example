import React from "react";

export interface ButtonProps {
  primary?: boolean;
  label: string;
  onClick?: () => void;
  href?: string;
}

export const Button = ({
  primary = true,
  href,
  label,
  ...props
}: ButtonProps) => {
  const style = {
    fontFamily: "Arial, sans-serif",
    fontWeight: 700,
    border: 0,
    borderRadius: "3em",
    cursor: "pointer",
    display: "inline-block",
    fontSize: "14px",
    padding: "11px 20px",
    color: primary ? "white" : "#333",
    backgroundColor: primary ? "#1ea7fd" : "transparent",
  };

  if (href) {
    return (
      <a style={style} href={href}>
        {label}
      </a>
    );
  }

  return (
    <button type="button" style={style} {...props}>
      {label}
    </button>
  );
};
