import { Outlet, Navigate } from "react-router-dom";
import { Layout } from "../components/layout";
// import { useSelector } from "react-redux";

function PrivateRoutes() {
  // const { authStatus, user } = useSelector((state) => state.auth);
  // const { pathname } = useLocation();

  // const user = false;

  // const user = false;
  // if (!user) return <Navigate to="/login" replace={true} />;

  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default PrivateRoutes;
