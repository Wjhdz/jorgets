import Login from "../../pages/Login";
import Home from "../../pages/Home";
import FormRegister from "../../Components/form/RegisterForm";
import NotFound from "../../pages/NotFound";
import HomeLog from "../../pages/HomeLog";
import Edit from "../../pages/Edit";
import HistoryData from "../../pages/Data/HistoryData";
import NewData from "../../pages/Data/NewData";
import { routesinterface } from "../../Interface/routesinterface";

const Routers = () => {
  const routes: routesinterface[] = [
    {
      id: 0,
      path: "/",
      element: <Home />,
      public: true,
      private: false,
      name: "Home",
    },
    {
      id: 1,
      path: "/home",
      element: <Home />,
      public: true,
      private: false,
      name: "Home",
    },
    {
      id: 2,
      path: "/login",
      element: <Login />,
      public: false,
      private: false,
      name: "Login",
    },
    {
      id: 2,
      path: "/homelog",
      element: <HomeLog />,
      public: false,
      private: true,
      name: "User",
    },
    {
      id: 3,
      path: "/register",
      element: <FormRegister />,
      public: false,
      private: false,
      name: "Register",
    },
    {
      id: 4,
      path: "/edit",
      element: <Edit />,
      public: false,
      private: false,
      name: "Edit",
    },
    {
      id: 5,
      path: "/historydata",
      element: <HistoryData />,
      private: false,
      public: false,
      name: "History",
    },
    {
      id: 6,
      path: "/newdata",
      element: <NewData />,
      private: false,
      public: false,
      name: "new",
    },
    {
      id: 7,
      path: "/*",
      element: <NotFound />,
      public: false,
      private: false,
      name: "Notfound",
    },
  ];
  return routes;
};
export default Routers;
