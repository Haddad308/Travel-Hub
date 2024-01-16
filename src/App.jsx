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
import Notification from './pages/Notification';

let routers = createBrowserRouter([{
  path:"",element:<Layout/>,children:[
    {index:true,element:<Dashboard/>},
    {path:"admins",element:<Admins/>},
    {path:"finance",element:<Finance/>},
    {path:"reservation",element:<Reservation/>},
    {path:"services",element:<Services/>},
    {path:"settings",element:<Settings/>},
    {path:"users",element:<Users/>},
    {path:"notification",element:<Notification/>},
  ]},
  { path: "login", element: <Login /> },
  { path: "*", element: <NotFound/> }
])


const App = () => {
  return (
      <RouterProvider router={routers}/>
  );
}

export default App;
