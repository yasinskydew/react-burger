import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ApplicationState } from "../../services/store/store";
import { TokenManager } from '../../services/utils/tokenManager';
import { Loader } from "../loader/loader";
import { useGetUserQuery } from "../../services/api/user";

export const ProtectedRoute = () => {
  const token = TokenManager.getAccessToken();
  const { user } = useSelector((state: ApplicationState) => state.userSliceReducer);
  const { isLoading, isError } = useGetUserQuery(undefined, {
    skip: !token || !!user
  });

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    TokenManager.deleteAccessToken();
    return <Navigate to="/login" />
  }
  
  return (user ? <Outlet /> : <Navigate to="/login" replace={true} />)
};