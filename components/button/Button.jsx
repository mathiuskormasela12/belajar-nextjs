// ========== Button
// import all modules
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/button.module.css';

export function Button(props) {
  const { children, ...rest } = props;
  return (
    <button
      className={styles.btn}
      type="submit"
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
