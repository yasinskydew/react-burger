import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ApplicationState } from "../../services/store/store";
import { useGetUserQuery } from "../../services/api/auth";
import { TokenManager } from '../../services/utils/tokenManager';
import { Loader } from "../loader/loader";

export const ProtectedRoute = () => {
  const { user, error } = useSelector((state: ApplicationState) => state.userSliceReducer);
  const token = TokenManager.getAccessToken();
  const { isLoading, isError } = useGetUserQuery(undefined, {
    skip: !token || !!user
  });

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div>Error: {error}</div>
  }
  
  return (user ? <Outlet /> : <Navigate to="/login" replace={true} />)
};