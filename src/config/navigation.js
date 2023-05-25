import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.function";
import Profile from "../pages/Profile/Profile";
import About from "../pages/About/About";
import Dashboard from "../pages/Dashboard/dashboard";

const keys = {
  root: '/',
  profile: '/profile/:id',
  about: '/about',
  dashboard: '/dashboard',
};

const router = createBrowserRouter([
  {
    path: keys.root,
    element: <Home />,
  },
  {
    path: keys.profile,
    element: <Profile />,
  },
  {
    path: keys.about,
    element: <About />,
  },
  {
    path: keys.dashboard,
    element: <Dashboard />,
  },
]);

export {router, keys};