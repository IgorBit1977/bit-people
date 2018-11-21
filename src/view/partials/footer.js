
import React from 'react';
import './footer.css';
import PropTypes from 'prop-types';
const Footer = ({ footerText }) => {
    return (
        <div className="footer">
            <p>{footerText}</p>
        </div>
    );
}

Footer.propTypes = {
    footerText: PropTypes.string
}
Footer.defaultProps = {
    footerText: "2018 Copyright Bit-student"
}
export { Footer };