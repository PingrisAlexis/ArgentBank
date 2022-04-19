import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { rememberUser } from '../../store/actions/user';

/**
 * @name IsRememberChecked
 * @description This utils will call rememberUser if remember is already checked.
 * @returns {JSX.Element}
 */

const IsRememberChecked = () => {
    let dispatch = useDispatch();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            dispatch(rememberUser(token));
        }
    }, [token, dispatch]);
};
export default IsRememberChecked;
