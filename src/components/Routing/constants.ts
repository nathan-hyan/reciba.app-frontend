import ChangePassword from "screens/ChangePassword";
import Confirmation from "screens/Confirmation";
import ConfirmationError from "screens/ConfirmationError";
import DashboardScreen from "screens/Dashboard";
import DisplayInvoice from "screens/DisplayInvoice";
import GenerateInvoice from "screens/GenerateInvoice";
import Home from "screens/Home";
import Login from "screens/Login";
import Logout from "screens/Logout";
import Profile from "screens/Profile";
import Signature from "screens/Signature";
import ThankYouScreen from "screens/Signature/screens/ThankYouScreen";
import Signup from "screens/Signup";

export const PUBLIC_ROUTES = [
  {
    id: 0,
    path: "/",
    component: Home,
  },
  {
    id: 1,
    path: "/signup",
    component: Signup,
  },
  {
    id: 2,
    path: "/login",
    component: Login,
  },
  {
    id: 3,
    path: "/logout",
    component: Logout,
  },
  {
    id: 5,
    path: "/invoice/generate",
    component: GenerateInvoice,
  },
  {
    id: 6,
    path: "/invoice/display/:id/:socketId",
    component: DisplayInvoice,
  },
  {
    id: 7,
    path: "/signature/:socketId",
    component: Signature,
  },
  {
    id: 8,
    path: "/thankYou/:id",
    component: ThankYouScreen,
  },
  {
    id: 9,
    path: "/offlinesignature/:invoiceId",
    component: Signature,
  },
  {
    id: 10,
    path: "/confirm/:token",
    component: Confirmation,
  },
  {
    id: 11,
    path: "/confirmError/:errorType",
    component: ConfirmationError,
  },
];

export const PRIVATE_ROUTES = [
  {
    id: 1,
    path: "/dashboard",
    component: DashboardScreen,
  },
  {
    id: 2,
    path: "/profile",
    component: Profile,
  },
  {
    id: 4,
    path: "/invoice/edit/:id",
    component: GenerateInvoice,
  },
  {
    id: 5,
    path: "/changePassword",
    component: ChangePassword,
  },
];
