import './css/styles.css';

import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from "react-router-dom";
  
//   PAGES
  import Home from "./pages/Home";
  import AboutUs from './pages/AboutUs';
  import ContactUs from './pages/ContactUs';
  import Login from './pages/Login';
  import Register from './pages/Register';
  import TestBooking from './pages/TestBooking';
  import Results from './pages/Results';
  import LabReport from './pages/LabReport';
  import EditResults from './pages/EditResults';
  import Patients from './pages/Patients';

//   COMPONENTS
  import NavBar from './components/NavBar';
import Staff from './pages/Staff';
import Profile from './components/Profile';

  
  const Layout = () => {
    return (
      <>
        <NavBar/>
        <Outlet/>
      </>
    );
  };
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
            path: "/about-us",
            element: <AboutUs/>
        },
        {
            path: "/contact-us",
            element: <ContactUs/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/test-booking",
            element: <TestBooking/>
        },
        {
            path: "/results",
            element: <Results/>
        },
        {
            path: "/report",
            element: <LabReport/>
        },
        {
            path: "/edit-results",
            element: <EditResults />
        },
        {
          path: "/staff/:id",
          element: <Staff/>
        },
        {
          path: "/patients",
          element: <Patients/>
        },
        {
          path: "/profile",
          element: <Profile/>
        },
      ]
    }
  ]);
  
  function App() {
    return (
      <div className="bg-teal-50">
        <div className="w-full h-screen font-serif">
          <RouterProvider router={router}/>
        </div>      
      </div>
    );
  }
  
  export default App;
