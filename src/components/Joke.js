import React from 'react'
import PropTypes from 'prop-types';

const Joke = ({setup, punchline}) => {
    return (
        <div>
            <p className="setup">{setup}</p>
            <p className="punchline">{punchline}</p>
        </div>
    )
}

Joke.propTypes = {
    setup: PropTypes.string.isRequired,
    punchline: PropTypes.string.isRequired
}

export default Joke;
