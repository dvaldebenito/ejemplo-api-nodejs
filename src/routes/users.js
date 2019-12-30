import { UserController } from '../controller'

const UserRouter = ({ express, axios, urlBase, logger }) => {
    const userRouter = express.Router();
    const controller = UserController({ axios, urlBase, logger });

    userRouter.get('/getAll',  (req, res) => controller.getAll(req, res));
    userRouter.get('/getId/:id',  (req, res) => controller.getId(req, res));
    userRouter.post('/addUser',  (req, res) => controller.addUser(req, res));
    userRouter.delete('/deleteUserId/:id',  (req, res) => controller.deleteUserId(req, res));

    return {
        userRouter
    }
}

export default UserRouter;