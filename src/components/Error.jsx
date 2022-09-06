import React from 'react';
import PropTypes from 'prop-types';

export default function Error ({mensaje}) {
    return(
    <p className="red darken-4 error">{mensaje}</p>
    )
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}