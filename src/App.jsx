import { RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from "../src/components/Layout/Layout";
import Admins from "./pages/Admin/Admins";
import Dashboard from "./pages/Admin/Dashboard";
import Finance from "./pages/Admin/Finance";
import Login from "./pages/Auth/Login";
import Reservation from "./pages/Admin/Reservation";
import Services from "./pages/Admin/Services";
import Settings from "./pages/Admin/Settings";
import Users from "./pages/Admin/Users";
import NotFound from "./pages/Auth/NotFound";
import { SelectedServiceContext } from './contexts/ServicesContext';
import { useContext, useEffect, useState } from 'react';
import DetailsPage from './pages/Admin/DetailsPage';
import UsersBalance from './pages/Admin/UsersBalance';
import UserBalancePage from './pages/Admin/UserBalancePage';
import { tokenContext } from './contexts/AuthContext';
import ProtectRoutes from './Routes/ProtectRoutes';
import UnAuth from './pages/Auth/UnAuth';
import Redirection from './Routes/Redirection';
import Home from './pages/User/Home';
import UserReservation from './pages/User/UserReservation';
import UserFinance from './pages/User/UserFinance';
import UserSettings from './pages/User/UserSettings';
import { UserSelectedServiceContext } from './contexts/UserServiceContext';
import Reports from './pages/Admin/Reports';
import { NextUIProvider } from '@nextui-org/system';
import Agencies from './pages/Admin/Agencies';

let routers = createHashRouter([{
  path: "", element: <Layout />, children: [
    { index: true, element: <Redirection /> },
    { path: "Dashboard", element: <ProtectRoutes allowedRoles={["Admin"]} > <Dashboard /> </ProtectRoutes> },
    { path: "Agencies", element: <ProtectRoutes allowedRoles={["Admin"]} > <Agencies /> </ProtectRoutes> },
    { path: "admins", element: <ProtectRoutes allowedRoles={["Admin"]}  > <Admins /> </ProtectRoutes> },
    { path: "finance", element: <ProtectRoutes allowedRoles={["Admin"]}  > <Finance /> </ProtectRoutes> },
    { path: "reservation", element: <ProtectRoutes allowedRoles={["Admin"]}  > <Reservation /> </ProtectRoutes> },
    { path: "services", element: <ProtectRoutes allowedRoles={["Admin"]}  > <Services /> </ProtectRoutes> },
    { path: "settings", element: <ProtectRoutes allowedRoles={["Admin"]} > <Settings /> </ProtectRoutes> },
    { path: "users", element: <ProtectRoutes allowedRoles={["Admin"]}  > <Users /> </ProtectRoutes> },
    { path: "details", element: <ProtectRoutes allowedRoles={["Admin", "User"]}  > <DetailsPage /> </ProtectRoutes> },
    { path: "balances", element: <ProtectRoutes allowedRoles={["Admin"]}  > <UsersBalance /> </ProtectRoutes> },
    { path: "userbalance", element: <ProtectRoutes allowedRoles={["Admin"]} > <UserBalancePage /></ProtectRoutes> },
    { path: "reports", element: <ProtectRoutes allowedRoles={["Admin"]} > <Reports /></ProtectRoutes> },


    { path: "home", element: <ProtectRoutes allowedRoles={["User","TravelAgent"]} > <Home /></ProtectRoutes> },
    { path: "UserReservation", element: <ProtectRoutes allowedRoles={["User", "TravelAgent"]} > <UserReservation /></ProtectRoutes> },
    { path: "UserFinance", element: <ProtectRoutes allowedRoles={["User", "TravelAgent"]} > <UserFinance /></ProtectRoutes> },
    { path: "UserSettings", element: <ProtectRoutes allowedRoles={["User", "TravelAgent"]} > <UserSettings /></ProtectRoutes> },
  ]
},
{ path: "login", element: <Login /> },
{ path: "unauthorized", element: <UnAuth /> },
{ path: "*", element: <NotFound /> }
])

const App = () => {

  // check if token is exists in localStorage. 
  let [token, setToken] = useContext(tokenContext);

  useEffect(() => {
    if (localStorage.getItem("userToken")) setToken(localStorage.getItem("userToken"));
  }, [token, setToken])

  // To make Tabs working. 
  const selectedService = useState("Hotels");
  const UserSelectedService = useState("Hotels");

  return (
    <NextUIProvider>
      <UserSelectedServiceContext.Provider value={UserSelectedService} >
        <SelectedServiceContext.Provider value={selectedService}>
          <RouterProvider router={routers} />
        </SelectedServiceContext.Provider>
      </UserSelectedServiceContext.Provider>
    </NextUIProvider>
  );
}

export default App;
