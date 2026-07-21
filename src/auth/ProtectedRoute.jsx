import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { MyContext } from '../context/my-context';

// requiredRole: 'admin' | 'member' | undefined (any logged-in user)
const ProtectedRoute = ({ children, requiredRole }) => {
    const { isLoggedIn, loggedUser } = useContext(MyContext);

    // Not logged in at all → go to login
    if (!isLoggedIn || !loggedUser) {
        return <Navigate to="/" replace />;
    }

    // Logged in but wrong role → go to home
    if (requiredRole && loggedUser.role !== requiredRole) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
