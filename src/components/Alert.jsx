import React from 'react';

const Alert = ({ message, type }) => {
    const classNames = `alert ${type}`;
    return <div className={classNames}>{message}</div>;
};

export default Alert;