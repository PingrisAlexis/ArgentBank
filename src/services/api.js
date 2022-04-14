import axios from 'axios';

function setAuthorizationToken(token) {
    if (token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    else delete axios.defaults.headers.common['Authorization'];
}

class Api {
    constructor() {
        this.baseURL = 'http://localhost:3001/api/v1/user';
    }

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

    async userLogin(email, password) {
        return await axios
            .post(this.baseURL + '/login', {
                email,
                password,
            })
            .then((response) => {
                return response.data.body.token;
            });
    }

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

export { setAuthorizationToken };
export const service = new Api();
