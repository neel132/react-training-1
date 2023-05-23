import { RouterProvider } from "react-router-dom";
import { keys, router } from "./config/navigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <h3 onClick={() => router.navigate(keys.profile)}><center>Header</center></h3>
      <RouterProvider router={router} />
      <h3><center>Footer</center></h3>
    </Provider>
  )
}

export default App;

// HOC - High Order Component