import { Outlet, useLocation, Navigate } from "react-router";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { ApplicationState } from "../../services/store/store";
import { TokenManager } from '../../services/utils/tokenManager';
import { Loader } from "../loader/loader";
import { useGetUserQuery } from "../../services/api/user";
import { refreshToken } from "../../services/utils/api";

export const ProtectedRoute = () => {
  const location = useLocation();
  const token = TokenManager.getAccessToken();
  const { user } = useSelector((state: ApplicationState) => state.userSliceReducer);
  const { isLoading, isError } = useGetUserQuery(undefined, {
    skip: !token || !!user
  });

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshFailed, setRefreshFailed] = useState(false);

  useEffect(() => {
    if (isError && token && !isRefreshing && !refreshFailed) {
      setIsRefreshing(true);
      refreshToken().then((isRefreshed) => {
        setIsRefreshing(false);
        if (!isRefreshed) {
          TokenManager.deleteAccessToken();
          TokenManager.deleteRefreshToken();
          setRefreshFailed(true);
        }
      });
    }
  }, [isError, token, isRefreshing, refreshFailed]);

  if (isLoading || isRefreshing) {
    return <Loader />;
  }

  if (refreshFailed) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return (user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />);
};