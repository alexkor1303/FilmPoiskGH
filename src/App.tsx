import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FilmPage } from "./pages/FilmPage/component";
import { Home } from "./pages/HomePage/component";
import { Layout } from "./components/Layout/component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <h1>Server is dead! :c</h1>,
      },
      {
        path: "film/:id",
        element: <FilmPage />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
