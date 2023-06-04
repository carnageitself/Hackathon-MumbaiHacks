import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import TopColleges from "./pages/TopColleges";
import TopUniversity from "./pages/TopUniversity";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";
import Even from "./pages/Even";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

export  const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  const Layout = () => {
    return (
      <div className=" app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/topcolleges",
          element: <TopColleges />,
        },
        {
          path: "/topuniversities",
          element: <TopUniversity />,
        },
        {
          path: "/admission",
          element: <Admission />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/even",
          element: <Even />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
