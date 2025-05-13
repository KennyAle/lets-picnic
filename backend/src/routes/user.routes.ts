import { Router } from "express";
import userContoller from "../controllers/user.contoller";

const userRouter = Router()

userRouter.get('/', userContoller.getAllUsers)
userRouter.post('/signup', userContoller.addUser)
userRouter.post('/login', userContoller.loginUser)
userRouter.get('/logout', userContoller.logoutUser)
userRouter.get('/check-cookie', userContoller.checkCookie)
userRouter.get('/:userId', userContoller.getUserById)
userRouter.put('/:userId', userContoller.editUser)
userRouter.delete('/:userId', userContoller.deleteUser)


export default userRouter