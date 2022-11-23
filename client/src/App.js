import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom"

import './App.css';
import Home from "../src/pages/Home"
import Test from "../src/pages/Test"
import Login from "../src/pages/Login";
import Navbar from "./components/Navbar"

const Layout = () => {
  // uncomment this code if u want to have user auth on all pages that are not login or register
  // const { currentUser } = useContext(AuthContext);
  // const navigate = useNavigate();

  // // does a check to see if the user is logged in
  // if (!currentUser?.username) {
  //   navigate("/login");
  // }

  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    // all children of this function will have a navbar and footer around them
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      // }
    ],
  },
  {
    path: "Login",
    element: <Login />,
  },
  // {
  //   path: "Register",
  //   element: <Register />,
  // },
]);

function App() {
  return (
    <div className="App">
      <div>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
