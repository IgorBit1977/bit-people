import React from 'react';
import './header.css';
import PropTypes from 'prop-types';
const Header = ({ appTitle }) => {
    return (
        <div className="header">
            <h1>{appTitle}</h1>
        </div>
    );
}

Header.propTypes = {
    appTitle: PropTypes.string
}
Header.defaultProps = {
    appTitle: 'React Users App Default'
}
export { Header };