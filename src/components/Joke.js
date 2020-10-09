import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Joke = ({ setup, punchline }) => {
	return (
		<Fragment>
			<p className='setup'>{setup}</p>
			<p className='punchline'>{punchline}</p>
		</Fragment>
	);
};

Joke.propTypes = {
	setup: PropTypes.string.isRequired,
	punchline: PropTypes.string.isRequired,
};

export default Joke;
