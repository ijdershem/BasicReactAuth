
const API = "api";

const config = {
    baseURI: process.env.REACT_APP_BASE_URL || "http://localhost:8080",
    api: {
        endpoints: {
            auth: {
                register: `${API}/auth/signup`,
                login: `${API}/auth/signin`,
                refreshToken: `${API}/auth/refresh_token`,
            }
        }
    }
}

export default config; 