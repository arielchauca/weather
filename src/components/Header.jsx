import React from 'react';
import PropTypes from 'prop-types';

export default function Header ({title}) {
    return(<nav>
        <div className="nav-wrapper light-blue darken-2">
            <a href="#!" className="brand-logo">{title}</a>
        </div>
    </nav>)
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}