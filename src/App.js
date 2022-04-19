import { Header, Footer } from './components';
import { HomePage, LoginPage, ProfilePage } from './views';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from './store/selectors/selectors';
import ProtectedRoutes from './utils/protected-routes/ProtectedRoutes';
import NotFound from './views/not-found/NotFound';
import isRememberChecked from './utils/remember-user/RememberUser';

function App() {
    const isLoggedIn = useSelector(isLoggedInSelector);
    isRememberChecked();

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
                            <ProtectedRoutes isLoggedIn={isLoggedIn}>
                                <ProfilePage />
                            </ProtectedRoutes>
                        }
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
