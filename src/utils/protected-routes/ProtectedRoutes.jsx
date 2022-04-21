import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @name ProtectedRoutes
 * @description This utils will control if user is logged in or not, to render profile page or home page.
 * @param {boolean} isLoggedIn
 * @param {JSX.Element} children
 * @returns {JSX.Element}
 */

const ProtectedRoutes = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

ProtectedRoutes.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
};

export default ProtectedRoutes;
