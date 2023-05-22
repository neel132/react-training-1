import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.function";
import Profile from "../pages/Profile/Profile";

const keys = {
  root: '/',
  profile: '/profile',
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
]);

export {router, keys};