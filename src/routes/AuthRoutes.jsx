import { Outlet, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

function AuthRoutes() {
  // const { authStatus, user } = useSelector((state) => state.auth);
  // const profileStatus = user?.isProfileActivated;

  // if (authStatus && profileStatus) return <Navigate to="/rooms" />;
  // const location = useLocation();
  // console.log(location);

  // const data = useQueryParams("redirectTo");

  // const user = false;
  // if (user) return <Navigate to="/" replace={true} />;

  return (
    <>
      <Outlet />
    </>
  );
}

export default AuthRoutes;
