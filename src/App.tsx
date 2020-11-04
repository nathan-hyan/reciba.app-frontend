// Import utilities
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import context
import UserContextProvider from "./Context/UserContext";

// Import pages
import Home from "./Pages/Home";
import Signup from "./Pages/auth/Signup";
import Login from "./Pages/auth/Login";
import Logout from "./Pages/auth/Logout";

// Import layout
import Navigation from "./Layout/NavigationBar/Navigation";
import GenerateInvoice from "./Pages/invoice/generate/GenerateInvoice";
import DisplayInvoice from "./Pages/invoice/display/DisplayInvoice";
import Signature from "./Pages/invoice/generate/Signature";
import ShowQRCodeModal from "./Pages/invoice/qr/ShowQRCodeModal";
import IdGenerationProvider from "./Context/IdGeneration";
import DashboardScreen from "./Pages/dashboard/DashboardScreen";
import PrivateRoute from "./Context/PrivateRoute";

function App() {
  return (
    <Fragment>
      <UserContextProvider>
        <IdGenerationProvider>
          <Router>
            <Navigation />
            <Switch>
              {/* User authentication */}
              <Route
                path={`${process.env.PUBLIC_URL}/signup`}
                component={Signup}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/login`}
                component={Login}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/logout`}
                component={Logout}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/`}
                exact
                component={Home}
              />

              {/* Invoice */}
              <Route
                path={`${process.env.PUBLIC_URL}/invoice/generate`}
                component={GenerateInvoice}
              />
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/invoice/edit/:id`}
                render={() => <GenerateInvoice />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/invoice/display/:id/:socketId`}
                component={DisplayInvoice}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/invoice/code/:id`}
                component={ShowQRCodeModal}
              />

              {/* Dashboard */}
              <PrivateRoute
                path={`${process.env.PUBLIC_URL}/dashboard`}
                render={() => <DashboardScreen />}
              />

              {/* Signature pad */}
              <Route
                path={`${process.env.PUBLIC_URL}/signature/:socketId`}
                component={Signature}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/offlinesignature/:invoiceId`}
                component={Signature}
              />
            </Switch>
          </Router>
        </IdGenerationProvider>
      </UserContextProvider>
    </Fragment>
  );
}

export default App;
