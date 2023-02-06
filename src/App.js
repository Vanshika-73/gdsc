import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import SignUp from './components/signUp/SignUp';
import SignUpRes from './components/signUp/SignUpRes';
import SignUpVol from './components/signUp/SignUpVol';
import signIn from  './components/signUp/SignIn'
// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute  path="/signup" component={SignUp} layout={LayoutDefault} />
          <AppRoute  path="/restaurant/signupres" component={SignUpRes} layout={LayoutDefault} />
          <AppRoute  path="/volunteer/signupvol" component={SignUpVol} layout={LayoutDefault} />
          <AppRoute  path="/restaurant/signin" component={signIn} layout={LayoutDefault} />
          <AppRoute  path="/volunteer/signin" component={signIn} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;