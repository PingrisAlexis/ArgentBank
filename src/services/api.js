import axios from 'axios';

/**
 * @name  Api
 * @description Contact between backend part and frontend part.
 */

class Api {
    constructor() {
        this.baseURL = 'http://localhost:3001/api/v1/user';
    }

    /**
     * @name  userProfile
     * @param {string} token
     * @returns {string} Return an object with user profile informations
     */

    async userProfile(token) {
        return await axios
            .post(
                this.baseURL + '/profile',
                {},
                {
                    headers: {
                        Authorization: 'Bearer' + token,
                    },
                }
            )
            .then((response) => {
                return response.data.body;
            })
            .catch((error) => console.log(error));
    }

    /**
     * @name  userLogin
     * @param {string} email
     * @param {string} password
     * @returns {Object} Return an object with the session token
     */

    async userLogin(email, password) {
        return await axios
            .post(this.baseURL + '/login', {
                email,
                password,
            })
            .then((response) => {
                return response.data.body.token;
            })
            .catch((error) => console.log(error));
    }

    /**
     * @name  userLogin
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} token
     * @returns {Object} Return an object with the new user informations
     */

    async userEdit(firstName, lastName, token) {
        return await axios
            .put(
                this.baseURL + '/profile',
                {
                    firstName,
                    lastName,
                },
                {
                    headers: {
                        Authorization: 'Bearer' + token,
                    },
                }
            )
            .then((response) => {
                return response.data.body;
            })
            .catch((error) => console.log(error));
    }
}

export const service = new Api();
