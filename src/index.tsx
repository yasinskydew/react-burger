import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './services/store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageLayout } from './components/layouts/pageLayout/pageLayout';
import { HomePage } from './pages/home/homePage';
import { LoginPage } from './pages/login/loginPage';
import { ForgotPasswordPage } from './pages/forgotPassword/forgotPasswordPage';
import { ProfilePage } from './pages/profile/profilePage';
import { NotFoundPage } from './pages/notFound/notFoundPage';
import { ProtectedRoute } from './components/protectedRoute/protectedRoute';
import IngridientDetailsPage from './pages/ingridientDetails/ingredientDetailsPage';
import { OrderHistoryPage } from './pages/orderHistory/orderHistoryPage';
import { ConfirmationPage } from './pages/confirmation/confirmationPage';
import { ProfileLayout } from './components/layouts/profileLayout/profileLayout';
import { RegisterPage } from './pages/register/registerPage';
import { ProfileOrdersPage } from './pages/profileOrders/profileOrdersPage';
import { UnauthRoute } from './components/unauthRoute/unauthRoute';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>                  
            <Route element={<UnauthRoute />}>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/forgot-password' element={<ForgotPasswordPage />} />
                <Route path='/confirmation' element={<ConfirmationPage />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path='/order-history' element={<OrderHistoryPage />} />
              <Route path='/ingredients/:id' element={<IngridientDetailsPage />} />
              <Route path='/' element={<HomePage />} />
              <Route element={<ProfileLayout />}>
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/profile/orders' element={<ProfileOrdersPage />} />
              </Route>
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();