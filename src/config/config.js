export const URL = "http://localhost:5000"

export const AuthorizationHeaderConfig = {
    headers: {
        Authorization: '' + localStorage.getItem('token')
    }
}