import axios from 'axios';

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
            })
            .catch((error) => console.log(error));
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

export const service = new Api();
