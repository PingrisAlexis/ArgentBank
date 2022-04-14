import { Header, Footer } from './components';
import { HomePage, LoginPage, ProfilePage } from './views';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { remember } from './store/actions/auth';
import { isLoggedInSelector } from './store/selectors/selectors';
import Protected from './utils/protected-routes/ProtectedRoutes';
import NotFound from './views/not-found/NotFound';

function App() {
    let dispatch = useDispatch();
    const isLoggedIn = useSelector(isLoggedInSelector);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            dispatch(remember(token));
        }
    }, [token, dispatch]);

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/profile"
                        element={
                            <Protected isLoggedIn={isLoggedIn}>
                                <ProfilePage />
                            </Protected>
                        }
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
