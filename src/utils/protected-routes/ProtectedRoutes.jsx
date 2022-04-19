import { Navigate } from 'react-router-dom';
import TokenExpiration from '../token-expiration/TokenExpiration';
import PropTypes from 'prop-types';
import HeroItem from '../../components/hero-item/HeroItem';
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

ProtectedRoutes.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
};

export default ProtectedRoutes;
