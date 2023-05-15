import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Home from "./pages/Home";
import Write from "./pages/Write";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is home.</div>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
