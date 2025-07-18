import { Navigate, Route, Routes, useLocation } from 'react-router';
import { PageLayout } from './components/layouts/pageLayout/pageLayout';
import { HomePage } from './pages/home/homePage';
import { LoginPage } from './pages/login/loginPage';
import { ForgotPasswordPage } from './pages/forgotPassword/forgotPasswordPage';
import { ProfilePage } from './pages/profile/profilePage';
import { NotFoundPage } from './pages/notFound/notFoundPage';
import { ProtectedRoute } from './components/protectedRoute/protectedRoute';
import { ConfirmationPage } from './pages/confirmation/confirmationPage';
import { ProfileLayout } from './components/layouts/profileLayout/profileLayout';
import { RegisterPage } from './pages/register/registerPage';
import { ProfileOrdersPage } from './pages/profileOrders/profileOrdersPage';
import { UnauthRoute } from './components/unauthRoute/unauthRoute';
import { useEffect } from 'react';
import { Loader } from './components/loader/loader';
import { useGetIngridientsQuery } from './services/api/ingridient';
import IngridientDetailsPage from './pages/ingridientDetails/ingredientDetailsPage';
import { TokenManager } from './services/utils/tokenManager';
import { useGetUserQuery } from './services/api/user';
import IngredientModal from './components/burgerIngredients/ingridientModal/ingredientModal';
import { FeedPage } from './pages/feed/feed';
import OrderModal from './components/order/orderModal/orderModal';
import { OrderContentPage } from './pages/orderContent/orderContentPage';
  import { useUser } from './services/store/hooks/useUser';

  export const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  const isResetPassword = TokenManager.getIsResetPassword();

  const { data: ingredientsData, isLoading, isError } = useGetIngridientsQuery()
  const { user } = useUser();
  const { isLoading: isUserLoading, isError: isUserError } = useGetUserQuery(undefined, {
    skip: !TokenManager.getAccessToken() || !!user
  });

  useEffect(() => {
    if(isLoading || isUserLoading) {
        return;
    }
    if(isError || isUserError) {
        return;
    }
      
  }, [ingredientsData, isLoading, isError, isUserLoading, isUserError]);

  
  if (isLoading) {
      return <Loader />
  }
  
  return (
    <>
      <Routes location={background || location}>
        <Route element={<PageLayout />}>   
          <Route path='/' element={<HomePage />} />
          <Route path='/feed' element={<FeedPage />} />
          <Route path='/feed/:id' element={<OrderContentPage />} />
          <Route path='/ingredients/:id' element={<IngridientDetailsPage />} />
          <Route element={<UnauthRoute />}>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/forgot-password' element={<ForgotPasswordPage />} />
              <Route path='/reset-password' element={<ConfirmationPage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route element={<ProfileLayout />}>
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/profile/orders' element={<ProfileOrdersPage />} />
              <Route path='/profile/orders/:id' element={<ProfileOrdersPage />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
      {isResetPassword && <Navigate to="/reset-password" replace={true} />}
      {background && <Routes>
        <Route path='/ingredients/:id' element={
          <IngredientModal />
        } />
        <Route path='/feed/:id' element={
          <OrderModal />
        } />
        <Route path='/profile/orders/:id' element={
          <OrderModal />
        } />
      </Routes>}
    </>
  )
}
