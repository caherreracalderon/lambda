import { Router } from "express";
import { getUsers, createUser, getOneUser, deleteUser, update } from "../controllers/users.controllers.js";

const router = Router();


router
    .get('/users', getUsers)
    .get('/users/:userId', getOneUser)
    .post('/users', createUser)
    .patch('/users/:userId', update)
    .delete('/users/:userId',deleteUser);

export default router;