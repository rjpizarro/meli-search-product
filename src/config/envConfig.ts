const ENV = {
    development: {
        apiUrl: 'http://localhost:8000/api',
    },
    production: {
        apiUrl: "https://meli-search-api.herokuapp.com/api"
    }
};

const getEnvVars = (env = process.env.NODE_ENV) => {
    // @ts-ignore
    return ENV[env]
}

export default getEnvVars;