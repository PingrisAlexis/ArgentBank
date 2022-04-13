import axios from 'axios'

function setAuthorizationToken(token) {
    if (token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    else delete axios.defaults.headers.common['Authorization']
}

class Api {
    constructor() {
        this.baseURL = 'http://localhost:3001/api/v1/user'
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
                return response.data.body
            })
            .catch((error) => console.log(error))
    }

    async userLogin(email, password) {
        return await axios
            .post(this.baseURL + '/login', {
                email: email,
                password: password,
            })
            .then((response) => {
                return response.data.body.token
            })
    }
}

export { setAuthorizationToken }
export const service = new Api()
