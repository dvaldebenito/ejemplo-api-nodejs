import { UserService } from '../../service'

const UserController = ({ axios, urlBase, logger }) => {
    const userService = UserService({ axios, urlBase, logger });
    const log = logger.log4js.getLogger('UserController')

    /**
     * Obtiene un listado de todos los usuarios existentes
     */
    const getAll = async (req, res) => {
        log.info(`Ingresa a USerController.getAll`)
        try {
            const users = await userService.getAll();
            res.status(200).send(users);    
        } catch (error) {
            log.error(error.message)
            res.status(500).send({
                error: {
                    code: 500,
                    message: 'Ha ocurrido un error'
                }
            })
        }
        
    }

    /**
     * Obtiene un usuario según su id
     */
    const getId = async (req, res) => {
        log.info(`Ingresa a USerController.getId`)
        try {
            const { id } = req.params
            const user = await userService.getId({ id });
            res.status(200).send(user);    
        } catch (error) {
            log.error(error.message)
            res.status(500).send({
                error: {
                    code: 500,
                    message: 'Ha ocurrido un error'
                }
            })
        }
    }

    const addUser = async (req, res) => {
        log.info(`Ingresa a USerController.addUser`)
        try {
            const { user } = req.body
            const response = await userService.addUser({ user });
            res.status(201).send(response);    
        } catch (error) {
            log.error(error.message)
            res.status(500).send({
                error: {
                    code: 500,
                    message: 'Ha ocurrido un error'
                }
            })
        }
    }

    const deleteUserId = async (req, res) => {
        log.info(`Ingresa a USerController.deleteUserId`)
        try {
            const { id } = req.params
            await userService.deleteUserId({ id });
            res.sendStatus(204);    
        } catch (error) {
            log.error(error.message)
            res.status(500).send({
                error: {
                    code: 500,
                    message: 'Ha ocurrido un error - deleteUserId'
                }
            })
        }
    }

    return {
        getAll,
        getId,
        addUser,
        deleteUserId
    }
}

export default UserController;