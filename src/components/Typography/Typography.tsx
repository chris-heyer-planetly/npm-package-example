import React from 'react';

interface TypographyProps {
    type: 'title' | 'body';
}

export const Typography: React.FC<TypographyProps> = ({ type, children }) => {
    if (type === 'title') {
        return <h1>{children}</h1>
    }

    return <p>{children}</p>
}