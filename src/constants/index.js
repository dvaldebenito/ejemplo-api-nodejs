const Constants = ({ dotenv }) => {
    dotenv.config({ path: `./enviroment/.env.${process.env.key_env}` })

    const PORT = process.env.PORT;
    const urlBase = process.env.URL_BASE;
    
    return {
        PORT,
        urlBase
    }
}

export default Constants;