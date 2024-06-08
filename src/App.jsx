import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Generator from "./pages/Generator/Generator";
import Archive from "./pages/Archive/Archive";
import Root from "./pages/Root";
import Error from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/random-comic-generator",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Generator /> },
      { path: "archive", element: <Archive /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;