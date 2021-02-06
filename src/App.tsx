import React, { useContext } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { LangContext } from "configs/Language";
import IdGenerationProvider from "configs/IdGeneration";
import PrivateRoute from "configs/PrivateRoute";
import UserContextProvider from "configs/UserContext";
import Navigation from "components/Navigation";
import GenerateInvoice from "screens/GenerateInvoice";
import DashboardScreen from "screens/Dashboard";
import Signup from "screens/Signup";
import Login from "screens/Login";
import Logout from "screens/Logout";
import Home from "screens/Home";
import DisplayInvoice from "screens/DisplayInvoice";
import Signature from "screens/Signature";

import "utils/i18n";

function App() {
  const language = useContext(LangContext);
  const changeLang = (lang: "en" | "es") => {
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
