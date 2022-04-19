import { Navigate } from 'react-router-dom';
import TokenExpiration from '../token-expiration/TokenExpiration';
/**
 * @name ProtectedRoutes
 * @description This utils will control if user is logged in or not, to render profile page or home page.
 * @param {boolean} isLoggedIn
 * @param {JSX.Element} children
 * @returns {JSX.Element}
 */

const ProtectedRoutes = ({ isLoggedIn, children }) => {
    console.log(TokenExpiration);
    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }
    return children;
};
export default ProtectedRoutes;
