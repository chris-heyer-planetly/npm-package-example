import React from 'react';

export interface TypographyProps {
    type: 'title' | 'body';
}

export const Typography: React.FC<TypographyProps> = ({ type, children }) => {
    if (type === 'title') {
        return <h1 style={{ fontFamily: "Arial, sans-serif" }}>{children}</h1>
    }

    return <p style={{ fontFamily: "Arial, sans-serif" }}>{children}</p>
}