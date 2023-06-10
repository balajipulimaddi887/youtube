import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoDetails from "./components/VideoDetails";
import MainContainer from "./components/MainContainer";
import Search from "./components/Search";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <VideoDetails />,
      },
      {
        path: "results",
        element: <Search />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={route}>
          <Body />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
