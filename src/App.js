import { RouterProvider } from "react-router-dom";
import { router } from "./config/navigation";

const App = () => {
  return (
    <>
      <h3><center>Header</center></h3>
      <RouterProvider router={router} />
      <h3><center>Footer</center></h3>
    </>
  )
}

export default App;

// HOC - High Order Component