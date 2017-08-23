import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';
import { Card, CardTitle } from 'material-ui/Card';

const HomePage = ( ) => {
    return (
        <div>
          <Card className="container">
            <CardTitle title="React Application" subtitle="This is the home page." />
            <Link exact={true} to='/signup'>Signup</Link><br />
            <Link exact={true} to='/login'>Go to Log In</Link><br />
            <Link exact={true} to='/account'>Account</Link><br />
            <Link exact={true} to='/welcome'>Welcome to App</Link><br />
          </Card>
        </div>
    );
};

HomePage.propTypes = {
  // name: PropTypes.string,
};


export default HomePage;
