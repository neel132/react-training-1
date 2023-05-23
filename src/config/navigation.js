import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.function";
import Profile from "../pages/Profile/Profile";
import About from "../pages/About/About";

const keys = {
  root: '/',
  profile: '/profile/:id',
  about: '/about',
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
]);

export {router, keys};