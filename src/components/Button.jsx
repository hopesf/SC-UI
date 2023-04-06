import React from 'react';

const Button = ({ onClick, name, disabled, className }) => {
    return <button onClick={onClick} disabled={disabled} className={className}>{name}</button>;
};

export default Button;