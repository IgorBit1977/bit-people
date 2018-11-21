
import React from 'react';

const Footer = (props) => {
    return (
        <div className="footer">
            <p>{props.footerText}</p>
        </div>
    );
}

export { Footer };