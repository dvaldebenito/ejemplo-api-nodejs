const UserService = ({ axios, urlBase, logger }) => {
    const log = logger.log4js.getLogger('UserController')

    /**
     * Obtiene todos los usuario en un listado desde una api externa
     */
    const getAll = async () => {
        log.info(`Ingresa a UserService.getAll`)
        try {
            const { data } = await axios.get(`${urlBase}/users`);
            log.info(`Se obtiene data desde servicio, ${JSON.stringify(data)}`)
            return data;    
        } catch (error) {
            log.error(error.message)
            throw new Error(error.message)
        }
    }

    /**
     * Obtiene un usuario según su id desde una api externa
     * @param {*} id 
     */
    const getId = async ({ id }) => {
        log.info(`Ingresa a UserService.getId, id: ${id}`)
        try {
            const { data } = await axios.get(`${urlBase}/users/${id}`);
            log.info(`Se obtiene data desde servicio, ${JSON.stringify(data)}`)
            return data;
        } catch (error) {
            log.error(error.message)
            throw new Error(error.message)
        }
    }

    const addUser = async ({ user }) => {
        log.info(`Ingresa a UserService.addUser, user: ${JSON.stringify(user)}`)
        try {
            const { data } = await axios.post(`${urlBase}/users`, user);
            log.info(`Se ha agregado un usuario, ${JSON.stringify(data)}`)
            return data;
        } catch (error) {
            log.error(error.message)
            throw new Error(error.message)
        }
    }

    const deleteUserId = async ({ id }) => {
        log.info(`Ingresa a UserService.deleteUserId, id: ${id}`)
        try {
            await axios.delete(`${urlBase}/users/${id}`);
            log.info(`Se elimina usuario por id ${id}`)
            return 1;
        } catch (error) {
            log.error(error.message)
            throw new Error(error.message)
        }
    }

    return {
        getAll,
        getId,
        addUser,
        deleteUserId
    }
}

export default UserService