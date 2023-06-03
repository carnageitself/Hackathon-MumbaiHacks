import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs";
import TopColleges from "./pages/TopColleges";
import TopUniversity from "./pages/TopUniversity";
import Admission from "./pages/Admission";
import Fee from "./pages/Fee";

function App() {

  const Layout = () => {
    return (
     
              <div className=" app">

                <Navbar />
                <Outlet />
                <Footer />

              </div>
            )}


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
        },{
          path: "/fee",
          element: <Fee />,
        },
      ],
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
