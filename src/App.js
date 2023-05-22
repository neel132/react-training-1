import { RouterProvider } from "react-router-dom";
import { keys, router } from "./config/navigation";

const App = () => {
  return (
    <>
      <h3 onClick={() => router.navigate(keys.profile)}><center>Header</center></h3>
      <RouterProvider router={router} />
      <h3><center>Footer</center></h3>
    </>
  )
}

export default App;

// HOC - High Order Component