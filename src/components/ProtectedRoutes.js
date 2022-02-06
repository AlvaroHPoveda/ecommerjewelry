import { Navigate, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Layout from "./Layout";

const ProtectedRoutes = () => {
  if (localStorage.getItem("token")) {
    return (
      <div>
        <Layout />
        <Outlet />
        <Footer />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
