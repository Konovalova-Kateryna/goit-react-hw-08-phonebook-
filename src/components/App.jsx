import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import authOperations from 'redux/auth/auth-operations';
import { PrivateRoute } from './PrivateRoute';
import authSelectors from 'redux/auth/auth-selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { Container } from '../components/Section/SectionTitle.styled';
import Loader from '../components/Loader/Loader';

const RegisterPage = lazy(() => import('../pages/Register-page'));
const LoginPage = lazy(() => import('../pages/Login-page'));
const ContactsPage = lazy(() => import('../pages/Contacts-page'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Container>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
