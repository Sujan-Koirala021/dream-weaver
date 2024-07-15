
import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";

import Home from './pages/Home'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import DreamForm from "./components/DreamForm";
import HeroSection from "./components/Hero";
import AboutUs from "./pages/About";
// import ContactUs from "./pages/ContactUs";
// import Hero from "./components/Hero";
// import NameCardPage from "./pages/NameCardPage";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HeroSection />
      },
      {
        path: '/home',
        element: <DreamForm />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      // {
      //   path: '/contact-us',
      //   element: <ContactUs />
      // },
      // {
      //   path : '/name-cards',
      //   element: <NameCardPage/>
      // }
    ]
  },

]);


function App() {
  return (
    <div className="app bg-slate-900">

        <RouterProvider router={router} />

    </div>
  );
}



export default App;
