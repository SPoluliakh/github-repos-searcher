import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'Components/Layout/Layout';
import { HomePage } from 'Pages/HomePage/HomePage';
import { SignUpPages } from 'Pages/SignUpPage/SignUpPage';
import { SignInPages } from 'Pages/SignInPage/SignInPage';
import { LibraryPage } from 'Pages/LibraryPage/LibraryPage';
import { RestrictedRout } from 'Components/CustomRouts/RestrictedRout';
import { PrivateRout } from 'Components/CustomRouts/PrivateRout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'Redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route
            path="library"
            element={<PrivateRout redirectTo="/" component={<LibraryPage />} />}
          />
          <Route
            path="signup"
            element={
              <RestrictedRout
                redirectTo="/library"
                component={<SignUpPages />}
              />
            }
          />
          <Route
            path="signin"
            element={
              <RestrictedRout
                redirectTo="/library"
                component={<SignInPages />}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
