import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Title from '../components/Title';
import HomePage from '../components/HomePage';
import Welcome from '../components/Welcome';
import Account from '../components/Account';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const RouteContainer = ({ }) => {
  return (
    <div>
      <Route path='/' component={HomePage} exact={true}/>
      <Route path='/login' component={LoginPage} />
      <Route path='/signup' component={SignUpPage} />
      <Route path='/welcome' component={Welcome} />
      <Route path='/account' component={Account} />


      {/* <Route component={EnsureLoggedInContainer}>
        <Route path='/welcome' component={Welcome} />
        <Route path='/account' component={Account} />
      </Route> */}
    </div>

  )
}

const AppContainer = ({ name }) => {

  return (
    <BrowserRouter>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <RouteContainer />
      </MuiThemeProvider>
    </BrowserRouter>
  );
};


// Future implementation
//
// class App extends React.Component {
//
//   componentDidUpdate(prevProps) {
//     const { dispatch, redirectUrl } = this.props
//     const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn
//     const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn
//
//     if (isLoggingIn) {
//       dispatch(navigateTo(redirectUrl))
//     } else if (isLoggingOut) {
//       // do any kind of cleanup or post-logout redirection here
//     }
//   }
//
//   render() {
//     return this.props.children
//   }
// }

//
{/* <Route path="/temp" render={() => <div>yoyoyo</div>}/>
<Route path="/:ta" render={() => <div>matched</div>}/>
<Route path="/ect" component={Z}/> */}

// exact={true} for root path only
// path="/:ta" displays for children of ta as well
// render take out

// const Z = () => {
//   return (
//     <div>
//       <Link to="/click">Click</Link>
//       <Route path="/click" component={Z} />
//     </div>
//   )
// }


AppContainer.propTypes = {
  name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name,
        errors: state.errors,
        user: state.user,
        children: state.children
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
