// ========== User
// import all modules
import React, { Component, Fragment } from 'react';
import Head from 'next/head';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Home',
    };
  }

  render() {
    const { title } = this.state;

    return (
      <Fragment>
        <Head>
          <title>{title}</title>
        </Head>
        <div>
          <h1>Hello</h1>
        </div>
      </Fragment>
    );
  }
}

export default Users;
