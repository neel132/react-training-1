import { RouterProvider } from "react-router-dom";
import { keys, router } from "./config/navigation";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <h3 onClick={() => router.navigate(keys.profile)}><center>Header</center></h3>
        <RouterProvider router={router} />
        <h3><center>Footer</center></h3>
      </PersistGate>
    </Provider>
  )
}

export default App;

// HOC - High Order Component