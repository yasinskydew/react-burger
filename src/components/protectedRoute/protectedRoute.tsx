import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ApplicationState } from "../../services/store/store";

function ProtectedRoute() {
  const isAuth = useSelector((state: ApplicationState) => state.userSliceReducer.isAuth);
  console.log(isAuth);
  return (isAuth ? <Outlet /> : <Navigate to="/login" replace={true} />)
};

export default ProtectedRoute;