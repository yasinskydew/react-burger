import { Navigate, Route, Routes, useLocation } from 'react-router';
import { PageLayout } from './components/layouts/pageLayout/pageLayout';
import { HomePage } from './pages/home/homePage';
import { LoginPage } from './pages/login/loginPage';
import { ForgotPasswordPage } from './pages/forgotPassword/forgotPasswordPage';
import { ProfilePage } from './pages/profile/profilePage';
import { NotFoundPage } from './pages/notFound/notFoundPage';
import { ProtectedRoute } from './components/protectedRoute/protectedRoute';
import { OrderHistoryPage } from './pages/orderHistory/orderHistoryPage';
import { ConfirmationPage } from './pages/confirmation/confirmationPage';
import { ProfileLayout } from './components/layouts/profileLayout/profileLayout';
import { RegisterPage } from './pages/register/registerPage';
import { ProfileOrdersPage } from './pages/profileOrders/profileOrdersPage';
import { UnauthRoute } from './components/unauthRoute/unauthRoute';
import Modal from './components/modal/modal';
import { useEffect } from 'react';
import IngridientDetails from './components/burgerIngredients/ingridientDetails/ingridientDetails';
import { useIngredients } from './services/store/hooks';
import { Loader } from './components/loader/loader';
import { IIngredient } from './services/types';
import { useGetIngridientsQuery } from './services/api/ingridient';
import IngridientDetailsPage from './pages/ingridientDetails/ingredientDetailsPage';
import { TokenManager } from './services/utils/tokenManager';

export const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  const { isIngredientModalOpen, setIsIngredientModalOpen } = useIngredients();
  const isResetPassword = TokenManager.getIsResetPassword();

  const { data: ingredientsData, isLoading, isError } = useGetIngridientsQuery()
  const { setDefaultBun } = useIngredients();

  useEffect(() => {
    if(isLoading) {
        return;
    }
    if(isError) {
        return;
    }
    if (ingredientsData && ingredientsData.success) {
        setDefaultBun(ingredientsData.data.find(ingredient => ingredient.type === 'bun') as IIngredient);
    }
      
  }, [ingredientsData, setDefaultBun, isLoading, isError]);

  
  if (isLoading) {
      return <Loader />
  }
  
  return (
    <>
      <Routes location={background || location}>
        <Route element={<PageLayout />}>   
          <Route path='/' element={<HomePage />} />
          <Route path='/ingredients/:id' element={<IngridientDetailsPage />} />
          <Route element={<UnauthRoute />}>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/forgot-password' element={<ForgotPasswordPage />} />
              <Route path='/reset-password' element={<ConfirmationPage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path='/order-history' element={<OrderHistoryPage />} />
            <Route element={<ProfileLayout />}>
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/profile/orders' element={<ProfileOrdersPage />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
      {isResetPassword && <Navigate to="/reset-password" replace={true} />}
      {background && <Routes>
        <Route path='/ingredients/:id' element={
          <Modal 
              title='Детали ингредиента'
              isOpen={isIngredientModalOpen}
              onClose={() => setIsIngredientModalOpen(false)}
          >
            <IngridientDetails />
          </Modal>
        } />
      </Routes>}
    </>
  )
}
