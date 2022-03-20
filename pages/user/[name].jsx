// ========== User Detail
// import all modules
import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setData } from '../../redux/action/data';
import { setBoolean } from '../../redux/action/boolean';

import { Container, Button } from '../../components';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'User Detail',
    };

    this.handleSetData = this.handleSetData.bind(this);
    this.handleSetBoolean = this.handleSetBoolean.bind(this);
  }

  handleSetData() {
    const { setData: setData2 } = this.props;

    setData2();
  }

  handleSetBoolean() {
    const { setBoolean: setBoolean2 } = this.props;

    setBoolean2();
  }

  render() {
    const { title } = this.state;
    const { data: { value }, boolean: { value: val } } = this.props;
    // mengambil req.params atau req.query
    const { router: { query: { name } } } = this.props;

    return (
      <Fragment>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          {val && <h1>User Detail</h1>}
          <Button onClick={this.handleSetData}>
            Click Me
          </Button>
          {value && (
          <p onClick={this.handleSetBoolean} aria-hidden>
            Nama saya
            {' '}
            {name}
          </p>
          )}
        </Container>
      </Fragment>
    );
  }
}

User.propTypes = {
  router: PropTypes.shape().isRequired,
  setData: PropTypes.func.isRequired,
  setBoolean: PropTypes.func.isRequired,
  data: PropTypes.shape(),
  boolean: PropTypes.shape(),
};

User.defaultProps = {
  data: {
    value: null,
  },
  boolean: {
    value: null,
  },
};

const mapStateToProps = (states) => ({
  ...states,
});

const mapDispatchToProps = {
  setData,
  setBoolean,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
