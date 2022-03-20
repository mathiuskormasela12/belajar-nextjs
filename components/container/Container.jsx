// ========== Container
// import all modules
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export function Container(props) {
  const { children } = props;

  return (
    <Fragment>
      <style scoped jsx>
        {`
				.container {
					width: 90%;
					margin: 0 auto;
				}
			`}
      </style>
      <div className="container">
        {children}
      </div>
    </Fragment>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
