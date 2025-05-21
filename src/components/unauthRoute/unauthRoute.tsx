import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { TokenManager } from "../../services/utils/tokenManager";

export const UnauthRoute = () => {
  const token = TokenManager.getAccessToken();
  return (token ? <Navigate to="/" replace={true} /> : <Outlet />)
};