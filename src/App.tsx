// Import utilities
import React, { useContext } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './utils/i18n';

// Import context
import { LangContext } from 'Context/Language';
import DashboardScreen from 'Pages/Dashboard';
import UserContextProvider from './Context/UserContext';

// Import pages
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Logout from './Pages/Logout';

// Import layout
import Navigation from './Layout/NavigationBar/Navigation';
import IdGenerationProvider from './Context/IdGeneration';
import PrivateRoute from './Context/PrivateRoute';
import Signature from './Pages/Signature';
import DisplayInvoice from './Pages/DisplayInvoice';
import GenerateInvoice from './Pages/GenerateInvoice';

function App() {
  const language = useContext(LangContext);

  const changeLang = (lang: 'en' | 'es') => {
    language.setLanguage(lang);
  };

  return (
    <>
      <UserContextProvider>
        <IdGenerationProvider>
          <HashRouter basename={process.env.PUBLIC_URL}>
            <Navigation changeLang={(lang) => changeLang(lang)} />
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/" exact component={Home} />
              <Route path="/invoice/generate" component={GenerateInvoice} />
              <PrivateRoute
                path="/invoice/edit/:id"
                render={() => <GenerateInvoice />}
              />
              <Route
                path="/invoice/display/:id/:socketId"
                component={DisplayInvoice}
              />
              <PrivateRoute
                path="/dashboard"
                render={() => <DashboardScreen />}
              />
              <Route path="/signature/:socketId" component={Signature} />
              <Route
                path="/offlinesignature/:invoiceId"
                component={Signature}
              />
              <Route render={() => <div>Not found</div>} />
            </Switch>
          </HashRouter>
        </IdGenerationProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
