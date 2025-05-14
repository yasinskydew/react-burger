import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './services/store/store'
import { BrowserRouter, Route, Routes } from 'react-router';
import { PageLayout } from './components/layouts/pageLayout';
import { HomePage } from './pages/home/homePage';
import { LoginPage } from './pages/login/loginPage';
import { ForgotPasswordPage } from './pages/forgotPassword/forgotPasswordPage';
import { SignInPage } from './pages/signIn/signInPage';
import { RegistrationPage } from './pages/registration/registrationPage';
import { ProfilePage } from './pages/profile/profiltePage';
import { NotFoundPage } from './pages/notFound/notFoundPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route element={<PageLayout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/sign-in' element={<SignInPage />} />
                <Route path='/registration' element={<RegistrationPage />} />
                <Route path='/forgot-password' element={<ForgotPasswordPage />} />
                <Route path='/profile' element={<ProfilePage />} />
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