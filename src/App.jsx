import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from "./components/Layout";
import Admins from "./pages/Admins";
import Dashboard from "./pages/Dashboard";
import Finance from "./pages/Finance";
import Login from "./pages/Login";
import Reservation from "./pages/Reservation";
import Services from "./pages/Services";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import { SelectedServiceContext } from './contexts/ServicesContext';
import { useContext, useEffect, useState } from 'react';
import DetailsPage from './pages/DetailsPage';
import UsersBalance from './pages/UsersBalance';
import UserBalancePage from './pages/UserBalancePage';
import { tokenContext } from './contexts/AuthContext';
import ProtectRoutes from './components/ProtectRoutes';

let routers = createBrowserRouter([{
  path: "", element: <Layout />, children: [
    { index: true, element: <ProtectRoutes> <Dashboard /> </ProtectRoutes> },
    { path: "admins", element: <ProtectRoutes> <Admins /> </ProtectRoutes> },
    { path: "finance", element: <ProtectRoutes> <Finance /> </ProtectRoutes> },
    { path: "reservation", element: <ProtectRoutes> <Reservation /> </ProtectRoutes> },
    { path: "services", element: <ProtectRoutes> <Services /> </ProtectRoutes> },
    { path: "settings", element: <ProtectRoutes> <Settings /> </ProtectRoutes> },
    { path: "users", element: <ProtectRoutes> <Users /> </ProtectRoutes> },
    { path: "details", element: <ProtectRoutes> <DetailsPage /> </ProtectRoutes> },
    { path: "balances", element: <ProtectRoutes> <UsersBalance /> </ProtectRoutes> },
    { path: "userbalance", element: <ProtectRoutes> <UserBalancePage /></ProtectRoutes> },
  ]
},
{ path: "login", element: <Login /> },
{ path: "*", element: <NotFound /> }
])



const App = () => {

  // check if token is exists in localStorage. 
  let [, setToken] = useContext(tokenContext);
  useEffect(() => {
    if (localStorage.getItem("userToken")) setToken(localStorage.getItem("userToken"));
  })

  const selectedService = useState("Hotels");
  return (
    <SelectedServiceContext.Provider value={selectedService}>
      <RouterProvider router={routers} />
    </SelectedServiceContext.Provider>
  );
}

export default App;
