import { GET_PROFILE_SUCCESS } from './types'
import { service } from '../../services/api'

export const profile = (token) => (dispatch) => {
    return service.userProfile(token).then(
        (user) => {
            console.log(user)
            dispatch({
                type: GET_PROFILE_SUCCESS,
                payload: { user },
            })
            return Promise.resolve()
        }
        // (error) => {
        //     const message =
        //         (error.response &&
        //             error.response.data &&
        //             error.response.data.message) ||
        //         error.message ||
        //         error.toString();
        //     dispatch({
        //         type: LOGIN_FAIL,
        //     });
        //     console.log(message)
        //     return Promise.reject();
        // }
    )
}
